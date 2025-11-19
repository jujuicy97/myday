//////메모 완성하기!!!!

import { useState } from "react"
import { useEffect } from "react"

const Memo = () => {
//로컬 스토리지에 먼저 저장
  const MEMO_KEY = "free-memo";
  const [memoTxt,setMemoTxt] = useState("");
  
  useEffect(()=>{
  //useEffect는 한 번 실행될 예정, 
  //로컬스토리지에 저장된 값이 있으면 가져오기
    const saved = localStorage.getItem(MEMO_KEY);
  //만약 저장된 값이 있으면 상태값을 메모로 바꾸라는 조건
    if( saved ){
      setMemoTxt(saved)
    }
  },[])

  return (
    <div>
      
    </div>
  );
};

export default Memo;