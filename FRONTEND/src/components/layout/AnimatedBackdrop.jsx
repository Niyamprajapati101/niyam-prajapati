import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import flowerImage from "../../assets/flower.png";

export default function AnimatedBackdrop() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.5 });

  const p1x = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const p1y = useTransform(springY, [-0.5, 0.5], [-30, 30]);
  const p2x = useTransform(springX, [-0.5, 0.5], [24, -24]);
  const p2y = useTransform(springY, [-0.5, 0.5], [18, -18]);
  const p3x = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const p3y = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const update = (cx, cy) => {
      pointerX.set(cx / window.innerWidth - 0.5);
      pointerY.set(cy / window.innerHeight - 0.5);
    };
    const onMove = (e) => update(e.clientX, e.clientY);
    const onTouch = (e) => { const t = e.touches[0]; if (t) update(t.clientX, t.clientY); };
    const onLeave = () => { pointerX.set(0); pointerY.set(0); };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: "var(--backdrop-bg)" }}
    >
      {/* Main flower — fills entire right half, bleeds off all edges */}
      <motion.div
        className="absolute"
        style={{
          x: p1x,
          y: p1y,
          right: "-15%",
          top: "-20%",
          width: "75vw",
          height: "140vh",
          minWidth: "680px",
          minHeight: "780px",
        }}
        animate={{
          rotate: [0, 4, -3, 2, -1, 0],
          scale: [1, 1.04, 0.97, 1.02, 0.99, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
      >
        <img
          src={flowerImage}
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.92 }}
        />
      </motion.div>

      {/* Second flower layer — slightly offset, adds depth */}
      <motion.div
        className="absolute"
        style={{
          x: p2x,
          y: p2y,
          right: "-8%",
          top: "5%",
          width: "60vw",
          height: "110vh",
          minWidth: "520px",
          minHeight: "600px",
          opacity: 0.35,
          filter: "blur(2px)",
        }}
        animate={{
          rotate: [0, -3, 2, -1.5, 1, 0],
          scale: [0.97, 1.03, 0.98, 1.02, 0.99, 0.97],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
      >
        <img src={flowerImage} alt="" className="h-full w-full object-cover" />
      </motion.div>

      {/* White glow blob — top right, like the bright white patch in reference */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: p3x,
          y: p3y,
          right: "2%",
          top: "-5%",
          width: "38vw",
          height: "38vw",
          minWidth: "320px",
          minHeight: "320px",
          background: "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(18px)",
        }}
        animate={{ scale: [1, 1.08, 0.96, 1.04, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* Accent glow — mid right, teal tint */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: p2x,
          y: p2y,
          right: "10%",
          top: "30%",
          width: "28vw",
          height: "28vw",
          minWidth: "220px",
          minHeight: "220px",
          background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 65%)",
          filter: "blur(24px)",
        }}
        animate={{ scale: [1, 1.12, 0.94, 1.06, 1] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          delay: 2,
        }}
      />
    </div>
  );
}
