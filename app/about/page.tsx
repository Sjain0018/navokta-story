"use client";
import React from 'react';  
import Header from '@/components/Header';
import VerticalAlternatingTimeline from '@/components/About/VerticalAlternatingTimeline';

const AboutPage: React.FC = () => {
  return (
    <div>
        <Header />
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <VerticalAlternatingTimeline />
      </div>
    </div>
    </div>
  );
};

export default AboutPage;