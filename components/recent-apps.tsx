import { createClient } from "@/lib/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function RecentApps() {
  const supabase = await createClient();
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const { data: recentApps, error } = await supabase
    .from('applications')
    .select('*')
    .gte('created_at', twentyFourHoursAgo);

  if (error) {
    return <div>Error loading recent applications.</div>;
  }

  return (
    <ul className="text-center">
      {recentApps && recentApps.length > 0 ? (
        recentApps.map((app: any, idx: number) => {
            const imageUrl = `${url}/storage/v1/object/public/avatars/${app.class?.toLowerCase()}.png`;
            return (
            <div className="flex items-center justify-center gap-4" key={app.id || idx}>
              <div className="flex items-center w-full ml-10 gap-4">
                <Avatar>
                  <AvatarImage src={imageUrl || "https://github.com/shadcn.png"} />
                  <AvatarFallback>{""}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{app.character + ' - ' + app.realm || "Applicant Name"} </p>
                  <p className="text-sm text-muted-foreground">{app.discord || "discord name"}</p>
                </div>
                
              </div>
            </div>
            );
            })
      ) : (
        <li>No new applications in the last 24 hours.</li>
      )}
    </ul>
  );
}