import Button from "@/components/Button";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AccountContext } from "@/components/AccountProvider";
import { contractMap } from "../Home/MintButton";
import styles from './Gallery.module.css';
import { get } from "lodash";

const GalleryBanner = () => {
  const { connector } = useContext(AccountContext);
  const chainId: any = get(connector, '_wallet.chainId');
  return (
    <section className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 -translate-y-6 px-4">
      <div className={`rounded-xl overflow-hidden relative shadow ${styles.item}`}>
        <div className="bg-slate-800 bg-opacity-50 absolute left-2 top-2 rounded-md py-2 px-4 text-xs z-10 backdrop-blur">
          Preview Demo
        </div>
        <a className="overflow-hidden block relative" href="//gallery.starkverse.art" target="_blank">
          <img src='/card.jpg' />
          <Button size="sm" type="primary" className='px-6 absolute top-[60%] left-1/2 -translate-x-1/2'>Enter</Button>
        </a>
        <div className="bg-slate-800 px-4 py-3 text-sm white flex justify-between items-center">
          # Genesis Gallery
          <a href={`${contractMap[chainId]?.scanUrl}${contractMap[chainId]?.contractAddress}`} target="_blank" className="flex items-center cursor-pointer gap-x-2">
            <img src='/mint.svg' width={16} />
          </a>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden relative flex flex-col justify-between bg-slate-700 shadow">
        <div className="overflow-hidden flex-1 p-6 flex items-center">
          <img src="/soon.png" />
        </div>
        <div className="bg-slate-800 px-4 py-3 text-sm flex justify-between items-center text-gray-400">
          # Coming soon
          <Cog6ToothIcon width={18} />
        </div>
      </div>
    </section>
  );
};

export default GalleryBanner;
