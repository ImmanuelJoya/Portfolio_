import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, Code, Database, GraduationCap, MapPin, Users } from 'lucide-react';

const experienceData = [
    {
        id: 1,
        category: 'Software Development',
        company: 'GL InfoTech',
        role: 'Software Developer Intern',
        fromYear: '2022',
        toYear: '2023',
        workType: 'Part Time',
        location: 'On-site',
        keyResponsibilities: [
            'Worked as a shadow for senior developers, learning software development processes and tools',
            'Modified HTML, CSS, and JavaScript code to improve website functionality and user experience',
            'Assisted in debugging and testing web applications to ensure quality and performance'
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Testing', 'Debugging'],
        icon: Code
    },
    {
        id: 2,
        category: 'Research & Development',
        company: 'Atles Research',
        role: 'Contributor',
        fromYear: '2024',
        toYear: '2024',
        workType: 'Contract',
        location: 'Remote',
        keyResponsibilities: [
            'Collaborated with research teams on innovative technology solutions',
            'Contributed to open-source projects and documentation',
            'jupyter notebooks and Python scripts for data analysis and visualization'
        ],
        skills: ['Web Development', 'Software Engineering', 'Research', 'Documentation'],
        icon: Database
    },
    {
        id: 3,
        category: 'AI & Machine Learning',
        company: 'Mecka.ai',
        role: 'Video Data Collection Associate',
        fromYear: '2025',
        toYear: 'Present',
        workType: 'Full Time',
        location: 'Hybrid',
        keyResponsibilities: [
            'Captured and annotated video data for machine learning models',
            'Collaborated with cross-functional teams to ensure data quality and relevance',
            'Utilized specialized tools for video processing and annotation to support AI training datasets'
        ],
        skills: ['Machine Learning', 'Data Annotation', 'Video Processing', 'AI Training', 'Cross-functional Collaboration'],
        icon: Users
    }
];

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 },
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
        transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' }
    },
};

const Experience = () => {
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
                className="max-w-7xl mx-auto relative z-10"
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
                        <Briefcase className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Professional Experience
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experienceData.map((exp) => {
                        const IconComponent = exp.icon;
                        return (
                            <motion.div
                                key={exp.id}
                                className="group relative"
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.01,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Card glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                {/* Main card */}
                                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                                    {/* Background pattern */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {/* Left Column - Basic Info */}
                                        <div className="lg:col-span-1">
                                            <motion.div
                                                className="flex items-center mb-6"
                                                variants={iconVariants}
                                            >
                                                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                                                    <IconComponent className="w-6 h-6 text-cyan-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-2">
                                                        <span className="text-purple-300 text-sm font-medium">{exp.category}</span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                                                </div>
                                            </motion.div>

                                            {/* Company */}
                                            <motion.div
                                                className="flex items-center mb-4"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3, duration: 0.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <MapPin className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                                                <p className="text-gray-300 text-lg font-medium">
                                                    {exp.company}
                                                </p>
                                            </motion.div>

                                            {/* Duration */}
                                            <motion.div
                                                className="flex items-center mb-4"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <Calendar className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                                                <p className="text-gray-300 text-lg">
                                                    <span className="text-cyan-400 font-semibold">{exp.fromYear} - {exp.toYear}</span>
                                                </p>
                                            </motion.div>

                                            {/* Work details */}
                                            <motion.div
                                                className="space-y-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5, duration: 0.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
                                                    <p className="text-cyan-300 font-medium text-sm">
                                                        {exp.workType} • {exp.location}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Right Column - Responsibilities and Skills */}
                                        <div className="lg:col-span-2">
                                            {/* Key Responsibilities */}
                                            <motion.div
                                                className="mb-6"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6, duration: 0.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                                                    <Award className="w-5 h-5 text-cyan-400 mr-2" />
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-3">
                                                    {exp.keyResponsibilities.map((responsibility, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="flex items-start"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                                                            viewport={{ once: true }}
                                                        >
                                                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                            <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            {/* Skills */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8, duration: 0.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                                                    <GraduationCap className="w-5 h-5 text-cyan-400 mr-2" />
                                                    Technical Skills
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                                                            viewport={{ once: true }}
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
                                    <div className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-40" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-full border border-gray-700/30">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-gray-400 text-sm">Building tomorrow's technology today</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experience;