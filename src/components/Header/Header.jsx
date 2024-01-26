"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { RiAppleFill, RiFireFill } from "react-icons/ri";
import { GiSonicShoes } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const categories = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Category", subMenu: true },
  { id: 4, name: "Shop", url: "/shop" },
  { id: 5, name: "About us", url: "/about-us" },
  { id: 6, name: "Contact us", url: "/contact-us" },
];

const subMenuData = [
  {
    id: 1,
    name: "Running Shoes",
    description: "Running cleanses the mind and body.",
    url: "/products/running-shoes",
    icon: <RiAppleFill className={styles["dropDownItemIcon"]} />,
  },
  {
    id: 2,
    name: "Casual shoes",
    description:
      "Casual shoes look great and are comfortable to wear throughout the day.",
    url: "/products/casual-shoes",
    icon: <GiSonicShoes className={styles["dropDownItemIcon"]} />,
  },
  {
    id: 3,
    name: "Sneakers",
    description:
      "Sneakers are versatile and can be worn with a variety of outfits.",
    url: "/products/sneakers",
    icon: <RiFireFill className={styles["dropDownItemIcon"]} />,
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState("translate-y-0");

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavbarScroll = () => {
    const currentScrollY = window.scrollY;
    // console.log(currentScrollY);
    if (currentScrollY > 200) {
      if (currentScrollY > lastScrollY) {
        setShow("-translate-y-full");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);
    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, [lastScrollY]);
  return (
    <header className={`${styles["headerMain"]} ${show}`}>
      <nav
        className={`${styles["navbarMain"]} ${
          isMobileMenuOpen ? styles["active"] : ""
        }`}
      >
        <div className={`${styles["container"]} container`}>
          <Link href="/" className={styles["navbarBrand"]}>
            <div className={styles["brandIcon"]}>
              <Image
                className={styles["logoImage"]}
                src="images/logo.svg"
                alt="logo"
                height={100}
                width={100}
                layout="responsive"
              />
            </div>
            <h2 className={styles["brandTitle"]}>Shoes Store</h2>
          </Link>
          <div className={styles["navbarToggller"]}>
            <button
              type="button"
              className={`${styles["navbarToggleButton"]}`}
              onClick={handleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className={styles["navbarMenuItems"]}>
            <ul className={styles["MenuItemsList"]}>
              {categories.map((item) => (
                <li
                  key={item.id}
                  className={`${styles["singleMenuList"]} ${styles["navDropdown"]}`}
                >
                  <Link
                    href={item?.url ? item.url : ""}
                    className={styles["singleMenuItem"]}
                  >
                    {item.name}
                  </Link>
                  {item?.subMenu && (
                    <React.Fragment>
                      <FaChevronDown
                        className={styles["dropdownIcon"]}
                        size={16}
                      />
                      <ul className={styles["dropdownMenu"]}>
                        {subMenuData.map((subItem) => (
                          <li
                            className={styles["dropdownMenuItem"]}
                            key={subItem.id}
                          >
                            <div className={styles["dropDownItemIconDiv"]}>
                              {subItem.icon}
                            </div>
                            <div className={styles["dropDownItemRightPart"]}>
                              <Link
                                href={subItem.url}
                                className={styles["dropdownMenuName"]}
                              >
                                {subItem.name}
                                <span className={styles["linkOverLap"]}></span>
                              </Link>
                              <p className="mt-1 text-gray-600">
                                {subItem.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles["navActionButtons"]}>
              <button className="commonBtn fill">Login</button>

              <div className={styles["cartActionDiv"]}>
                <FaRegHeart size={25} />
                <span className={styles["cartCount"]}>10</span>
              </div>
              <div className={styles["cartActionDiv"]}>
                <AiOutlineShoppingCart size={25} />
                <span className={styles["cartCount"]}>5</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
