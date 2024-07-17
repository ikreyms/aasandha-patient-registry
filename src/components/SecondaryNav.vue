<script setup>
import { RouterLink as Link } from "vue-router";

defineProps({
  backTo: {
    type: String,
    default: "/",
  },
});
</script>
<template>
  <div>
    <div id="wrapper" class="container">
      <Link :to="backTo">
        <i class="bi bi-arrow-left-circle"></i>
        <span>Back</span>
      </Link>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  padding-block: 1rem;
}

a {
  display: flex;
  gap: 0.5rem;
}
</style>
