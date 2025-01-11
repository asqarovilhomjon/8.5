import { MdSunny } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";

export default async function Home() {
  const data = await fetch(
    'https://api.weatherapi.com/v1/forecast.json?key=c3a6dc4386cc49e7ba0155411242212&q=samarkand&days=14&aqi=yes&alerts=yes'
  );
  const posts = await data.json();
  const currentWeather = posts?.current;
  const location = posts?.location;
  const forecast = posts?.forecast.forecastday;
  return (
    <div className="w-full">
      <div className="container mx-auto text-white">
        <div
          className="flex justify-center items-center h-[90vh] flex-col gap-6"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
        >
          <div className="w-[400px] h-[300px] bg-opacity-35 rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="font-semibold text-[18px]">{location.name}, {location.country}</h2>
            <div className="flex">
              <MdSunny className="text-4xl text-yellow-500 mt-6" />
              <h1 className="text-8xl">{currentWeather.temp_c}°</h1>
            </div>
            <h2 className="font-semibold text-2xl">{currentWeather.condition.text}</h2>
            <p>{location.localtime}</p>
            <p className="mt-2 text-sm">Feels like: {currentWeather.feelslike_c}°</p>
            <p className="text-sm">Humidity: {currentWeather.humidity}%</p>
            <p className="text-sm">Wind: {currentWeather.wind_kph} kph</p>
          </div>
          <div className="flex gap-4 overflow-auto">
            {forecast.slice(0, 6).map((day) => (
              <div
                key={day.date}
                className="rounded-3xl bg-slate-500 bg-opacity-50 h-[250px] w-[280px] flex flex-col p-6 justify-center items-center"
              >
                <p className="font-semibold">{day.date}</p>
                <FaCloudSun className="text-white-400 text-8xl" />
                <h2 className="text-6xl">{day.day.avgtemp_c}°</h2>
                <p className="mt-2 text-sm">Condition: {day.day.condition.text}</p>
                <p className="text-sm">Max Temp: {day.day.maxtemp_c}°</p>
                <p className="text-sm">Min Temp: {day.day.mintemp_c}°</p>
                <p className="text-sm">Chance of Rain: {day.day.daily_chance_of_rain}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
