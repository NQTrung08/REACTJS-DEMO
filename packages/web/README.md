1. Bạn đang ở folder "web". Tại đây chúng ta tiến hành code các phần liên quan đến UI. Toàn bộ code sẽ nằm trong thư mục "src". Project con được viết theo dạng module
    - module: là các tính năng chính của dự án. Cấu trúc trong các tính năng sẽ gồm 3 phần chính:
      + screens: nơi chứa toàn bộ các màn hình
      + containers: nơi chứa các phần code của màn hình được tách nhỏ (có chứa các logic)
      + components: nơi chứa các phần code của màn hình mà chúng ta chia đến mức nhỏ nhất không thể hoặc không cần chia tiếp nữa   
    - based: là các thành phần dùng chung của toàn bộ các modules bao gồm
      + components: là các thành phần tái sử dụng, dùng chung trong nhiều màn hình. Ví dụ: button, input, checkbox,...
      + containers: là các thành phần tái sử dụng tuy nhiến có chứa logic call dữ liệu. Ví dụ: Dropdown select nhân viên, Dropdown select tỉnh, huyện, xã.
      
2. icons:
   + notification: mdiBellOutline
   + cart: mdiCartOutline
   + down: mdiChevronDown
   + sort: mdiSortAscending
   + trash: mdiTrashCanOutline
   + filter: mdiFilterMultipleOutline
   + search: mdiMagnify
   + add: mdiPlus
   + email: mdiEmailOutline
   + phone: mdiPhoneInTalkOutline
   + user: mdiAccountOutline
   + arrow left: mdiChevronLeft
   + right: mdiChevronRight
   + role: mdiAccountCogOutline
   + sale-staff: mdiCardAccountPhoneOutline
   + upload: mdiTrayArrowUp
3. tool bar, advange, breadcrumb
4. Dùng react hook form
5. Đề nghị thanh toán

   - phiếu thu
   - chi tiền
   - chuyển/ rút tiền
   - Hóa đơn VAT
   - Tạm ứng/ hoàn ứng
   - Đề nghị thanh toán
   - Đặt cọc/ hoàn cọc
   - Các đơn hàng
   - Số nợ khách hàng
   - Danh mục thu/ chi
   - Hợp đồng
   - Báo cáo dòng tiền
   - Bảng cân đối kế toán
   - Hệ thống tài khoản kế toán
   - Pháp nhân/ tổ chức
   - các tài khoản
   - phương thức thanh toán

6. managerRefundContext quản lý dữ liệu tổng thể.
7. AdvanceRefundContextProvider quản lý dữ liệu cho từng tab.
8. CreateRefundContext quản lý trạng thái cho form tạo tạm ứng.