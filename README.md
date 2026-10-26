# Aura Dental - Landing Page & Hệ Thống Đặt Lịch Khám Trực Tuyến

Landing page cho hệ thống nha khoa thẩm mỹ cao cấp **Aura Dental**, tích hợp tính năng đặt lịch khám trực tuyến, bộ sưu tập nụ cười thực tế, bảng giá niêm yết minh bạch và công cụ dự toán chi phí trả góp 0%.

---

## Hướng dẫn Publish lên GitHub Pages để làm Demo Sản Phẩm

Dự án đã được cấu hình sẵn đường dẫn tương đối (`base: './'`) trong `vite.config.ts`, giúp trang web hoạt động hoàn hảo trên mọi tên miền GitHub Pages (`https://<username>.github.io/<ten-repo>/`) mà không bị lỗi 404 assets.

### Cách 1: Tự Động Deploy Bằng GitHub Actions (Khuyên dùng - Nhanh & Chuyên nghiệp nhất)

File workflow `.github/workflows/deploy.yml` đã được tạo sẵn trong dự án. Bạn chỉ cần:

1. Đẩy toàn bộ mã nguồn lên repository GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: Aura Dental Clinic Landing Page"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   git push -u origin main
   ```
2. Trên GitHub, vào mục **Settings** của repository -> chọn thẻ **Pages** ở menu bên trái.
3. Tại phần **Build and deployment** -> **Source**: Chọn **GitHub Actions**.
4. GitHub sẽ tự động chạy build và phát hành trang web trong 1-2 phút. Đường dẫn demo trực tuyến của bạn sẽ hiển thị ngay tại đó (dạng: `https://<tai-khoan>.github.io/<ten-repo>/`).

---

### Cách 2: Deploy Thủ Công Bằng Thư Mục `dist`

Nếu bạn muốn deploy trực tiếp mã HTML/CSS/JS đã đóng gói sẵn:

1. Chạy lệnh build:
   ```bash
   npm run build
   ```
2. Thư mục `dist/` sẽ được tạo ra, bên trong có:
   - `index.html`
   - Thư mục `assets/` (chứa toàn bộ CSS và JS đã tối ưu hóa)
3. Bạn có thể:
   - Đẩy toàn bộ nội dung trong thư mục `dist/` lên nhánh `gh-pages` của repo.
   - Hoặc copy các file trong `dist/` vào thư mục `docs/` trên nhánh `main`, sau đó trong GitHub Settings -> Pages chọn source là **Deploy from a branch** -> chọn thư mục `/docs`.

---

## Các Tính Năng Nổi Bật Đã Tích Hợp

- **Hệ thống đặt lịch khám trực tuyến 4 bước**: Chọn dịch vụ, chọn bác sĩ chuyên khoa có ảnh profile, chọn ngày giờ khám, lưu trữ lịch hẹn vào LocalStorage và hỗ trợ xuất file `.ics` thêm vào Google Calendar / Apple Calendar.
- **Bộ sưu tập nụ cười thực tế**: Chiêm ngưỡng sự biến đổi men răng trắng sáng trước & sau điều trị, cung cười chữ U tỉ lệ vàng DSD.
- **Thanh trượt so sánh Trước & Sau (Before & After Slider)**: Tương tác kéo trượt so sánh kết quả lâm sàng.
- **Bảng giá minh bạch & Công cụ dự toán trả góp 0%**: Tự động tính tiền trả góp 6 hoặc 12 tháng theo số lượng răng/trụ Implant.
- **Đội ngũ bác sĩ chuyên khoa ĐH Y Dược**: Đầy đủ thông tin, học vị và ảnh chân dung profile chuyên nghiệp.
- **Typography tối ưu tiếng Việt**: Sử dụng font chữ **Be Vietnam Pro** chuẩn nét, không lỗi dấu hay nhảy dòng.
