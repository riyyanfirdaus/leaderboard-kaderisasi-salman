"use client";
import { Navabar, Footer } from "@/components/layout";
import { LeaderboardData, TableColums } from "@/constants";
import { SendOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Table } from "antd";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F3F9FE]">
      <Navabar />
      <main>
        <div className="w-full h-screen pt-16 md:pt-32">
          <div className="w-full px-4 max-w-6xl mx-auto md:px-6">
            <div className="text-center">
              <h1 className="font-bold text-2xl text-[#1D566D] mb-2">Leaderboard Prestasi Aktivis Salman</h1>
              <p className="text-[#1D566D]">Dikelola oleh Bidang Mahasiswa, Kaderisasi, dan Alumni Masjid Salman ITB</p>
            </div>

            <Form>
              <Flex gap="middle">
                <Form.Item>
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit" icon={<SendOutlined />} />
                </Form.Item>
              </Flex>
            </Form>

            <Table columns={TableColums} dataSource={LeaderboardData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
