'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Link2,
  Mail,
  Users,
  Sparkles,
  Heart
} from 'lucide-react';
import type { StaticImageData } from 'next/image';

const Linkedin = Link2;
const Github = Link2;
const Twitter = Link2;

// Import images
import mamImg from '@/public/mam.jpg';
import bhavyImg from '@/public/bhavy.jpg';
import sakshiImg from '@/public/Sakshi.png';
import bhumiImg from '@/public/bhumi.png';
import kratakshiImg from '@/public/kratakshi.png';
import fazalImg from '@/public/fazal.png';
import abhinavImg from '@/public/Abhinav.jpg';
import gauravImg from '@/public/Gaurav.jpg';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: StaticImageData;
  summary: string;
  fullDescription: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
}

const Teamcore: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Richa Dixit",
      position: "Our Mentor",
      image: mamImg,
      summary: "Tarot Card Reader",
      fullDescription: "I believe ma'am recognized my potential right from the first semester. She noticed that I had a unique way of doing things. In fact, I even shared a few shayaris with her back then, and she appreciated some of them. She has always supported me wholeheartedly. The initial push for Veda Verse came because of her encouragement. Honestly, if she hadn't been a part of my journey, I don't think I would've come this far. Her presence has had a significant impact on my life. She has always been supportive—both personally and professionally. I've always looked up to her with the same respect and love as I have for my own mother. And she, in return, has never made me feel like anything less than a son. I'm genuinely proud and grateful to have her in my life.",
      social: {
        linkedin: "https://linkedin.com",
        email: "richa@example.com"
      }
    },
    {
      id: 2,
      name: "Bhavy Sharma",
      position: "Coder Shab",
      image: bhavyImg,
      summary: "Problem Solver",
      fullDescription: "Hi, I'm Bhavy Sharma — also known as Coder Shab. You've probably already read my story in the section above, but let me reintroduce myself. I'm someone who turns code into real-world solutions. I strongly believe in my potential to build meaningful things — and I actually do. One unique strength I have is what I call my 'secret power': whenever I talk to someone, I understand their psychology deeply and leave a lasting impression. So if you're reading this, I'm quite sure you won't forget me easily. Let's keep this bond growing — and I promise to keep bringing you projects and ideas that make a difference.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 3,
      name: "Sakshi Jain",
      position: "Strategic Wellbeing Partner",
      image: sakshiImg,
      summary: "MERN Stack Developer",
      fullDescription: "Sakshi is one of my closest friends and has been a huge support in building projects like Navokta. If I ever have to bet on someone's skills, it would be her — because I know exactly what she's capable of. Interestingly, we met by chance — there was a typo in one of my PDFs, and that small interaction turned into a meaningful conversation. Since then, we've been working together. Ours is a very natural and genuine bond, and I truly pray that it lasts a lifetime. Sakshi is incredibly talented — she just needs someone who understands and believes in her. And I genuinely believe I'm that person. Wishing her all the success and happiness in her journey ahead.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 4,
      name: "Bhumi Singhal",
      position: "Emotional Intelligence Advisor",
      image: bhumiImg,
      summary: "Web Developer",
      fullDescription: "My coordination with Bhumi has always been effortless. She understands the context without needing too many explanations — it's like we're always on the same wavelength. We often have separate conversations that go beyond team matters — a sign of the trust and clarity between us. She has been a strong emotional pillar throughout my journey. We've anchored together at the Fresher's Farewell and the Women's Day celebration, and those experiences only deepened our understanding and teamwork. Beyond events, we've also learned web development side by side — encouraging and pushing each other to grow. What sets Bhumi apart is her sensitivity combined with silent strength. She supports quietly but powerfully — and I know she'll achieve whatever she sets her heart on. I truly believe in her. Bhumi, I want you to know — I'll always be there for you, just like you've been for me. This bond we share is not just friendship — it's a shared journey of trust, respect, and growth. You're not just part of the team — you're part of my story.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 5,
      name: "Gaurav Pratap Singh",
      position: "Gauravions",
      image: gauravImg,
      summary: "Marketing Head",
      fullDescription: `Gaurav Bhai and I first met by complete chance, in a totally random moment. From the very beginning, I realized how deeply knowledgeable he is when it comes to finance and business. Somehow, in that brief meeting, he saw something in me—a spark of a tech person—and I still don't know how a tech-minded person like me and a business-minded person like him formed such a powerful team. Today, when I look back, we've already achieved so much together: ByteWar-1, a coding competition… ByteWar-2, a full hackathon… A BGMI tournament… And many more things that shaped our journey. For me, Gaurav Bhai is more than a friend—he is like a true guide. Before I take any important decision, he always warns me carefully, helping me understand the consequences. His guidance feels exactly like the way Shri Krishna guided Arjun in the Mahabharata—calm, wise, and full of clarity. His opinions have always held great value for me. If I ever plan to start something—whether it's a business, a competition, a hackathon, or even a small momos shop—if it's with Gaurav Bhai, I would say "yes" without thinking twice.`,
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 6,
      name: "Abhinav Kaushik",
      position: "Singer ji",
      image: abhinavImg,
      summary: "Image & Video Editor",
      fullDescription: "Abhinav has been with me since the very beginning. He has a unique personality — full of energy, positivity, and that rare spark that keeps everyone around him engaged and uplifted. He never lets things get dull, and that's something truly special. What I admire most about him is his helpful and always-available nature. He genuinely cares for those who matter to him, and that makes him not just a great teammate, but a wonderful human being. Beyond that, Abhinav is also a talented singer and someone who brings a friendly, warm vibe wherever he goes. He knows how to connect with people, and his support has meant a lot to me over time. Yes, in the past there were things I didn't completely agree with, but we've moved past that. We've grown, matured, and today I can proudly say that Abhinav is one of my closest and most dependable friends.",
      social: {
        instagram: "https://instagram.com"
      }
    },
    {
      id: 7,
      name: "Kratakshi Bhardwaj",
      position: "Personal Advisor",
      image: kratakshiImg,
      summary: "Web Developer",
      fullDescription: "Kratakshi and I have known each other since the Clueless Coder days—that's where our friendship truly began. Over time, we became close friends. She's innocent, a bit of a foodie (though she doesn't eat much!), and someone I occasionally get upset with—but thankfully, I also know exactly how to cheer her up. Right, Kratakshi? 😄. What makes her truly special is her lack of jealousy—she's genuinely supportive of everyone and impresses people effortlessly. Yes, she can get a little lazy sometimes when it comes to work, but if not for that, she'd be number one at everything! When I'm overwhelmed with Navokta's responsibilities, she's the one I turn to. She calms me down, helps me get back on track, and quietly supports the tasks behind the scenes. She's nurturing and caring, almost like a second mother in the group. Kratakshi, I'll always be there for you, just like you've been there for me. I truly wish you all the success and happiness ahead, and I hope our bond continues to grow stronger with time.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 8,
      name: "Mohd. Fazal Ali",
      position: "Core team Member",
      image: fazalImg,
      summary: "MERN Stack Developer",
      fullDescription: "I first met Fazal around Diwali, and from our very first conversation, I realized he had some solid skills. Sure, he might cut a few corners here and there, but he always completes the work—one way or another! What I admire about Fazal is that he doesn't feel the need to showcase his progress to everyone. He recently worked on some projects without even mentioning them—quietly getting things done. He's a good guy, no doubt about it. Sometimes, he may come off as giving off a bit of negative energy, but when you really get to know him, you understand that it's just a part of the personality he's crafted for himself—intentionally. Beneath that exterior, there's a focused, capable person who knows what he's doing. Fazal might not always be expressive, but he's dependable—and that's what matters most.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ];

  // Helper function to get gradient based on position
  const getGradient = (position: string): string => {
    const gradients = [
      "from-rose-400 to-pink-500",
      "from-purple-400 to-indigo-500",
      "from-pink-400 to-rose-500",
      "from-indigo-400 to-purple-500",
      "from-pink-500 to-orange-400",
      "from-purple-500 to-pink-500",
      "from-rose-500 to-purple-500",
      "from-pink-400 to-purple-500"
    ];
    const index = teamMembers.findIndex(m => m.position === position);
    return gradients[index % gradients.length];
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-600">Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
            Meet Our Core Team
          </h1>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            The passionate minds behind Navokta, working together to create something extraordinary
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-pink-100/50">
                {/* Image Container with Gradient Overlay */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getGradient(member.position)} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-semibold text-pink-600">✦ Team</span>
                  </div>
                </div>
                
                {/* Info Container */}
                <div className="p-6">
                  <div className="mb-3">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {member.name}
                    </h2>
                    <h3 className="text-pink-500 font-medium text-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {member.position}
                    </h3>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {member.summary}
                  </p>
                  
                  {/* Social Icons */}
                  {member.social && (
                    <div className="flex gap-2 mb-4">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 bg-gray-100 hover:bg-pink-100 rounded-lg transition-colors">
                          <Link2 className="w-4 h-4 text-gray-600 hover:text-pink-600 transition-colors" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 bg-gray-100 hover:bg-pink-100 rounded-lg transition-colors">
                          <Link2 className="w-4 h-4 text-gray-600 hover:text-pink-600 transition-colors" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 bg-gray-100 hover:bg-pink-100 rounded-lg transition-colors">
                          <Link2 className="w-4 h-4 text-gray-600 hover:text-pink-600 transition-colors" />
                        </a>
                      )}
                    </div>
                  )}
                  
                  <button 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-2.5 px-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm flex items-center justify-center gap-2"
                    onClick={() => setActiveProfile(member)}
                  >
                    <Heart className="w-4 h-4" />
                    View Story
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveProfile(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-gray-100 rounded-full transition-colors shadow-lg z-10"
                onClick={() => setActiveProfile(null)}
                aria-label="Close profile"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Modal Header with Gradient */}
              <div className={`bg-gradient-to-r ${getGradient(activeProfile.position)} p-8 pt-12`}>
                <div className="flex items-center gap-6">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="relative w-28 h-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl"
                  >
                    <Image
                      src={activeProfile.image}
                      alt={activeProfile.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </motion.div>
                  
                  {/* Title */}
                  <div className="text-white">
                    <h2 className="text-3xl font-bold">
                      {activeProfile.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <h3 className="text-white/90 font-medium text-lg">
                        {activeProfile.position}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Body */}
              <div className="p-8">
                <div className="prose prose-pink max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {activeProfile.fullDescription}
                  </p>
                </div>

                {/* Social Links in Modal */}
                {activeProfile.social && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-3">Connect with {activeProfile.name.split(' ')[0]}</p>
                    <div className="flex gap-3">
                      {activeProfile.social.linkedin && (
                        <a href={activeProfile.social.linkedin} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors">
                          <Linkedin className="w-5 h-5 text-pink-600" />
                        </a>
                      )}
                      {activeProfile.social.github && (
                        <a href={activeProfile.social.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors">
                          <Github className="w-5 h-5 text-pink-600" />
                        </a>
                      )}
                      {activeProfile.social.twitter && (
                        <a href={activeProfile.social.twitter} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors">
                          <Twitter className="w-5 h-5 text-pink-600" />
                        </a>
                      )}
                      {activeProfile.social.email && (
                        <a href={`mailto:${activeProfile.social.email}`}
                          className="p-2 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors">
                          <Mail className="w-5 h-5 text-pink-600" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Modal Footer */}
              <div className="p-6 pt-0">
                <button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-white font-medium py-3 px-6 rounded-xl"
                  onClick={() => setActiveProfile(null)}
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        
        /* Custom Scrollbar for Modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #fce4ec;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #d63384, #7c3aed);
          border-radius: 10px;
        }
        
        /* Prose styles for modal content */
        .prose-pink {
          color: #374151;
        }
        .prose-pink strong {
          color: #d63384;
          font-weight: 600;
        }
        .prose-pink em {
          color: #7c3aed;
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default Teamcore;