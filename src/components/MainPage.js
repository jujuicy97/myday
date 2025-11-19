import { useEffect, useState } from "react";
// import Quote from "./Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const MainPage = ({user,onLogout,onTime}) => {
  const TODOS_KEY ="todos";
  const [todos,setTodos] = useState([]);
  //처음 localstorage에 저장된 값이 있으면 읽어와서 설정
  useEffect(()=>{
  //saved는 문자열로 저장돼있어서, parse를 이용하여 문자열->객체 전환
    const saved = localStorage.getItem(TODOS_KEY);  
    if( saved ){
      setTodos(JSON.parse(saved));
    }
  },[]);

  //todos가 변경되면 localstorage에 setItem으로 새롭게 저장
  useEffect(()=>{
    const saved = JSON.stringify(todos);  //객체를 문자열로 저장
    localStorage.setItem(TODOS_KEY,saved);
  },[todos]);
  const addTodo = (text)=>{
    /**
     * todo { id:현재시간 Date.now(), text }
     * 중복되지 않는 id를 만들때 보통 '현재시간' 많이 사용
     */
    //입력된 list들에 개별적 id 부여(다음 단계: 각각 만든 아이디 삭제 가능)
    const newTodo = {id:Date.now(), todo:text, done:false};
    setTodos([...todos,newTodo]);
  }
  const deleteTodo = (id)=>{
    const update = todos.filter((item)=>{
      return item.id !== id;
    })
    setTodos(update);
  }
  const toggleTodo = (id)=>{
    const update = todos.map((item)=>{
      return item.id === id ? {...item, done:!item.done} : item;
    });
    setTodos(update);
  }

  //alert 알람 띄우기 (setInterval(반복실행))
    useEffect(()=>{
      const timer = setInterval(()=>{
        alert("⏰60분이 지났어요. 휴식 시간이에요!⌛")
      }, 60*60*1000);  //60초*60분*1000밀리초(1초)
      
      return () => clearInterval(timer); //이게 있어야한다고 함. 이해 안 감..
    },[])
  

  return (
    <div className="mainPage">      
      <h2>{user}님, {onTime}</h2>
      {/* <Quote /> */}
      <TodoForm onAdd={addTodo}/>
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
      <div className="btn">
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default MainPage;