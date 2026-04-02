<script setup lang="ts">
import { Send, Mail, Linkedin, Github } from 'lucide-vue-next';

const { t } = useI18n();

const form = ref({
  name: '',
  email: '',
  projectType: '',
  message: ''
});

const projectTypes = [
  { value: 'saas', label: 'SaaS Development' },
  { value: 'automations', label: 'Intelligent Automation' },
  { value: 'consulting', label: 'Engineering Consultancy' },
  { value: 'other', label: 'Other' }
];

const isSubmitting = ref(false);
const submitted = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  await new Promise(resolve => setTimeout(resolve, 1500));
  submitted.value = true;
  isSubmitting.value = false;
};

const resetForm = () => {
  submitted.value = false;
  form.value = { name: '', email: '', projectType: '', message: '' };
};
</script>

<template>
  <section id="contact" class="py-24 px-6 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />
    
    <div class="max-w-2xl mx-auto relative">
      <div class="text-center mb-16">
        <span class="font-label text-[10px] tracking-widest text-accent-blue uppercase font-bold mb-4 block">
          {{ t('contact.badge') }}
        </span>
        <h2 class="font-headline text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {{ t('contact.title') }}
        </h2>
        <p class="font-body text-white/50 leading-relaxed">
          {{ t('contact.description') }}
        </p>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :transition="{ duration: 500 }"
        class="glass p-8 md:p-10 rounded-3xl"
      >
        <form v-if="!submitted" @submit.prevent="submitForm" class="space-y-5">
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label for="name" class="font-label text-[10px] tracking-widest text-white/40 uppercase mb-2 block">
                {{ t('contact.form.name') }}
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all"
                :placeholder="t('contact.form.name_placeholder')"
              />
            </div>
            <div>
              <label for="email" class="font-label text-[10px] tracking-widest text-white/40 uppercase mb-2 block">
                {{ t('contact.form.email') }}
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all"
                :placeholder="t('contact.form.email_placeholder')"
              />
            </div>
          </div>

          <div>
            <label for="projectType" class="font-label text-[10px] tracking-widest text-white/40 uppercase mb-2 block">
              {{ t('contact.form.project_type') }}
            </label>
            <select
              id="projectType"
              v-model="form.projectType"
              required
              class="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 font-body text-sm text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all cursor-pointer appearance-none"
            >
              <option value="" disabled class="bg-bg">{{ t('contact.form.select_type') }}</option>
              <option 
                v-for="type in projectTypes" 
                :key="type.value" 
                :value="type.value"
                class="bg-bg"
              >
                {{ type.label }}
              </option>
            </select>
          </div>

          <div>
            <label for="message" class="font-label text-[10px] tracking-widest text-white/40 uppercase mb-2 block">
              {{ t('contact.form.message') }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all resize-none"
              :placeholder="t('contact.form.message_placeholder')"
            />
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 rounded-xl bg-accent-blue text-bg font-label text-xs tracking-widest uppercase font-bold hover:bg-accent-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
          >
            <span v-if="isSubmitting">{{ t('contact.form.sending') }}</span>
            <span v-else>{{ t('contact.form.send') }}</span>
            <Send v-if="!isSubmitting" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div v-else class="text-center py-8">
          <div class="w-14 h-14 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-5">
            <Send class="text-accent-green" :size="24" />
          </div>
          <h3 class="font-headline text-xl font-bold mb-3 tracking-tight">
            {{ t('contact.form.success_title') }}
          </h3>
          <p class="font-body text-sm text-white/50 mb-6">
            {{ t('contact.form.success_message') }}
          </p>
          <button
            @click="resetForm"
            class="px-5 py-2.5 rounded-xl border border-white/20 font-label text-xs tracking-widest uppercase hover:bg-white/5 transition-all"
          >
            {{ t('contact.form.send_another') }}
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center gap-6 mt-10">
        <a href="mailto:pedromorenotrenado@gmail.com" class="flex items-center gap-2 text-white/50 hover:text-accent-blue transition-colors">
          <Mail :size="16" />
          <span class="font-body text-sm">pedromorenotrenado@gmail.com</span>
        </a>
        <span class="text-white/20">•</span>
        <div class="flex items-center gap-3">
          <a href="https://github.com/pedromoreno-dev" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-accent-blue transition-colors" aria-label="GitHub">
            <Github :size="18" />
          </a>
          <a href="https://linkedin.com/in/pedromoreno-dev" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-accent-blue transition-colors" aria-label="LinkedIn">
            <Linkedin :size="18" />
          </a>
        </div>
      </div>

      <p class="text-center font-body text-xs text-white/30 mt-8">
        {{ t('contact.response_time') }}
      </p>
    </div>
  </section>
</template>
