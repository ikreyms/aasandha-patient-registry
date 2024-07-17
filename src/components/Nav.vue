<script setup>
import { RouterLink as Link } from "vue-router";
import NavLink from "./NavLink.vue";
</script>

<template>
  <header>
    <div class="container">
      <Link id="logo" to="/">Aasandha</Link>

      <ul>
        <li><NavLink to="/patients" linkText="Patients" /></li>
        <li><NavLink to="/addresses" linkText="Addresses" /></li>
        <li><NavLink to="/islands" linkText="Islands" /></li>
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
}

ul {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>
