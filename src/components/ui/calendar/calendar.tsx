import { IconButton } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ComponentPropsWithoutRef } from "react";
import "./calendar.css";
import { formatCalendarDate, formatCalendarMonth, type WeekStartsOn } from "./calendar.utils";
import { useCalendar } from "./use-calendar";

export interface CalendarProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "onChange" | "defaultValue"
> {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (value: Date) => void;
  weekStartsOn?: WeekStartsOn;
}

export function Calendar({
  className,
  value,
  defaultValue,
  onValueChange,
  weekStartsOn = "sunday",
  ...props
}: CalendarProps) {
  const { calendar, nextMonth, previousMonth, selectDate } = useCalendar({
    value,
    defaultValue,
    onValueChange,
    weekStartsOn,
  });

  return (
    <div className={cn("Calendar", className)} {...props}>
      <div className="CalendarHeader">
        <IconButton
          variant="ghost"
          theme="default"
          size="sm"
          shape="rounded"
          aria-label="Previous month"
          onClick={previousMonth}
        >
          <ChevronLeft aria-hidden="true" />
        </IconButton>
        <h2 className="CalendarMonth" aria-live="polite">
          {formatCalendarMonth(calendar.month)}
        </h2>
        <IconButton
          variant="ghost"
          theme="default"
          size="sm"
          shape="rounded"
          aria-label="Next month"
          onClick={nextMonth}
        >
          <ChevronRight aria-hidden="true" />
        </IconButton>
      </div>
      <div className="CalendarGrid" role="grid" aria-label="Calendar dates">
        <div className="CalendarWeekdays" role="row">
          {calendar.weekdays.map((weekday, index) => (
            <span
              className="CalendarWeekday"
              role="columnheader"
              key={`${weekday}-${index}`}
            >
              {weekday}
            </span>
          ))}
        </div>
        {calendar.weeks.map((week, weekIndex) => (
          <div className="CalendarWeek" role="row" key={weekIndex}>
            {week.days.map((day) => {
              return (
                <div
                  className="CalendarCell"
                  role="gridcell"
                  aria-selected={day.isSelected}
                  key={day.date.toISOString()}
                >
                  <button
                    className={cn("CalendarDay", {
                      "CalendarDay-outside": !day.isCurrentMonth,
                    })}
                    type="button"
                    aria-label={formatCalendarDate(day.date)}
                    aria-current={day.isToday ? "date" : undefined}
                    onClick={() => selectDate(day.date)}
                  >
                    {day.date.getDate()}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
