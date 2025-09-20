"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Callout = { id?: string | number; discord_username?: string; content?: string; dates?: string };

export default function CalloutCalendar({
  calloutsByDate = {},
  className,
}: {
  // keys: "YYYY-MM-DD" -> array of callouts for that date
  calloutsByDate?: Record<string, Callout[]>;
  className?: string;
}) {
  // Convert keys to Date objects for modifiers
  const dateObjects = React.useMemo(() => {
    const out: Date[] = [];
    for (const iso of Object.keys(calloutsByDate || {})) {
      // create local-midnight Date so day matching works predictably
      try {
        out.push(new Date(iso + "T00:00:00"));
      } catch {
        // ignore invalid
      }
    }
    return out;
  }, [calloutsByDate]);

  const modifiers = { callout: dateObjects };

  const modifiersClassNames = {
    callout:
      "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-red-600",
  };

  const [open, setOpen] = React.useState(false);
  const [selectedIso, setSelectedIso] = React.useState<string | null>(null);
  const [selectedDateLabel, setSelectedDateLabel] = React.useState<string | null>(null);

  // react-day-picker onDayClick handler
  const handleDayClick = (day: Date | undefined) => {
    if (!day) return;
    // build iso date key
    const iso = day.toISOString().slice(0, 10);
    setSelectedIso(iso);
    setSelectedDateLabel(day.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric", year: "numeric" }));
    setOpen(true);
  };

  // callouts for selected day
  const selectedCallouts = selectedIso ? calloutsByDate[selectedIso] || [] : [];

  return (
    <>
      <Calendar
        mode="single"
        className={className}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        onDayClick={(day) => handleDayClick(day)}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedDateLabel ?? "Selected date"}</DialogTitle>
            <DialogDescription>
              {selectedCallouts.length > 0 ? `${selectedCallouts.length} callout(s)` : "No callouts for this date."}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3">
            {selectedCallouts.length === 0 ? (
              <div className="text-sm text-muted-foreground">No callouts</div>
            ) : (
              selectedCallouts.map((c, i) => (
                <div key={c.id ?? i} className="border rounded p-3">
                  <p className="text-sm font-medium">{c.discord_username ?? "Unknown"}</p>
                  <p className="text-sm text-muted-foreground">{c.content ?? ""}</p>
                  {c.dates ? (
                    <p className="text-xs text-muted-foreground mt-2">Dates: {String(c.dates)}</p>
                  ) : null}
                </div>
              ))
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}