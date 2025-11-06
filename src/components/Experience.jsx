import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experienceData = [
    {
        id: 1,
        role: 'Freelancer | Full-stack developer',
        company: 'Self-Employed',
        duration: 'May 2025 – Present',
        location: 'Toronto, ON',
        responsibilities: [
            'Designed and developed full-stack web applications for small businesses, optimizing frontend UX and backend API performance.',
            'Worked with MySQL and PostgreSQL databases to create efficient data models and queries.',
            'Collaborated with clients to troubleshoot and refactor legacy code for better scalability and maintainability.',
            'Implemented secure authentication and cloud deployment pipelines using Render and Azure services.'
        ]
    },
    {
        id: 2,
        role: 'Web Developer Intern',
        company: 'GL InfoTech',
        duration: 'April 2022 – July 2023',
        location: 'Kerala, India',
        responsibilities: [
            'Assisted in front-end development and bug fixing for client web applications.',
            'Tested and optimized applications across devices and browsers.',
            'Supported database operations using MySQL.'
        ]
    },
    {
        id: 3,
        role: 'Stage Hand',
        company: 'NASCO',
        duration: 'September 2024 – Present',
        location: 'Toronto, ON',
        responsibilities: [
            'Performed stage setup, dismantling, and conversion tasks for large-scale productions.',
            'Ensured sets were organized, camera-ready, and safe, supporting director and designer vision.',
            'Enhanced workplace safety by implementing effective organizational practices and maintaining facilities to industry standards.',
            'Installed and maintained lighting setups for performances.',
            'Worked under strict deadlines to support smooth transitions between events.'
        ]
    },
    {
        id: 4,
        role: 'Stage Technician (Freelancer)',
        company: 'AV Canada',
        duration: 'September 2024 – November 2024',
        location: 'Toronto, ON',
        responsibilities: [
            'Supported stage effects, lighting setup, and warehouse operations including equipment inspection.',
            'Converted venues for various events, including staging and seating adjustments.',
            'Assembled and dismantled stages, demonstrating adaptability and teamwork.',
            'Supported facility conversion efforts by ensuring efficient setup and breakdown.'
        ]
    },
    {
        id: 5,
        role: 'Stage Technician (Freelancer)',
        company: 'Mac Show systems',
        duration: 'November 2023 – Present',
        location: 'Toronto, ON',
        responsibilities: [
            'Supported lighting installation and stage assembly for concerts and corporate events.',
            'Collaborated on stage assembly and lighting setup, acquiring practical skills in event production.',
            'Assisted in stage and lighting setup for concerts and sports events.',
            'Assisted with warehouse operations, focusing on inventory management and equipment maintenance.',
            'Worked with Stage Line.'
        ]
    },
    {
        id: 6,
        role: 'Video Data Collection Associate',
        company: 'Mecka.ai',
        duration: 'June 2025 – Present',
        location: 'Toronto, ON',
        responsibilities: [
            'Captured and annotated large volumes of video data to support AI/ML training, requiring precise data labeling and quality checks.',
            'Collaborated with cross-functional teams to ensure data quality and relevance.',
            'Utilized specialized tools and Excel to maintain accurate logs and track project progress.'
        ]
    },
    {
        id: 7,
        role: 'Machine Operator Associate',
        company: 'Broadridge',
        duration: 'February 2025 – May 2025',
        location: 'Toronto, ON',
        responsibilities: [
            'Processed and recorded production data with 100% accuracy, ensuring timely completion of daily targets.',
            'Entered and verified sensitive client information while meeting stringent confidentiality and compliance requirements.',
            'Troubleshoot minor technical issues and coordinated with maintenance teams to resolve machine errors.',
            'Collaborated with cross-functional teams to resolve discrepancies and maintain workflow efficiency.'
        ]
    }
];

// Brutalist animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
};

const Experience = () => {
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
                    <h2 className="text-2xl font-bold mb-2 tracking-tight text-white">EXPERIENCE</h2>
                    <p className="text-sm text-gray-500 max-w-md">Professional work history and key responsibilities</p>
                </motion.div>

                {/* Brutalist Grid - Dense List */}
                <motion.div 
                    className="grid grid-cols-1 gap-px bg-gray-700"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {experienceData.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className="relative bg-gray-900 p-6 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                        >
                            {/* Status indicator - cyan for current, gray for past */}
                            <div className={`absolute top-3 left-3 w-2 h-2 ${exp.duration.includes('Present') ? 'bg-cyan-400' : 'bg-gray-500'} rounded-full`} />
                            
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">{exp.company}</p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <div className="flex items-center text-sm text-gray-400 mb-1">
                                        <Calendar className="w-3 h-3 mr-2 text-cyan-400" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-400">
                                        <MapPin className="w-3 h-3 mr-2 text-cyan-400" />
                                        <span className="uppercase">{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="mt-4 pt-4 border-t border-gray-800">
                                {exp.responsibilities.map((resp, idx) => (
                                    <motion.p 
                                        key={idx} 
                                        className="text-sm text-gray-300 mb-2 pl-3 border-l-2 border-gray-700 hover:border-cyan-400 transition-colors duration-200"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.03 }}
                                        viewport={{ once: true }}
                                    >
                                        {resp}
                                    </motion.p>
                                ))}
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

export default Experience;