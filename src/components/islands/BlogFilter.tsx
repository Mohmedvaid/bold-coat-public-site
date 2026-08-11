'use client';

import { useMemo, useState } from 'react';

export type BlogCardData = {
  id: string;
  title: string;
  href: string;
  description: string;
  category: string;
  dateLabel: string;
  coverAlt: string;
};

const categories = [
  { id: 'all', label: 'All' },
  { id: 'cost', label: 'Cost' },
  { id: 'exteriors', label: 'Exteriors' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'colors', label: 'Colors' },
  { id: 'projects', label: 'Projects' },
] as const;

type Props = {
  posts: BlogCardData[];
};

export default function BlogFilter({ posts }: Props) {
  const [active, setActive] = useState<(typeof categories)[number]['id']>('all');

  const visible = useMemo(() => {
    if (active === 'all') return posts;
    return posts.filter((post) => post.category === active);
  }, [active, posts]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Blog categories">
        {categories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={
                selected
                  ? 'bg-navy px-4 py-2 text-sm font-medium text-cream'
                  : 'border border-cream bg-paper px-4 py-2 text-sm font-medium text-navy hover:border-navy'
              }
              onClick={() => setActive(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {visible.map((post) => (
          <article key={post.id} className="flex flex-col">
            <a href={post.href} className="block">
              <div
                className="flex aspect-[16/9] items-center justify-center bg-cream"
                role="img"
                aria-label={post.coverAlt}
              />
            </a>
            <p className="mt-4 text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-navy">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              <span className="mx-2 text-stone" aria-hidden="true">
                ·
              </span>
              <time>{post.dateLabel}</time>
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
              <a href={post.href} className="hover:text-navy">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-base text-ink/75">{post.description}</p>
            <a
              href={post.href}
              className="mt-4 inline-flex items-center gap-1 text-base font-medium text-red"
            >
              Read more
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-base text-ink/75">No posts in this category yet.</p>
      )}
    </div>
  );
}
