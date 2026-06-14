import type { MetadataRoute } from 'next';
import { allNewsPosts } from '@/content/news';
import { absoluteUrl } from '@/lib/seo';

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/games', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/team', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/news', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
  { path: '/support/walkerholic', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/delete-account', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/delete-account/namgu', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/delete-account/gratella', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...allNewsPosts.map((post) => ({
      url: absoluteUrl(`/news/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: post.slug === 'hangukji-beta-event' ? 0.8 : 0.6,
    })),
  ];
}
