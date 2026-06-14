import type { Metadata } from 'next';

export const siteUrl = 'https://doyakmin.com';
export const siteName = '도약민';
export const defaultOgImage = '/og-doyakmin-card-v3.jpg';

type SeoMetadataOptions = {
  title: string;
  description: string;
  openGraphDescription?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function createSeoMetadata({
  title,
  description,
  openGraphDescription = description,
  path = '/',
  image = defaultOgImage,
  keywords = [],
  noIndex = false,
}: SeoMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [
      '도약민',
      '(주)도약민',
      '주식회사 도약민',
      '한국지',
      'Hangukji',
      '위치 기반 게임',
      'GPS 게임',
      '지역 활성화 게임',
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description: openGraphDescription,
      url,
      siteName,
      type: 'website',
      locale: 'ko_KR',
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} 대표 이미지`,
          type: image.endsWith('.png') ? 'image/png' : 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: openGraphDescription,
      images: [imageUrl],
    },
  };
}
