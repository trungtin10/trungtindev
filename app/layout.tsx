import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Cấu hình Font chữ
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CHỈNH SỬA TITLE TẠI ĐÂY
export const metadata: Metadata = {
  title: {
    default: "Trung Tín PORTFOLIO", // Tiêu đề mặc định cho trang chủ
    template: "%s | Trung Tín PORTFOLIO", // Cấu trúc cho các trang con (ví dụ: "Giới thiệu | Tên Website Của Bạn")
  },
  description: "Mô tả ngắn gọn về website của bạn để tối ưu SEO",
  icons: {
    icon: "/favicon.ico", // Đảm bảo bạn có file favicon.ico trong thư mục public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi"> {/* Đổi sang "vi" nếu website của bạn dùng tiếng Việt */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Bạn có thể thêm Header hoặc Navbar ở đây nếu muốn xuất hiện ở mọi trang */}
        <main>
          {children}
        </main>
        {/* Bạn có thể thêm Footer ở đây */}
      </body>
    </html>
  );
}