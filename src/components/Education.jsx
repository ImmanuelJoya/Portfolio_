import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

const educationData = [
    {
        id: 1,
        degree: 'High School Diploma',
        university: 'Govt.HSS Ayyanthole',
        year: '2021',
        major: 'Computer Science'
    },
    {
        id: 2,
        degree: 'Associate Degree in Computer Programming',
        university: 'Georgian College of Art and Science',
        year: '2025',
        major: 'Computer Programming'
    }
];

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    },
};

const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: { delay: 0.5, duration: 0.6, ease: 'easeOut' }
    },
};

const Education = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
                    animate={{
                        y: [0, 15, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
            </div>

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                {/* Header */}
                <motion.div className="text-center mb-16">
                    <motion.div
                        className="inline-block mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Education
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {educationData.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className="group relative"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Card glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Main card */}
                            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                                {/* Background pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Degree icon */}
                                <motion.div
                                    className="flex items-center mb-6"
                                    variants={iconVariants}
                                >
                                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                                        <Award className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                                            {edu.degree}
                                        </h3>
                                        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                                    </div>
                                </motion.div>

                                {/* University */}
                                <motion.div
                                    className="flex items-center mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <MapPin className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                                    <p className="text-gray-300 text-lg font-medium">
                                        {edu.university}
                                    </p>
                                </motion.div>

                                {/* Year */}
                                <motion.div
                                    className="flex items-center mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <Calendar className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                                    <p className="text-gray-300 text-lg">
                                        Graduated in <span className="text-cyan-400 font-semibold">{edu.year}</span>
                                    </p>
                                </motion.div>

                                {/* Major */}
                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
                                        <p className="text-cyan-300 font-medium">
                                            Major: {edu.major}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
                                <div className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-40" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-full border border-gray-700/30">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-gray-400 text-sm">Continuing the journey of learning</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Education;