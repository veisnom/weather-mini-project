const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat'];

function apiRequest() {

    let city = document.querySelector('.weather__input').value;
    if (!city) {
        city = 'Kyiv';
    }
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=598ca2f631188c90558218805d799042`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.forecast-weather__city-name').textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector('.forecast-weather__temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.forecast-weather__state').textContent = data.weather[0]['description'];
            document.querySelector('.forecast-weather__image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.forecast-weather__wind').innerHTML = data.wind.speed + ' m/sec';

            let myDate = new Date(date.dt * 1000);

            let day = days[myDate.getDay()];
            let date = myDate.getDay();
            let month = myDate.getMonth() + 1;

            document.querySelector('.top-line__day').textContent = day;
            document.querySelector('.top-line__date').textContent = `${date}/${month}`;
        })
        .catch(function () {
            // catch any errors
        })
};


apiRequest();
document.querySelector('.weather__get-button').onclick = apiRequest;
