"use client";
import Card from "@/components/common/Card";
import Modal from "@/components/common/Modal";
import { Footer, Navabar } from "@/components/layout";
import { AchievementsData } from "@/constants";
import { Button, Flex, Layout, Space, Typography } from "antd";

const { Content } = Layout;

export default function Achievement() {
    return (
        <Layout style={{ width: '100%', minHeight: '100vh', backgroundColor: '#F3F9FE' }}>
            <Navabar />
            <Content style={{ padding: '64px 250px 0 250px' }}>
                <Flex justify="space-between" style={{ marginBottom: '50px' }}>
                    <Typography.Title level={1} style={{ color: '#1D566D' }}>Pencapaian</Typography.Title>
                    <Flex gap={50}>
                        <Space direction="vertical">
                            <Typography.Text style={{ color: '#9F9F9F', fontSize: '18px' }}>Academic Score</Typography.Text>
                            <Typography.Title level={2} style={{ color: '#1D566D' }}>170</Typography.Title>
                        </Space>
                        <Space direction="vertical">
                            <Typography.Text style={{ color: '#9F9F9F', fontSize: '18px' }}>Competition Score</Typography.Text>
                            <Typography.Title level={2} style={{ color: '#1D566D' }}>620</Typography.Title>
                        </Space>
                        <Space direction="vertical">
                            <Typography.Text style={{ color: '#9F9F9F', fontSize: '18px' }}>Organization Score</Typography.Text>
                            <Typography.Title level={2} style={{ color: '#1D566D' }}>25</Typography.Title>
                        </Space>
                        <Space direction="vertical">
                            <Typography.Text style={{ color: '#9F9F9F', fontSize: '18px' }}>Total Score</Typography.Text>
                            <Typography.Title level={2} style={{ color: '#1F99CC' }}>845</Typography.Title>
                        </Space>
                        <Space direction="vertical">
                            <Typography.Text style={{ color: '#9F9F9F', fontSize: '18px' }}>Rank Score</Typography.Text>
                            <Typography.Title level={2} style={{ color: '#1F99CC' }}>1</Typography.Title>
                        </Space>
                    </Flex>
                </Flex>

                <Flex justify="space-between" style={{ marginBottom: '25px' }}>
                    <Flex gap={25}>
                        <Button size="large" ghost>
                            Academic
                        </Button>
                        <Button type="primary" size="large">
                            Competition
                        </Button>
                        <Button size="large" ghost>
                            Organization
                        </Button>
                    </Flex>
                    <Modal />
                </Flex>

                <Flex vertical gap={25}>
                    {
                        AchievementsData.map((achievement) => (
                            <Card key={achievement.id} achievement={achievement} />
                        ))
                    }
                </Flex>
            </Content>
            <Footer />
        </Layout>
    )
}