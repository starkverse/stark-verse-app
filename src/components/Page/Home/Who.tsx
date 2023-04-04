import styles from './Home.module.css';

const One = ({ title, desc }: any) => (
  <div className={styles.who}>
    <h3>{title}</h3>
    <div>{desc}</div>
  </div>
)
const Who = () => {
  return (
    <section className="body-font" id='who'>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20" data-aos="fade-down" data-aos-duration="2000">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">For You</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">If you are one of the following users, our platform will be very suitable for you.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6" data-aos="fade-up" data-aos-duration="2000">
          <One title='Collector' desc='Has a certain understanding of the value of digital assets, believes that NFTs are an emerging digital asset with high investment and collection value.' />
          <One title='Art enthusiast' desc='Browses exhibitions and artworks, likes to discover new artworks and ideas, and is willing to share their views and thoughts with other art enthusiasts.' />
          <One title='Art professional' desc='People who work in the art industry, including artists, curators, modelers, etc. They need a platform to showcase their works and skills, establish connections with other professionals and collectors, and engage in cooperation and communication.' />
        </div>
      </div>
    </section>
  )
}

export default Who;