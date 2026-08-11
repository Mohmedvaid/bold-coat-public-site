'use client';

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { site } from '../../config/site';

type Props = {
  source?: 'estimate-form' | 'calculator';
  showMessage?: boolean;
  submitLabel?: string;
};

function readParam(key: string): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(key) ?? '';
}

export default function EstimateForm({
  source = 'estimate-form',
  showMessage = true,
  submitLabel = 'Request Free Estimate',
}: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setName(readParam('name'));
    setPhone(readParam('phone'));
    setEmail(readParam('email'));
    setTown(readParam('town'));
    setService(readParam('service'));
  }, []);

  const serviceOptions = useMemo(() => [...site.services], []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
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
          service,
          message: showMessage ? message : undefined,
          source,
          honeypot,
        }),
      });

      if (!response.ok) throw new Error('Lead request failed');

      window.location.href = '/thank-you';
    } catch {
      setStatus('error');
      setErrorMessage(
        `We could not send that just now. Call ${site.phoneDisplay} and we will take it from here.`,
      );
    }
  };

  return (
    <form className="grid gap-4 bg-paper p-6 shadow-sm" onSubmit={onSubmit} noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base text-ink"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone
          <input
            className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base text-ink"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base text-ink"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Town
          <input
            className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base text-ink"
            type="text"
            name="town"
            required
            autoComplete="address-level2"
            value={town}
            onChange={(event) => setTown(event.target.value)}
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Service
        <select
          className="mt-1 w-full border border-cream bg-paper px-3 py-2 text-base text-ink"
          name="service"
          required
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((item) => (
            <option key={item.href} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>

      {showMessage && (
        <label className="block text-sm font-medium text-ink">
          Project notes
          <textarea
            className="mt-1 min-h-28 w-full border border-cream bg-paper px-3 py-2 text-base text-ink"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
      )}

      <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </label>

      <p className="text-sm text-stone">
        Prefer a call?{' '}
        <a className="text-red" href={`tel:${site.phone}`}>
          {site.phoneDisplay}
        </a>
        {' · '}
        <a className="text-red" href="/pricing">
          Open the cost calculator
        </a>
      </p>

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
        {status === 'submitting' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
