<template>
  <div>
    <h3>Back office header</h3>
    <ul>
      <li><router-link :to="{name: 'home'}" >Home</router-link></li>
      <li><router-link :to="{name: 'user'}" >User</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>


