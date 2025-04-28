import { getWeatherData } from "./fetchWeather";

export async function createWeatherCarousel(address) {
    const weatherDataObj = await getWeatherData(address);
    const emblaSection = document.querySelector('.embla');
    emblaSection.innerHTML = '';
    const emblaViewport = document.createElement('div');
    emblaViewport.classList.add('embla__viewport');
    const emblaContainer = document.createElement('div');
    emblaContainer.classList.add('embla__container');

    for (let i=0; i<7;i++){
        const dayWeatherData = weatherDataObj.days[i];
        const emblaSlide = document.createElement('div');
        emblaSlide.classList.add('embla__slide', getClassFromConditions(dayWeatherData.conditions));
        const emblaSlideNumber = document.createElement('div');
        emblaSlideNumber.classList.add('embla__slide__number');
        const weatherData = document.createElement('div');
        weatherData.classList.add('weatherData');
        const dateDiv = document.createElement('div');
        const dateP = document.createElement('div');
        const dateS = document.createElement('div');
        const descDiv = document.createElement('div');
        const descP = document.createElement('div');
        const descS = document.createElement('div');
        const tempMinDiv = document.createElement('div');
        const tempMinP = document.createElement('div');
        const tempMinS = document.createElement('div');
        const tempMaxDiv = document.createElement('div');
        const tempMaxP = document.createElement('div');
        const tempMaxS = document.createElement('div');
        const sunriseDiv = document.createElement('div');
        const sunriseP = document.createElement('div');
        const sunriseS = document.createElement('div');
        const sunsetDiv = document.createElement('div');
        const sunsetP = document.createElement('div');
        const sunsetS = document.createElement('div');

        dateP.textContent = 'Datums:';
        dateS.textContent = dayWeatherData.datetime;
        descP.textContent = 'Dienas apraksts:';
        descS.textContent = dayWeatherData.description;
        tempMinP.textContent = 'Temperatura min:';
        tempMinS.textContent = dayWeatherData.tempmin;
        tempMaxP.textContent = 'Temperatura max';
        tempMaxS.textContent = dayWeatherData.tempmax;
        sunriseP.textContent = 'Saullekts:';
        sunriseS.textContent = dayWeatherData.sunrise;
        sunsetP.textContent = 'Saulriets:';
        sunsetS.textContent = dayWeatherData.sunset;

        dateDiv.append(dateP, dateS);
        descDiv.append(descP, descS);
        tempMinDiv.append(tempMinP, tempMinS);
        tempMaxDiv.append(tempMaxP, tempMaxS);
        sunriseDiv.append(sunriseP, sunriseS);
        sunsetDiv.append(sunsetP, sunsetS);

        weatherData.append(dateDiv, descDiv, tempMinDiv, tempMaxDiv, sunriseDiv, sunsetDiv);
        emblaSlideNumber.append(weatherData);
        emblaSlide.append(emblaSlideNumber);
        emblaContainer.append(emblaSlide);
    }

    emblaViewport.append(emblaContainer);



    const emblaControls = document.createElement('div');
    emblaControls.classList.add('embla__controls');
    const emblaButtons = document.createElement('div');
    emblaButtons.classList.add('embla__buttons');
    const emblaButtonPrev = document.createElement('button');
    emblaButtonPrev.classList.add('embla__button', 'embla__button--prev');
    emblaButtonPrev.type = 'button';
    const emblaButtonPrevSvg = document.createElement('svg');
    emblaButtonPrevSvg.setAttribute('viewBox', '0 0 532 532');
    emblaButtonPrevSvg.classList.add('embla__button__svg');
    const emblaButtonPrevPath = document.createElement('path');
    emblaButtonPrevPath.setAttribute('fill', 'currentColor');
    emblaButtonPrevPath.setAttribute('d', 'M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z');

    emblaButtonPrevSvg.appendChild(emblaButtonPrevPath);
    emblaButtonPrev.appendChild(emblaButtonPrevSvg);

    const emblaButtonNext = document.createElement('button');
    emblaButtonNext.classList.add('embla__button', 'embla__button--next');
    emblaButtonNext.type = 'button';
    const emblaButtonNextSvg = document.createElement('svg');
    emblaButtonNextSvg.setAttribute('viewBox', '0 0 532 532');
    emblaButtonNextSvg.classList.add('embla__button__svg');
    const emblaButtonNextPath = document.createElement('path');
    emblaButtonNextPath.setAttribute('fill', 'green');
    emblaButtonNextPath.setAttribute('d', 'M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z');




    emblaButtonNextSvg.appendChild(emblaButtonNextPath);
    emblaButtonNext.appendChild(emblaButtonNextSvg);

    emblaButtons.append(emblaButtonPrev, emblaButtonNext);
    emblaControls.append(emblaButtons);

    emblaSection.append(emblaViewport, emblaControls);
}

/**
 * 
 * @param {*} conditions 
 * @returns klases nosaukumu balstoties uz prognozētajiem laikapstākļiem
 */
function getClassFromConditions(conditions) {
    const firstCondition = conditions.split(',')[0].trim().toLowerCase();

    const mapping = {
        'thunderstorm': 'thunderstorm',
        'lightning': 'thunderstorm',
        'heavy rain': 'hard_rain',
        'rain showers': 'hard_rain',
        'heavy drizzle': 'hard_rain',
        'rain': 'hard_rain',
        'heavy drizzle/rain': 'hard_rain',
        'light rain': 'light_rain',
        'drizzle': 'light_rain',
        'light drizzle': 'light_rain',
        'light drizzle/rain': 'light_rain',
        'partially cloudy': 'cloudy',
        'overcast': 'cloudy',
        'cloudy': 'cloudy',
        'fog': 'cloudy',
        'mist': 'cloudy',
        'smoke': 'cloudy',
        'clear': 'sunny'
    };

    let className = 'cloudy'; // Default fallback

    // Find a matching key
    for (const key in mapping) {
        if (firstCondition.includes(key)) {
            className = mapping[key];
            break;
        }
    }

    return className;
}