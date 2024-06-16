import { CgOverflow } from "react-icons/cg";
import Header from "./Header";
import { useMediaQuery } from 'react-responsive';

function About() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1524 });
  

  return (
    <>
    <Header/>
    <div className={isDesktopOrLaptop ? "desktop-class" : "mobile-class"}>
      
      <div className={`bg-gray-400 bg-opacity-20 ${isDesktopOrLaptop ? 'h-[670px] w-[1500px]' : 'h-auto w-[90%]'} absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-justify p-13 md:p-10 rounded-2xl leading-7 max-w-full word-break-break-word`}>
      <p className={`text-[6px] p-5 md:text-base base:text-xl:text-xs ${isDesktopOrLaptop ? '' : 'xs:text-base md:text-sm'}`}>
        <strong>About Verizonth Innovations</strong>
        <br /><br />
        Our Journey
        Verizonth Innovations started with a simple yet ambitious goal: to create smart home devices that could seamlessly integrate into everyday life. Over the years, the company expanded its vision, delving into various segments of the technology industry. Today, TechNova offers a wide array of products and services that cater to both consumers and businesses, including high-performance laptops, cutting-edge smartphones, smartwatches, home automation devices, productivity software, AI-driven solutions, and cloud services.
        <br /><br />
        Our Mission and Vision :
        Our mission at Verizonth Innovations is to empower individuals and businesses by providing advanced technology solutions that enhance connectivity, productivity, and sustainability. We envision a future where technology serves as a catalyst for positive change, creating a smarter, more connected world. By leveraging the latest advancements in artificial intelligence (AI), machine learning, and the Internet of Things (IoT), we aim to develop products that are not only at the forefront of innovation but also intuitive and user-friendly.
        <br /><br />
        Commitment to Innovation :
        Innovation is at the heart of everything we do at Verizonth Innovations. Our dedicated team of over 5,000 employees worldwide includes some of the brightest minds in engineering, design, and product management. Together, they work tirelessly to bring the latest technological advancements to our products, ensuring that we remain at the cutting edge of the industry. We invest heavily in research and development, constantly exploring new possibilities and pushing the boundaries of what technology can achieve.
        <br /><br />
        Product Excellence :
        Our hardware portfolio includes high-performance laptops designed for professionals and creatives, smartphones that combine sleek design with powerful functionality, smartwatches that offer comprehensive health and fitness tracking, and home automation devices that bring convenience and efficiency to everyday life. On the software side, we develop productivity tools, mobile applications, AI-driven analytics, and cloud services that enhance business operations and personal efficiency.
        <br /><br />
        Sustainability and Social Responsibility :
        At Verizonth Innovations, we believe that technological advancement should go hand in hand with sustainability and social responsibility. We are committed to minimizing our environmental footprint through eco-friendly practices and sustainable product designs. Our initiatives include reducing e-waste, utilizing renewable energy sources, and creating products with longer lifespans. We also actively support community programs and initiatives that promote education, digital literacy, and environmental conservation.
      </p>
      </div>
    </div>  
    </>
  );
}

export default About;
