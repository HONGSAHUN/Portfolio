import { useState } from "react";
import "../Guestbook.css";

function Guestbook() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState("");

  // ✅ CREATE
  const addMemo = () => {
    setMemos([...memos, { id: Date.now(), text: input }]);
    setInput("");
  };

  // ✅ UPDATE
  const updateMemo = (id, newText) => {
   // 목록에 있는 id와 매개변수 id 가 같으면 수정
    setMemos(memos.map((m) => (m.id === id ? 
                            { ...m, text: newText } : m)));
  };

  // ✅ DELETE
 // 목록에 있는 id와 매개변수 id 가 다르면 필터링
  const deleteMemo = (id) => {
    setMemos(memos.filter((m) => m.id !== id));
  }; 

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addMemo}>추가</button>

      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            {memo.text}

            <button onClick={() =>
                updateMemo(memo.id, prompt("수정 내용:", memo.text))
              } > 수정 </button>

            <button onClick={() => 
                deleteMemo(memo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Guestbook;