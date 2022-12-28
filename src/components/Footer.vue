<template>
  <!-- <footer class="container-fluid col-auto">
    <div class="fixed-bottom col-auto">
      <div class="row">
        <a
          href="https://github.com/ChrisPorter87"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub profile
        </a>
      </div>
      <div class="col">
        <address>
          <a href="mailto:cap8095@gmail.com">My Email address</a>
        </address>
        <p>&copy; 2022 Vue Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer> -->
  <footer class="footer">
    <div class="container-fluid border fixed-bottom">
      <div class="row">
        <a
          href="https://github.com/ChrisPorter87"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-base"
        >
          My GitHub profile
        </a>
        <a href="mailto:cap8095@gmail.com">Email me!</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line
  name: "Footer",
  setup() {},
});
</script>
