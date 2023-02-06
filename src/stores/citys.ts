import type { City } from "@/interfaces/cityInterface";
import { defineStore } from "pinia";

export const useCitiesStore = defineStore("cities", {
  state: () => {
    const defaultCity: City = {
      name: "Amstedam",
      today: 12,
      tomorrow: 13,
    };

    return { citys: [defaultCity] };
  },
  getters: {
    cities(state) {
      return state.citys;
    },
  },
  actions: {
    addCity(city: City) {
      this.citys.push(city);
    },
    removeCity(name: string) {
      if (this.citys.length == 1) {
        return;
      }
      this.citys = this.citys.filter((city) => city.name == name);
    },
  },
});
