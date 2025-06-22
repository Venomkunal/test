// src/components/Navbar.jsx
import Link from 'next/link';
import '../styles/css/header.css'; 
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="mainnav">
      <div className="mainnavdiv"> {/* Container */}
        {/* Logo Section */}
        <div className="mainnavdivlogo"> 
          <Link href="/">
            <Image className='img' src="/images/logo.png" alt="India Bazaar Guy" width={100} height={100} />
            <span>India Bazaar Guy</span>
          </Link>
        </div>

        {/* Searchbar Section */}
        <div className="search-bar">
          <input type="text" placeholder="Search products..." className="search-input" />
          <button className="search-button">Search</button>
        </div>

        {/* Horizontal Navbar */}
        <div className="Horizontalnavbar">
          <ul className="nav-links"> {/* Start of ul nav horizontal bar */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
              {/* Categories dropdown menu */}
              <ul className="dropdown-menu">
                <li>
                  <Link href="/categories/allproducts">All Products</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/categories/menclothes">Men Clothes</Link>
                      <ul className="submenu">
                        <li><Link href="/tshirtmens">T-Shirt</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/categories/womenclothes">Women Clothes</Link>
                      <ul className="submenu">
                        <li><a href="/tshirtwomens">T-Shirt</a></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/categories/kidsclothes">Kids Clothes</Link>
                      <ul className="submenu">
                        <li><Link href="/tshirtkids">T-Shirt</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link href="/categories/menclothes">Men Clothes</Link></li>
                <li><Link href="/categories/womenclothes">Women Clothes</Link></li>
                <li><Link href="/categories/kidsclothes">Kids Clothes</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul> {/* End of ul nav horizontal bar */}
        </div>
      </div>

      {/* Cart Section */}
      <div className="nav-cart">
        <Link href="/cart" className="cart-icon">
          <Image src="/images/cart.png" alt="Cart" width={50} height={50} />
        </Link>
      </div>

      {/* Account Links Section */}
      <div className="account-links">
        <button><Link href="/login">log In</Link></button>
        <button><Link href="/signup">sign Up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
