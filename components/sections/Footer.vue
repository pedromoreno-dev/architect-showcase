<script setup lang="ts">
import { h } from 'vue';

const GithubIcon = (props: any) => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('path', { d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' }),
  h('path', { d: 'M9 18c-4.51 2-5-2-7-2' })
]);

const LinkedinIcon = (props: any) => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }),
  h('rect', { width: 4, height: 12, x: 2, y: 9 }),
  h('circle', { cx: 4, cy: 4, r: 2 })
]);



const { t } = useI18n();

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/pedromoreno-dev', ariaKey: 'footer.social.github' },
  { icon: LinkedinIcon, href: 'http://www.linkedin.com/in/pedromoreno-dev', ariaKey: 'footer.social.linkedin' }
];
</script>

<template>
  <footer id="contact" class="py-32 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
      >
        <h2 class="font-headline text-5xl md:text-8xl font-bold mb-12 tracking-tight">
          {{ t('cta_section.title') }}
        </h2>

        <div class="flex flex-col items-center gap-12">
          <UiMagneticButton>
            <button
              :aria-label="t('cta_section.button_aria')"
              class="px-12 py-6 bg-primary-white text-bg font-bold rounded-2xl text-xl hover:scale-[1.05] transition-transform shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            >
              {{ t('cta_section.button') }}
            </button>
          </UiMagneticButton>

          <div class="flex items-center space-x-8">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              :aria-label="t(social.ariaKey)"
              class="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary-white hover:bg-white/10 transition-all group"
            >
              <component :is="social.icon" :size="20" />
            </a>
          </div>
        </div>

        <div class="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="font-label text-[10px] tracking-widest text-white/20 uppercase">
            {{ t('footer.rights') }}
          </p>
          <div class="flex items-center space-x-8">
            <a href="#" class="font-label text-[10px] tracking-widest text-white/20 hover:text-white transition-colors uppercase">
              {{ t('footer.privacy') }}
            </a>
            <a href="#" class="font-label text-[10px] tracking-widest text-white/20 hover:text-white transition-colors uppercase">
              {{ t('footer.terms') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>