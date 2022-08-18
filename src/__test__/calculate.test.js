import calculate from '../logic/calculate';

describe('Calculator Function test', () => {
  it('ADD 1 and 1 ', () => {
    expect(() => {
      calculate({
        total: 0,
        next: 1,
        operation: '+',
      }, 1)
        .total.toBe(2);
    });
  });
  it('Substract 1 from 1', () => {
    expect(() => {
      calculate(
        {
          total: 0,
          next: 1,
          operation: '-',
        },
        1,
      ).total.toBe(0);
    });
  });
  it('Multiply 10 and  5', () => {
    expect(() => {
      calculate(
        {
          total: 0,
          next: 10,
          operation: 'x',
        },
        5,
      ).total.toBe(50);
    });
  });
  it('Devide  10 with  5', () => {
    expect(() => {
      calculate(
        {
          total: 0,
          next: 10,
          operation: '÷',
        },
        5,
      ).total.toBe(2);
    });
  });
});
