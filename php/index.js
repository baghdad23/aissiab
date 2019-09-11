index.js
const URL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fb361c711d98a228a4f1436e9cb269e1"

const convertToCelcins = (temperatureEnKelvin)=> {
    return temperatureEnKelvin - 273.15;
}
 fetch(URL)
.then(reponse => reponse.json))
.then((data)=>{
    console.log(data);
});
