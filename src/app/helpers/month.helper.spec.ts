import {months} from './month.helper';

describe('MonthHelper', () => {
  it('should have an array of 12 months', () => {
    expect(months).toEqual(jasmine.any(Array));
    expect(months.length).toEqual(12);
  });
});
