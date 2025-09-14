import { columns, Payment } from "../../components/columns"
import { DataTable } from "../../components/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
  {
    id: "EUlRP7db",
    amount: 497,
    status: "Interview Scheduled",
    email: "ao2n0j@yahoo.com"
  },
]

}

export default async function Admin() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}