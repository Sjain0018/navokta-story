'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

// Import images
import mamImg from '@/public/mam.jpg';
import bhavyImg from '@/public/bhavy.jpg';
import sakshiImg from '@/public/Sakshi.png';
import bhumiImg from '@/public/bhumi.png';
import kratakshiImg from '@/public/kratakshi.png';
import fazalImg from '@/public/fazal.png';
import abhinavImg from '@/public/Abhinav.jpg';
import gauravImg from '@/public/Gaurav.jpg';

// Type for team member
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: StaticImageData;
  summary: string;
  fullDescription: string;
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
      fullDescription: "I believe ma'am recognized my potential right from the first semester. She noticed that I had a unique way of doing things. In fact, I even shared a few shayaris with her back then, and she appreciated some of them. She has always supported me wholeheartedly. The initial push for Veda Verse came because of her encouragement. Honestly, if she hadn't been a part of my journey, I don't think I would've come this far. Her presence has had a significant impact on my life. She has always been supportive—both personally and professionally. I've always looked up to her with the same respect and love as I have for my own mother. And she, in return, has never made me feel like anything less than a son. I'm genuinely proud and grateful to have her in my life."
    },
    {
      id: 2,
      name: "Bhavy Sharma",
      position: "Coder Shab",
      image: bhavyImg,
      summary: "Problem Solver",
      fullDescription: "Hi, I'm Bhavy Sharma — also known as Coder Shab. You've probably already read my story in the section above, but let me reintroduce myself. I'm someone who turns code into real-world solutions. I strongly believe in my potential to build meaningful things — and I actually do. One unique strength I have is what I call my 'secret power': whenever I talk to someone, I understand their psychology deeply and leave a lasting impression. So if you're reading this, I'm quite sure you won't forget me easily. Let's keep this bond growing — and I promise to keep bringing you projects and ideas that make a difference."
    },
    {
      id: 3,
      name: "Sakshi Jain",
      position: "Strategic Wellbeing Partner",
      image: sakshiImg,
      summary: "MERN Stack Developer",
      fullDescription: "Sakshi is one of my closest friends and has been a huge support in building projects like Navokta. If I ever have to bet on someone's skills, it would be her — because I know exactly what she's capable of. Interestingly, we met by chance — there was a typo in one of my PDFs, and that small interaction turned into a meaningful conversation. Since then, we've been working together. Ours is a very natural and genuine bond, and I truly pray that it lasts a lifetime. Sakshi is incredibly talented — she just needs someone who understands and believes in her. And I genuinely believe I'm that person. Wishing her all the success and happiness in her journey ahead."
    },
    {
      id: 4,
      name: "Bhumi Singhal",
      position: "Emotional Intelligence Advisor",
      image: bhumiImg,
      summary: "Web Developer",
      fullDescription: "My coordination with Bhumi has always been effortless. She understands the context without needing too many explanations — it's like we're always on the same wavelength. We often have separate conversations that go beyond team matters — a sign of the trust and clarity between us. She has been a strong emotional pillar throughout my journey. We've anchored together at the Fresher's Farewell and the Women's Day celebration, and those experiences only deepened our understanding and teamwork. Beyond events, we've also learned web development side by side — encouraging and pushing each other to grow. What sets Bhumi apart is her sensitivity combined with silent strength. She supports quietly but powerfully — and I know she'll achieve whatever she sets her heart on. I truly believe in her. Bhumi, I want you to know — I'll always be there for you, just like you've been for me. This bond we share is not just friendship — it's a shared journey of trust, respect, and growth. You're not just part of the team — you're part of my story."
    },
    {
      id: 5,
      name: "Gaurav Pratap Singh",
      position: "Gauravions",
      image: gauravImg,
      summary: "Marketing Head",
      fullDescription: `Gaurav Bhai and I first met by complete chance, in a totally random moment. From the very beginning, I realized how deeply knowledgeable he is when it comes to finance and business. Somehow, in that brief meeting, he saw something in me—a spark of a tech person—and I still don't know how a tech-minded person like me and a business-minded person like him formed such a powerful team. Today, when I look back, we've already achieved so much together: ByteWar-1, a coding competition… ByteWar-2, a full hackathon… A BGMI tournament… And many more things that shaped our journey. For me, Gaurav Bhai is more than a friend—he is like a true guide. Before I take any important decision, he always warns me carefully, helping me understand the consequences. His guidance feels exactly like the way Shri Krishna guided Arjun in the Mahabharata—calm, wise, and full of clarity. His opinions have always held great value for me. If I ever plan to start something—whether it's a business, a competition, a hackathon, or even a small momos shop—if it's with Gaurav Bhai, I would say "yes" without thinking twice.`
    },
    {
      id: 6,
      name: "Abhinav Kaushik",
      position: "Singer ji",
      image: abhinavImg,
      summary: "Image & Video Editor",
      fullDescription: "Abhinav has been with me since the very beginning. He has a unique personality — full of energy, positivity, and that rare spark that keeps everyone around him engaged and uplifted. He never lets things get dull, and that's something truly special. What I admire most about him is his helpful and always-available nature. He genuinely cares for those who matter to him, and that makes him not just a great teammate, but a wonderful human being. Beyond that, Abhinav is also a talented singer and someone who brings a friendly, warm vibe wherever he goes. He knows how to connect with people, and his support has meant a lot to me over time. Yes, in the past there were things I didn't completely agree with, but we've moved past that. We've grown, matured, and today I can proudly say that Abhinav is one of my closest and most dependable friends."
    },
    {
      id: 7,
      name: "Kratakshi Bhardwaj",
      position: "Personal Advisor",
      image: kratakshiImg,
      summary: "Web Developer",
      fullDescription: "Kratakshi and I have known each other since the Clueless Coder days—that's where our friendship truly began. Over time, we became close friends. She's innocent, a bit of a foodie (though she doesn't eat much!), and someone I occasionally get upset with—but thankfully, I also know exactly how to cheer her up. Right, Kratakshi? 😄. What makes her truly special is her lack of jealousy—she's genuinely supportive of everyone and impresses people effortlessly. Yes, she can get a little lazy sometimes when it comes to work, but if not for that, she'd be number one at everything! When I'm overwhelmed with Navokta's responsibilities, she's the one I turn to. She calms me down, helps me get back on track, and quietly supports the tasks behind the scenes. She's nurturing and caring, almost like a second mother in the group. Kratakshi, I'll always be there for you, just like you've been there for me. I truly wish you all the success and happiness ahead, and I hope our bond continues to grow stronger with time."
    },
    {
      id: 8,
      name: "Mohd. Fazal Ali",
      position: "Core team Member",
      image: fazalImg,
      summary: "MERN Stack Developer",
      fullDescription: "I first met Fazal around Diwali, and from our very first conversation, I realized he had some solid skills. Sure, he might cut a few corners here and there, but he always completes the work—one way or another! What I admire about Fazal is that he doesn't feel the need to showcase his progress to everyone. He recently worked on some projects without even mentioning them—quietly getting things done. He's a good guy, no doubt about it. Sometimes, he may come off as giving off a bit of negative energy, but when you really get to know him, you understand that it's just a part of the personality he's crafted for himself—intentionally. Beneath that exterior, there's a focused, capable person who knows what he's doing. Fazal might not always be expressive, but he's dependable—and that's what matters most."
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-4">
          OUR CORE TEAM
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The passionate individuals behind Navokta, working together to create something meaningful.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              
              {/* Info Container */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-800 mb-0.5 line-clamp-1">
                  {member.name}
                </h2>
                <h3 className="text-pink-600 font-medium text-sm mb-2">
                  {member.position}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {member.summary}
                </p>
                
                <button 
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium py-2.5 px-4 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm"
                  onClick={() => setActiveProfile(member)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProfile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveProfile(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[slideIn_0.3s_ease]">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors text-3xl z-10"
              onClick={() => setActiveProfile(null)}
              aria-label="Close profile"
            >
              &times;
            </button>
            
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-6">
                {/* Profile Image */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-pink-200">
                  <Image
                    src={activeProfile.image}
                    alt={activeProfile.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                
                {/* Title */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {activeProfile.name}
                  </h2>
                  <h3 className="text-pink-600 font-medium text-lg">
                    {activeProfile.position}
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {activeProfile.fullDescription}
              </p>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 pt-0">
              <button 
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors"
                onClick={() => setActiveProfile(null)}
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Teamcore;