let weatherData, userInput;

const $temp= $('#temp')
const $feels_like = $('#feels_like')
const $humidity = $('#humidity')
const $input = $('input[type="text"]')


$('form').on('submit', handleGetData);


function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
$.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=b7819fb3ac46283d9eac8fba5a615b18&units=imperial`


}).then(
  (data) => {(console.log(data))
   weatherData = data;
   render();
  },
  (error) => {
   console.log('bad request: ', error);
  }
)
}

function render() {
    $temp.text(weatherData.main.temp)
    $feels_like.text(weatherData.main.feels_like)
    $humidity.text(weatherData.main.humidity)
}

// const convert = function(k) {
//     let f = (k - 273.15)*1.8 + 32;
//     return `${f.toFixed(2)}`;
// }

// const convert = function(k) {
//     let f = (k - 273.15)*1.8 + 32;
//     return f.toFixed(2);
// }

// b7819fb3ac46283d9eac8fba5a615b18

