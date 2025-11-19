
const TodoList = ({todos,onDelete,onToggle}) => {
  if(todos.length === 0){
    return <p>할일이 없습니다</p>;
  }
  return (
    <div className="do">
      <ul className="doing">
        {
        todos.map((list)=>{
          return (
          <li key={list.id}>
            <input 
              type="checkbox"
              onChange={()=>{onToggle(list.id)}}
              checked={list.done}
            />
            <span 
              style={{textDecoration: list.done ? 'Line-through' : 'none'}}>
              {list.todo}
            </span>
            <button onClick={()=>{onDelete(list.id)}}>삭제</button>
          </li>);
        })
        }
      </ul>
    </div>
  );
};

export default TodoList;