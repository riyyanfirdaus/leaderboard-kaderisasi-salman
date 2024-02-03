import { Flex } from "antd"


export default function Footer() {
    return (
        <footer className="py-16 bg-red">
            <Flex justify="center" align="center">
                <p className="text-[#9F9F9F]">Copyright © {new Date().getFullYear()} - All right reserved by Kaderisasi Masjid Salman ITB</p>
            </Flex>
        </footer>
    )
}