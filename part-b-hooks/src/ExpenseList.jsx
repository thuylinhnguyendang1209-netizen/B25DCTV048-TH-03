import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <table
      border="1"
      width="100%"
      style={{
        borderCollapse: "collapse",
        textAlign: "left",
        marginTop: "10px",
      }}
    >
      <thead>
        <tr style={{ background: "#f4f4f4" }}>
          <th>Nội dung</th>
          <th>Số tiền</th>
          <th>Loại</th>
          <th>Ngày chi</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Chưa có khoản chi nào
            </td>
          </tr>
        ) : (
          expenses.map((item) => (
            <tr key={item.id}>
              <td>{item.content}</td>
              <td>{item.amount.toLocaleString()} VNĐ</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => onDelete(item.id)}>Xóa</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ExpenseList;
