import { use, useEffect, useState } from "react";

const Weather = () => {
  //openweather사이트에서 API 따옴
  const API_KEY = "a979a13bc0bd210878acc69bd4984cba"
  const [weather,setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //MDN사이트에서 사용법 참고
  useEffect(()=>{
    if( !navigator.geolocation ){
      setError("위치 정보를 지원하지 않는 브라우저입니다.")
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude} = position.coords;
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
      // console.log(URL);
      //fetch API : 브라우저 내장 함수. 외부에 요청을 보내고fetch, 응답을 받을 수 있음then.
      //응답then을 json으로 변환하여 data로 전달
      fetch(URL)
      .then((res)=>{ 
        if( !res.ok ){
          setError("데이터 요청 실패");
        }
        return res.json();
      }) .then((data)=>{
        console.log(data);
        setWeather(data);
        setLoading(false);
      })
      .catch((err)=>{
        setError("날씨 데이터를 불러오는데 실패했습니다");
        setLoading(false);
      });
    });
    // console.log(weather);
  },[]);
  return (
    <div className="weather">
      {
        weather && (
          <>
          <div className="weatherInfo">
          <h3>{weather.name}</h3>
          <h3>{(weather.main.temp.toFixed(1))}°C</h3>
          <h3>{weather.weather[0].description}</h3>
          </div>
         <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} /> 
         </>
        )
      }
    </div>
  );
};

export default Weather;