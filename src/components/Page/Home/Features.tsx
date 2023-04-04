const Feature = ({ title, desc }: any) => (
  <div className="p-4 lg:w-1/2 md:w-full">
    <div className="flex border rounded-xl border-gray-700 backdrop-blur-md border-opacity-50 p-8 sm:flex-row flex-col">
      <div className="flex-grow">
        <h2 className="text-lg title-font font-medium mb-3">{title}</h2>
        <p className="leading-relaxed text-base opacity-80">{desc}</p>
      </div>
    </div>
  </div>
);
const Features = () => {
  return (
    <section className="body-font" id="feature">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Features
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            {`Our vision is to become the world's leading platform for the
            exchange of digital artworks.`}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div
          className="flex flex-wrap -m-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Feature
            title="Creating a gallery"
            desc="Users can create their own galleries by minting StarkVerse NFTs on our platform and displaying their owned NFTs within."
          />
          <Feature
            title="Art exhibition"
            desc="Art enthusiasts and professionals can create and manage their own galleries on the platform to showcase their works and skills, attract the attention of other users, and engage in exchange."
          />
          <Feature
            title="Socializing"
            desc="Users can establish connections with other users on the platform, share their thoughts and experiences, find users with common interests, and participate in social activities and promotions to increase their visibility and influence."
          />
          <Feature
            title="Customizable gallery"
            desc="In the future, StarkVerse may provide customizable gallery and modeling functions. Art professionals and modelers can use this feature to design their own galleries, invite others to visit, and expand their social presence."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
