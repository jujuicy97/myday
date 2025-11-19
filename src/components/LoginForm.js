import { useState } from "react";

const LoginForm = ({onLogin}) => {
  const [user,setUser] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    const trimmed = user.trim();
    if( trimmed ) {  //빈값이 아니라면
      onLogin(user);   //부모에게 데이터 전송
      setUser(''); 
    }
  }
  return (
    <form onSubmit={handleSubmit} className="login">
      <h2>Who's writing today?</h2>
      <input type="text"
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
      />
      <button type="submit">Begin</button>
    </form>
  );
};

export default LoginForm;