<script setup>
import { RouterLink as Link, useRoute } from "vue-router";
import NavLink from "./NavLink.vue";
</script>

<template>
  <header>
    <div class="container">
      <Link id="logo" to="/">
        <i class="bi bi-plus-circle-dotted"></i>
        Aasandha
      </Link>

      <ul>
        <li><NavLink to="/patients">Patients</NavLink></li>
        <li><NavLink to="/addresses">Addresses</NavLink></li>
        <li><NavLink to="/islands">Islands</NavLink></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  padding-block: 0.7rem;
  background: var(--color-primary);
}

header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  text-decoration: none;
  color: var(--color-light);
  font-size: var(--text-md);
  font-weight: 600;
  display: flex;
  gap: 0.3rem;
}

ul {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>
