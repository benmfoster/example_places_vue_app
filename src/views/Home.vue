<template>
  <div class="home">

    <h1>{{ message }}</h1>

    <div v-for="place in places">
    	<h3>Name: {{ place.name }}</h3>
      <router-link v-bind:to="'/places/' + place.id">
    	  Show more
      </router-link>
    	<div>
    		<button class="btn btn-success" v-on:click="showPlace(place)">More Info</button>
    	</div>
    	</div>
    </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Places",
      places: [],
      currentPlace: {},
      errors: []
    };
  },
  created: function() {
  	axios.get("/api/places").then(response => {
  		this.places = response.data;
      console.log(this.places);
  	});
  },
  methods: {
  	showPlace: function(place) {
  		if (this.currentPlace === place) {
  			this.currentPlace = null;
  		} else {
				this.currentPlace = place;
  		}
  	},
  }
};
</script>