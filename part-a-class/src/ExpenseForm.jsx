import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      amount: "",
      category: "Ăn uống",
      date: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { content, amount, category, date } = this.state;

    if (!content || !amount || !date) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      content: content,
      amount: Number(amount),
      category: category,
      date: date,
    };

    this.props.onAdd(newExpense);

    this.setState({
      content: "",
      amount: "",
      category: "Ăn uống",
      date: "",
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ marginBottom: "20px", display: "flex", gap: "10px" }}
      >
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Nội dung (VD: Đổ xăng)"
        />
        <input
          type="number"
          name="amount"
          value={this.state.amount}
          onChange={this.handleChange}
          placeholder="Số tiền..."
        />
        <select
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        >
          <option value="Ăn uống">Ăn uống</option>
          <option value="Đi lại">Đi lại</option>
          <option value="Học tập">Học tập</option>
          <option value="Giải trí">Giải trí</option>
        </select>
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <button type="submit">Thêm</button>
      </form>
    );
  }
}

export default ExpenseForm;
