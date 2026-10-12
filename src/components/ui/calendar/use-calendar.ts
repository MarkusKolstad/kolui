import { useCallback, useMemo, useState } from "react";
import {
  createCalendarMonth,
  type CalendarMonth,
} from "./calendar.model";
import type { WeekStartsOn } from "./calendar.utils";

export interface UseCalendarProps {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (value: Date) => void;
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  weekStartsOn?: WeekStartsOn;
}

export interface UseCalendarReturn {
  calendar: CalendarMonth;
  selectedDate: Date;
  visibleMonth: Date;
  selectDate: (date: Date) => void;
  setMonth: (month: Date) => void;
  nextMonth: () => void;
  previousMonth: () => void;
}

function getMonthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getInitialSelectedDate({ value, defaultValue }: UseCalendarProps) {
  return value ?? defaultValue ?? new Date();
}

/**
 * Manages local-time calendar selection and month navigation without rendering UI.
 *
 * Use `calendar.weeks` and `calendar.weekdays` to map a calendar grid.
 */
export function useCalendar({
  value,
  defaultValue,
  onValueChange,
  month,
  defaultMonth,
  onMonthChange,
  weekStartsOn = "sunday",
}: UseCalendarProps = {}): UseCalendarReturn {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    () => defaultValue ?? new Date(),
  );
  const selectedDate = value ?? uncontrolledValue;
  const [uncontrolledMonth, setUncontrolledMonth] = useState(() =>
    getMonthStart(defaultMonth ?? getInitialSelectedDate({ value, defaultValue })),
  );
  const visibleMonth = getMonthStart(month ?? uncontrolledMonth);

  const setMonth = useCallback(
    (nextMonth: Date) => {
      const normalizedMonth = getMonthStart(nextMonth);

      if (!month) {
        setUncontrolledMonth(normalizedMonth);
      }

      onMonthChange?.(normalizedMonth);
    },
    [month, onMonthChange],
  );

  const selectDate = useCallback(
    (date: Date) => {
      if (!value) {
        setUncontrolledValue(date);
      }

      onValueChange?.(date);
      setMonth(date);
    },
    [onValueChange, setMonth, value],
  );

  const nextMonth = useCallback(() => {
    setMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1),
    );
  }, [setMonth, visibleMonth]);

  const previousMonth = useCallback(() => {
    setMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1),
    );
  }, [setMonth, visibleMonth]);

  const calendar = useMemo(
    () =>
      createCalendarMonth({
        month: visibleMonth,
        selectedDate,
        weekStartsOn,
      }),
    [selectedDate, visibleMonth, weekStartsOn],
  );

  return {
    calendar,
    selectedDate,
    visibleMonth,
    selectDate,
    setMonth,
    nextMonth,
    previousMonth,
  };
}
