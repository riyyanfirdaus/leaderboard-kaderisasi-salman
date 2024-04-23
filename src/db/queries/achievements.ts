import type { Achievements } from "@prisma/client";
import { db } from "..";

type CreateAchievementProps = {
    formData: {
        aktivitas: string,
        pencapaian: string,
        skala: string,
        tanggal: {
            $d: string
        },
    }
}

export async function fetchAchievements(): Promise<Achievements[]> {
    return await db.achievements.findMany()
}

export async function createAchievement({ formData }: CreateAchievementProps): Promise<Achievements> {
    const achievement = await db.achievements.create({
        data: {
            title: formData.aktivitas,
            category: formData.pencapaian,
            scale: parseInt(formData.skala),
            date: formData.tanggal.$d,
            urlImg: "example.com"
        }
    })
    return achievement
}