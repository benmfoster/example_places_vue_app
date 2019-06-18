<template>
	<div class="places-edit">
		
		<h1>Edit Place</h1>

		<ul>
		  <li v-for="error in errors">{{ error }}</li>
		</ul>

		<form v-on:submit.prevent="submit()">
		  <div class="form-row">
		    <div class="form-group col-md-6">
		      <label for="name">Name</label>
		      <input type="text" class="form-control" id="name" placeholder="New York City" v-model="place.name">
		    </div>
		    <div class="form-group col-md-6">
		      <label for="address">Prep Time</label>
		      <input type="text" class="form-control" id="address" placeholder="South of Montreal" v-model="place.address">
		    </div>
		  </div>
		  <button type="submit" class="btn btn-warning">Update</button>
		</form>

	</div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
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
  	submit: function() {
  		// send a patch request to the backend to update this place!
  		var params = {
  			name: this.place.name,
  			address: this.place.address  			
  		};
  		axios.patch("/api/places/" + this.place.id, params).then(response => {
  			console.log("Success!", response.data);
  			this.$router.push("/places/" + this.place.id);
  		}).catch(error => {
  			this.errors = error.response.data.errors;
  		});
  	}
  }
};
</script>