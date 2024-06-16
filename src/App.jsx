import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Carousel from './assets/components/Main';
import Products from './assets/components/Products';
import Pro1Image from './assets/image/pro1.png';
import Pro2Image from './assets/image/pro2.png';
import Pro3Image from './assets/image/pro3.png';
import Pro4Image from './assets/image/pro4.png';
import Pro5Image from './assets/image/pro5.png';



function App() {
  let slides = [
    { image: Pro1Image, text: "Overview : Verizonth Innovations is a leading company in the technology sector, specializing in cutting-edge hardware and software solutions designed to enhance everyday life and business productivity. The company focuses on integrating advanced technologies like artificial intelligence, machine learning, and Internet of Things (IoT) into its products to offer seamless and intuitive user experiences." },
    { image: Pro2Image, text: "Our Mission : Our mission is to create innovative technology solutions that empower individuals and businesses to achieve their full potential. We strive to develop products that are user-friendly, reliable, and sustainable, while also contributing to the greater good of society. By leveraging the latest advancements in technology, we aim to make a positive impact on the world and drive positive change in the industry." },
    { image: Pro3Image, text: "History : Founded in 2010 by visionary entrepreneur Sarah Thompson, TechNova Innovations began as a small startup focused on developing smart home devices. Over the years, the company has expanded its product line and entered new markets, evolving into a global technology powerhouse. Our commitment to innovation and excellence has driven significant growth, with a presence in over 50 countries and a diverse portfolio of products." },
    { image: Pro4Image, text: "Culture : At Verizonth Innovations, our culture is built on the pillars of innovation, integrity, and inclusivity. We believe that the best ideas come from diverse perspectives and encourage our employees to think outside the box. Our open and transparent communication fosters trust and collaboration across all levels of the organization. We are committed to making a positive impact on society and the environment" },
    { image: Pro5Image, text: "Mission Statement : At TechNova Innovations, our mission is to empower individuals and businesses through innovative technology solutions that enhance connectivity, productivity, and sustainability. We are dedicated to creating products that seamlessly integrate into the lives of our users, fostering a smarter, more connected world where technology serves as a force for good." },
   ]
  
  return (
    <>
    <Header /> 
    <div className='w-[50%] m-auto pt-11'>      
        <Carousel slides={slides} />      
    </div> 
    <Footer />
    </>
  ) 
}

export default App
