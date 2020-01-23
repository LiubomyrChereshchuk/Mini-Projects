/**
 * Weather app v 1.0
 * made by Lub4ikChe
 */

//all needed vars
const btnGo = document.querySelector('.go');
let inputtedCityName = '';
let cityName = document.querySelector('.city-name');
let temp = document.querySelector('.temp');
let tempFeelLike = document.querySelector('.temp__fell__like');
let wind = document.querySelector('.wind');
let visibility = document.querySelector('.visibility');
let divImage = document.querySelector('.image');

btnGo.onclick = () => {
    // city name
    inputtedCityName = document.querySelector('input').value;
    
    // response
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputtedCityName}&appid=( secret :) ) `)
        .then(function (resp) {
            return resp.json(); //data
        })
        .then(function (data) {
        
            if (data.message == 'city not found') {
                document.querySelector('input').value = '';
                alert("city not found");
            }
        
            else {
                                      //name of the city
                cityName.innerHTML = `Назва міста:<br>${data.name}`;
                                   //temperature
                temp.innerHTML = `Температура:<br>${Math.round(data.main.temp - 273)}&deg;`;
                                        //fell like
                tempFeelLike.innerHTML = `Відчувається як:<br>${Math.round(data.main.feels_like - 273)}&deg;`;
                                        //img that describes current weather
                divImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                                    //speed of wind
                wind.innerHTML = `Швидкість вітру:<br>${data.wind['speed']}`;
                                        //visibility
                visibility.innerHTML = `Видимість<br>${data.visibility}`;
            }
        })
        .catch(function (e) {
         // cathc any errors
            console.log(e);
        });

}

