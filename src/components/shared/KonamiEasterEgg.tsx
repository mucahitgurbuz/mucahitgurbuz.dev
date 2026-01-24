"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function KonamiEasterEgg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [matrixRain, setMatrixRain] = useState(false);

  const handleUnlock = useCallback(() => {
    setShowEasterEgg(true);
    setMatrixRain(true);
    
    // Auto-hide matrix rain after animation
    setTimeout(() => setMatrixRain(false), 5000);
  }, []);

  const { isUnlocked, reset } = useKonamiCode(handleUnlock);

  const closeEasterEgg = () => {
    setShowEasterEgg(false);
    setMatrixRain(false);
    reset();
  };

  return (
    <>
      {/* Matrix Rain Effect */}
      <AnimatePresence>
        {matrixRain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <MatrixColumn key={i} delay={i * 0.1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={closeEasterEgg}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-lg p-8 max-w-lg w-full text-center border-2 border-primary glow"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={closeEasterEgg}
              >
                <X className="w-4 h-4" />
              </Button>

              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6"
              >
                <Sparkles className="w-full h-full text-primary" />
              </motion.div>

              <h2 className="text-2xl font-bold font-mono mb-4 text-primary">
                🎮 Achievement Unlocked!
              </h2>
              
              <p className="text-lg font-mono mb-4">
                You found the Konami Code Easter Egg!
              </p>

              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-6">
                <p className="text-muted-foreground mb-2">You entered:</p>
                <p className="text-primary">
                  ↑ ↑ ↓ ↓ ← → ← → B A
                </p>
              </div>

              <p className="text-muted-foreground text-sm">
                You&apos;re clearly a person of culture. Thanks for exploring!
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span className="px-2 py-1 bg-muted/30 rounded">+100 Nerd Points</span>
                <span className="px-2 py-1 bg-muted/30 rounded">🕹️ Retro Gamer</span>
                <span className="px-2 py-1 bg-muted/30 rounded">🔍 Explorer</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MatrixColumn({ delay }: { delay: number }) {
  const chars = "アイウエオカキクケコサシスセソ01";
  const [column, setColumn] = useState<string[]>([]);

  useEffect(() => {
    const generateColumn = () => {
      return Array.from({ length: 20 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      );
    };
    setColumn(generateColumn());

    const interval = setInterval(() => {
      setColumn(generateColumn());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const left = Math.random() * 100;

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-0 font-mono text-primary text-opacity-70"
      style={{ left: `${left}%`, fontSize: "14px" }}
    >
      {column.map((char, i) => (
        <div
          key={i}
          style={{ opacity: 1 - i * 0.05 }}
          className={i === 0 ? "text-white" : ""}
        >
          {char}
        </div>
      ))}
    </motion.div>
  );
}
