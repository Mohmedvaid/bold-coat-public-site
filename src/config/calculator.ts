export type ProjectType = 'interior' | 'exterior' | 'cabinets';
export type ConditionId = 'good' | 'some_prep' | 'heavy_prep';

export type CalculatorBand = {
  id: string;
  label: string;
  low: number;
  high: number;
};

export type CalculatorConfig = {
  approved: boolean;
  conditionMultipliers: Record<ConditionId, number>;
  interior: { unit: string; bands: CalculatorBand[] };
  exterior: { unit: string; bands: CalculatorBand[] };
  cabinets: { unit: string; bands: CalculatorBand[] };
};

export function roundToHundred(value: number): number {
  return Math.round(value / 100) * 100;
}

export function computeRange(
  band: CalculatorBand,
  multiplier: number,
): { low: number; high: number } {
  return {
    low: roundToHundred(band.low * multiplier),
    high: roundToHundred(band.high * multiplier),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
