<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'

const menuItems = ref([{
  "id": 1,
  "path": "/",
  "label": "首页"
},
{
  "id": 2,
  "path": "/enterprise_verify",
  "label": "企业登记信息填报与核对"
},
{"id": 3,
"path": "repair_msg",
  "label": "维修记录采集"
},])

</script>

<template>
  <div class="container">
    <nav>
      <RouterLink v-for="item  in menuItems" :to="item.path">{{ item.label }}</RouterLink>
    </nav>
    <div id="main_body">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
  max-height: 100vh;
}

.container {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: calc(100vh - 60px);
}

.container nav {
  height: 60px;
}

.container nav RouterLink {
  font-size: 24px;
}

nav {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  text-align: left;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.container #main_body {
  width: 100%;
  height: 100%;
  border: 1px solid green;
}

</style>
