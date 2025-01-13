import anime from "animejs";
import { useEffect } from "react";

function Partwo() {
  useEffect(() => {
    let animationsPlayed = false;

    const handleScrool = () => {
      if (animationsPlayed) {
        return;
      }
      const titleElement = document.querySelector(".title-animation");
      const cardElements = document.querySelectorAll(".card-animation");

      const titleOffset = titleElement.getBoundingClientRect().top;
      const cardOffset = cardElements[0].getBoundingClientRect().top;

      const triggerOffset = window.innerHeight * 0.7;

      if (titleOffset < triggerOffset) {
        anime({
          targets: ".title-animation",
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: ["easeInOutQuad"],
          duration: 800,
          delay: anime.stagger(200),
          complete: () => {
            animationsPlayed = true;
          },
        });
      }

      if (cardOffset < triggerOffset) {
        anime({
          targets: ".card-animation",
          translateX: [-50, 0],
          opacity: [0, 1],
          easing: ["easeInOutQuad"],
          duration: 800,
          delay: anime.stagger(200, { start: 300 }),
          complete: () => {
            animationsPlayed = true;
          },
        });
      }
    };

    window.addEventListener("scroll", handleScrool);
    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return (
    <div>
      <section className="relative ">
        <div className="relative pt-72 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center "
            style={{ backgroundImage: 'url("img/slider/slider2.jpg")' }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black"></span>
            <span className="hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black"></span>

            <div className="container relative mx-auto ">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6-/12 px-4 py-6 ml-auto mr-auto text-center pt-32">
                  <h1 className="text-white font-semibold text-5xl title-animation">
                    Lorem ipsum dolor sit amet.
                  </h1>

                  <p className="mt-4 text-lg text-white title-animation ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-10 -mt-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
                <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg card-animation">
                  <div className="p-3 text-center items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-16 h-16 p-2 rounded-full text-center bg-slate-900 text-white
    // "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>

                  <h6 className="text-xl font-lora font-semibold p-2 ">
                    {" "}
                    Lorem ipsum dolor sit.
                  </h6>
                  <p className="text-sm font-roboto p-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, culpa!
                  </p>
                </div>
              </div>

              <div className="lg:pt-4 pt-6 w-full md:w-4/12 px-4 text-center card-animation ">
                <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="p-3 text-center items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-16 h-16 p-2 rounded-full text-center bg-slate-900 text-white
// "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>

                  <h6 className="text-xl font-lora font-semibold p-2 ">
                    {" "}
                    Lorem ipsum dolor sit.
                  </h6>
                  <p className="text-sm font-roboto p-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, culpa!
                  </p>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center card-animation ">
                <div className="relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="p-3 text-center items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-16 h-16 p-2 rounded-full text-center bg-slate-900 text-white
// "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>

                  <h6 className="text-xl font-lora font-semibold p-2 ">
                    {" "}
                    Lorem ipsum dolor sit.
                  </h6>
                  <p className="text-sm font-roboto p-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, culpa!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Partwo;
