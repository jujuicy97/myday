import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Time from "./components/Time";
import "./App.scss";
import MainPage from "./components/MainPage";
import Quote from "./components/Quote";
import Weather from "./components/Weather";
import Memo from "./components/Memo";

// import bgImg from './images/img-4.png'; 

const App = () => {
  const USER_KEY="user_name";
  const [user,setUser] = useState('');
  //처음에 시작하자 마자 user_name을 읽어와야 함
  useEffect(()=>{ //화면에 값들이 변경된 이후 
    const saved = localStorage.getItem(USER_KEY);  //저장시킨걸 가져와서 사용
    if( saved ){
      setUser(saved);
    }
  },[]);
  const handleLogin = (data)=>{
    localStorage.setItem(USER_KEY,data); //저장시킴
    setUser(data);
  } 
  const handleLogout = ()=>{
    localStorage.removeItem(USER_KEY);   //저장시킨걸 삭제
    setUser('');
  }

//인사말 함수 추가
  const getTime = ()=>{
    const hour = new Date().getHours();
    if( hour >= 5 && hour < 12) return {mainText : "좋은 아침입니다 ♥", bg: "bg-morning"};
    if( hour >= 12 && hour < 17) return {mainText : "좋은 점심입니다 ♥", bg: "bg-afternoon"};
    if( hour >= 17 && hour < 20) return {mainText : "좋은 저녁입니다 ♥", bg: "bg-evening"};
    return { mainText: "좋은 밤 보내세요🌙", bg: "bg-night"};
  };

  const timeInfo = getTime();

//light & dark 모드 추가
  //상태를 저장하는 useEffect 사용
    const [darkMode, setDarkMode] = useState(false);
  //조건 함수 삽입
    const change = ()=>{
    //초기 darkMode(false) = light모드일때
      if( darkMode ){
        setDarkMode(false);
      }else{
    //darkMode(true) = dark모드일때
        setDarkMode(true);
      }
    };


//오늘 날짜 추가(이전 파일 참고)
    const [today,setToday] = useState("");
    useEffect(()=>{
      const today = new Date();  
      const year = today.getFullYear(); //년
      const month = today.getMonth()+1; //월(get.month는 0부터 시작)
      const day = today.getDate();      //일
      const week = ["일", "월", "화", "수", "목", "금", "토"];
      const dayOfWeek = week[today.getDay()];
      setToday(`${year}. ${month}. ${day}. ${dayOfWeek}`);
    },[]);

  return (
    // <div className={`app ${timeInfo.bg} ${darkMode ? 'darkMode' : 'lightMode'}`}>
    <div className={`app ${darkMode ? 'darkMode' : `${timeInfo.bg} lightMode`}`}>
{/* scss에서 추가하는게 제일 간편 */}
{/* 사진 넣는 방법 1 */}
      {/* <img src="./images/quiz-img1.png" alt="이미지1"/> */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/quiz-img1.png`} alt="이미지1" /> */}
{/* 사진 넣는 방법 2 (import) */}
      {/* <img src={bgImg} alt="이미지2"/> */}
      
      <div className="underBar">
        <button onClick={change} className="modeBtn">
          {darkMode ? '🌙' : '🌞'}
        </button>
        <div className="today">{today}</div>
        <Time />
      </div>
      <hr />
      <div className="center">
      {user ? (
          <>
        <Quote />
        <div className="main-weather"> 
          <MainPage user={user} onLogout={handleLogout} onTime={timeInfo.mainText}/>
          <Weather />    
        </div>
{/* (예정)메모 들어갈 자리!! */}
        <div className="memoBox">
          <Memo />
        </div>

        </>
        ) : (
          <LoginForm onLogin={handleLogin}/>
        )
      }
      </div>
      <footer>ⓒ 2025 jujuicy97. All right reserved.</footer>
    </div>
  );
};
export default App;