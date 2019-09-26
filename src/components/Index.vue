<template>
  <div class="hello">
      Index
      <li class="nav-item">
          <router-link class="nav-link" to="/pagen">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/services">Services</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">contact</router-link>
      </li>
  </div>
</template>
<script>
export default {
  name: 'Index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
