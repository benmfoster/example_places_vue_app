<template>
  <div class="places-show">

    <h2>{{ place.name }}</h2>
    <p>Address: {{ place.address }}</p>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/places/' + place.id + '/edit'">Edit</router-link>
    </button>

    <button class="btn btn-danger" v-on:click="destroyPlace(place)">Destroy</button>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      place: {}
    };
  },
  created: function() {
    axios.get("/api/places/" + this.$route.params.id).then(response => {
      this.place = response.data;
      console.log(this.place);
    });
  },
  methods: {
    destroyPlace: function(place) {
  		// send an axios delete request to the backend to remove place from database
  		axios.delete("/api/places/" + place.id).then(response => {
  			console.log("Success!", response.data);
  			// find index of place in places array
  			var index = this.places.indexOf(place);
  			// splice places array at index
  			this.places.splice(index, 1);
  		});
  	}
  }
};
</script>