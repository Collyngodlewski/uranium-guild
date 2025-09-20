
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react"
import CalloutCalendar from "@/components/callout-calendar";
import { parseAndFormatDates } from "@/lib/utils";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function AdminCalloutView({...props}: {callouts: any}) {
    // const [date, setDate] = React.useState<Date | undefined>(new Date())
 const calloutsByDate: Record<string, any[]> = {};
  for (const c of props.callouts || []) {
    const parsed = parseAndFormatDates(c?.dates);
    for (const p of parsed) {
      if (p.date) {
        const iso = p.date.toISOString().slice(0, 10);
        if (!calloutsByDate[iso]) calloutsByDate[iso] = [];
        calloutsByDate[iso].push(c);
      }
    }
  }
    return (
        <div>
            <Card>
                <CardHeader className="border-b border-b-foreground/10">
                    <CardTitle className="text-2xl">Callouts</CardTitle>
                    <CardDescription>Callouts made via Discord</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex justify-between">
                <div>
                {props.callouts.map((app: any, idx: number) => {
                    const parsed = parseAndFormatDates(app?.dates);

                    if (parsed.length === 0) {
                        return <div className="text-sm text-muted-foreground">No dates</div>;
                    }
                    return (
                    <div className="flex items-center justify-between gap-4" key={app.id || idx}>
                    <div className="flex items-center gap-4">
                        <div className="mb-5">
                        <p className="text-sm font-medium leading-none">{app.discord_username  || "Discord name"} </p>
                        <p className="text-sm text-muted-foreground">{app.content || "callout dates"}</p>
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
                    })}
                </div>
                <CalloutCalendar calloutsByDate={calloutsByDate} className="rounded-lg w-1/2 border" />
                </CardContent>

            </Card>
            
        </div>
        
    )
}