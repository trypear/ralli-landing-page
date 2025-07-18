"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return <></>;
}
