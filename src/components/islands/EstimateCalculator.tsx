'use client';

import { useEffect, useId, useMemo, useState, type FormEvent } from 'react';
import type { CalculatorConfig, ConditionId, ProjectType } from '../../config/calculator';
import { computeRange, formatCurrency } from '../../config/calculator';
import { site } from '../../config/site';

type Step = 'type' | 'size' | 'condition' | 'result';

type Props = {
  config: CalculatorConfig;
};

const projectTypes: { id: ProjectType; label: string; blurb: string }[] = [
  { id: 'interior', label: 'Interior', blurb: 'Rooms, halls, and trim' },
  { id: 'exterior', label: 'Exterior', blurb: 'Siding, trim, and elevations' },
  { id: 'cabinets', label: 'Cabinets', blurb: 'Doors, drawers, and faces' },
];

const conditions: { id: ConditionId; label: string; blurb: string }[] = [
  { id: 'good', label: 'Good shape', blurb: 'Sound surface, light prep' },
  { id: 'some_prep', label: 'Some prep needed', blurb: 'Peeling spots, repairs, or scraping' },
  { id: 'heavy_prep', label: 'Heavy prep', blurb: 'Failed coatings, extensive repairs' },
];

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function EstimateCalculator({ config }: Props) {
  const formId = useId();
  const [step, setStep] = useState<Step>('type');
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [bandId, setBandId] = useState<string | null>(null);
  const [condition, setCondition] = useState<ConditionId | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const bands = useMemo(() => {
    if (!projectType) return [];
    return config[projectType].bands;
  }, [config, projectType]);

  const selectedBand = bands.find((band) => band.id === bandId) ?? null;
  const multiplier = condition ? config.conditionMultipliers[condition] : 1;
  const range =
    selectedBand && condition ? computeRange(selectedBand, multiplier) : null;

  useEffect(() => {
    if (step !== 'result' || !projectType || !bandId) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'calculator_result',
      projectType,
      bandId,
    });
  }, [step, projectType, bandId]);

  if (!config.approved) {
    return (
      <div className="border border-cream bg-paper p-8 text-center shadow-sm md:p-12">
        <p className="text-label font-medium uppercase tracking-[0.08em] text-navy">
          Cost calculator
        </p>
        <h2 className="mt-3 font-display text-[2rem] text-ink md:text-4xl">Coming soon</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink/75">
          We are finalizing honest public ballpark ranges for North Shore interiors, exteriors,
          and cabinets. Meanwhile, request a free on-site estimate or call{' '}
          <a className="text-red" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex bg-red px-5 py-3 text-base font-medium text-paper transition-colors hover:bg-[#c73828]"
        >
          Free Estimate
        </a>
      </div>
    );
  }

  const goBack = () => {
    if (step === 'size') {
      setStep('type');
      setBandId(null);
    } else if (step === 'condition') {
      setStep('size');
      setCondition(null);
    } else if (step === 'result') {
      setStep('condition');
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const submitLead = async (event: FormEvent) => {
    event.preventDefault();
    if (!projectType || !selectedBand || !condition || !range) return;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          town,
          service: projectTypes.find((item) => item.id === projectType)?.label,
          source: 'calculator',
          honeypot,
          calcSelections: {
            projectType,
            bandId: selectedBand.id,
            condition,
            low: range.low,
            high: range.high,
          },
        }),
      });

      if (!response.ok) throw new Error('Lead request failed');
      setStatus('success');
      window.location.href = '/thank-you';
    } catch {
      setStatus('error');
      setErrorMessage(
        `We could not send that just now. Call ${site.phoneDisplay} and we will take it from here.`,
      );
    }
  };

  return (
    <div className="border border-cream bg-paper p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-label font-medium uppercase tracking-[0.08em] text-navy">
          Instant ballpark
        </p>
        {step !== 'type' && (
          <button
            type="button"
            onClick={goBack}
            className="text-sm font-medium text-red"
          >
            Back
          </button>
        )}
      </div>

      {step === 'type' && (
        <fieldset>
          <legend className="font-display text-2xl text-ink md:text-3xl">
            What are you painting?
          </legend>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                className="border border-cream bg-cream/40 p-5 text-left transition hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                onClick={() => {
                  setProjectType(type.id);
                  setBandId(null);
                  setStep('size');
                }}
              >
                <span className="block font-display text-xl text-ink">{type.label}</span>
                <span className="mt-2 block text-sm text-ink/70">{type.blurb}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 'size' && projectType && (
        <fieldset>
          <legend className="font-display text-2xl text-ink md:text-3xl">
            About how large is the project?
          </legend>
          <div className="mt-6 grid gap-3">
            {bands.map((band) => (
              <button
                key={band.id}
                type="button"
                className="border border-cream px-4 py-4 text-left transition hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                onClick={() => {
                  setBandId(band.id);
                  setStep('condition');
                }}
              >
                <span className="font-medium text-ink">{band.label}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 'condition' && (
        <fieldset>
          <legend className="font-display text-2xl text-ink md:text-3xl">
            What condition is the surface in?
          </legend>
          <div className="mt-6 grid gap-3">
            {conditions.map((item) => (
              <button
                key={item.id}
                type="button"
                className="border border-cream px-4 py-4 text-left transition hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                onClick={() => {
                  setCondition(item.id);
                  setStep('result');
                }}
              >
                <span className="block font-medium text-ink">{item.label}</span>
                <span className="mt-1 block text-sm text-ink/70">{item.blurb}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 'result' && range && selectedBand && projectType && condition && (
        <div>
          <h2 className="font-display text-2xl text-ink md:text-3xl">Your ballpark range</h2>
          <p className="mt-4 text-lg text-ink">
            Estimated range:{' '}
            <strong>
              {formatCurrency(range.low)} to {formatCurrency(range.high)}
            </strong>
            . Every home is different. Your exact number comes from a free on-site estimate.
          </p>
          <p className="mt-2 text-sm text-stone">
            Based on {projectTypes.find((item) => item.id === projectType)?.label.toLowerCase()},{' '}
            {selectedBand.label.toLowerCase()},{' '}
            {conditions.find((item) => item.id === condition)?.label.toLowerCase()}.
          </p>

          <form className="mt-8 grid gap-4" onSubmit={submitLead} aria-labelledby={formId}>
            <h3 id={formId} className="font-display text-xl text-ink">
              Book my free estimate
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink">
                Name
                <input
                  className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  autoComplete="name"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                Phone
                <input
                  className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  autoComplete="tel"
                  type="tel"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                Email
                <input
                  className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                  type="email"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                Town
                <input
                  className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base"
                  value={town}
                  onChange={(event) => setTown(event.target.value)}
                  required
                  autoComplete="address-level2"
                />
              </label>
            </div>
            <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
              Company
              <input
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </label>
            {status === 'error' && (
              <p className="text-sm text-red" role="alert">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex w-fit bg-red px-5 py-3 text-base font-medium text-paper transition-colors hover:bg-[#c73828] disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending…' : 'Book my free estimate'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
