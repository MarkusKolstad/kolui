const monthFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
});
const weekdayFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
});

export function formatCalendarMonth(date: Date) {
  return monthFormatter.format(date);
}

export function formatCalendarDate(date: Date) {
  return date.toLocaleDateString();
}

export function isSameCalendarDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

export type WeekStartsOn = "sunday" | "monday";

export function getCalendarDates(
  month: Date,
  weekStartsOn: WeekStartsOn = "sunday",
) {
  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const firstWeekday =
    weekStartsOn === "monday"
      ? (firstOfMonth.getDay() + 6) % 7
      : firstOfMonth.getDay();
  const gridStart = new Date(
    firstOfMonth.getFullYear(),
    firstOfMonth.getMonth(),
    1 - firstWeekday,
  );

  return Array.from(
    { length: 42 },
    (_, index) =>
      new Date(
        gridStart.getFullYear(),
        gridStart.getMonth(),
        gridStart.getDate() + index,
      ),
  );
}

export function getWeekdayLabels(weekStartsOn: WeekStartsOn = "sunday") {
  const sunday = new Date(2024, 0, 7);
  const startOffset = weekStartsOn === "monday" ? 1 : 0;
  return Array.from({ length: 7 }, (_, index) =>
    weekdayFormatter.format(
      new Date(
        sunday.getFullYear(),
        sunday.getMonth(),
        sunday.getDate() + startOffset + index,
      ),
    ),
  );
}
