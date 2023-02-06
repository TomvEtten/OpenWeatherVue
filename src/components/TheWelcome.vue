<script setup lang="ts">
  import AddCityForm from "./AddCityForm.vue";
  import IconSun from "./icons/IconSun.vue";
  import IconRain from "./icons/IconRain.vue";
  import { useCitiesStore } from "@/stores/citys";
  import Card from "./Card.vue";
  const store = useCitiesStore();
  //geocoding.getLatLongFromCityName("Amsterdam");
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="col h3">Welcome to the weather application</h1>
      <AddCityForm/>
    </div>
    <div class="row">
      <div class="col" v-for="city in store.cities">
        <Card>
          <template #title>
            {{ city.name }}
          </template>
          <template #content>
            <IconSun/> {{ city.today }}
            <IconRain/> {{ city.tomorrow }}
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .col {
        padding-bottom: 1em;
    }
</style>
  