<script setup lang="ts">
const { t } = useI18n();

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
};
</script>

<template>
  <section id="about" class="py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="mb-20">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="transition"
          class="font-headline text-4xl md:text-5xl font-bold tracking-tight"
        >
          {{ t('about.title') }}
        </h2>
      </div>

      <!-- Bento Grid - 3 blocks in a row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Block 1 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ ...transition, delay: 0.15 }"
          class="glass rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-accent-blue/20 transition-colors duration-500"
        >
          <div class="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
            <div class="w-2 h-2 bg-accent-blue rounded-full" />
          </div>
          <p class="font-body text-white/70 leading-relaxed text-sm md:text-base">
            {{ t('about.block1') }}
          </p>
        </div>

        <!-- Block 2 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ ...transition, delay: 0.3 }"
          class="glass rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-accent-green/20 transition-colors duration-500"
        >
          <div class="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-6">
            <div class="w-2 h-2 bg-accent-green rounded-full" />
          </div>
          <p class="font-body text-white/70 leading-relaxed text-sm md:text-base">
            {{ t('about.block2') }}
          </p>
        </div>

        <!-- Block 3 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ ...transition, delay: 0.45 }"
          class="glass rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-accent-blue/20 transition-colors duration-500"
        >
          <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
            <div class="w-2 h-2 bg-purple-500 rounded-full" />
          </div>
          <p class="font-body text-white/70 leading-relaxed text-sm md:text-base">
            {{ t('about.block3') }}
          </p>
        </div>

        <!-- Closing statement - Double width card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ ...transition, delay: 0.6 }"
          class="col-span-1 md:col-span-3"
        >
        <div class="glass rounded-[2rem] p-8 md:p-12 border border-white/5 bg-gradient-to-r from-accent-blue/5 to-accent-green/5">
          <p class="font-headline text-xl md:text-2xl font-bold text-white/90 text-center tracking-tight">
            {{ t('about.closing') }}
          </p>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>