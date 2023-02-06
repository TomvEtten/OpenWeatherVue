interface dayWeather {
    temp: number,
    clouds: number
}

export interface Weather {
    readonly today: dayWeather
    readonly tomorrow: dayWeather;
  }
  