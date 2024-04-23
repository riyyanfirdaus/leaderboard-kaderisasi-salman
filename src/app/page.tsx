import { HomeContent, PageWrapper } from "@/components/layout";
import { fetchAchievements } from "@/db/queries/achievements";

export default async function Home() {
  const achievements = await fetchAchievements();

  return (
    <PageWrapper>
      <HomeContent data={achievements} />
    </PageWrapper>
  );
}
