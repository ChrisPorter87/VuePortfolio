<template>
  <div class="row bg-light">
    <div class="col-auto">
      <h1>
        Welcome to Chris Porter's Vue<img src="./assets/logo.png" />portfolio
        <font-awesome-icon icon="fa-solid fa-user-secret" size="xl" />
      </h1>

      <NavBar />
    </div>
  </div>
  <Footer />
  <!-- <div class="fixed-bottom col-auto">
    <p class="col-auto">
      <a
        href="https://github.com/ChrisPorter87"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub profile
      </a>
    </p>

    <address>
      <a href="mailto:cap8095@gmail.com">My Email address</a>
    </address>
    <p>&copy; 2022 Vue Portfolio. All rights reserved.</p>
  </div> -->
</template>

<script>
import NavBar from "./components/nav";
// eslint-disable-next-line
import Footer from "./components/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: block;
}
img {
  height: 50px;
  width: 50px;
}
</style>
