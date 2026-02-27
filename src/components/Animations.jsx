import { motion } from 'framer-motion';

// Scroll Progress Bar for top of page
export const ScrollProgress = () => {
    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: '#D4AF37',
                transformOrigin: '0%',
                zIndex: 2000
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ease: "linear" }}
            className="scroll-progress-bar"
        />
    );
};

// Reveal text from bottom with clipping
export const TextReveal = ({ children, delay = 0 }) => {
    return (
        <div style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// Magnetic effect for buttons
export const Magnetic = ({ children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
        </motion.div>
    );
};

// Advanced reveal with stagger
export const StaggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const StaggerContainer = ({ children, delay = 0 }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: delay } }
        }}
    >
        {children}
    </motion.div>
);

export const FadeIn = ({ children, delay = 0, direction = "up" }) => {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...(directions[direction] || {})
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export const ScaleIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);
