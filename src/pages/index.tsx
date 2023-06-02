import { Meta } from "@/layouts/Meta";
import Main from "@/templates/Main";
import styles from "@/styles/Home.module.css";
import Card from "@/components/FadingCard";
import SmallServiceCard from "@/components/SmallServiceCard";
import LargeServiceCard from "@/components/LargeServiceCard";
import AboutCard from "@/components/AboutCard";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios, { AxiosInstance } from "axios";
import AOS from "aos";

const axiosInstance: AxiosInstance = axios.create({
  // TODO change baseURL to your own
  baseURL: "https://example.com/",
  timeout: 1000,
});

const Index = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      disable: "mobile",
      once: true,
    });
  }, []);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!data.name || !data.email || !data.message) {
        alert("Please fill all the fields");
        return;
      }
      const res = await axiosInstance.post("/", data);
      console.log(res);
      setData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main
      meta={
        <Meta
          title="Xresilient"
          description="WEB3 Development Services"
        />
      }
    >
      <section
        id="home"
        className={`bg-black min-h-screen w-full px-4 lg:px-[8%] flex flex-col justify-center items-center ${styles.linebg}`}
      >
        <div
          className={`flex flex-col items-center w-full md:w-[50%] justify-center gap-16`}
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          <h4 className="text-center text-4xl md:text-6xl text-white font-bold font-spGrotesk">
            End-to-End Solution For Web3 Development
          </h4>
          <span className="text-white/50 text-center text-xl md:text-2xl font-spGrotesk font-light">
            Designing, Development, Deployment of NFT&apos;s , Daap, Smart
            Contract Ready to work with Entertainment, Crypto, Financial
            Industry
          </span>
          <button className="bg-white text-black text-xl md:text-2xl px-16 py-4 rounded-full h-fit font-chillax font-medium">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-1 gap-20 md:gap-16 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20 w-full">
          {/* TODO provide image source as prop, see first one for url example and second for static asset */}
          <Card
            title="Metaverse"
            image="https://source.unsplash.com/300x300/?metaverse"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <Card
            title="NFT Collection"
            image="/assets/LooperBG.png"
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <Card title="DAPP" data-aos="fade-up" data-aos-duration="1000" />
          <Card title="Token" data-aos="fade-up" data-aos-duration="1200" />
        </div>
      </section>

      <section
        id="services"
        className={`bg-black min-h-screen w-full px-4 lg:px-[8%] flex flex-col mt-10 md:mt-20 gap-20 pb-40 ${styles.revlinebg}`}
      >
        <h2 className="text-white text-4xl md:text-6xl font-extrabold text-center font-chillax">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TODO provide image source as prop, see first one for  example */}
          <SmallServiceCard
            image="https://source.unsplash.com/300x300/?web3"
            title="Token Development"
            description="With our token development services, you can transform your business, unlock new revenue streams, and engage with a global community of digital enthusiasts. Discover the power of tokens with Xresilient, your trusted partner in blockchain innovation."
          />
          <SmallServiceCard />
          <SmallServiceCard
            image="https://source.unsplash.com/300x300/?web3"
            title="NFT Designin, Development"
            description="With our NFT design and development services, you can unleash your creativity, establish digital ownership, and engage with a global community of collectors and enthusiasts. Discover the power of NFTs with Xresilient, your trusted partner in unlocking the potential of the digital art and collectibles market."
          />
          <SmallServiceCard />
        </div>
        <div className="grid rid-cols-1 md:grid-cols-2 gap-8">
          {/* TODO provide image source as prop, see first one for  example */}
          <LargeServiceCard
            image="https://source.unsplash.com/300x300/?web3"
            title={
              <span>
                Web2 to web3 <br />
                Transformation
              </span>
            }
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate corrupti tempora doloremque nemo ratione? Earum cumque deserunt cum dignissimos unde, dolore, excepturi non iure et, veritatis officia eveniet consequatur."
          />
          <LargeServiceCard />
        </div>
      </section>

      <section
        className="bg-black min-h-screen w-full px-4 lg:px-[20%] flex flex-col mt-10 md:mt-20 gap-28 items-center"
        id="about"
      >
        <h2 className="text-white text-4xl md:text-6xl font-extrabold font-chillax text-center">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row md:gap-40 gap-8">
          <AboutCard
            image="https://source.unsplash.com/300x300/?web3"
            name="John Doe"
            role="CEO"
            data-aos="fade-right"
            data-aos-duration="600"
          />
          <AboutCard data-aos="fade-left" data-aos-duration="600" />
        </div>
      </section>

      <section
        className={`bg-black min-h-screen w-full px-4 lg:px-[8%] mt-10 md:mt-20 items-center ${styles.toprightgradient}`}
        id="contact"
      >
        <div className="flex flex-col items-center w-full justify-center gap-20 border-4 border-primary rounded-2xl pt-8 px-4 md:px-20 pb-40">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold font-chillax text-center">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row md:gap-20 gap-8 w-full">
            <div
              className="flex flex-col gap-8 text-left md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h3 className="text-white text-2xl md:text-6xl font-extrabold font-chillax">
                Let&apos;s discuss on something
                <span className="text-primary"> cool</span> together
              </h3>
              <span className="text-white text-xl md:text-2xl font-bold p-8">
                <HiMail className="text-primary text-3xl inline-block mr-2" />
                John@gmail.com
              </span>
              <span className="text-white text-xl md:text-2xl font-bold p-8 border-4 border-primary rounded-2xl bg-primary/50 w-3/4">
                <HiPhone className="text-primary text-3xl inline-block mr-2" />
                +91 1234567890
              </span>
              <span className="text-white text-xl md:text-2xl font-bold p-8">
                <HiLocationMarker className="text-primary text-3xl inline-block mr-2" />
                123, Lorem ipsum dolor sit amet.
              </span>
            </div>
            <div
              className="flex flex-col gap-8 bg-white rounded-2xl p-8 w-full border-primary border-4 md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h5 className="text-black text-lg md:text-2xl">Your Name</h5>
              <input
                type="text"
                className="bg-white text-black text-xl md:text-2xl px-4 py-2 rounded-2xl border-2 border-primary"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <h5 className="text-black text-lg md:text-2xl">Your Email</h5>
              <input
                type="email"
                className="bg-white text-black text-xl md:text-2xl px-4 py-2 rounded-2xl border-2 border-primary"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <h5 className="text-black text-lg md:text-2xl">Your Message</h5>
              <textarea
                className="bg-white text-black text-xl md:text-2xl px-4 py-2 rounded-2xl border-2 border-primary"
                name="message"
                value={data.message}
                onChange={handleChange}
                // give default rows
                rows={5}
              />
              <button
                onClick={handleSubmit}
                className="bg-primary text-white text-lg md:text-2xl px-4 md:px-16 py-4 rounded-2xl h-fit w-fit flex items-center gap-2 hover:bg-primary/80 transition-all"
              >
                <BsFillSendFill className="text-lg md:text-2xl inline-block mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black w-full px-4 lg:px-[8%] flex flex-col mt-10 md:mt-20 gap-10 text-left border-t-2 border-gray-500 p-8">
        <h5 className="text-white text-xl md:text-2xl font-bold md:w-[40%]">
          X-Resilient
        </h5>
        <span className="text-gray-300 text-base md:text-xl md:w-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          minus officia optio exercitationem nobis ipsa unde ratione, impedit
        </span>
        <span className="text-gray-300 text-center">© 2023 X-Resilient</span>
      </section>
    </Main>
  );
};

export default Index;
