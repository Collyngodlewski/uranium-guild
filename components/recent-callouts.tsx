import { createClient } from "@/lib/supabase/server";
import { parseAndFormatDates } from "@/lib/utils";
export default async function RecentCallouts() {
  const supabase = await createClient();
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  

  const { data: recentCallouts, error } = await supabase
    .from('callouts')
    .select('*')
    .gte('created_at', twentyFourHoursAgo);

  if (error) {
    return <div>Error loading recent callouts.</div>;
  }

  return (
    <ul>
      {recentCallouts && recentCallouts.length > 0 ? (
        recentCallouts.map((app: any, idx: number) => {
            const parsed = parseAndFormatDates(app?.dates);
             if (parsed.length === 0) {
                return <div className="text-sm text-muted-foreground">No dates</div>;
            }
            return (
            <div className="flex items-center mb-3 justify-center gap-6" key={app.id || idx}>
              <div className="flex items-center text-left w-full ml-10 gap-4">
                <div>
                  <p className="text-sm font-medium leading-none">{app.discord_username} </p>
                  <p className="text-sm text-muted-foreground">{app.content || "Callout Reason"}</p>
                   <div className="flex flex-wrap gap-2">
                    {parsed.map((p, i) => (
                        <span
                        key={i}
                        title={p.raw}
                        className="px-2 py-0.5 rounded-full bg-muted text-sm"
                        >
                        {p.formatted}
                        </span>
                    ))}
                    </div>
                </div>
                
              </div>
            </div>
            );
            })
      ) : (
        <li>No new callouts in the last 24 hours.</li>
      )}
    </ul>
  );
}