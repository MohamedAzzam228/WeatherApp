// console.log("1")
// console.log("2")
// console.log(alert("1"))
// console.log("4")

// let api = fetch("https://jsonplaceholder.typicode.com/users").then((response) => 
//     response.json()
// ).then((data)=> console.log(data[0].email));

const searchBtn = document.querySelector("buttton");
const searchBox = document.querySelector("input");

async function checkWeather(city) {
    // console.log(city);
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=` +
         city + 
         "&appid=f112ffd524d1f7938ad75467818c715f"
        );
     const data = await response.json();
     console.log(data);
     document.querySelector(".country").innerHTML = "Country:" + data.sys.country;
     document.querySelector(".city").innerHTML ="City:" + data.name;
     document.querySelector(".temp").innerHTML ="Temp:" + Math.round(data.main.temp) + "<sup>o</sup>C";
     document.querySelector(".speed").innerHTML ="speed:" + Math.floor(data.wind.speed) + 
}
  



searchBtn.addEventListener("click", () => {
     checkWeather(searchBox.value)
     });
