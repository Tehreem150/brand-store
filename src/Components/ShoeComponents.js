import React from "react";
import bag from "../images/bag.png";
import heart from "../images/heart.png";
import compare from "../images/compare.png";
const ShoeComponents = () => {
  return (
    <section className="container mt-0">
      <div className="flex">
        <div className="">
          <div className="product-cart-wrap mb-30">
            <div className="product-img-action-wrap">
              <div className="product-img product-img-zoom">
                <a href="#">
                  <img
                    className="default-img"
                    src="https://demo2.swissbraintec.ch/next-backend/storage/products/2024/04/1713342081_6d73dae47c84479eb289a1898a3b4f4d.png"
                    alt=""
                    height="200"
                    width="200"
                  />
                  <img
                    className="hover-img"
                    src="https://demo2.swissbraintec.ch/next-backend/storage/products/2024/04/1713342081_6d73dae47c84479eb289a1898a3b4f4d.png"
                    alt=""
                    height="200"
                    width="200"
                  />
                </a>
              </div>
              <div className="product-badges product-badges-position product-badges-mrg">
                {/* <span className="hot">10% Off</span> */}
                <span className="sale">Sale</span>
              </div>
              <div className="product-action-1">
                <button
                  aria-label="Add To Wishlist"
                  className="action-btn hover-up"
                >
                  <div className="  flex justify-center">
                    <img src={heart} className="w-4 " />
                  </div>{" "}
                </button>
                <button aria-label="Compare" className="action-btn hover-up">
                  <div className="  flex justify-center">
                    <img src={compare} className="w-4 " />
                  </div>{" "}
                </button>
              </div>

              <div className="variations-box">
                <div className="varaiation-item">
                  <img
                    src="https://demo2.swissbraintec.ch/next-backend/storage/products/2024/04/1713342081_6d73dae47c84479eb289a1898a3b4f4d.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </div>
                <div className="varaiation-item">
                  <img
                    src="https://demo2.swissbraintec.ch/next-backend/storage/products/2024/04/1713342081_6d73dae47c84479eb289a1898a3b4f4d.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </div>
                <div className="varaiation-item">
                  <img
                    src="https://demo2.swissbraintec.ch/next-backend/storage/products/2024/04/1713342081_6d73dae47c84479eb289a1898a3b4f4d.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </div>
                <div className="varaiation-item">
                  <a href="" className="view_more_link">
                    +3 more
                  </a>
                </div>
              </div>
            </div>

            <div className="product-content-wrap">
              <h2>
                <a href="#">GUCCI FLORA GORGEOUS MAGNOLIA, EAU DE PARFUM</a>
              </h2>
              <div className="rating-result">
                <i className="fas fa-star me-1 text-warning"></i>
                <i className="fas fa-star me-1 text-warning"></i>
                <i className="fas fa-star me-1 text-warning"></i>
                <i className="fas fa-star me-1 text-warning"></i>
                <i className="fas fa-star me-1 bg-star"></i>
              </div>
              <div className="product-price">
                <span>CHF100.00</span>
                <span className="old-price">CHF10.00</span>
              </div>

              <div className="product-action-1 show mt-4">
                <button
                  aria-label="Add To Cart"
                  className="action-btn hover-up"
                >
                  <div className="  flex justify-center">
                    <img src={bag} className="w-6 " />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoeComponents;
