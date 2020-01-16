const btnGo = document.querySelector('.go');
let inputtedCityName = '';
let cityName = document.querySelector('.city-name');
let temp = document.querySelector('.temp');
let tempFeelLike = document.querySelector('.temp__fell__like');
let wind = document.querySelector('.wind');
let visibility = document.querySelector('.visibility');
let divImage = document.querySelector('.image');

btnGo.onclick = () => {
    inputtedCityName = document.querySelector('input').value;
    console.log(inputtedCityName);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputtedCityName}&appid=9d7ea6f1e3843ea43e6b631fe2e0ea20`)
        .then(function (resp) {
            return resp.json(); //data
        })
        .then(function (data) {
            if (data.message == 'city not found') {
                document.querySelector('input').value = '';
                alert("city not found");
            }
            else {
                console.log(data);
                cityName.innerHTML = `Назва міста:<br>${data.name}`;
                temp.innerHTML = `Температура:<br>${Math.round(data.main.temp - 273)}&deg;`;
                tempFeelLike.innerHTML = `Відчувається як:<br>${Math.round(data.main.feels_like - 273)}&deg;`;
                divImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                wind.innerHTML = `Швидкість вітру:<br>${data.wind['speed']}`;
                visibility.innerHTML = `Видимість<br>${data.visibility}`;
                // document.querySelector('input').value = '';
               

            }
        })
        .catch(function (e) {
         
            console.log(e);
        });

}

