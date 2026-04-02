<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next';

const { t } = useI18n();

const principles = [
  { id: 'modular', number: '01' },
  { id: 'efficiency', number: '02' },
  { id: 'documentation', number: '03' }
];

const gridSquares = Array.from({ length: 25 });

// Pre-generated deterministic values for SSR-safe animations
const squareTimings = [
  4200, 3800, 5100, 2900, 4400,
  3600, 4800, 3200, 5500, 4100,
  3300, 4900, 2700, 5200, 3700,
  4500, 3100, 5300, 2800, 4600,
  3900, 5400, 3400, 5000, 4300
];
const squareDelays = [
  1200, 800, 1500, 400, 1800,
  600, 1300, 200, 1900, 1000,
  500, 1700, 0, 1600, 700,
  1100, 300, 1400, 900, 1200,
  400, 1500, 800, 1300, 600
];
// Indices where nodes should appear (deterministic, ~30% of grid)
const nodeIndices = new Set([2, 5, 8, 12, 15, 18, 22]);

// Animation Variants
const pulseVariant = {
  initial: { opacity: 1 },
  enter: {
    opacity: [1, 0.5, 1],
    transition: { duration: 2000, repeat: Infinity }
  }
};

const rotateVariant = {
  initial: { rotate: 0 },
  enter: {
    rotate: 360,
    transition: { duration: 4000, repeat: Infinity, ease: 'linear' }
  }
};

const squareVariant = (i: number) => ({
  initial: { opacity: 0.3 },
  enter: {
    opacity: [0.3, 0.6, 0.3],
    backgroundColor: i === 12 ? 'rgba(0, 112, 243, 0.2)' : 'rgba(255, 255, 255, 0.05)',
    transition: {
      duration: squareTimings[i] ?? 3000,
      repeat: Infinity,
      delay: squareDelays[i] ?? 0
    }
  }
});

const nodeVariant = {
  initial: { scale: 1, opacity: 0.5 },
  enter: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2000, repeat: Infinity }
  }
};

const scanVariant = {
  initial: { top: '0%' },
  enter: {
    top: ['0%', '100%', '0%'],
    transition: { duration: 8000, repeat: Infinity, ease: 'linear' }
  }
};

const coreVariant = {
  initial: { scale: 1, opacity: 0.1 },
  enter: {
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: { duration: 4000, repeat: Infinity }
  }
};
</script>

<template>
  <section id="mindset" class="py-32 px-6">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-accent-green/10 border border-accent-green/20 mb-8">
          <div
            v-motion="pulseVariant"
            class="w-2 h-2 bg-accent-green rounded-full"
          />
          <span class="font-label text-[10px] tracking-widest text-accent-green uppercase flex items-center gap-2">
            {{ t('mindset.status') }}: {{ t('mindset.status_val') }}
            <div
              v-motion="rotateVariant"
            >
              <CheckCircle2 :size="10" />
            </div>
          </span>
        </div>

        <h2 class="font-headline text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {{ t('mindset.title') }}
        </h2>

        <div class="space-y-12">
          <div
            v-for="(principle, index) in principles"
            :key="principle.id"
            class="group"
          >
            <div class="flex items-start gap-6">
              <span class="font-headline text-2xl font-bold text-white/20 group-hover:text-accent-blue transition-colors">
                {{ principle.number }}
              </span>
              <div>
                <h3 class="font-headline text-2xl font-bold mb-4 tracking-tight">
                  {{ t(`mindset.item${index + 1}_title`) }}
                </h3>
                <p class="font-body text-white/60 leading-relaxed max-w-md">
                  {{ t(`mindset.item${index + 1}_desc`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative aspect-square glass rounded-[3rem] p-12 overflow-hidden">
        <div class="grid grid-cols-5 grid-rows-5 gap-4 h-full relative">
          <div
            v-for="(_, i) in gridSquares"
            :key="i"
            v-motion="squareVariant(i)"
            class="relative rounded-xl border border-white/5 flex items-center justify-center overflow-hidden"
          >
            <div class="absolute inset-x-2 top-1/4 h-[1px] bg-white/10" />
            <div class="absolute inset-x-4 top-1/2 h-[1px] bg-white/10" />
            <div class="absolute inset-x-3 top-3/4 h-[1px] bg-white/10" />
            
            <div
              v-if="nodeIndices.has(i)"
              v-motion="nodeVariant"
              :class="`w-1.5 h-1.5 rounded-full ${i === 12 ? 'bg-accent-blue shadow-[0_0_15px_rgba(0,112,243,0.5)]' : 'bg-white/20'}`"
            />
          </div>

          <div
            v-motion="scanVariant"
            class="absolute left-0 right-0 h-[2px] bg-accent-blue/30 blur-[2px] z-10"
          />
        </div>

        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            v-motion="coreVariant"
            class="w-64 h-64 bg-accent-blue rounded-full blur-[80px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
