function Footer() {
    return (
    <footer className="w-full h-35 bg-gray-300 shadow fixed bottom-0 py-5 ">
        <div className="testimoni flex flex-col md:flex-row items-center mt-2">
            <img className="rounded-full w-20 h-20 object-cover mx-8 my-2 md:my-0" src="./src/assets/image/jane.jpg" alt="Jane Pricilia" />
            <p className="text-sm px-8"><strong>Jane Pricilia, IT Director at GlobalCorp</strong><br />The powerful performance and stunning 4K display make graphic design tasks a breeze. I can work on multiple projects simultaneously without any lag. It's truly a game-changer for creatives!</p>
            <img className="rounded-full w-20 h-20 object-cover mx-8 my-2 md:my-0" src="./src/assets/image/john.jpg" alt="John Smith" />
            <p className="text-sm px-8"><strong>John Smith, Entrepreneur</strong><br />The Verizonth X is the best smartphone I've ever owned. The camera quality is exceptional, and the 5G connectivity ensures I'm always connected. The battery life is impressive</p>
            <img className="rounded-full w-20 h-20 object-cover mx-8 my-2 md:my-0" src="./src/assets/image/Sarah.jpg" alt="Sarah Kim" />
            <p className="text-sm px-8"><strong>Sarah Kim, COO of SmartHome Inc</strong><br />Integrating Verizont's Verizont Hub into our smart home systems has been a seamless experience. The compatibility and ease of use have significantly enhanced our product offerings</p>
        </div>
    </footer>
    );
}

export default Footer;