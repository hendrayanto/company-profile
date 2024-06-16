import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';  

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/products", label: "Products" },
  { path: "/team", label: "Team" },
];

const DesktopMenu = () => (
  <ul className="flex items-center justify-end text-lg font-bold list-none">
    {menuItems.map((item) => (
      <li className="mr-7" key={item.path}>
        <Link to={item.path} className="text-black no-underline hover:text-purple-600 hover:uppercase active:text-blue-500">
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const MobileMenu = () => (
  <div className="dropdown">
    <button className="dropbtn">Menu</button>
    <div className="dropdown-content">
      {menuItems.map((item) => (
        <a href={item.path} key={item.path}>{item.label}</a>
      ))}
    </div>
  </div>
);

function Header() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <header className="flex bg-gray-200 shadow-md">
      <nav className="flex justify-between p-2 w-full">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-20 md:w-24 lg:w-28 h-15 ml-5" />
          <h1 className="ml-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Verizonth</h1>
        </div>
        {isDesktopOrLaptop && <DesktopMenu />}
        {isTabletOrMobile && !isDesktopOrLaptop && <MobileMenu />}
      </nav>
    </header>
  );
}

export default Header;
