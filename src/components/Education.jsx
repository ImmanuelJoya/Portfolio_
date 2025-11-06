import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';

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

// Simplified animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
};

const Education = () => {
    return (
        <section className="relative min-h-screen bg-gray-950 text-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-mono">
            {/* Subtle grid background pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(0deg, #111827 0px, transparent 1px, transparent 40px, #111827 41px),
                                 repeating-linear-gradient(90deg, #111827 0px, transparent 1px, transparent 40px, #111827 41px)`,
                opacity: 0.2
            }} />
            
            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-2xl font-bold mb-2 tracking-tight text-white">EDUCATION</h2>
                    <p className="text-sm text-gray-500 max-w-md">Academic background and qualifications</p>
                </motion.div>

                {/* Brutalist Grid - Dark Theme */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-700"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {educationData.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={itemVariants}
                            className="relative bg-gray-900 p-6 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex flex-col h-full"
                        >
                            {/* Status indicator */}
                            <div className="absolute top-3 left-3 w-2 h-2 bg-cyan-400 rounded-full" />
                            
                            {/* Content */}
                            <div className="pt-2 flex-1 flex flex-col">
                                {/* Degree with simple icon */}
                                <div className="flex items-start mb-4">
                                    <Award className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-base font-bold text-white leading-snug mb-1">{edu.degree}</h3>
                                        <div className="w-10 h-0.5 bg-cyan-400 rounded-full" />
                                    </div>
                                </div>
                                
                                {/* University */}
                                <div className="flex items-start mb-3">
                                    <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">{edu.university}</p>
                                </div>

                                {/* Year */}
                                <div className="flex items-start mb-3">
                                    <Calendar className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-400">Graduated <span className="font-mono text-cyan-400">{edu.year}</span></p>
                                </div>

                                {/* Major */}
                                <div className="mt-auto pt-4 border-t border-gray-800">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Major</p>
                                    <p className="text-sm text-white font-medium">{edu.major}</p>
                                </div>
                            </div>

                            {/* Hover outline */}
                            <div className="absolute inset-0 border-2 border-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;   