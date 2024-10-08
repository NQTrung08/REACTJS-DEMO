import React from 'react';


const Slider: React.FC = (
  props
) => {
  return (

    <div className="h-full flex-1"> {/* Đảm bảo chiều cao đầy đủ */}
      <img
        src="https://cdn1585.cdn4s4.io.vn//media/articles/865/content/cach-chon-plugin-slider-anh-cho-wordpress-phu-hop.jpg"
        alt="Slider"
        className="object-cover h-[400px] w-full rounded-md" // Kích thước ảnh
      />
    </div>

  );
}

export default Slider;
