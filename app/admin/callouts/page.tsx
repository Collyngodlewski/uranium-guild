// import { columns, Payment } from "../../components/columns"
// import { DataTable } from "../../components/data-table"
import { AdminCalloutView } from "@/components/admin-callouts";

import { createClient } from "@/lib/supabase/server";


type Callouts = {
  id: string
  created_at: string
  discord: string
  content: string
  discord_username: string
  dates: string
}


async function getData(): Promise<Callouts[]> {
  const supabase = await createClient();

  
  // Fetch data from your API here.
  let { data: callouts, error } = await supabase
  .from('callouts')
  .select('*')
  .order('created_at', { ascending: false });  
  return [
    ...(callouts ?? []),
    // console.log('apps', applications)
]

}

export default async function Callouts() {
  const data = await getData()

  // console.log('data inside app view', data)
  return (
    <div className="container mx-auto py-10">
      {/* <DataTable columns={columns} data={data} /> */}
      <AdminCalloutView callouts={data} />
    </div>
  )
}