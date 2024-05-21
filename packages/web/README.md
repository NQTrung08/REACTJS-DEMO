1. Bạn đang ở folder "web". Tại đây chúng ta tiến hành code các phần liên quan đến UI. Toàn bộ code sẽ nằm trong thư mục "src". Project con được viết theo dạng module
    - module: là các tính năng chính của dự án. Cấu trúc trong các tính năng sẽ gồm 3 phần chính:
      + screens: nơi chứa toàn bộ các màn hình
      + containers: nơi chứa các phần code của màn hình được tách nhỏ (có chứa các logic)
      + components: nơi chứa các phần code của màn hình mà chúng ta chia đến mức nhỏ nhất không thể hoặc không cần chia tiếp nữa   
    - based: là các thành phần dùng chung của toàn bộ các modules bao gồm
      + components: là các thành phần tái sử dụng, dùng chung trong nhiều màn hình. Ví dụ: button, input, checkbox,...
      + containers: là các thành phần tái sử dụng tuy nhiến có chứa logic call dữ liệu. Ví dụ: Dropdown select nhân viên, Dropdown select tỉnh, huyện, xã.
      
       
