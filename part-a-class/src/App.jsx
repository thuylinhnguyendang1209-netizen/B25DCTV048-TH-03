import React from "react";
import Clock from "./Clock";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: 1,
          content: "Ăn trưa",
          amount: 30000,
          category: "Ăn uống",
          date: "2026-10-25",
        },
        {
          id: 2,
          content: "Mua sách",
          amount: 100000,
          category: "Học tập",
          date: "2026-10-25",
        },
      ],
      filter: "Tất cả",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.expenses !== this.state.expenses ||
      prevState.filter !== this.state.filter
    ) {
      const total = this.getFilteredExpenses().reduce(
        (sum, item) => sum + Number(item.amount),
        0,
      );
      document.title = `Tổng chi: ${total.toLocaleString()} VNĐ`;
    }
  }

  getFilteredExpenses = () => {
    if (this.state.filter === "Tất cả") return this.state.expenses;
    return this.state.expenses.filter((e) => e.category === this.state.filter);
  };

  handleAdd = (newExpense) => {
    this.setState({ expenses: [...this.state.expenses, newExpense] });
  };

  handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa khoản chi này?")) {
      this.setState({
        expenses: this.state.expenses.filter((e) => e.id !== id),
      });
    }
  };

  render() {
    const filtered = this.getFilteredExpenses();
    const total = filtered.reduce((sum, item) => sum + Number(item.amount), 0);

    return (
      <div className="container">
        <header>
          <h1>Sổ Chi Tiêu Cá Nhân</h1>
          <Clock />
        </header>

        {/* Form thêm khoản chi */}
        <ExpenseForm onAdd={this.handleAdd} />

        {/* Nút lọc theo loại */}
        <div style={{ margin: "10px 0" }}>
          <label>
            <strong>Lọc theo loại: </strong>
          </label>
          <select
            onChange={(e) => this.setState({ filter: e.target.value })}
            value={this.state.filter}
          >
            <option value="Tất cả">Tất cả</option>
            <option value="Ăn uống">Ăn uống</option>
            <option value="Đi lại">Đi lại</option>
            <option value="Học tập">Học tập</option>
            <option value="Giải trí">Giải trí</option>
          </select>
        </div>

        {/* Danh sách khoản chi */}
        <ExpenseList expenses={filtered} onDelete={this.handleDelete} />

        <h3>Tổng tiền: {total.toLocaleString()} VNĐ</h3>
      </div>
    );
  }
}
export default App;
