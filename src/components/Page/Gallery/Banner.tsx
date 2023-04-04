import { formatStr } from "@/utils/util";
import { Square2StackIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import styles from './Gallery.module.css';
import { useContext } from "react";
import { AccountContext } from "@/components/AccountProvider";

const GalleryBanner = () => {
  const { address } = useContext(AccountContext);
  const doClick = async () => {
    try {
      await navigator.clipboard.writeText(address || '');
      toast.success('Copy Success.');
    } catch {
      toast.error('Copy Error.');
    }
  }
  return (
    <section className="text-center">
      <div className={styles.bg} />
      <div className="text-center inline-block -translate-y-16">
        <div className="w-32 h-32 bg-gradient-to-l from-[#ec66f8] to-[#404be4] border-[6px] border-slate-950 rounded-full inline-block" />
        <div className="text-3xl font-bold">
          {formatStr({ value: address || "0x000000000" })}
        </div>
        <div className="inline-flex items-center text-gray-400 gap-x-2 mt-2">
          Copy Address <Square2StackIcon onClick={doClick} className="cursor-pointer hover:text-primary transition-all" width={20} />
        </div>
      </div>
    </section>
  );
};

export default GalleryBanner;
