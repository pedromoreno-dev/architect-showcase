<script setup lang="ts">
import { PenTool, ArrowRight } from 'lucide-vue-next';

const { t } = useI18n();
</script>

<template>
  <section id="blog" class="py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {{ t('blog.title') }}
          </h2>
          <p class="font-body text-lg text-white/60 leading-relaxed">
            {{ t('blog.description') }}
          </p>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 600 }"
        class="glass rounded-[2rem] p-16 text-center"
      >
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-8">
          <PenTool :size="32" class="text-white/40" />
        </div>

        <h3 class="font-headline text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          {{ t('blog.coming_soon') }}
        </h3>

        <p class="font-body text-white/60 max-w-md mx-auto mb-8">
          {{ t('blog.placeholder_text') }}
        </p>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <div class="w-2 h-2 bg-accent-amber rounded-full animate-pulse" />
          <span class="font-label text-[10px] tracking-widest text-white/40 uppercase">
            {{ t('blog.status') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>