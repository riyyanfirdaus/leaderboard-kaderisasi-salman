import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leaderboard Kaderisasi Salman",
  description: "Leaderboard Kaderisasi Salman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  horizontalItemSelectedColor: '#1F99CC',
                  itemColor: '#9F9F9F'
                },
                Button: {
                  colorPrimary: '#1F99CC',
                  colorPrimaryHover: '#1D566D',
                  colorPrimaryActive: '#1F99CC',
                  defaultGhostColor: '#9F9F9F',
                  defaultGhostBorderColor: '#9F9F9F',
                },
                Table: {
                  headerBg: '#ffffff',
                  headerColor: '#1F99CC',
                }
              }
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
