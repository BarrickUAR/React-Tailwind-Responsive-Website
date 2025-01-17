import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import anime from "animejs/lib/anime.es.js";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductCard from "../../components/ProductCard";
const productData = [
  {
    id: 1,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/1.jpg",
  },
  {
    id: 2,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/2.jpg",
  },
  {
    id: 3,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/3.jpg",
  },
  {
    id: 4,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/4.jpg",
  },
  {
    id: 5,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/5.jpg",
  },
  {
    id: 6,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/6.jpg",
  },
  {
    id: 7,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/7.jpg",
  },
  {
    id: 8,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/8.jpg",
  },
  {
    id: 9,
    title: "Product 1 , Turkey / Istanbul",
    price: "$500",
    image: "/img/9.jpg",
  },
];
function ProductSection() {
  useEffect(() => {
    let animationsPlayed = false;

    const handleScroll = () => {
      if (animationsPlayed) {
        return;
      }

      const titleElement = document.querySelectorAll(".topproduct");

      const titleOffset = titleElement[0].getBoundingClientRect().top;

      const TriggerOffset = window.innerHeight * 0.7;

      if (titleOffset < TriggerOffset) {
        anime({
          targets: ".topproduct",
          translateX: 0,
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 800,
          delay: anime.stagger(100, { from: "last" }),
          complete: () => {
            animationsPlayed = true;
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard title={product.title} image={product.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="relative">
        <div className="relative pt-72 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("img/slider/slider3.jpg")' }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black"></span>
            <span className="hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black"></span>

            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6-/12 px-4  ml-auto mr-auto text-center  pt-32">
                  <h1 className="text-white font-semibold text-5xl title-animation">
                    lorem ipsum
                  </h1>

                  <p className="mt-4 text-lg text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-primary-dark">
        <div className="  p-3 text-center">
          <p className="text-4xl    mt-6 mb-20 ">
            <span className="border-b-2 font-lora  border-gray-800 dark:border-slate-300 text-black dark:text-white">
              Top Product
            </span>
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {productData.map((product) => (
            <div className="topproduct" key={product.id}>
              <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductSection;
// <div className="topproduct" key={product.id}>
//   <ProductCard
//     title={product.title}
//     image={product.image}
//     price={product.price}
//   />
// </div>
