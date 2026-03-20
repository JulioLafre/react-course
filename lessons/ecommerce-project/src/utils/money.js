export function formatMoney(amountCents) {
  const isNegative = amountCents < 0;
  const value = Math.abs(amountCents) / 100;

  return `${isNegative ? '-' : ''}$${value.toFixed(2)}`;
}