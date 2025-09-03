// Environment variables for URLs and contact information
export const config = {
    // Contact Information
    email: import.meta.env.VITE_EMAIL || 'krishnathakat2001@gmail.com',
    linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/krishna-thakar-110683219',
    linkedinUsername: import.meta.env.VITE_LINKEDIN_USERNAME || 'krishna-thakar-110683219',
    githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/ThakarKrishna',
    githubUsername: import.meta.env.VITE_GITHUB_USERNAME || 'ThakarKrishna',
    location: import.meta.env.VITE_LOCATION || 'Ahmedabad, India',
    resumeUrl: import.meta.env.VITE_RESUME_URL || '/krishna-resume.pdf',

    // Project URLs
    bandarUrl: import.meta.env.VITE_BANDAR_URL || 'https://customer-stg.bandar.co.in/',
    cribzzzUrl: import.meta.env.VITE_CRIBZZZ_URL || 'https://cribzzzz.com/',
    bhlUrl: import.meta.env.VITE_BHL_URL || '#',
    superSolutionsUrl: import.meta.env.VITE_SUPER_SOLUTIONS_URL || '#',
    respondSvpUrl: import.meta.env.VITE_RESPONDSVP_URL || '#',
    vidolaUrl: import.meta.env.VITE_VIDOLA_URL || '#',

    // Company URLs
    openxcellUrl: import.meta.env.VITE_OPENXCELL_URL || 'https://openxcell.com',
    confianceUrl: import.meta.env.VITE_CONFIANCE_URL || 'https://confiance.com',
    drcSystemsUrl: import.meta.env.VITE_DRC_SYSTEMS_URL || 'https://drcsystems.com',
    smartMonkeyUrl: import.meta.env.VITE_SMART_MONKEY_URL || 'https://smartmonkey.com',
};

// Current role information
export const currentRole = {
    company: 'OpenXcell',
    position: 'Senior Software Engineer (Full Stack Developer)',
    duration: 'Mar 2023 – Present',
    description: 'Leading development of scalable web applications using React.js, Next.js, Node.js, Sequelize, and Azure.',
    keyResponsibilities: [
        'Leading development of scalable web applications using React.js, Next.js, Node.js, Sequelize, and Azure',
        'Built real-time WebSocket features for live alerts & notifications, improving responsiveness across enterprise apps',
        'Ensuring code quality, security, and timely delivery while collaborating with cross-functional teams'
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Sequelize', 'Azure', 'WebSockets'],
    url: config.openxcellUrl
};
