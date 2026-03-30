<script setup lang="ts">
import { Github, Linkedin, Twitter, FileText } from 'lucide-vue-next';

const { t } = useI18n();

const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: FileText, href: '#', label: 'ReadCV' }
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
            <button class="px-12 py-6 bg-primary-white text-bg font-bold rounded-2xl text-xl hover:scale-[1.05] transition-transform shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              {{ t('cta_section.button') }}
            </button>
          </UiMagneticButton>

          <div class="flex items-center space-x-8">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.href"
              class="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary-white hover:bg-white/10 transition-all group"
            >
              <component :is="social.icon" :size="20" />
              <span v-if="social.label" class="sr-only">{{ social.label }}</span>
            </a>
          </div>
        </div>

        <div class="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="font-label text-[10px] tracking-widest text-white/20 uppercase">
            © 2026 THE MODULAR ENGINEER. ALL RIGHTS RESERVED.
          </p>
          <div class="flex items-center space-x-8">
            <a href="#" class="font-label text-[10px] tracking-widest text-white/20 hover:text-white transition-colors uppercase">
              Privacy Policy
            </a>
            <a href="#" class="font-label text-[10px] tracking-widest text-white/20 hover:text-white transition-colors uppercase">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
