<script setup lang="ts">
import { Code2, Cpu, Zap } from 'lucide-vue-next';

const { t } = useI18n();

const solutions = [
  {
    id: 'saas',
    icon: Code2,
    accent: 'accent-blue',
    label: 'SAAS DEVELOPMENT',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Cloud Native']
  },
  {
    id: 'automations',
    icon: Zap,
    accent: 'accent-green',
    label: 'INTELLIGENT AUTOMATION',
    tags: ['n8n', 'Python', 'AI Agents', 'Workflow Design']
  },
  {
    id: 'consulting',
    icon: Cpu,
    accent: 'accent-amber',
    label: 'ENGINEERING CONSULTANCY',
    tags: ['Architecture', 'Scalability', 'Tech Strategy', 'Code Audit']
  }
];
</script>

<template>
  <section id="solutions" class="py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {{ t('solutions.title') }}
          </h2>
          <p class="font-body text-lg text-white/60 leading-relaxed">
            {{ t('solutions.description') }}
          </p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-12 h-[1px] bg-white/20" />
          <span class="font-label text-[10px] tracking-widest text-white/40 uppercase">
            {{ t('solutions.available') }}
          </span>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(solution, index) in solutions"
          :key="solution.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :transition="{ duration: 600, delay: index * 100 }"
          class="group relative glass glass-hover p-10 rounded-[2rem] flex flex-col h-full overflow-hidden"
        >
          <div :class="`absolute -top-20 -right-20 w-40 h-40 bg-${solution.accent}/10 rounded-full blur-[60px] group-hover:bg-${solution.accent}/20 transition-all duration-500`" />
          
          <div :class="`w-14 h-14 rounded-2xl bg-${solution.accent}/10 flex items-center justify-center mb-8 border border-${solution.accent}/20`" >
            <component :is="solution.icon" :class="`text-${solution.accent}`" :size="28" />
          </div>

          <div class="mb-4">
            <span :class="`font-label text-[10px] tracking-widest text-${solution.accent} uppercase font-bold`" >
              {{ solution.label }}
            </span>
          </div>

          <h3 class="font-headline text-2xl font-bold mb-4 tracking-tight">
            {{ t(`solutions.${solution.id}.title`) }}
          </h3>
          
          <p class="font-body text-white/60 mb-10 leading-relaxed flex-grow">
            {{ t(`solutions.${solution.id}.description`) }}
          </p>

          <div class="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            <span
              v-for="tag in solution.tags"
              :key="tag"
              class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-label text-white/40 uppercase tracking-wider"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
