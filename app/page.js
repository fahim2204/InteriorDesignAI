'use client'

import Hero from "@/components/Hero";
import Info from "@/components/Info";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import HomeInterior from "@/components/HomeInterior";
import AIInterior from "@/components/AIInterior";
import AIExterior from "@/components/AIExterior";
import CuttingEdge from "@/components/CuttingEdge";
import Service from "@/components/service";
import HomeDesign from "@/components/HomeDesign";
import AIRedesign from "@/components/AIRedesign";
import InstantRedesign from "@/components/InstantRedesign";
import Faq from "@/components/Faq";
import Plan from "@/components/Plan";
import AIMagic from "@/components/AIMagic";
import Reviews from "@/components/Reviews";
import BottomDesign from "@/components/BottomDesignPart";


export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <WhyChooseUs />
      <HomeInterior />
      <AIInterior />
      <CuttingEdge />
      <Service />
      <HomeDesign />
      <AIRedesign />
      <Faq />
      <AIExterior />
      <InstantRedesign />
      <Plan />
      <AIMagic />
      <Reviews />
      <BottomDesign />
    </>
  );
}
