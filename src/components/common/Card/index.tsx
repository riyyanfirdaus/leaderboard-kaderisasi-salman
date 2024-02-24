
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card as CardAnt, Flex, Space, Typography } from 'antd';
import Image from 'next/image';

type AchievementProps = {
    achievement: {
        id: number,
        image: string,
        title: string,
        organization: string,
        position: string,
        date: string,
        status: string,
        score: number,
    }
}

const Card = ({ achievement }: AchievementProps) => {
    return (
        <CardAnt style={{ width: '100%' }}>
            <Flex justify="space-between">
                <Space>
                    <Image
                        alt="avatar"
                        src={achievement.image}
                        width={210}
                        height={210}
                        style={{ objectFit: 'cover', paddingRight: '20px' }}
                        priority
                    />
                    <Space direction='vertical'>
                        <Typography.Title level={4} style={{ color: '#1D566D' }}>{achievement.title}</Typography.Title>
                        <Typography.Title level={4} style={{ color: '#1F99CC' }}>{achievement.organization}</Typography.Title>
                        <Typography.Text style={{ color: '#9F9F9F', fontSize: '16px' }}>{achievement.position}</Typography.Text>
                        <Typography.Text style={{ color: '#9F9F9F', fontSize: '16px' }}>{achievement.date}</Typography.Text>
                    </Space>
                </Space>
                <Flex vertical justify='center' align='center' gap={10}>
                    {
                        achievement.status == "Approval" ? (
                            <Button type="primary" size='large'>{achievement.status}</Button>
                        ) : (
                            <Button type="primary" size='large' danger>{achievement.status}</Button>
                        )
                    }
                    <Space direction="vertical" align='center'>
                        <Typography.Text style={{ color: '#9F9F9F', fontSize: '18px' }}>Score</Typography.Text>
                        <Typography.Title level={2} style={{ color: '#9F9F9F' }}>{achievement.score}</Typography.Title>
                    </Space>
                    <Space>
                        <Button type="text" icon={<EditOutlined style={{ color: '#FF7B40', fontSize: 25 }} />} />
                        <Button type="text" icon={<DeleteOutlined style={{ color: '#FF7B40', fontSize: 25 }} />} />
                    </Space>
                </Flex>
            </Flex>
        </CardAnt>
    )
}

export default Card;