import { useContext } from "react";
import { AccountContext } from "@/components/AccountProvider";
import { Banner, Verse } from "@/components/Page/Gallery";

const GalleryPgae = () => {
  const { address } = useContext(AccountContext);

  return (
    <main className="flex-1">
      <Banner />
      {
        address ? <Verse /> : (
          <div className="text-center text-gray-400 pb-8">Please connect wallet.</div>
        )
      }
    </main>
  );
};

export default GalleryPgae;
