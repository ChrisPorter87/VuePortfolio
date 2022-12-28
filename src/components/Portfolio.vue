<template>
  <div>
    <h3>Portfolio</h3>
  </div>
  <div class="row">
    <div class="col-auto">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-100" :src="bistro" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 h-100" :src="recipe" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <a href="https://ckoehler16.github.io/Cocktail-Generator/">
              <img class="d-block w-100 h-100" :src="flute" alt="Third slide"
            /></a>
          </div>
          <div class="carousel-item">
            <a href="https://chrisporter87.github.io/WeatherAssignment/">
              <img
                class="d-block w-100 h-100"
                :src="weather"
                alt="fourth slide"
            /></a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-portfolio",
  setup() {
    return {
      bistro: "../assets/bisto.jpg",
      flute: "../../pictures/flute.jpg",
      recipe: "../assets/recipepantry.png",
      weather: "../../pictures/3.jpg",
    };
  },
});
</script>
