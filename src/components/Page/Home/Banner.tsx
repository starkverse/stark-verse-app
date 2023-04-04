import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AccountContext } from "@/components/AccountProvider";
import styles from "./Home.module.css";
import Button from "../../Button";
import MintButton from "./MintButton";

const Banner = () => {
  const { push } = useRouter();
  const { address } = useContext(AccountContext);
  const doClick = () => {
    if (!address) {
      toast.info("Please connect wallet.");
    } else {
      push('/gallery');
    }
  }
  return (
    <section className={styles.bg} id='home'>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-between">
        <div className="max-w-[800px] lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 
            className={styles.title} 
            data-aos="fade-down" 
            data-aos-duration="2000"
          >
            <div>Unleash Your Creativity </div>
            <div>Show Your Passion</div>
          </h1>
          <div 
            className="mt-10 mb-14 space-y-4" 
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <p className="opacity-80">Welcome to StarkVerse, the ultimate destination for showcasing and exchanging digital artwork.</p>
            <p className="opacity-80">We provide a very cool platform for collectors, art enthusiasts, and art professionals to freely showcase, communicate, and appreciate NFT artworks.</p>
          </div>
          <div 
            className="flex justify-center space-x-4" 
            data-aos="fade-up" 
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            <Button circle type='primary' size='lg' className='!px-8 font-bold' onClick={doClick}>
              Enter Gallery
            </Button>
            <MintButton />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.img
            src='/card.jpg'
            className="rounded-xl max-w-[380px] w-full"
            initial={{ rotateY: 15 }}
            animate={{ rotateY: -15 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;