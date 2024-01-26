"use client";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { RiAppleFill } from "react-icons/ri";

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
  },
  {
    id: 2,
    name: "Casual shoes",
    description:
      "Casual shoes look great and are comfortable to wear throughout the day.",
    url: "/products/casual-shoes",
  },
  {
    id: 3,
    name: "Sneakers",
    description:
      "Sneakers are versatile and can be worn with a variety of outfits.",
    url: "/products/sneakers",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={styles["headerMain"]}>
      <nav
        className={`${styles["navbarMain"]} ${
          isMobileMenuOpen ? styles["active"] : ""
        }`}
      >
        <div className={`${styles["container"]} container`}>
          <a href="/" className={styles["navbarBrand"]}>
            <div className={styles["brandIcon"]}>
              <Image
                className={styles["logoImage"]}
                src="images/logo.svg"
                alt="logo"
                height={0}
                width={0}
              />
            </div>
            <h2 className={styles["brandTitle"]}>Shoes Store</h2>
          </a>
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
                  <a href={item?.url} className={styles["singleMenuItem"]}>
                    {item.name}
                  </a>
                  {item.subMenu && (
                    <>
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
                              <RiAppleFill
                                className={styles["dropDownItemIcon"]}
                              />
                            </div>
                            <div className={styles["dropDownItemRightPart"]}>
                              <a href={subItem.url} className={styles["dropdownMenuName"]}>
                                {subItem.name}
                                <span className="absolute inset-0"></span>
                              </a>
                              <p className="mt-1 text-gray-600">
                                {subItem.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
