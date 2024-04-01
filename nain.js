
// https://api.weather.gov/points/{latitude},{longitude}
// https://api.weather.gov/points/25.761681,-80.191788
// La latitud de Miami, Florida, es 25.761681 y la longitud es -80.191788
// https://api.weather.gov/zones/forecast/FLZ173

async function start(){
    
    const watherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast");
    const watherData = await watherPromise.json();
    document.querySelector("temperature-output").textContent = ourTemperature;

    
}
start()
