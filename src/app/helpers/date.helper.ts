import * as moment from 'moment';

export function getDaysInMonth(monthIndex: number, fullYear?: number): number {
  const currentYear = fullYear ? fullYear : new Date().getFullYear();
  return moment(`${currentYear}-${monthIndex}`, 'YYYY-MM').daysInMonth();
}
