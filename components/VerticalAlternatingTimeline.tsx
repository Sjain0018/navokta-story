'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  SparklesIcon,
  RocketIcon,
  StarIcon,
  HeartIcon,
  LightbulbIcon,
  TrophyIcon,
  UsersIcon,
  CodeIcon,
  FlagIcon
} from 'lucide-react';

// Types
interface TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const VerticalAlternatingTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const items: TimelineItem[] = [
    {
      title: "July 2024",
      cardTitle: "The Beginning of a Dream",
      cardSubtitle: "Every journey starts with a single step",
      icon: <SparklesIcon className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500",
      cardDetailedText: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
            <p>I, Bhavy Sharma, entered IP College (Campus-2) on September 18, 2023. Everything was new—new people, unfamiliar faces, and a feeling of not belonging.</p>
          </div>
          <p>And for the most part, that's exactly how the first semester went. I made a few friends, but I wasn't deeply connected with anyone. Despite this, I focused on self-improvement.</p>
          <div className="bg-white p-4 rounded-lg border-2 border-pink-200 shadow-sm">
            <p className="font-medium text-pink-700">💡 I started creating PDFs of solved question papers. Each PDF proudly bore the line 'Made by Bhavy Sharma'.</p>
          </div>
          <p>Rather than sending the PDFs individually, I created a small WhatsApp group. With Abhinav's support, the PDFs reached 50–60 students.</p>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
            <p>🚀 I became one of the admins and started working on <strong className="text-pink-600">EDITH</strong> (Even Dead I'm The Hero).</p>
          </div>
          <p>My PDFs became popular—students were even printing them out. Though many didn't know me by face, they knew the name: <strong className="text-pink-600">'Bhavy Sharma – the one who makes those PDFs.'</strong></p>
          <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
            <p>💭 One day, a friend failed his exam and asked for an older PDF. That's when I thought—<strong className="text-pink-600">Why not build a platform where juniors can access notes anytime?</strong></p>
          </div>
          <p>And so, <strong className="text-pink-600">nEmi Notes</strong> was born—created to provide students with easy access to academic resources.</p>
          <p>With <strong className="text-pink-600">Richa Ma'am's</strong> support, our group expanded from 60 to over 200 students.</p>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-5 rounded-xl shadow-md">
            <p>🎯 That's when the idea of <strong className="text-pink-600">"Veda Verse"</strong> came to me—a platform where students could unite and fuel their passions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-pink-200">
            <p>💔 Only one member had coding experience. Despite limited resources, we worked with passion. But the domain was sold off—mainly because I shared plans openly.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <p>😔 I realized that <strong className="text-red-600">not everyone who praises you stands with you when it matters</strong>.</p>
          </div>
          <div className="mt-4 p-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg text-white">
            <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
              <SparklesIcon className="w-6 h-6" /> Moral of the Story
            </h4>
            <p>Never blindly trust those close to you, and don't let others' opinions dictate your path—because not everyone truly supports you.</p>
          </div>
        </div>
      ),
    },
    {
      title: "February 2024",
      cardTitle: "A New Chapter Unfolds",
      cardSubtitle: "Growth comes from challenges",
      icon: <RocketIcon className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      cardDetailedText: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>The group reached over <strong className="text-pink-600">270 students</strong>. We began sharing not only PDFs but also curated YouTube video resources.</p>
          <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-4 rounded-lg border border-blue-200">
            <p>🤝 A group called <strong className="text-pink-600">Clueless Coders</strong> was formed. I met <strong className="text-pink-600">Anjali</strong>, who was deeply passionate about DSA.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-medium">🌟 Core team members:</p>
            <ul className="list-none space-y-1 mt-2">
              <li>• <strong className="text-pink-600">Anjali</strong> - Focused, driven, excellent at building connections</li>
              <li>• <strong className="text-pink-600">Kratakshi</strong> - Eager to learn, full of potential</li>
              <li>• <strong className="text-pink-600">Vansh</strong> - From AKTU, already learning Java</li>
              <li>• <strong className="text-pink-600">Ashish</strong> - Python enthusiast since 12th grade</li>
              <li>• <strong className="text-pink-600">Arshad</strong> - More inclined toward app development</li>
            </ul>
          </div>
          <p>The group functioned well until Anjali's father passed away, and the group disbanded.</p>
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-lg border border-orange-200">
            <p>💪 That's when the idea for <strong className="text-pink-600">ByteWar</strong>—a coding competition platform—came to life.</p>
          </div>
          <p>My friend <strong className="text-pink-600">Gaurav Singh Rawat</strong> stood beside me. He managed financials, promoted the event, and handled registrations.</p>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>🏆 <strong className="text-pink-600">30–40 students</strong> participated. The feedback gave rise to <strong className="text-pink-600">Adwit</strong>, an online coding platform.</p>
          </div>
          <p>We got an incredible opportunity—<strong className="text-pink-600">SmartIDEAthon</strong>, a startup competition. Our idea was selected:</p>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-5 rounded-xl text-center shadow-md">
            <p className="text-pink-700 font-medium italic">"A Smart AI Chatbot for Mental Health Support"</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <p>😞 Everyone seemed supportive on the outside, but I sensed hidden jealousy. I ended up missing out on an incredible opportunity.</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-pink-50 p-4 rounded-lg border border-green-200">
            <p>🤗 Eventually, I met my current team: <strong className="text-pink-600">Fazal, Sakshi, Bhumi, and Kratakshi</strong>.</p>
          </div>
          <div className="mt-4 p-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg text-white">
            <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
              <HeartIcon className="w-6 h-6" /> Moral of the Story
            </h4>
            <p>Before sharing your happiness, ask yourself—Will the person you're sharing it with be genuinely happy for you?</p>
            <p className="mt-2">Learn to distinguish between people who are truly your friends and those who are not.</p>
          </div>
        </div>
      ),
    },
    {
      title: "October 2024",
      cardTitle: "Building Something Real",
      cardSubtitle: "Turning dreams into reality",
      icon: <StarIcon className="w-5 h-5" />,
      color: "from-rose-500 to-pink-500",
      cardDetailedText: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>From October 2024, we began receiving more opportunities from the college. <strong className="text-pink-600">Bhumi</strong> and I were selected as anchors for the fresher's farewell.</p>
          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-4 rounded-lg border border-yellow-200">
            <p>🎤 We also organized the Women's Day celebration. We collaborated with BBA, BSc, and other students.</p>
          </div>
          <p>We met <strong className="text-pink-600">Shubham</strong> and <strong className="text-pink-600">Prateek</strong>, two BBA students with an interest in business.</p>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p>💡 My friend <strong className="text-pink-600">Gaurav</strong> suggested I could monetize the projects I had been offering for free.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-pink-200">
            <p>💰 We brainstormed multiple ideas, but lacked resources, money, or time. We'd defer our plans: <em className="text-pink-600">"If this doesn't work, we'll try something else."</em></p>
          </div>
          <p>We named our initiative <strong className="text-pink-600 text-lg">Navokta</strong>, meaning "something new."</p>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-5 rounded-xl shadow-md">
            <p>🎯 The idea was to create and deliver client websites. We worked with initial clients and earned money.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <p>😰 But reality struck. On <strong className="text-pink-600">June 5, 2025</strong>, we purchased <strong className="text-pink-600">Navokta.com</strong>.</p>
          </div>
          <p>I began making <strong className="text-pink-600">120–130 cold calls</strong> a day trying to find clients.</p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
            <p>🤔 I realized: <strong className="text-pink-600">we were chasing money, not impact.</strong> Money is secondary—if you add real value, money will follow.</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-pink-50 p-4 rounded-lg border border-green-200">
            <p>💡 Why not share this experience with others? Why not build a platform that showcases people's journeys?</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-5 rounded-xl shadow-lg">
            <p className="text-white text-center text-lg font-bold">🌟 <span className="text-yellow-300">Navokta</span> was born: a platform where people share their stories and lessons.</p>
          </div>
          <div className="mt-4 p-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg text-white">
            <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
              <FlagIcon className="w-6 h-6" /> Moral of the Story
            </h4>
            <p>Always try to learn not just from your own mistakes—but also from others'.</p>
            <p className="mt-2"><em className="text-yellow-200 font-bold">Just start</em>. Don't overthink. Mistakes are the only way to move forward.</p>
          </div>
        </div>
      ),
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
          Our Journey
        </h2>
        <p className="text-gray-500 mt-3 text-lg">The story of how Navokta came to life</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400" />

        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const isExpanded = expandedId === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start mb-12 ${
                isEven ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className={`
                  absolute left-4 md:left-1/2 
                  transform -translate-x-1/2 
                  z-10 flex items-center justify-center
                  w-10 h-10 rounded-full 
                  bg-gradient-to-r ${item.color}
                  text-white shadow-lg shadow-pink-200/50
                  border-4 border-white
                `}
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <div className={`w-full md:w-[calc(50%-40px)] ${isEven ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8'}`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`
                    bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                    transition-all duration-300 overflow-hidden
                    border border-pink-100/50
                  `}
                >
                  {/* Header */}
                  <div
                    className="cursor-pointer p-5"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-sm font-semibold text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                          {item.title}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 mt-2">
                          {item.cardTitle}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {item.cardSubtitle}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1"
                      >
                        {isExpanded ? (
                          <ChevronUpIcon className="w-5 h-5 text-pink-500" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-pink-500" />
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                          <div className="prose prose-pink max-w-none">
                            {item.cardDetailedText}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Read More Button */}
                  <div
                    className="px-5 pb-4 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <span className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors flex items-center gap-1">
                      {isExpanded ? 'Show Less' : 'Read Full Story'}
                      {isExpanded ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        .prose strong {
          color: #d63384;
        }
      `}</style>
    </div>
  );
};

export default VerticalAlternatingTimeline;