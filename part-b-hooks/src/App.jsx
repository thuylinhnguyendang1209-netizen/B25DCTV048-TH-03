import React, { useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useFetch } from "./useFetch";
import { useClock } from "./useClock";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data: expenses, loading, error, addData, deleteData } = useFetch();
  const time = useClock();

  useEffect(() => {
    const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
    document.title = `Tổng chi: ${total.toLocaleString()} VNĐ`;
  }, [expenses]);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#000000" : "#f0f2f5";

    document.body.style.transition = "background-color 0.3s ease";
  }, [theme]);

  const totalAmount = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );

  return (
    <div className="container" data-theme={theme}>
      <header>
        <h1>Sổ Chi Tiêu Cá Nhân</h1>

        <button
          onClick={toggleTheme}
          style={{
            marginBottom: "15px",
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            border: "1px solid #ced4da",
            backgroundColor: theme === "dark" ? "#3A3B3C" : "#fff",
            color: theme === "dark" ? "#E4E6EB" : "#333",
          }}
        >
          Đổi giao diện: {theme === "light" ? "Tối 🌙" : "Sáng ☀️"}
        </button>

        <h2>Bây giờ là: {time.toLocaleTimeString()}</h2>
      </header>

      {loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>
          Đang tải dữ liệu...
        </p>
      ) : error ? (
        <p style={{ textAlign: "center", color: "red", padding: "20px" }}>
          Lỗi: {error}
        </p>
      ) : (
        <>
          <ExpenseForm onAdd={addData} />

          <ExpenseList expenses={expenses} onDelete={deleteData} />

          <h3>Tổng tiền: {totalAmount.toLocaleString()} VNĐ</h3>
        </>
      )}
    </div>
  );
};

export default App;
