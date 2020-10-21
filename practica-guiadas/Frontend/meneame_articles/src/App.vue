<template>
  <div>
    <MainNav />
    <router-view></router-view>
  </div>
</template>



<script>
import MainNav from './components/MainNav'
import HomePage from './pages/HomePage'

export default {
  name: 'App',
  components: {
    MainNav,
    HomePage
  }
}
</script>

<style>

</style>
