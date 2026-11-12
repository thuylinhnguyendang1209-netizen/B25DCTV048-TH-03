# LTW - Bài thực hành 03 - Sổ Chi Tiêu Cá Nhân

- Họ tên: Nguyễn Thuỳ Linh
- Mã sinh viên: B25DCTV048

## Cách chạy dự án

1. Vào thư mục `part-a-class`, chạy `npm install`, sau đó `npm run dev` để xem Phần A.
2. Vào thư mục `part-b-hooks`, chạy `npm install`, sau đó `npm run dev` để xem Phần B.

## So sánh Class Component và Function Component + Hooks

Hooks đã giúp khắc phục các thách thức của Class Component ở những điểm sau:

1. **Tránh lặp code ở các vòng đời (Lifecycle):** Ở phần A, logic thiết lập đồng hồ và hủy đồng hồ bị chia cắt ở `componentDidMount` và `componentWillUnmount`. Với Hooks (`useEffect` trong `useClock`), logic này được gộp chung vào một chỗ rất gọn gàng.
2. **Loại bỏ từ khóa `this` phức tạp:** Class component yêu cầu phải dùng `this.state`, `this.setState` và `bind(this)` cho các hàm, dễ gây lỗi. Function component sử dụng các biến state trực tiếp từ `useState` rõ ràng hơn.
3. **Tái sử dụng logic dễ dàng (Custom Hooks):** Việc tách logic gọi API (fetch data) thành hook `useFetch` hoặc logic đồng hồ thành `useClock` giúp tái sử dụng chúng ở bất kỳ đâu mà không làm rối cấu trúc cây UI như kĩ thuật HOC hay Render Props của Class component.
4. **Viết code ngắn và dễ đọc hơn:** Quản lý state với nhiều `useState` độc lập dễ theo dõi hơn là nhồi nhét mọi thứ vào một object `this.state` khổng lồ.
