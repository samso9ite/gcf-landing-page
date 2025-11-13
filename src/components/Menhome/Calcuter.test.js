import { computeLoanValues, formatCurrency } from './Calcuter';

describe('computeLoanValues', () => {
  it('returns zero values for invalid principal', () => {
    const result = computeLoanValues(0, '2', 13);
    expect(result.totalPay).toBe(0);
    expect(result.totalInterest).toBe(0);
  });

  it('computes monthly interest and totals for 2 month tenure at 13% monthly', () => {
    const principal = 1000;
    const result = computeLoanValues(principal, '2', 13);
    // monthly interest
    expect(result.monthlyInterest).toBeCloseTo(principal * 0.13, 5);
    // total interest over 2 months
    expect(result.totalInterest).toBeCloseTo(principal * 0.13 * 2, 5);
    // monthly payment = principal/periods + monthlyInterest
    expect(result.monthlyPayment).toBeCloseTo(principal / 2 + principal * 0.13, 5);
    // total pay principal + total interest
    expect(result.totalPay).toBeCloseTo(principal + principal * 0.26, 5);
  });

  it('computes 15 day loan with one-off interest', () => {
    const principal = 1000;
    const result = computeLoanValues(principal, '15d', 10);
    expect(result.totalInterest).toBeCloseTo(principal * 0.10, 5);
    expect(result.totalPay).toBeCloseTo(principal * 1.10, 5);
    expect(result.monthlyPayment).toBeCloseTo(principal * 1.10, 5); // lump sum
  });

  it('formats currency without decimals and with separators', () => {
    expect(formatCurrency(0)).toBe('0');
    expect(formatCurrency(1000)).toBe('1,000');
    expect(formatCurrency(2500000)).toBe('2,500,000');
  });
});
