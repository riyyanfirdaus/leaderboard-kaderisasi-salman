"use client"
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Modal as ModalAnt } from "antd";
import Link from "next/link";


const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Button type="primary" size="large" icon={<PlusOutlined />} onClick={() => setIsModalOpen(prev => !prev)}>
                Tambah Pencapaian
            </Button>

            <ModalAnt title="Pilih Kategori Pencapaian" open={isModalOpen} onCancel={() => setIsModalOpen(prev => !prev)} footer={
                [
                    <Button key="back" onClick={() => setIsModalOpen(prev => !prev)}>
                        Tututp
                    </Button>
                ]
            }>
                <Flex justify="space-around" style={{ padding: '26px 0' }}>
                    <Link href="/achievements/upload">
                        <Button type="primary" size="large">Academic</Button>
                    </Link>
                    <Link href="/achievements/upload">
                        <Button type="primary" size="large">Competition</Button>
                    </Link>
                    <Link href="/achievements/upload">
                        <Button type="primary" size="large">Organization</Button>
                    </Link>
                </Flex>
            </ModalAnt>
        </>
    )
}

export default Modal;