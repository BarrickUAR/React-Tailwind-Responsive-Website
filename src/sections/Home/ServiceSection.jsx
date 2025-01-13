import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function ServiceSection() {
  useEffect(() => {
    const animateImage = () => {
      anime({
        targets: ".service-item",
        translateX: [100, 0],
        opacity: [0, 1],
        easing: ["easeInOutQuad"],
        duration: 800,
        delay: anime.stagger(200, { start: 300 }),
      });
    };
    animateImage();
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto p-8">
        <div className=" p-3 text-center">
          <p className="text-4xl  m-10  ">
            <span className=" font-lora text-black dark:text-white border-b-2 border-black  dark:border-white ">
              Our Services
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="text-center p-4 rounded-xl service-item ">
            <svg
              className="w-24 h-24 mx-auto p-3 mb-4 text-secondary-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">
              Service 1
            </h3>
            <p className="dark:text-white text-black">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl service-item ">
            <svg
              className="w-24 h-24 mx-auto p-3 mb-4 text-secondary-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">
              Service 1
            </h3>
            <p className="dark:text-white text-black">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl service-item ">
            <svg
              className="w-24 h-24 mx-auto p-3 mb-4 text-secondary-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">
              Service 1
            </h3>
            <p className="dark:text-white text-black">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="text-center p-4 rounded-xl service-item ">
            <svg
              className="w-24 h-24 mx-auto p-3 mb-4 text-secondary-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">
              Service 1
            </h3>
            <p className="dark:text-white text-black">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
