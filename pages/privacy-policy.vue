<script setup lang="ts">
const { t } = useI18n();

useSeo({
  title: `${t('brand.name')} | ${t('legal.privacy_policy.title')}`,
  description: t('legal.privacy_policy.title')
});
</script>

<template>
  <div class="min-h-screen bg-bg pt-32 pb-16 px-6">
    <UiNavbar />
    <article class="max-w-3xl mx-auto">
      <h1 class="font-headline text-4xl md:text-5xl font-bold mb-8 tracking-tight">
        {{ t('legal.privacy_policy.title') }}
      </h1>
      
      <div class="space-y-6 font-body text-white/60 leading-relaxed">
        <p class="text-sm">{{ t('legal.privacy_policy.last_updated') }}</p>
        
        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.privacy_policy.section1_title') }}</h2>
          <p>{{ t('legal.privacy_policy.section1_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.privacy_policy.section2_title') }}</h2>
          <p>{{ t('legal.privacy_policy.section2_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.privacy_policy.section3_title') }}</h2>
          <p>{{ t('legal.privacy_policy.section3_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.privacy_policy.section4_title') }}</h2>
          <p>{{ t('legal.privacy_policy.section4_desc') }}</p>
        </section>

        <section>
          <h2 class="font-headline text-xl font-bold mb-4 text-white/90">{{ t('legal.privacy_policy.section5_title') }}</h2>
          <p>{{ t('legal.privacy_policy.section5_desc') }} <a href="mailto:pedromorenotrenado@gmail.com" class="text-accent-blue hover:underline">pedromorenotrenado@gmail.com</a>.</p>
        </section>
      </div>
    </article>
  </div>
</template>
