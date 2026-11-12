import React, { useState, useRef } from "react";

const ExpenseForm = ({ onAdd }) => {
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Ăn uống");
  const [date, setDate] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !amount || !date) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }
    onAdd({
      content,
      amount: Number(amount),
      category,
      date,
    });

    setContent("");
    setAmount("");
    setCategory("Ăn uống");
    setDate("");

    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px", display: "flex", gap: "10px" }}
    >
      {/* Gắn ref vào ô input đầu tiên */}
      <input
        ref={inputRef}
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nội dung (VD: Đổ xăng)"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Số tiền..."
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Ăn uống">Ăn uống</option>
        <option value="Đi lại">Đi lại</option>
        <option value="Học tập">Học tập</option>
        <option value="Giải trí">Giải trí</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default ExpenseForm;
