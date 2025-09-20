import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY;

  // ...existing code...
// Add these helpers to the bottom or an appropriate section of lib/utils.ts

export type ParsedDateItem = {
  raw: string;                 // original token (trimmed)
  date: Date | null;           // parsed Date or null if invalid
  formatted: string;           // friendly string (or raw if unparseable)
};

/**
 * Split a comma-separated 'dates' string and return parsed + formatted dates.
 *
 * - input: "2025-09-20, 9/21/2025, September 22, 2025"
 * - returns: [{ raw, date, formatted }, ...]
 *
 * If a token can't be parsed to a valid Date, `date` is null and `formatted` falls
 * back to the original token (trimmed).
 */
export function parseAndFormatDates(
  input: string | null | undefined,
  locale = "en-US",
  options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" }
): ParsedDateItem[] {
  if (!input) return [];

  // Split on commas, trim, filter out empty tokens
  const tokens = input
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const formatter = new Intl.DateTimeFormat(locale, options);

  return tokens.map((raw) => {
    // Try to parse with Date constructor (supports ISO, mm/dd/yyyy in many browsers)
    let d = new Date(raw);

    // If invalid, try a few simple fallbacks:
    if (isNaN(d.getTime())) {
      // If token looks like "DD/MM/YYYY" (slash) try swapping day/month
      const slashMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
      if (slashMatch) {
        const [_, a, b, y] = slashMatch;
        // assume if a > 12 it's day-first => convert to mm/dd
        if (Number(a) > 12) {
          d = new Date(`${b}/${a}/${y}`);
        } else {
          // fallback: try mm/dd (already attempted) — leave as invalid if not parseable
          d = new Date(raw);
        }
      }
    }

    const valid = !isNaN(d.getTime());
    return {
      raw,
      date: valid ? d : null,
      formatted: valid ? formatter.format(d) : raw,
    };
  });
}