"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [1, 0.9] : [1, 0.9];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      className="h-[30vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center relative w-screen left-1/2 -translate-x-1/2"
      ref={containerRef}
    >
      <div
        className="w-full relative px-1 sm:px-0"
        style={{
          perspective: isMobile ? "1000px" : "2000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
      }}
      className="w-[99vw] sm:w-[95vw] max-w-[2000px] -mt-2 sm:-mt-4 mx-auto border-[1px] sm:border-2 rounded-[15px] sm:rounded-[30px] shadow-2xl
        bg-[#0a0a0a] aspect-video
        border-[#1a1a1a] relative overflow-hidden
        transform-gpu"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,17,17,0.9),rgba(0,0,0,0.95))]" />
      
      <div className="h-full w-full overflow-hidden rounded-[28px] bg-black">
        {children}
      </div>
    </motion.div>
  );
};
