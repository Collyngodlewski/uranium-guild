
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { createClient } from "@/lib/supabase/server";
import { ApplicationDialog } from "./application-dialog";
import { StatusUpdate } from "./admin-application-status-update";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function AdminApplicationView({...props}: {applications: any}) {
    
    const supabase = await createClient();

    const { data: image } = supabase.storage.from('avatars').getPublicUrl('mage.png');
    return (
        <div>
            <Card>
                <CardHeader className="border-b border-b-foreground/10">
                    <CardTitle className="text-2xl">Applications</CardTitle>
                    <CardDescription>View and manage applications</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 grid gap-6">
        {props.applications.map((app: any, idx: number) => {
            const imageUrl = `${url}/storage/v1/object/public/avatars/${app.class?.toLowerCase()}.png`;
            return (
            <div className="flex items-center justify-between gap-4" key={app.id || idx}>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={imageUrl || "https://github.com/shadcn.png"} />
                  <AvatarFallback>{""}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{app.character + ' - ' + app.realm || "Applicant Name"} </p>
                  <p className="text-sm text-muted-foreground">{app.discord || "discord name"}</p>
                </div>
                
              </div>
            <div className="flex items-center gap-4">
                <Button asChild size="sm" variant={"outline"}>
                    <ApplicationDialog app={app}/>
                </Button>
                <StatusUpdate status={app.status} id={app.id}/>
              </div>
            </div>
            );
            })}
                </CardContent>
            </Card>
        </div>
    )
}