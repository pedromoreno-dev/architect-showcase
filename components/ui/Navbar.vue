<script setup lang="ts">
const { t, locale, setLocale } = useI18n();

const toggleLanguage = () => {
  setLocale(locale.value === 'en' ? 'es' : 'en');
};

const navItems = ['projects', 'solutions', 'blog', 'contact'];
</script>

<template>
  <nav class="fixed top-0 w-full z-50 glass">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="font-headline font-bold text-xl tracking-tighter">
        {{ t('brand.name') }}
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="item in navItems"
          :key="item"
          :href="`#${item}`"
          class="font-label text-xs tracking-widest text-primary-white/60 hover:text-primary-white transition-colors uppercase"
        >
          {{ t(`nav.${item}`) }}
        </a>
      </div>

      <button
        @click="toggleLanguage"
        :aria-label="t('nav.language_aria')"
        class="font-headline text-sm font-medium hover:opacity-70 transition-opacity uppercase"
      >
        {{ t('nav.language_toggle') }}
      </button>
    </div>
  </nav>
</template>