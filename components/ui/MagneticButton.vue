<script setup lang="ts">
const props = defineProps<{
  className?: string;
}>();

const buttonRef = ref<HTMLElement | null>(null);
const position = reactive({ x: 0, y: 0 });

const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value) return;
  const { clientX, clientY } = e;
  const { left, top, width, height } = buttonRef.value.getBoundingClientRect();
  const x = clientX - (left + width / 2);
  const y = clientY - (top + height / 2);
  position.x = x * 0.3;
  position.y = y * 0.3;
};

const handleMouseLeave = () => {
  position.x = 0;
  position.y = 0;
};
</script>

<template>
  <div
    ref="buttonRef"
    v-motion
    :initial="{ x: 0, y: 0 }"
    :enter="{ x: 0, y: 0 }"
    :animate="{ x: position.x, y: position.y }"
    :transition="{ duration: 300, type: 'spring', stiffness: 150, damping: 15 }"
    class="magnetic-wrap"
    :class="className"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>
