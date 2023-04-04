import Banner from "@/components/Page/Home/Banner";
import RoadMap from "@/components/Page/Home/RoadMap";
import Features from "@/components/Page/Home/Features";
import Who from "@/components/Page/Home/Who";

export default function Home() {
  return (
    <main>
      <Banner />
      <Who />
      <Features />
      <RoadMap />
    </main>
  )
}
