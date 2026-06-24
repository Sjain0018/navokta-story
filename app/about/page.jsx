"use client";
import React from "react";
import Header from "@/components/Header";
import VerticalAlternatingTimeline from "@/components/About/VerticalAlternatingTimeline";
import Teamcore from "@/components/About/Teamcore";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <VerticalAlternatingTimeline />
      <Teamcore />
    </div>
  );
};

export default AboutPage;
