import { Footer as FooterAnt } from "antd/es/layout/layout"

export default function Footer() {
  return (
    <FooterAnt style={{ color: '#9F9F9F', fontSize: '18px', textAlign: 'center', backgroundColor: '#F3F9FE', padding: '46px 0' }}>
      Copyright © {new Date().getFullYear()} - All right reserved by Kaderisasi Masjid Salman ITB
    </FooterAnt>
  )
}