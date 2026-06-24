import React from 'react';
import VerticalAlternatingTimeline from '@/components/VerticalAlternatingTimeline';
import Teamcore from '@/components/Teamcore';
import FloatingActionButton from '@/components/FloatingActionButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Navokta',
  description: 'Learn about the journey of Navokta and our team',
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-12">
          Our Journey
        </h1>
        <VerticalAlternatingTimeline />
        <Teamcore />
        <FloatingActionButton />
      </div>
    </div>
  );
};

export default AboutPage;