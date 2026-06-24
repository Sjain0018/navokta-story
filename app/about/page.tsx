"use client";
import React from 'react';
import VerticalAlternatingTimeline from '@/components/VerticalAlternatingTimeline';
import Teamcore from '@/components/Teamcore';
import FloatingActionButton from '@/components/FloatingActionButton';
import Header from '@/components/Header';

const AboutPage: React.FC = () => {
  return (
    <div>
        <Header />
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <VerticalAlternatingTimeline />
        <Teamcore />
        <FloatingActionButton />
      </div>
    </div>
    </div>
  );
};

export default AboutPage;