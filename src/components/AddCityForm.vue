<script setup lang="ts">
  import { useCitiesStore } from "@/stores/citys";
  import { geocoding } from "@/api/Geocoding";
  import { openWeather } from "@/api/OpenWeather";
  import { reactive  } from "vue";
  import type { City } from "@/interfaces/cityInterface";
  interface Form {
    cityName: string,
    error: string
  }

  const form: Form = reactive({ 
    cityName: '',
    error: ''
  });

  async function addCity() {
    form.error = ''
    try {
    const latLong = await geocoding.getLatLongFromCityName(form.cityName);
    const weather = await openWeather.getWeatherForGivenLatLong(latLong);
    const cityStore = useCitiesStore();
    cityStore.addCity({
      name: form.cityName,
      today: weather.today.temp,
      tomorrow: weather.tomorrow.temp
    } as City)
  } catch (error) {
    form.error = 'Er is iets fout gegaan!';
  }
  }
</script>

<template>
    <div class="form-floating mb-3">
      <div class="form-group">
        <input type="text" class="form-control" id="cityInput" placeholder="Haarlem" v-model="form.cityName" v-on:keyup.enter="addCity">
        <label for="cityInput">Enter your city here</label>
        <p v-if=form.error> {{ form.error }} </p>
      </div>    
        <button class="btn btn-primary" v-on:click="addCity">Submit</button>
    </div>
</template>