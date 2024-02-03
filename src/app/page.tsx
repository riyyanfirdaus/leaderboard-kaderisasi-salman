import { Navabar, Footer } from "@/components/layout";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F3F9FE]">
      <Navabar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button className="bg-primary" icon={<LeftOutlined />} />
      </main>
      <Footer />
    </div>
  );
}
