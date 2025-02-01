import {} from "react";
import classes from "./Header.module.css";
import { FaLocationDot } from "react-icons/fa6";
import LowerHeader from "./LowerHeader.jsx";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* Logo Section */}
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <FaLocationDot size={25} />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Kenya</span>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <FaSearch size={25} />
          </div>

          {/* Other Section */}
          <div className={classes.order__container}>
            <a href="#" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="USA Flag"
              />
              <select>
                <option value="EN">EN</option>
              </select>
            </a>
            <a href="#">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="#">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            <a href="#" className={classes.cart}>
              <FaShoppingCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lower Header */}
      <LowerHeader />
    </>
  );
};

export default Header;
