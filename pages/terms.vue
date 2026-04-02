<script setup lang="ts">
const { t } = useI18n();

useSeo({
  title: `${t('brand.name')} | ${t('legal.terms.title')}`,
  description: t('legal.terms.title')
});
</script>

<template>
  <div class="min-h-screen bg-bg pt-32 pb-16 px-6">
    <UiNavbar />
    <article class="max-w-3xl mx-auto">
      <h1 class="font-headline text-4xl md:text-5xl font-bold mb-8 tracking-tight">
        {{ t('legal.terms.title') }}
      </h1>
      
      <div class="space-y-6 font-body text-white/60 leading-relaxed">
        <p class="text-sm">{{ t('legal.terms.last_updated') }}</p>
        
        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.terms.section1_title') }}</h2>
          <p>{{ t('legal.terms.section1_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.terms.section2_title') }}</h2>
          <p>{{ t('legal.terms.section2_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.terms.section3_title') }}</h2>
          <p>{{ t('legal.terms.section3_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.terms.section4_title') }}</h2>
          <p>{{ t('legal.terms.section4_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.terms.section5_title') }}</h2>
          <p>{{ t('legal.terms.section5_desc') }} <a href="mailto:pedromorenotrenado@gmail.com" class="text-accent-blue hover:underline">pedromorenotrenado@gmail.com</a>.</p>
        </section>
      </div>
    </article>
  </div>
</template>
