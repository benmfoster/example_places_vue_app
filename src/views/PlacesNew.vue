<template>
  <div class="places-new">

    <h1>New Place</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="New York City" v-model="newPlaceName">
        </div>
        <div class="form-group col-md-6">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" placeholder="South of Montreal" v-model="newPlaceAddress">
        </div>
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newPlaceName: "",
      newPlaceAddress: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
  	submit: function() {
  		// make a post request via axios to create a new place in our database!
  		var params = {
  			name: this.newPlaceName,
  			address: this.newPlaceAddress
  		};
  		axios.post("/api/places", params).then(response => {
  			this.$router.push("/");
  		}).catch(error => {
        this.errors = error.response.data.errors;
      });
  	}
  }
};
</script>