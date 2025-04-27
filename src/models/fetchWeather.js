import { responseObj as response }  from "./response";
export async function getWeatherData(){
    // const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lokomotives%20iela%2034/next7days/next15days?unitGroup=metric&key=9GWHNNZ3R86XP9D3V2MW5QHVE&contentType=json');
    // const data = await response.json();
    console.log(response);
    return response;
}