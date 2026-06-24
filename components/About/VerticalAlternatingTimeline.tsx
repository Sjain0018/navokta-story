"use client";

import dynamic from "next/dynamic";
import "./VerticalAlternatingTimeline.css";

const Chrono = dynamic(
  () => import("react-chrono").then((mod) => mod.Chrono),
  { ssr: false }
);

const items = [
  {
    title: "July 2024",
    cardTitle: "Event 1",
    cardSubtitle: "Let's start from the beginning.",
    cardDetailedText: (
      <div>
        I, Bhavy Sharma, entered IP College (Campus-2) on September 18, 2023.
        Everything was new—new people, unfamiliar faces, and a feeling of not
        belonging.
      </div>
    ),
  },

  {
    title: "February 2024",
    cardTitle: "Event 2",
    cardSubtitle: "A New Chapter Begins",
    cardDetailedText: (
      <div>
        As we turned the page to a new chapter, things continued to progress.
      </div>
    ),
  },

  {
    title: "October 2024",
    cardTitle: "Event 3",
    cardSubtitle: "Building Something Real",
    cardDetailedText: (
      <div>
        From October 2024, we began receiving more opportunities from the
        college.
      </div>
    ),
  },
];

export default function VerticalAlternatingTimeline() {
  return (
    <div>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        itemWidth={150}
      />
    </div>
  );
}