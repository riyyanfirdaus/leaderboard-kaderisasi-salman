"use client"
import { BMKALeaderboard } from "@/assets/icons";
import { Flex } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed left-0 top-0 w-full py-4 bg-white z-10">
            <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
                <Flex justify="space-between"align="center" >
                    <Link href="/">
                        <BMKALeaderboard />
                    </Link>
                    <Flex align="center" gap={48}>
                        <Link href="/">
                            <div className={`text-secondary transition-colors ${pathname === "/" ? "text-primary" : ""}`}>Home</div>
                        </Link>
                        <Link href="/achievements">
                            <div className={`text-secondary transition-colors ${pathname === "/achievements" ? "text-primary" : ""}`}>Achievement</div>
                        </Link>
                        <div className="text-secondary">
                            <p>Hi, Riyyan</p>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </nav>
    )
}