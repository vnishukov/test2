import * as moment from 'moment';

export function getDaysInMonth(monthIndex: number): number {
  const currentYear = new Date().getFullYear();
  return moment(`${currentYear}-${monthIndex}`, 'YYYY-MM').daysInMonth();
}
