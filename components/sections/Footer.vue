<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next';

const { t } = useI18n();

const socialLinks = [
  { icon: Github, href: 'https://github.com/pedromoreno-dev', ariaKey: 'footer.social.github' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pedromoreno-dev', ariaKey: 'footer.social.linkedin' }
];
</script>

<template>
  <footer class="py-16 px-6 border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.ariaKey"
            :href="social.href"
            :aria-label="t(social.ariaKey)"
            class="text-white/30 hover:text-white/60 transition-colors"
          >
            <component :is="social.icon" :size="18" />
          </a>
        </div>
        
        <p class="font-label text-[10px] tracking-widest text-white/20 uppercase">
          {{ t('footer.rights') }}
        </p>
        
        <div class="flex items-center gap-6">
          <NuxtLink to="/privacy-policy" class="font-label text-[10px] tracking-widest text-white/20 hover:text-white/40 transition-colors uppercase">
            {{ t('footer.privacy') }}
          </NuxtLink>
          <NuxtLink to="/terms" class="font-label text-[10px] tracking-widest text-white/20 hover:text-white/40 transition-colors uppercase">
            {{ t('footer.terms') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>