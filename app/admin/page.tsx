// import { columns, Payment } from "../../components/columns"
// import { DataTable } from "../../components/data-table"
import { AdminApplicationView } from "@/components/admin-application-view"

import { createClient } from "@/lib/supabase/server";


type Applications = {
  id: string
  created_at: string
  discord: string
  character: string
  realm: string
  role: string
  class: string
  spec: string
  logs: string
  raider: string
  experience: string
  reason: string
  feedback: string
  status: "New" | "Contacted" | "Interview Scheduled" | "Denined" | "Accepted"
}


async function getData(): Promise<Applications[]> {
  const supabase = await createClient();

  
  // Fetch data from your API here.
  let { data: applications, error } = await supabase
  .from('applications')
  .select('*')

  return [
    ...(applications ?? []),
    // console.log('apps', applications)
]

}

export default async function Admin() {
  const data = await getData()

  // console.log('data inside app view', data)
  return (
    <div className="container mx-auto py-10">
      {/* <DataTable columns={columns} data={data} /> */}
      <AdminApplicationView applications={data} />
    </div>
  )
}