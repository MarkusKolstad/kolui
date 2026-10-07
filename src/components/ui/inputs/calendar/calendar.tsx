import { IconButton } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, type ComponentPropsWithoutRef } from "react";
import "./calendar.css";
import {
  formatCalendarDate,
  formatCalendarMonth,
  getCalendarDates,
  getWeekdayLabels,
  isSameCalendarDay,
  type WeekStartsOn,
} from "./calendar.utils";

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
  const [uncontrolledValue, setUncontrolledValue] = useState(
    () => defaultValue ?? new Date(),
  );
  const selectedDate = value ?? uncontrolledValue;
  const [monthOffset, setMonthOffset] = useState(0);
  const visibleMonth = useMemo(
    () =>
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + monthOffset,
        1,
      ),
    [selectedDate, monthOffset],
  );
  const dates = useMemo(
    () => getCalendarDates(visibleMonth, weekStartsOn),
    [visibleMonth, weekStartsOn],
  );
  const weekdays = useMemo(
    () => getWeekdayLabels(weekStartsOn),
    [weekStartsOn],
  );
  const today = new Date();

  function changeMonth(offset: number) {
    setMonthOffset((currentOffset) => currentOffset + offset);
  }

  function selectDate(date: Date) {
    if (!value) {
      setUncontrolledValue(date);
    }
    onValueChange?.(date);
    setMonthOffset(0);
  }

  return (
    <div className={cn("Calendar", className)} {...props}>
      <div className="CalendarHeader">
        <IconButton
          variant="ghost"
          theme="default"
          size="sm"
          shape="rounded"
          aria-label="Previous month"
          onClick={() => changeMonth(-1)}
        >
          <ChevronLeft aria-hidden="true" />
        </IconButton>
        <h2 className="CalendarMonth" aria-live="polite">
          {formatCalendarMonth(visibleMonth)}
        </h2>
        <IconButton
          variant="ghost"
          theme="default"
          size="sm"
          shape="rounded"
          aria-label="Next month"
          onClick={() => changeMonth(1)}
        >
          <ChevronRight aria-hidden="true" />
        </IconButton>
      </div>
      <div className="CalendarGrid" role="grid" aria-label="Calendar dates">
        <div className="CalendarWeekdays" role="row">
          {weekdays.map((weekday, index) => (
            <span
              className="CalendarWeekday"
              role="columnheader"
              key={`${weekday}-${index}`}
            >
              {weekday}
            </span>
          ))}
        </div>
        {Array.from({ length: 6 }, (_, weekIndex) => (
          <div className="CalendarWeek" role="row" key={weekIndex}>
            {dates.slice(weekIndex * 7, weekIndex * 7 + 7).map((date) => {
              const isCurrentMonth =
                date.getMonth() === visibleMonth.getMonth();
              const isSelected = isSameCalendarDay(date, selectedDate);
              const isToday = isSameCalendarDay(date, today);

              return (
                <div
                  className="CalendarCell"
                  role="gridcell"
                  aria-selected={isSelected}
                  key={date.toISOString()}
                >
                  <button
                    className={cn("CalendarDay", {
                      "CalendarDay-outside": !isCurrentMonth,
                    })}
                    type="button"
                    aria-label={formatCalendarDate(date)}
                    aria-current={isToday ? "date" : undefined}
                    onClick={() => selectDate(date)}
                  >
                    {date.getDate()}
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
