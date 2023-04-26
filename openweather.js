function openweather(cityName, country) {
  const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=${api_key}&units=metric`;

  fetch(`${base_url}`)
    .then((respota) => {
      // console.log(respota);
      return respota.json();
    })
    .then((corpo) => {
      // console.log(corpo);
      //img

      imgId = corpo.weather[0].icon;
      const img_url = `https://openweathermap.org/img/wn/${imgId}@2x.png`;
      document.getElementById("icon-weather").setAttribute("src", `${img_url}`);
      // temperature;
      temp = document.getElementById("temp").innerHTML =
        Math.round(corpo.main.temp) + "ºC";
      // Feels like
      feels_like = document.getElementById("feels_like").innerHTML =
        "Feels like " + Math.round(corpo.main.feels_like) + "ºC";
      // description
      description = document.getElementById("description").innerHTML =
        corpo.weather[0].description;
      // temp max
      temp_max = document.getElementById("temp_max").innerHTML =
        "Max " + Math.round(corpo.main.temp_max) + "ºC";
      // temp min
      temp_min = document.getElementById("temp_min").innerHTML =
        "Min " + Math.round(corpo.main.temp_min) + "ºC";
    });
}
