export type DayHours = {
day: string;
hours: { closed: boolean; from?: string; to?: string }[];
};

const DAY_ALIASES: Record<string, string> = {
mo: "Mon",
mon: "Mon",
monday: "Mon",
di: "Tue",
tue: "Tue",
dienstag: "Tue",
mi: "Wed",
wed: "Wed",
mittwoch: "Wed",
do: "Thu",
thu: "Thu",
donnerstag: "Thu",
fr: "Fri",
fri: "Fri",
freitag: "Fri",
sa: "Sat",
sat: "Sat",
samstag: "Sat",
so: "Sun",
sun: "Sun",
sonntag: "Sun"
};

export function normalizeHours(hours: any[]): DayHours[] {
if (!Array.isArray(hours)) return [];
const result: DayHours[] = [];
for (const h of hours) {
const rawDay = String(h.day || "").toLowerCase();
const day = DAY_ALIASES[rawDay] || h.day || "Mon";
const ranges = Array.isArray(h.hours) ? h.hours : [];
const norm = ranges.map((r: any) => ({
closed: Boolean(r.closed),
from: r.from || undefined,
to: r.to || undefined
}));
result.push({ day, hours: norm });
}
return result;
}