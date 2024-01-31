import Image from "next/image";
import Link from "next/link";
import React from "react";

const Faq = () => {

  const FaqList = [
    {
      ques: "How does interior-design.ai AI work?",
      ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
    },
    {
      ques: "Can interior-design.ai really save you time and money?",
      ans: "Our app offers a cost-effective solution for both personal and professional use. For personal use, even upgrading to a premium package is still less expensive than hiring professionals. With our app, you can visualize how your home will look with different furniture, decorations, and backyard designs, without scrolling through endless websites for inspiration.",
    },
    {
      ques: "Does it work on any device? (PC, Laptop, iOS, MacOS, Android)",
      ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
    },
    {
      ques: "How easy is the process?",
      ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
    },
    {
      ques: "How can AI decoration enhance my home?",
      ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
    },
    {
      ques: "Does it work with architectural plans and sketches?",
      ans: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
    },
  ];


  return (
    <div className="shadow border rounded-3xl text-alpha mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4 bg-[#FFB6AD] mt-8 md:mt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-4 ">
        <div className="h-full">
          <p className="text-[16px] font-semibold leading-[33px] mb-4 uppercase tracking-[0.25em] font-alpha">
            FAQS
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-96 lg:leading-[55px] mb-2">
            Any questions?Check out the FAQs
          </h1>
        </div>
        <div className="h-full">
          <ul className="mb-8">
            {FaqList.map((item, index) => {
              return (
                <li key={index} className="border-b">
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 px-4 py-3 marker:content-none hover:cursor-pointer select-none">
                      <span className="text-2xl md:leading-[28px]">
                        {item.ques}
                      </span>
                      <svg
                        className="w-7 h-7 p-2 rounded-full text-black bg-white/5 hover:bg-alpha transition-all duration-300 rotate-90 group-open:-rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </summary>
                    <article className="px-4 pb-4">
                      <p className="text-base">{item.ans}</p>
                    </article>
                  </details>
                </li>
              );
            })}
          </ul>
          <Link className="text-2xl md:leading-[28px] px-4 underline flex items-center gap-2 font-alpha" href={'#'}>More FAQs
            <Image
              className="object-contain rotate-180"
              src={"/icon/arrow(1).svg"}
              height={16}
              width={16}
              alt=""
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
