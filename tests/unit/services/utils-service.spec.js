
import { convertCentsToDollar, convertDateFromUtcToZonedTime, formatUSAPhoneNumber, getFormattedDate } from '../../../src/services/utils-service';

describe('convertCentsToDollar', () => {
  const fixtures = [
    {
      title: 'when input is null, should return null',
      input: null,
      expected: null,
    },
    {
      title: 'when input is string, should return null',
      input: '',
      expected: null,
    },
    {
      title: 'when input is lesser than zero, should return null',
      input: -1,
      expected: null,
    },
    {
      title: 'when input is zero, should return null',
      input: 0,
      expected: null,
    },
    {
      title: 'when input is greater then zero, should return a formatted value',
      input: 950,
      expected: '9.50',
    },
  ];
  
  for(const fixture of fixtures) {
    it(fixture.title, () => {
    
      const result = convertCentsToDollar(fixture.input);  
      expect(result).toEqual(fixture.expected);
      
    });
  }
});

describe('convertDateFromUtcToZonedTime', () => {
  const fixtures = [
    {
      title: 'when utcDate and/or timeZone are null or empty, should return null',
      input: {
        utcDate: null,
        timeZone: null,
      },
      expected: null,
    },
    {
      title: 'when utcDate is not a valid date, should return null',
      input: {
        utcDate: 'not a valid date',
        timeZone: 'Australia/Sydney',
      },
      expected: null,
    },
  ];
  
  for(const fixture of fixtures) {
    it(fixture.title, () => {
    
      const result = convertDateFromUtcToZonedTime(fixture.input.utcDate, fixture.input.timeZone);  
      expect(result).toEqual(fixture.expected);
      
    });
  }
});

describe('getFormattedDate', () => {
  const fixtures = [
    {
      title: 'when inputs are null or empty, should return null',
      input: {
        startDate: null,
        endDate: null,
      },
      expected: null,
    },
    {
      title: 'when startDate or endDate are are invalid, should return null',
      input: {
        startDate: 'not a valid date',
        endDate: 'not a valid date',
      },
      expected: null,
    },
    {
      title: 'date period shoud return formatted, such as: "SEP 4, WED 16:00 PM - 0:00 AM  PDT"',
      input: {
        startDate: new Date('2019-09-04T16:00:00'),
        endDate: new Date('2019-09-05T00:00:00'),
      },
      expected: 'SEP 4, WED 16:00 PM - 0:00 AM  PDT',
    },
  ];
  
  for(const fixture of fixtures) {
    it(fixture.title, () => {
    
      const result = getFormattedDate(fixture.input.startDate, fixture.input.endDate);  
      expect(result).toEqual(fixture.expected);
      
    });
  }
});

describe('formatUSAPhoneNumber', () => {
  const fixtures = [
    {
      title: 'when inputs is null or empty, should return null',
      input: null,
      expected: null,
    },
    {
      title: 'should return formatted phone number',
      input: '2130010012',
      expected: '(213) 001 0012',
    },
  ];
  for(const fixture of fixtures) {
    it(fixture.title, () => {
    
      const result = formatUSAPhoneNumber(fixture.input);  
      expect(result).toEqual(fixture.expected);
      
    });
  }
});