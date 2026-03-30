<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

const { t } = useI18n();

const projects = [
  {
    id: 'project1',
    image: 'https://picsum.photos/seed/tech1/1200/800',
    tags: ['SaaS', 'React', 'Node.js']
  },
  {
    id: 'project2',
    image: 'https://picsum.photos/seed/tech2/1200/800',
    tags: ['Automation', 'n8n', 'Python']
  }
];
</script>

<template>
  <section id="projects" class="py-32 px-6 bg-white/[0.02]">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {{ t('showcase.title') }}
          </h2>
          <p class="font-body text-lg text-white/60 leading-relaxed">
            {{ t('showcase.description') }}
          </p>
        </div>
        <a href="#" class="font-label text-xs tracking-widest text-primary-white/60 hover:text-primary-white transition-colors uppercase flex items-center gap-2 group">
          {{ t('showcase.view_archive') }}
          <ArrowUpRight :size="14" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :transition="{ duration: 600, delay: index * 100 }"
          class="group cursor-pointer"
        >
          <div class="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 glass">
            <img
              :src="project.image"
              :alt="t(`showcase.${project.id}.title`)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
              referrer-policy="no-referrer"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            
            <div class="absolute top-6 left-6 flex gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 rounded-full glass text-[10px] font-label text-white/80 uppercase tracking-wider"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-headline text-3xl font-bold mb-4 tracking-tight group-hover:text-accent-blue transition-colors">
                {{ t(`showcase.${project.id}.title`) }}
              </h3>
              <p class="font-body text-white/60 leading-relaxed max-w-md">
                {{ t(`showcase.${project.id}.description`) }}
              </p>
            </div>
            <div class="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-bg transition-all">
              <ArrowUpRight :size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
