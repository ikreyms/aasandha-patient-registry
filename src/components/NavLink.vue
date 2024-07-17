<script setup>
import { RouterLink as Link } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "#",
  },
});
</script>
<template>
  <Link :to="to" exact-active-class="active">
    <slot />
  </Link>
</template>

<style scoped>
a {
  color: var(--color-light);
  text-decoration: none;
  font-size: var(--text-base);
  display: block;
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  padding-bottom: 0.4rem;
  border-radius: 0.3rem;
  transition: background-color 0.6s;
  font-weight: 500;
}

a:hover {
  background-color: var(--color-primary-darker);
}

.active {
  background-color: var(--color-primary-dark);
}
</style>
