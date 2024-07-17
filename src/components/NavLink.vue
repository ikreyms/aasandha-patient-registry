<script setup>
import { ref } from "vue";
import { RouterLink as Link, useRoute } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "#",
  },
  linkText: {
    type: String,
    default: "NavLink",
  },
});

const route = useRoute();
console.log(route.path);
</script>
<template>
  <Link :to="to">
    {{ linkText }}
  </Link>
</template>

<style scoped>
a {
  color: var(--color-light);
  text-decoration: none;
  font-size: var(--text-base);
  display: block;
  padding-inline: 0.5rem;
  padding-block: 0.25rem;
  border-radius: 0.3rem;
  transition: background-color 0.6s;
  font-weight: 600;
}

a:hover {
  background-color: var(--color-primary-dark);
}

.active {
  background-color: var(--color-primary-light);
}
</style>
