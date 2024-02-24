"use client"
import { BMKALeaderboard } from "@/assets/icons";
import { MenuOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { Header } = Layout;
  const ActiveMenu = pathname == "/" ? 'home' : "achievements";

  const headerItem = [
    {
      label: (
        <Link href="/">
          <span>Home</span>
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link href="/achievements">
          <span>Achievement</span>
        </Link>
      ),
      key: 'achievements'
    },
    {
      label: (
        <div>
          <span>Hi, Riyyan</span>
        </div>
      ),
      key: 'profile',
    }
  ]

  const user = true;

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Link href="/">
        <BMKALeaderboard />
      </Link>

      {!user ? (
        <Menu
          items={[
            {
              label: (
                <Link href="/login">
                  <span>Masuk</span>
                </Link>
              ),
              key: 'login'
            }
          ]}
        />
      ) : (
        <Menu
          mode="horizontal"
          selectedKeys={[ActiveMenu]}
          items={headerItem}
          overflowedIndicator={<MenuOutlined />}
          style={{ flex: 1, minWidth: 0, gap: 12, justifyContent: 'flex-end', fontSize: '18px' }}
        />
      )}
    </Header>
  )
}