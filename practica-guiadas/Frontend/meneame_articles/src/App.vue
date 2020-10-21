<template>
  <div>
    <MainNav />
    <router-view></router-view>
    <Footer />
  </div>
</template>



<script>
import MainNav from './components/MainNav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

export default {
  name: 'App',
  components: {
    MainNav,
    HomePage,
    Footer
  }
}
</script>

<style>

</style>
