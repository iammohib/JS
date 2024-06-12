const apiKey = "82fa57333ebe255c96daa127c7707648";
const city = document.getElementById("city");

// Get element
const place = document.getElementById("place");
const dateTime = document.getElementById("dateTime");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");
const pressure = document.getElementById("pressure");
const country = document.getElementById("country");
const timezone = document.getElementById("timezone");
const visibility = document.getElementById("visibility");
const weather = document.getElementById("weather");
const windSpeed = document.getElementById("windSpeed");

let cityName = "Delhi";

city.addEventListener("keyup", (e) => {
  if (e.keyCode == 13 && city.value.trim() != "") {
    cityName = city.value;
    fetchWeatherData();
    city.value = "";
  }
});

//get country full name by country code
const getCountryByCode = (code) => {
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  return regionNamesInEnglish.of(code);
};

// format date and time
const formatDate = (curDate) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(curDate);
};
const fetchWeatherData = async () => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    const res = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    // console.log(res);

    if (res.status == 404) {
      return alert(res.statusText);
    }

    const data = await res.json();
    // console.log(data);

    place.innerText = data.name;
    dateTime.innerText = formatDate(data.dt * 1000);
    sunrise.innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset.innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    temp.innerHTML = (data.main.temp - 273.15).toFixed(2) + `&deg; C`;
    feelsLike.innerHTML =
      (data.main.feels_like - 273.15).toFixed(2) + `&deg; C`;
    tempMax.innerHTML = (data.main.temp_max - 273.15).toFixed(2) + `&deg; C`;
    tempMin.innerHTML = (data.main.temp_min - 273.15).toFixed(2) + `&deg; C`;
    humidity.innerText = data.main.humidity + "%";
    pressure.innerHTML = `${data.main.pressure} hPa`;
    country.innerText = getCountryByCode(data.sys.country);
    timezone.innerHTML = new Date(data.timezone).toLocaleTimeString();
    visibility.innerText = data.visibility;
    weather.innerText = data.weather[0].main;
    windSpeed.innerHTML = `${data.wind.speed} km/h`;
  } catch (error) {
    console.log(error);
  }
};
fetchWeatherData();
