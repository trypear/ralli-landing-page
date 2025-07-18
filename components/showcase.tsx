"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import CTA from "./cta";

const testimonials = [
  {
    text: "If you've ever copy-pasted code into ChatGPT or Claude, download PearAI right now. Just a week ago I told an engineer on the Meta DevX team to check out Pear and see how far behind Meta was. I worked in mostly Hack (PHP), Python, and Javascript at Meta. My current startup requires almost all Swift iOS. PearAI has brought me from complete noob to at least Senior Engineer productivity in Swift iOS in less than a month. Finally, because I use the various LLMs mostly for coding I've canceled my Copilot, Claude, and ChatGPT subscriptions since switching, saving $30+/month.",
    author: "Connor Clancy",
    role: "Founder of Taste, prev 5 years @ Meta",
  },
  {
    text: "PearAI has been a great help with my side projects and learning new programming languages. What sets it apart from standard AI chat tools is its ability to understand my codebase and file context, making the development process more streamlined. It's a useful tool for developers who want contextual AI assistance while coding. I wish my company adopted an AI code editor like this.",
    author: "Jackson Z",
    role: "Big Tech Software Engineer, Prev. Tesla AI",
  },
  {
    text: "PearAI has transformed my workflow completely - it's like having a senior developer by my side 24/7. Whether I'm implementing AWS file storage or making architectural decisions, the '@codebase' context feature ensures precise solutions. With an amazing community always there for support, I'm shipping projects faster and with better quality. Couldn't recommend it enough for developers looking to boost their productivity.",
    author: "Ricardo Freitas",
    role: "Computer Science Student & Freelancer",
  },
  {
    text: "This tool has been indispensible to me. I'm currently using it in two class projects, one is an app that focuses on mental health with a chatbot that gives advice for social issues. The other is for a class where we are learning about the scrum process and we are building a website for event planning. I'm still learning all the features to become more efficient and develop a workflow, but over one weekend I was able to build 16 screens for the app's UI with working navigation and a few features, like a drawing canvas, and date/time pickers with no prior HTML experience before Friday.",
    author: "Josh Koelker",
    role: "Information Systems Masters Student",
  },
];

export default function Showcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [totalPages, setTotalPages] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobile(isMobileView);
      const newTotalPages = isMobileView
        ? testimonials.length
        : Math.ceil(testimonials.length / 2);
      setTotalPages(newTotalPages);

      setCurrentPage((prev) => Math.min(prev, newTotalPages - 1));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigate = (direction: "next" | "previous") => {
    setCurrentPage((prevPage) =>
      direction === "next"
        ? Math.min(prevPage + 1, totalPages - 1)
        : Math.max(prevPage - 1, 0),
    );
  };

  return (
    <>
      <CTA />
    </>
  );
}
