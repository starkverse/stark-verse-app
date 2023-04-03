import Basic from "@/components/BasicLayout";
import Banner from "@/components/Home/Banner";
import RoadMap from "@/components/Home/RoadMap";
import Features from "@/components/Home/Features";
import Who from "@/components/Home/Who";

export default function Home() {
  return (
    <Basic>
      <Banner />
      <Who />
      <Features />
      <RoadMap />
    </Basic>
  )
}
