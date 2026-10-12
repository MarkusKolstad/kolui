import {
  getCalendarDates,
  getWeekdayLabels,
  isSameCalendarDay,
  type WeekStartsOn,
} from "./calendar.utils";

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
}

export interface CalendarWeek {
  days: readonly CalendarDay[];
}

export interface CalendarMonth {
  month: Date;
  weekdays: readonly string[];
  weeks: readonly CalendarWeek[];
}

export interface CreateCalendarMonthOptions {
  month: Date;
  selectedDate?: Date;
  today?: Date;
  weekStartsOn?: WeekStartsOn;
}

/**
 * Creates a six-week month grid for mapping to any calendar UI.
 *
 * All dates use the browser's local time zone.
 */
export function createCalendarMonth({
  month,
  selectedDate,
  today = new Date(),
  weekStartsOn = "sunday",
}: CreateCalendarMonthOptions): CalendarMonth {
  const visibleMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const dates = getCalendarDates(visibleMonth, weekStartsOn);
  const days = dates.map((date) => ({
    date,
    isCurrentMonth: date.getMonth() === visibleMonth.getMonth(),
    isSelected: selectedDate
      ? isSameCalendarDay(date, selectedDate)
      : false,
    isToday: isSameCalendarDay(date, today),
  }));

  return {
    month: visibleMonth,
    weekdays: getWeekdayLabels(weekStartsOn),
    weeks: Array.from({ length: 6 }, (_, index) => ({
      days: days.slice(index * 7, index * 7 + 7),
    })),
  };
}
