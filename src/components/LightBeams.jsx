import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const LightBeams = () => {
    const beams = useMemo(() => {
        return Array.from({ length: 60 }).map((_, i) => ({ // Increased from 25 to 60 for more density
            id: i,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 8,
            duration: 1.5 + Math.random() * 4, // Slightly faster for more energy
            width: 300 + Math.random() * 800, // Even longer beams
            opacity: 0.4 + Math.random() * 0.6, // Higher base opacity
            thickness: 2 + Math.random() * 5, // Slightly thicker
            color: i % 4 === 0 ? '#D4AF37' : i % 4 === 1 ? '#3b82f6' : i % 4 === 2 ? '#6366f1' : '#ffffff',
        }));
    }, []);

    return (
        <div className="light-beams-container">
            {beams.map((beam) => (
                <motion.div
                    key={beam.id}
                    className="light-beam"
                    style={{
                        top: beam.top,
                        width: beam.width,
                        opacity: beam.opacity,
                        background: `linear-gradient(90deg, transparent, ${beam.color}, transparent)`,
                        height: `${beam.thickness}px`,
                        filter: 'blur(4px)',
                        boxShadow: `0 0 15px ${beam.color}`, // Glow effect
                    }}
                    initial={{ x: '120vw' }}
                    animate={{ x: '-120vw' }}
                    transition={{
                        duration: beam.duration,
                        repeat: Infinity,
                        delay: beam.delay,
                        ease: "linear"
                    }}
                />
            ))}
            <style dangerouslySetInnerHTML={{
                __html: `
        .light-beams-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(circle at 30% 50%, #06122dff 0%, #727272ff 100%);
        }
        .light-beam {
          position: absolute;
          right: 0;
          border-radius: 100px;
        }
      ` }} />
        </div>
    );
};

export default LightBeams;
