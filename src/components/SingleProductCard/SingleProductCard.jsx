import React from "react";
import styles from "./singleproductcard.module.css";
import Image from "next/image";
import Link from "next/link";

const SingleProductCard = () => {
  return (
    <div className={styles["singleProductMain"]}>
      <div className={styles["productImageDiv"]}>
        <Link href="#">
          <Image
            className={styles["productImage"]}
            src="/images/shoes_1.webp"
            alt="shoes"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className={styles["productContent"]}>
        <h4 className={styles["brandName"]}>
          {" "}
          <Link href="#">Nike</Link>{" "}
        </h4>
        <h5 className={styles["productTitle"]}>
          {" "}
          <Link href="#">Trendy Sports Shoes</Link>{" "}
        </h5>
        <div className={styles["priceNDiscount"]}>
          <span className={styles["sellingPrice"]}>&#8377;499 </span>
          <span className={styles["originalMaxPrice"]}>&#8377;799</span>
          <span className={styles["discount"]}>15 %</span>
        </div>
        <p className={styles["productSize"]}>
          <span className={styles["sizeSpan"]}>Size: </span>
          <span className={styles["sizeNumberSpan"]}>6,7,8,9,10,11</span>
        </p>
      </div>
    </div>
  );
};

export default SingleProductCard;
