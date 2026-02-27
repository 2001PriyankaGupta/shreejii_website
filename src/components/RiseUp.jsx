import { motion } from 'framer-motion';

const RiseUp = ({ children, delay = 0, duration = 0.8, distance = 50, scale = 0.95 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: distance, scale: scale }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default RiseUp;
