# Ghi chú thiết kế và tổng kết bài tập

## 1. Thiết kế hai hàm tự chọn

### Hàm 1: `averageValidScores(scores)`
- **Đầu vào:** Mảng `scores` chứa danh sách điểm (có thể lẫn chuỗi, `null`, `undefined` hoặc số nằm ngoài khoảng `0` đến `10`).
- **Đầu ra:** Điểm trung bình của các phần tử hợp lệ (số từ `0` đến `10`), hoặc trả về `null` nếu không có điểm nào hợp lệ.
- **Mã giả (Pseudocode):**
  1. Khởi tạo `totalScore = 0` và `validCount = 0`.
  2. Duyệt từng phần tử `score` trong mảng `scores` bằng vòng lặp `for...of`.
  3. Nếu `score` không phải kiểu `"number"` hoặc nằm ngoài đoạn `[0, 10]`, dùng `continue` để bỏ qua.
  4. Cộng dồn `score` vào `totalScore` và tăng `validCount` thêm `1`.
  5. Sau vòng lặp, nếu `validCount === 0` thì trả về `null`, ngược lại trả về `totalScore / validCount`.
- **2 ca thử tự nghĩ:**
  - Ca thử 1: `averageValidScores(["10", -5, 10.5, null, undefined])` -> Kết quả mong đợi: `null` (vì không có điểm nào hợp lệ).
  - Ca thử 2: `averageValidScores([0, 7.5, "9", 10, 4.5])` -> Kết quả mong đợi: `5.5` (tính trung bình của `0`, `7.5`, `10`, `4.5`).

### Hàm 2: `weeksToFinish(totalLessons, lessonsPerWeek)`
- **Đầu vào:** Tổng số bài học `totalLessons` và số bài học mỗi tuần `lessonsPerWeek`.
- **Đầu ra:** Số tuần cần thiết để học hết tổng số bài (`0` nếu `totalLessons === 0`), hoặc `null` nếu tham số đầu vào không hợp lệ.
- **Mã giả (Pseudocode):**
  1. Kiểm tra nếu `totalLessons` không phải số hoặc `< 0`, hoặc `lessonsPerWeek` không phải số hoặc `<= 0` thì trả về `null`.
  2. Khởi tạo `remainingLessons = totalLessons` và `weeks = 0`.
  3. Lặp với `while (remainingLessons > 0)`: mỗi vòng trừ `remainingLessons` đi `lessonsPerWeek` và tăng `weeks` thêm `1`.
  4. Khi `remainingLessons <= 0`, vòng lặp kết thúc và trả về `weeks`.
- **2 ca thử tự nghĩ:**
  - Ca thử 1: `weeksToFinish(15, 0)` -> Kết quả mong đợi: `null` (chặn trường hợp số bài mỗi tuần bằng `0` gây lặp vô hạn).
  - Ca thử 2: `weeksToFinish(12, 4)` -> Kết quả mong đợi: `3` (chia chẵn số bài cho mỗi tuần, không bị lệch một đơn vị).

---

## 2. Tổng kết công việc đã thực hiện

Em đã hiện thực hoàn chỉnh 7 hàm thống kê điểm số và tiến độ học tập trong `script.js` bằng cách sử dụng các cấu trúc điều kiện và vòng lặp cơ bản mà không dùng `Math` hay các phương thức mảng nâng cao. Em chọn `for...of` cho các bài toán duyệt giá trị để tìm điểm lớn nhất, đếm số lượng và tính trung bình (kết hợp `continue` để lọc bỏ dữ liệu lỗi), đồng thời dùng vòng lặp `for` theo chỉ số kèm `return` để dừng sớm ngay khi tìm thấy vị trí điểm dưới chuẩn đầu tiên. Với bài toán tính số tuần học chưa biết trước số vòng lặp, em dùng `while` và kiểm tra chặt điều kiện `lessonsPerWeek > 0` ngay đầu hàm nhằm ngăn chặn triệt để lỗi vòng lặp vô hạn. Cuối cùng, em áp dụng hai vòng lặp `for...of` lồng nhau để đếm tổng số bài học đã hoàn thành trong mảng hai chiều và dùng vòng lặp `for` chạy 10 bước cố định để dựng chuỗi thanh tiến độ chính xác ở mọi mốc phần trăm.