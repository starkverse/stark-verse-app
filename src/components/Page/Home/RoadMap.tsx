const Feature = ({ title, desc, rank, ...props }: any) => (
  <div
    className="flex relative py-10 sm:items-center md:w-2/3 mx-auto mt-20"
    {...props}
  >
    <div className="flex-grow md:pl-8 pl-6 flex items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-primary rounded-full inline-flex items-center justify-center text-lg font-bold px-4 text-center">
        {rank}
      </div>
      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h2 className="font-medium title-font mb-2 text-xl">{title}</h2>
        <div className="opacity-80 mt-4 space-y-4">{desc}</div>
      </div>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="body-font" id="map">
      <div className="relative container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center  mb-2">
          RoadMap
        </h1>
        <div className="feature-border translate-y-4 absolute left-1/2 h-[1px] w-3/4 max-w-[640px] -translate-x-1/2 sm:w-full" />
        <div className="absolute top-0 left-1/2 -z-10 flex -translate-x-1/2 items-center justify-center">
          <div className="relative block h-[192px] w-[120px] md:w-[193px] rounded-full bg-purple-400 opacity-40 blur-[85px]"></div>
          <div className="relative block h-[235px] w-[120px] md:w-[236px] rounded-full bg-pink-400 opacity-40 blur-[85px]"></div>
        </div>
        <div className="max-w-[900px] mx-auto">
          <Feature
            data-aos="fade-up"
            rank="Phase One"
            title="Create Personal Galleries"
            desc={
              <>
                <p>
                  Build a platform to provide a showcase for digital artwork
                </p>
                <p>
                  NFT collectors can mint and showcase their NFT art collections
                  in galleries
                </p>
              </>
            }
          />
          <Feature
            data-aos="fade-up"
            rank="Phase Two"
            title="Add Community Features"
            desc={
              <>
                <p>
                  Open the platform to attract more art enthusiasts and
                  professionals
                </p>
                <p>
                  Invite professional curators and modelers to create unique
                  gallery spaces
                </p>
                <p>
                  Establish community features to facilitate user interaction
                  and discussion
                </p>
                <p>
                  Host online events such as art exhibitions and forum
                  discussions
                </p>
              </>
            }
          />
          <Feature
            data-aos="fade-up"
            rank="Phase Three"
            title="Further Enhance User Experience"
            desc={
              <>
                <p>
                  Introduce more interactive features, such as co-creating
                  exhibitions
                </p>
                <p>
                  Expand to include more art categories, such as music and video
                </p>
                <p>{`Optimize the platform's interface and user experience`}</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
