"use client";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import animation from "../animations/astronaut.json";

function AnimatedLogo({ className }) {
  return <Lottie loop animationData={animation} play className={className} />;
}

export default AnimatedLogo;
