'use client';

import { useEffect, useId, useState } from 'react';

type NavLink = { label: string; href: string };
type ServiceLink = { name: string; href: string };

type Props = {
  services: ServiceLink[];
  links: NavLink[];
  phoneDisplay: string;
  phoneHref: string;
};

export default function MobileNav({
  services,
  links,
  phoneDisplay,
  phoneHref,
}: Props) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center text-cream"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        {open ? (
          <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 top-[4.25rem] z-50 bg-navy/95 p-6 text-cream backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <p id={titleId} className="sr-only">
            Mobile navigation
          </p>
          <nav className="mx-auto flex max-w-lg flex-col gap-6" aria-label="Mobile">
            <div>
              <p className="mb-2 text-label font-medium uppercase tracking-[0.08em] text-stone">
                Services
              </p>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="block text-lg text-cream"
                      onClick={() => setOpen(false)}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-lg text-cream"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-cream/15 pt-4">
              <a href={phoneHref} className="text-lg font-medium text-cream">
                {phoneDisplay}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-red px-4 py-3 text-base font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                Free Estimate
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
