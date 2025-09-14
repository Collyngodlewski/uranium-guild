import { redirect } from "next/navigation";
import { UpdateAccountForm } from "@/components/update-account-form";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

 


  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, character_name')
    .eq('id', data.claims.sub);

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected Admin page that you can only see as an authenticated
          user
        </div>
      </div>
      {/* <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(data, null, 2)}
           {JSON.stringify(profiles, null, 2)}
        </pre>
      </div> */}
      <div>
        {/* <h2 className="font-bold text-2xl mb-4">Update Profile</h2> */}
        {/* <UpdateAccountForm profiles={profiles} /> */}
      </div>
    </div>
  );
}
