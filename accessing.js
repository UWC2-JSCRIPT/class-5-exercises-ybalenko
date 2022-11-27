// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headE = document.getElementById('weather-head')
headE.innerText = 'February 10 Weather Forecast, Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"

const sunE = document.querySelectorAll('.sun')
sunE.forEach((e) => e.style.color = 'orange');



// Change the class of the second <li> from to "sun" to "cloudy"

const sunEl = document.querySelectorAll('.sun');
sunEl[0].className = 'cloudy';



