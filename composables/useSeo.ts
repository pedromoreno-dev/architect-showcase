/**
 * Composable for i18n-aware SEO meta tags
 * Sets up title, description, and Open Graph tags based on current locale
 */
export const useSeo = (overrides?: { title?: string; description?: string }) => {
  const { t, locale } = useI18n();

  const setMeta = () => {
    const title = overrides?.title ?? t('meta.title');
    const description = overrides?.description ?? t('meta.description');
    const ogImage = '/og-image.png';

    useHead({
      title,
      htmlAttrs: {
        lang: locale.value
      },
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: locale.value === 'en' ? 'en_US' : 'es_ES' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ]
    });
  };

  // Set meta on initial load and when locale changes
  watchEffect(() => {
    setMeta();
  });
};