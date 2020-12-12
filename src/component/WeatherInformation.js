import { useRecoilValue } from 'recoil';
import { format } from "date-fns";

import { weatherData } from '../state';
import SunnyIcon from "../resources/sunny.svg";
import { recommendCloth } from "../utils";

export default function WeatherInformation() {
    const today = format(new Date(), 'yyyy/MM/dd');
    const weather = useRecoilValue(weatherData);
    const currentTemp = parseInt(weather?.main?.temp, 10);
    const printCloth = recommendCloth(currentTemp);

    return (
        <div>
            <img src={SunnyIcon} className="App-logo" alt="logo" />
            <p>
                {today}
            </p>
            <p>현재 기온 {currentTemp}℃ 입니다. 오늘은 아래 의상을 추천드릴게요</p>
            <p>
                {printCloth}
            </p>
        </div>
    );
}
