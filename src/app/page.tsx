"use client";
import { Footer, Navabar } from "@/components/layout";
import { LeaderboardData, TableColums } from "@/constants";
import { SendOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Layout, Space, Table, Typography } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ width: '100%', minHeight: '100vh', backgroundColor: '#F3F9FE' }}>
      <Navabar />
      <Content style={{ padding: '64px 250px 0 250px' }}>
        <Space direction="vertical" align="center" style={{ width: '100%', marginBottom: '50px' }}>
          <Typography.Title level={1} style={{ color: '#1D566D' }}>Leaderboard Prestasi Aktivis Salman</Typography.Title>
          <Typography.Text style={{ color: '#1D566D', fontSize: '18px' }}>Dikelola oleh Bidang Mahasiswa, Kaderisasi, dan Alumni Masjid Salman ITB</Typography.Text>
        </Space>
        <Flex vertical>
          <Form>
            <Space>
              <Form.Item>
                <Input size="large" placeholder="Cari berdasarkan nama" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SendOutlined />} />
              </Form.Item>
            </Space>
          </Form>

          <Table columns={TableColums} dataSource={LeaderboardData} />
        </Flex>
      </Content>
      <Footer />
    </Layout>
  );
}
