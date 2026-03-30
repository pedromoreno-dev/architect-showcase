<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
const { t } = useI18n();
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-[150px] -z-10" />

    <div class="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
      <div
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0 }"
        :transition="{ duration: 800 }"
      >
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 mb-8">
          <span class="font-label text-[10px] tracking-widest text-white/60 uppercase flex items-center gap-2">
            <span class="text-accent-amber">λ</span> {{ t('hero.badge') }}
          </span>
        </div>

        <h1 class="font-headline text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
          {{ t('hero.title') }}
        </h1>

        <p class="font-body text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <div class="flex flex-wrap gap-4">
          <UiMagneticButton>
            <button class="px-8 py-4 bg-primary-white text-bg font-bold rounded-lg flex items-center space-x-2 hover:scale-[1.02] transition-transform">
              <span>{{ t('hero.cta_primary') }}</span>
              <ArrowRight :size="18" />
            </button>
          </UiMagneticButton>
          
          <button class="px-8 py-4 glass glass-hover rounded-lg font-medium transition-all">
            {{ t('hero.cta_secondary') }}
          </button>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1000, delay: 200 }"
        class="relative hidden lg:flex justify-center items-center"
      >
        <div class="relative w-full max-w-[500px] aspect-square glass rounded-[2.5rem] flex items-center justify-center overflow-hidden">
          <div class="relative w-64 h-64">
            <div 
              v-motion
              :initial="{ rotate: 0 }"
              :enter="{ rotate: 45 }"
              class="absolute inset-0 border border-white/10"
            />
            <div 
              v-motion
              :initial="{ rotate: 0 }"
              :enter="{ rotate: -45 }"
              class="absolute inset-0 border border-white/10"
            />
            <div 
              v-motion
              :initial="{ scale: 1 }"
              :enter="{ 
                scale: [1, 1.1, 1],
                transition: { duration: 4000, repeat: Infinity }
              }"
              class="absolute inset-8 bg-white/5 border border-white/20 rotate-45 flex items-center justify-center"
            >
              <div class="w-12 h-12 bg-white rotate-45 shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
            </div>
            
            <div class="absolute -top-10 -left-10 w-3 h-3 bg-accent-blue rounded-full blur-[2px]" />
            <div class="absolute -bottom-10 -right-10 w-3 h-3 bg-accent-green rounded-full blur-[2px]" />
            <div class="absolute top-1/2 -right-12 w-2 h-2 bg-accent-amber rounded-full blur-[1px]" />
          </div>
          
          <div class="absolute inset-0 opacity-10 pointer-events-none" 
               style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px" />
        </div>
      </div>
    </div>
  </section>
</template>
