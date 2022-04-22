<template>
  <NavBar :logo='state.logo_src' :alt='state.app_name'/>
  <router-view/>
  <Footer />
</template>

<script>
import { reactive } from '@vue/reactivity'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

  export default {
    components:{
      NavBar,
      Footer
    },
    setup() {
      const state = reactive({
          logo_src: "/img/logo.png",
          app_name: 'Make your Burger'

      })

      return{
        state
      }
      
    }
}
</script>

<style>
  *{
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main-container{
    margin: 50px;
    min-height: 250px;
  }
  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
