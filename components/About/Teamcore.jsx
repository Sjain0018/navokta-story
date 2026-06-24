"use client";

import { useState } from "react";
import Image from "next/image";
import "./Teamcore.css";

import mamImg from "@/public/mam.jpg";
import bhavyImg from "@/public/bhavy.jpg";
import sakshiImg from "@/public/Sakshi.png";
import bhumiImg from "@/public/bhumi.png";
import kratakshiImg from "@/public/kratakshi.png";
import fazalImg from "@/public/fazal.png";
import abhinavImg from "@/public/Abhinav.jpg";
import gauravImg from "@/public/Gaurav.jpg";

export default function Teamcore() {
  const [activeProfile, setActiveProfile] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Richa Dixit",
      position: "Our Mentor",
      image: mamImg,
      summary: "Tarot Card Reader",
      fullDescription:
        "I believe ma’am recognized my potential right from the first semester..."
    },
    {
      id: 2,
      name: "Bhavy Sharma",
      position: "Coder Shab",
      image: bhavyImg,
      summary: "Problem Solver",
      fullDescription:
        "Hi, I'm Bhavy Sharma — also known as Coder Shab..."
    },
    {
      id: 3,
      name: "Sakshi Jain",
      position: "Strategic Wellbeing Partner",
      image: sakshiImg,
      summary: "MERN Stack Developer",
      fullDescription:
        "Sakshi is one of my closest friends and has been a huge support..."
    },
    {
      id: 4,
      name: "Bhumi Singhal",
      position: "Emotional Intelligence Advisor",
      image: bhumiImg,
      summary: "Web Developer",
      fullDescription:
        "My coordination with Bhumi has always been effortless..."
    },
    {
      id: 5,
      name: "Gaurav Pratap Singh",
      position: "Gauravions",
      image: gauravImg,
      summary: "Marketing Head",
      fullDescription:
        "Gaurav Bhai and I first met by complete chance..."
    },
    {
      id: 6,
      name: "Abhinav Kaushik",
      position: "Singer ji",
      image: abhinavImg,
      summary: "Image & Video Editor",
      fullDescription:
        "Abhinav has been with me since the very beginning..."
    },
    {
      id: 7,
      name: "Kratakshi Bhardwaj",
      position: "Personal Advisor",
      image: kratakshiImg,
      summary: "Web Developer",
      fullDescription:
        "Kratakshi and I have known each other since the Clueless Coder days..."
    },
    {
      id: 8,
      name: "Mohd. Fazal Ali",
      position: "Core Team Member",
      image: fazalImg,
      summary: "MERN Stack Developer",
      fullDescription:
        "I first met Fazal around Diwali, and from our very first conversation..."
    }
  ];

  return (
    <div className="team-core-container">
      <h1 className="team-core-title">OUR CORE TEAM</h1>

      <div className="team-core-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-core-card">
            <div className="team-core-img-circle">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="team-core-circle-img"
              />
            </div>

            <div className="team-core-info">
              <h2 className="team-core-name">{member.name}</h2>
              <h3 className="team-core-position">{member.position}</h3>
              <p className="team-core-summary">{member.summary}</p>

              <div className="team-core-btn-container">
                <button
                  className="team-core-profile-btn"
                  onClick={() => setActiveProfile(member)}
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProfile && (
        <div className="team-core-modal">
          <div
            className="team-core-modal-overlay"
            onClick={() => setActiveProfile(null)}
          />

          <div className="team-core-modal-content">
            <button
              className="team-core-close-btn"
              onClick={() => setActiveProfile(null)}
            >
              &times;
            </button>

            <div className="team-core-modal-header">
              <div className="team-core-modal-img-container">
                <Image
                  src={activeProfile.image}
                  alt={activeProfile.name}
                  width={200}
                  height={200}
                  className="team-core-modal-img"
                />
              </div>

              <div className="team-core-modal-title">
                <h2 className="team-core-modal-name">
                  {activeProfile.name}
                </h2>

                <h3 className="team-core-modal-position">
                  {activeProfile.position}
                </h3>
              </div>
            </div>

            <div className="team-core-modal-body">
              <p className="team-core-modal-description">
                {activeProfile.fullDescription}
              </p>
            </div>

            <div className="team-core-modal-footer">
              <button
                className="team-core-modal-close-btn"
                onClick={() => setActiveProfile(null)}
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}