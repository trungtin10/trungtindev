import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Bắt buộc
  trailingSlash: true,   // Rất quan trọng: Giúp GitHub hiểu các đường dẫn như /about/ hay /contact/
  images: {
    unoptimized: true,   // Bắt buộc để hiển thị được ảnh trên GitHub Pages
  },
  // Nếu bạn dùng repo trungtin10.github.io thì KHÔNG cần basePath. 
  // Nếu dùng repo khác (như /my-blog) thì mới cần thêm basePath: '/my-blog'.
};

export default nextConfig;