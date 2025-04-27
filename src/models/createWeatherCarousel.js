import { getWeatherData } from "./fetchWeather";

export async function createWeatherCarousel() {
    const weatherData = await getWeatherData();
    const emblaSection = document.querySelector('.embla');
    emblaSection.innerHTML = '';
    const emblaViewport = document.createElement('div');
    emblaViewport.classList.add('embla__viewport');
    const emblaContainer = document.createElement('div');
    emblaContainer.classList.add('embla__container');

    for (let i=0; i<7;i++){
        const dayWeatherData = weatherData.days[i];
        const emblaSlide = document.createElement('div');
        emblaSlide.classList.add('embla__slide', getClassFromConditions(dayWeatherData.conditions));
        const emblaSlideNumber = document.createElement('div');
        emblaSlideNumber.classList.add('embla__slide__number');
        const weatherData = document.createElement('div');
        /**
         * nepieciešams pabeigt veidot veidot weather data divu
         * pēc tam ir arī jāpievieno embla_vieport blokam embla_controls bloks!!
         */

    }


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