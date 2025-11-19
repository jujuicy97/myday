import { useState } from "react";

const TodoForm = ({onAdd}) => {
  const [task,setTask] = useState("");
  const handleSubmit = (e)=>{
    // console.log("서브밋 이벤트 발생")
    e.preventDefault(); //submit 속성의 기본값 제거
    const trimmed = task.trim();
    if(trimmed){
      //할일 텍스트를 메인페이지(부모)에 전달
      onAdd(task);
      setTask("");  //추가할때 검색창 text 없애기
    }
  }
  return (
    <form onSubmit={handleSubmit} className="textBox">
      <input 
        type="text"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        placeholder="할일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;