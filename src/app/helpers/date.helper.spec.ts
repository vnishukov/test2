import {getDaysInMonth} from './date.helper';

describe('DateHelper', () => {
  it('should return correct numbers of days in month', () => {
    expect(getDaysInMonth(3)).toEqual(31);
    expect(getDaysInMonth(2, 2015)).toEqual(28);
    expect(getDaysInMonth(2, 2016)).toEqual(29);
  });
});
