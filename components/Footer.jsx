import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-alpha bg-[#EADDD3] mx-auto max-w-7xl py-10 md:py-16 lg:py-24 px-4 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 p-8">
        {/* Logo Section */}
        <div className=" col-span-1">
          <p className="text-alpha text-[20px] font-bold md:leading-[33px] mb-2 font-['Inter']">
            interior-design.ai
          </p>
          <p className="text-alpha text-[18px] text-justify md:leading-[27px] mb-2 ">
            {" "}
            Upload your photo, choose a mode and pick from over 40 design
            styles. Reimagine Any Home Interior, Exterior, or Garden using AI.
          </p>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div>
              <p className="text-lg font-semibold mb-4">Menu</p>
              <ul className="flex flex-col mb-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/plan">Pricing Plans</Link>
                </li>
                <li>
                  <Link href="/affiliate">Affiliate Program</Link>
                </li>
                <li>
                  <Link href="/api">API</Link>
                </li>
                <li>
                  <Link href="/sitemap">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">Use Cases</p>
              <ul className="flex flex-col mb-4">
                <li>
                  <Link href="/interior-design-ai">Interior Design AI</Link>
                </li>
                <li>
                  <Link href="/exterior-ai">Exterior AI</Link>
                </li>
                <li>
                  <Link href="/landscaping-ai">Landscaping AI</Link>
                </li>
                <li>
                  <Link href="/real-estate-ai">Real Estate AI</Link>
                </li>
                <li>
                  <Link href="/decor-staging-ai">Decor Staging</Link>
                </li>
                <li>
                  <Link href="/furniture-removal-ai">AI Furniture Removal</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">Legal</p>
              <ul className="flex flex-col mb-4">
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">Social</p>
              <ul className="flex flex-col mb-4">
                <Link href="https://www.instagram.com/" target="_blank">
                  Instagram
                </Link>
                <Link href="https://twitter.com/" target="_blank">
                  Twitter
                </Link>
                <Link href="https://www.tiktok.com/" target="_blank">
                  TikTok
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  LinkedIn
                </Link>
                <Link href="https://www.youtube.com/" target="_blank">
                  YouTube
                </Link>
                <Link href="https://www.pinterest.com/" target="_blank">
                  Pinterest
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <p className="text-alpha text-[18px] leading-[33px] mb-2">©2023.. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
