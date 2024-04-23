"use client";
import { LeaderboardData, TableColums } from "@/constants";
import { SendOutlined } from "@ant-design/icons";
import { Achievements } from "@prisma/client";
import { Button, Flex, Form, Input, Space, Table, Typography } from "antd";

type HomeContentProps = {
  data?: Achievements[];
};

export default function HomeContent({ data }: HomeContentProps) {
  const { Title, Text } = Typography;
  return (
    <Flex vertical align="center" style={{paddingTop: '64px'}}>
      <Space
        direction="vertical"
        align="center"
        style={{ width: "100%", marginBottom: "50px" }}
      >
        <Title level={1} style={{ color: "#1D566D" }}>
          Leaderboard Prestasi Aktivis Salman
        </Title>
        <Text style={{ color: "#1D566D", fontSize: "18px" }}>
          Dikelola oleh Bidang Mahasiswa, Kaderisasi, dan Alumni Masjid Salman
          ITB
        </Text>
      </Space>
      <Flex vertical>
        <Form>
          <Space>
            <Form.Item>
              <Input size="large" placeholder="Cari berdasarkan nama" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
              />
            </Form.Item>
          </Space>
        </Form>
        <Space style={{ overflowX: "auto" }}>
          <Table
            columns={TableColums}
            dataSource={LeaderboardData}
            style={{ width: "70vw" }}
          />
        </Space>
      </Flex>
    </Flex>
  );
}
