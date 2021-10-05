<template>
  <div class="home">
    <span class="title">Este sitio fue temporalmente suspendido</span>
    <!-- <NavBar></NavBar>
    <Dash></Dash>
    <Footer></Footer> -->
  </div>
</template>

<script>

/* import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Dash from "../components/Dash"; */

export default {
  name: 'Home',
  components: {
    /* NavBar,
    Dash,
    Footer */
  }
}
</script>

<style>

.home {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}

.title {
  height: 4vw;
  width: auto;
  display: block;
  font-family: muli_black;
  color: #fff;
  font-size: 2.5vw;
  padding: 0;
  margin: 0 auto;

}

@media only screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait){
  .home {
    height: 88vh;
  }
}

</style>
