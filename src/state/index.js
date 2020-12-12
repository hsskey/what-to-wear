import { selector } from 'recoil';

export const weatherData = selector({
    key: 'weatherData',
    get: async () => {
        const cityName = 'Seoul';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process?.env?.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();

        return data;
    }
});
