/**
 * AI Internship Recommendation Engine - Seed Data
 * Generates realistic sample datasets for 19 IndexedDB object stores on initial startup.
 */

const SEED_DATA = {
  // 1. Users
  users: [
    { id: 'usr-student-1', email: 'alex.chen@university.edu', role: 'student', name: 'Alex Chen', createdAt: '2026-01-15T09:00:00Z', isVerified: true },
    { id: 'usr-student-2', email: 'priya.sharma@techinst.edu', role: 'student', name: 'Priya Sharma', createdAt: '2026-01-18T10:30:00Z', isVerified: true },
    { id: 'usr-student-3', email: 'marcus.vance@state.edu', role: 'student', name: 'Marcus Vance', createdAt: '2026-01-20T14:15:00Z', isVerified: true },
    { id: 'usr-company-1', email: 'recruiter@techpulse.io', role: 'company', name: 'TechPulse Labs', createdAt: '2026-01-10T08:00:00Z', isVerified: true },
    { id: 'usr-company-2', email: 'hr@cloudscale.com', role: 'company', name: 'CloudScale Innovations', createdAt: '2026-01-12T11:20:00Z', isVerified: true },
    { id: 'usr-admin-1', email: 'admin@ai-internships.gov', role: 'admin', name: 'System Administrator', createdAt: '2026-01-01T00:00:00Z', isVerified: true }
  ],

  // 2. Students
  students: [
    {
      id: 'std-1',
      userId: 'usr-student-1',
      name: 'Alex Chen',
      email: 'alex.chen@university.edu',
      phone: '+1 (555) 234-5678',
      dob: '2004-05-14',
      location: 'San Francisco, CA',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      education: {
        degree: 'B.S. Computer Science',
        branch: 'Software Engineering',
        college: 'State University',
        university: 'State University System',
        cgpa: 3.85,
        graduationYear: 2026
      },
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'Git', 'HTML5', 'CSS3', 'REST API', 'React Basic'],
      projects: [
        { name: 'E-Commerce Microservice API', description: 'Built backend payment API using Java and Spring Boot with Docker containerization.', tech: ['Java', 'Spring Boot', 'SQL', 'Docker'], github: 'https://github.com/demo/ecommerce-api', demo: 'https://demo-api.example.com' },
        { name: 'AI Resume Keyword Parser', description: 'NLP based document keyphrase extractor using Python and NLTK.', tech: ['Python', 'NLP', 'Regex'], github: 'https://github.com/demo/resume-parser', demo: '' }
      ],
      certifications: [
        { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2025-08-10' },
        { name: 'Oracle Certified Associate Java SE', issuer: 'Oracle', date: '2024-11-20' }
      ],
      achievements: ['1st Place University Hackathon 2025', 'Dean\'s Honor List (4 semesters)'],
      languages: ['English (Fluent)', 'Mandarin (Conversational)'],
      careerInterests: ['Software Developer', 'Full Stack Developer', 'Backend Engineer'],
      preferredRoles: ['Backend Intern', 'Software Engineering Intern', 'Java Developer Intern'],
      preferredLocations: ['Remote', 'San Francisco, CA', 'Seattle, WA'],
      preferredWorkMode: 'Remote',
      expectedDuration: '3 Months',
      availability: 'Immediate (Summer 2026)',
      profileCompletion: 92,
      careerScore: 88
    },
    {
      id: 'std-2',
      userId: 'usr-student-2',
      name: 'Priya Sharma',
      email: 'priya.sharma@techinst.edu',
      phone: '+91 98765 43210',
      dob: '2003-11-08',
      location: 'Bengaluru, India',
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      education: {
        degree: 'B.Tech Data Science',
        branch: 'Computer Science & AI',
        college: 'National Institute of Technology',
        university: 'NIT',
        cgpa: 3.92,
        graduationYear: 2026
      },
      skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn', 'Tableau', 'PowerBI', 'TensorFlow Basic', 'Git'],
      projects: [
        { name: 'Predictive Stock Sentiment Analysis', description: 'Trained Machine Learning model to forecast stock trends using Financial News API.', tech: ['Python', 'Pandas', 'Scikit-Learn', 'NLP'], github: 'https://github.com/demo/sentiment-stock', demo: '' }
      ],
      certifications: [
        { name: 'Google Data Analytics Professional', issuer: 'Coursera', date: '2025-05-15' }
      ],
      achievements: ['Published paper in Student AI Conference 2025'],
      languages: ['English (Fluent)', 'Hindi (Native)', 'Tamil (Basic)'],
      careerInterests: ['Data Scientist', 'Data Analyst', 'AI/ML Engineer'],
      preferredRoles: ['Data Science Intern', 'AI Engineering Intern', 'Machine Learning Intern'],
      preferredLocations: ['Remote', 'Bengaluru, India', 'Hybrid'],
      preferredWorkMode: 'Hybrid',
      expectedDuration: '6 Months',
      availability: 'May 2026',
      profileCompletion: 95,
      careerScore: 94
    }
  ],

  // 3. Companies
  companies: [
    {
      id: 'cmp-1',
      userId: 'usr-company-1',
      name: 'TechPulse Labs',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
      industry: 'Software & AI Solutions',
      website: 'https://techpulse-labs-demo.io',
      location: 'San Francisco, CA',
      size: '50-200 Employees',
      description: 'Building high-scale cloud platforms and enterprise AI tools.',
      isVerified: true,
      trustScore: 96,
      rating: 4.8,
      reviewsCount: 24
    },
    {
      id: 'cmp-2',
      userId: 'usr-company-2',
      name: 'CloudScale Innovations',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80',
      industry: 'Cloud Infrastructure & Security',
      website: 'https://cloudscale-demo.com',
      location: 'Seattle, WA',
      size: '200-500 Employees',
      description: 'Pioneering next-gen serverless cloud platforms and distributed storage systems.',
      isVerified: true,
      trustScore: 92,
      rating: 4.6,
      reviewsCount: 18
    },
    {
      id: 'cmp-3',
      userId: 'usr-company-3',
      name: 'DataVibe Analytics',
      logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80',
      industry: 'Data Intelligence',
      website: 'https://datavibe-analytics.io',
      location: 'New York, NY',
      size: '20-50 Employees',
      description: 'Delivering real-time business intelligence dashboards and predictive analytics.',
      isVerified: true,
      trustScore: 89,
      rating: 4.5,
      reviewsCount: 12
    },
    {
      id: 'cmp-4',
      userId: 'usr-company-4',
      name: 'CyberShield Systems',
      logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=150&q=80',
      industry: 'Cybersecurity',
      website: 'https://cybershield-demo.org',
      location: 'Austin, TX',
      size: '100-250 Employees',
      description: 'Zero-trust architecture solutions and continuous threat monitoring.',
      isVerified: true,
      trustScore: 94,
      rating: 4.7,
      reviewsCount: 15
    },
    {
      id: 'cmp-5',
      userId: 'usr-company-5',
      name: 'QuickHire Global (Suspicious Demo)',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80',
      industry: 'Human Resources',
      website: 'http://quickhire-jobs-pay-fee.biz',
      location: 'Unspecified',
      size: '1-10 Employees',
      description: 'Guaranteed 100% placement if registration fee paid in advance.',
      isVerified: false,
      trustScore: 25,
      rating: 1.2,
      reviewsCount: 5
    }
  ],

  // 4. Internships
  internships: [
    {
      id: 'int-101',
      companyId: 'cmp-1',
      companyName: 'TechPulse Labs',
      companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
      role: 'Full Stack Software Engineer Intern',
      industry: 'Software & AI',
      location: 'San Francisco, CA',
      workMode: 'Remote',
      stipend: '$2,500 / month',
      stipendNumeric: 2500,
      duration: '3 Months',
      openings: 5,
      degree: 'B.S. / B.Tech Computer Science or related',
      minCgpa: 3.2,
      experienceReq: '0-1 Years',
      deadline: '2026-09-30',
      postedDate: '2026-08-01',
      status: 'Active',
      isVerified: true,
      riskScore: 5,
      riskLevel: 'Verified',
      description: 'Join our dynamic backend and platform engineering team to build scalable microservices and APIs.',
      responsibilities: [
        'Develop and unit-test RESTful APIs using Java / Node.js and SQL database',
        'Collaborate with frontend engineers on modern UI integration',
        'Participate in daily agile standups and code reviews'
      ],
      requiredSkills: ['Java', 'JavaScript', 'SQL', 'REST API', 'Git'],
      preferredSkills: ['Spring Boot', 'Docker', 'React', 'AWS'],
      benefits: ['Remote Work Flexibility', 'Mentorship from Senior Engineers', 'Certificate of Excellence', 'Conversion Potential']
    },
    {
      id: 'int-102',
      companyId: 'cmp-2',
      companyName: 'CloudScale Innovations',
      companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80',
      role: 'Cloud Engineering & DevOps Intern',
      industry: 'Cloud Infrastructure',
      location: 'Seattle, WA',
      workMode: 'Hybrid',
      stipend: '$2,800 / month',
      stipendNumeric: 2800,
      duration: '6 Months',
      openings: 3,
      degree: 'B.E. / B.Tech CS / IT',
      minCgpa: 3.5,
      experienceReq: 'Freshers Welcome',
      deadline: '2026-09-15',
      postedDate: '2026-08-02',
      status: 'Active',
      isVerified: true,
      riskScore: 8,
      riskLevel: 'Verified',
      description: 'Hands-on training in cloud infrastructure, Kubernetes clusters, and automated CI/CD pipelines.',
      responsibilities: [
        'Assist in configuring Terraform templates for cloud infrastructure',
        'Monitor cloud log metrics using Prometheus and Grafana',
        'Build automated test scripts using Python'
      ],
      requiredSkills: ['Linux', 'Python', 'Cloud Basics', 'Git', 'Docker'],
      preferredSkills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      benefits: ['AWS Certification Reimbursement', 'Hybrid Office Perks', 'Competitive Stipend']
    },
    {
      id: 'int-103',
      companyId: 'cmp-3',
      companyName: 'DataVibe Analytics',
      companyLogo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80',
      role: 'Data Science & Machine Learning Intern',
      industry: 'Data Intelligence',
      location: 'New York, NY',
      workMode: 'Remote',
      stipend: '$2,200 / month',
      stipendNumeric: 2200,
      duration: '3 Months',
      openings: 4,
      degree: 'B.S./M.S. Data Science, Statistics or CS',
      minCgpa: 3.4,
      experienceReq: 'Academic Projects Required',
      deadline: '2026-10-01',
      postedDate: '2026-08-04',
      status: 'Active',
      isVerified: true,
      riskScore: 10,
      riskLevel: 'Verified',
      description: 'Transform raw enterprise datasets into predictive analytics models using Python and Scikit-learn.',
      responsibilities: [
        'Perform data cleaning, feature engineering, and exploratory data analysis',
        'Build and evaluate baseline regression and classification ML models',
        'Create visual interactive dashboards using Tableau or PowerBI'
      ],
      requiredSkills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn'],
      preferredSkills: ['TensorFlow', 'Tableau', 'PowerBI', 'BigQuery'],
      benefits: ['1-on-1 AI Mentorship', 'Flexible Working Hours', 'Project Portfolio Credit']
    },
    {
      id: 'int-104',
      companyId: 'cmp-4',
      companyName: 'CyberShield Systems',
      companyLogo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=150&q=80',
      role: 'Cybersecurity Analyst Intern',
      industry: 'Cybersecurity',
      location: 'Austin, TX',
      workMode: 'Onsite',
      stipend: '$2,000 / month',
      stipendNumeric: 2000,
      duration: '4 Months',
      openings: 2,
      degree: 'B.S. Cybersecurity, Computer Engineering',
      minCgpa: 3.0,
      experienceReq: 'Basic Networking Knowledge',
      deadline: '2026-09-20',
      postedDate: '2026-08-05',
      status: 'Active',
      isVerified: true,
      riskScore: 12,
      riskLevel: 'Verified',
      description: 'Analyze network security logs, audit vulnerability reports, and learn penetration testing protocols.',
      responsibilities: [
        'Monitor SIEM alerts and log anomalies',
        'Perform basic vulnerability scanning using open source security tools',
        'Prepare threat assessment reports for internal security teams'
      ],
      requiredSkills: ['Networking', 'Linux', 'Cybersecurity Basics', 'Python'],
      preferredSkills: ['Wireshark', 'Metasploit', 'CEH Concepts', 'SIEM'],
      benefits: ['Security Lab Access', 'Onsite Meals Provided', 'Potential Return Offer']
    },
    {
      id: 'int-105',
      companyId: 'cmp-5',
      companyName: 'QuickHire Global',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80',
      role: 'Data Entry & Easy Earn Intern (Requires Fee)',
      industry: 'Human Resources',
      location: 'Remote',
      workMode: 'Remote',
      stipend: '$10,000 / month',
      stipendNumeric: 10000,
      duration: '1 Month',
      openings: 50,
      degree: 'Any Degree',
      minCgpa: 2.0,
      experienceReq: 'None',
      deadline: '2026-08-15',
      postedDate: '2026-08-06',
      status: 'Flagged',
      isVerified: false,
      riskScore: 88,
      riskLevel: 'High Risk',
      description: 'Earn $10,000 per month working 1 hour per day! Must pay $150 refundable processing fee via Telegram before interview.',
      responsibilities: ['Copy paste text', 'Send messages to friends'],
      requiredSkills: ['Typing'],
      preferredSkills: [],
      benefits: ['Instant Pay']
    }
  ],

  // 5. Skills Master List
  skills: [
    { id: 'skl-1', name: 'Java', category: 'Programming', popular: true },
    { id: 'skl-2', name: 'Python', category: 'Programming', popular: true },
    { id: 'skl-3', name: 'JavaScript', category: 'Programming', popular: true },
    { id: 'skl-4', name: 'HTML5', category: 'Frontend', popular: true },
    { id: 'skl-5', name: 'CSS3', category: 'Frontend', popular: true },
    { id: 'skl-6', name: 'React', category: 'Frontend', popular: true },
    { id: 'skl-7', name: 'Spring Boot', category: 'Backend', popular: true },
    { id: 'skl-8', name: 'REST API', category: 'Backend', popular: true },
    { id: 'skl-9', name: 'SQL', category: 'Database', popular: true },
    { id: 'skl-10', name: 'Pandas', category: 'Data Analytics', popular: true },
    { id: 'skl-11', name: 'Scikit-Learn', category: 'AI/ML', popular: true },
    { id: 'skl-12', name: 'Docker', category: 'DevOps', popular: true },
    { id: 'skl-13', name: 'AWS', category: 'Cloud', popular: true },
    { id: 'skl-14', name: 'Cybersecurity Basics', category: 'Cybersecurity', popular: true },
    { id: 'skl-15', name: 'Git', category: 'Tools', popular: true },
    { id: 'skl-16', name: 'Problem Solving', category: 'Soft Skills', popular: true },
    { id: 'skl-17', name: 'Communication', category: 'Soft Skills', popular: true }
  ],

  // 6. Applications
  applications: [
    {
      id: 'app-501',
      studentId: 'std-1',
      internshipId: 'int-101',
      companyName: 'TechPulse Labs',
      role: 'Full Stack Software Engineer Intern',
      status: 'Shortlisted',
      appliedDate: '2026-08-02',
      timeline: [
        { status: 'Applied', date: '2026-08-02', note: 'Application submitted online' },
        { status: 'Under Review', date: '2026-08-04', note: 'Profile matched 94% by AI Screening' },
        { status: 'Shortlisted', date: '2026-08-06', note: 'Invited for technical interview' }
      ]
    },
    {
      id: 'app-502',
      studentId: 'std-1',
      internshipId: 'int-102',
      companyName: 'CloudScale Innovations',
      role: 'Cloud Engineering & DevOps Intern',
      status: 'Under Review',
      appliedDate: '2026-08-05',
      timeline: [
        { status: 'Applied', date: '2026-08-05', note: 'Application submitted online' },
        { status: 'Under Review', date: '2026-08-06', note: 'Resume pending recruiter audit' }
      ]
    }
  ],

  // 7. Recommendations
  recommendations: [
    {
      studentId: 'std-1',
      internshipId: 'int-101',
      matchScore: 94,
      breakdown: {
        skillMatch: 38,
        educationMatch: 15,
        careerMatch: 14,
        locationMatch: 10,
        workModeMatch: 5,
        experienceMatch: 4,
        projectMatch: 4,
        eligibilityMatch: 4
      },
      why: [
        '✓ Java matches your project background',
        '✓ SQL & REST API skills match backend requirements',
        '✓ Preferred Remote work mode aligns 100%',
        '✓ CGPA of 3.85 meets 3.2 minimum criteria',
        '⚠ Spring Boot missing (Recommended to learn)'
      ],
      missingSkills: ['Spring Boot', 'Docker']
    }
  ],

  // 8. Learning Resources
  learningResources: [
    {
      skillName: 'Spring Boot',
      category: 'Backend',
      difficulty: 'Intermediate',
      estimatedHours: 12,
      learningPath: [
        { step: 1, title: 'Spring Core Fundamentals & Dependency Injection', type: 'Video Tutorial', duration: '3 hrs' },
        { step: 2, title: 'Building REST APIs with Spring MVC & Spring Data JPA', type: 'Hands-on Lab', duration: '4 hrs' },
        { step: 3, title: 'Connecting Spring Boot to PostgreSQL / MySQL', type: 'Project Task', duration: '3 hrs' },
        { step: 4, title: 'Mini Project: E-Commerce REST Backend Service', type: 'Assessment', duration: '2 hrs' }
      ]
    },
    {
      skillName: 'Docker',
      category: 'DevOps',
      difficulty: 'Beginner',
      estimatedHours: 8,
      learningPath: [
        { step: 1, title: 'Containers vs Virtual Machines', type: 'Article', duration: '1 hr' },
        { step: 2, title: 'Dockerfile & Image Creation', type: 'Hands-on Lab', duration: '3 hrs' },
        { step: 3, title: 'Docker Compose Multi-container orchestration', type: 'Hands-on Lab', duration: '4 hrs' }
      ]
    }
  ],

  // 9. Notifications
  notifications: [
    {
      id: 'ntf-1',
      userId: 'usr-student-1',
      title: 'Congratulations! You are Shortlisted',
      message: 'TechPulse Labs shortlisted your application for Full Stack Software Engineer Intern.',
      type: 'success',
      read: false,
      timestamp: '2026-08-06T14:30:00Z'
    },
    {
      id: 'ntf-2',
      userId: 'usr-student-1',
      title: 'New High Match Internship Found',
      message: 'AI matched CloudScale Innovations (91% match score) matching your location preferences.',
      type: 'info',
      read: true,
      timestamp: '2026-08-05T09:15:00Z'
    }
  ],

  // 10. Saved Internships
  savedInternships: [
    { studentId: 'std-1', internshipId: 'int-102', savedAt: '2026-08-04T10:00:00Z' }
  ],

  // 11. Interviews
  interviews: [
    {
      id: 'itv-1',
      applicationId: 'app-501',
      studentId: 'std-1',
      companyId: 'cmp-1',
      companyName: 'TechPulse Labs',
      role: 'Full Stack Software Engineer Intern',
      date: '2026-08-12',
      time: '14:00 (EST)',
      mode: 'Google Meet',
      meetingLink: 'https://meet.google.com/demo-techpulse-interview',
      interviewer: 'Sarah Jenkins (Engineering Manager)',
      status: 'Scheduled'
    }
  ],

  // 12. Fraud Flags
  fraudFlags: [
    {
      id: 'frd-1',
      internshipId: 'int-105',
      companyId: 'cmp-5',
      companyName: 'QuickHire Global',
      riskScore: 88,
      riskLevel: 'High Risk',
      reasons: [
        'Demands registration fee before interview',
        'Unrealistic stipend ($10,000/mo) for data entry role',
        'Unverified company domain & suspicious contact info'
      ],
      flaggedDate: '2026-08-06',
      status: 'Needs Review'
    }
  ],

  // 13. System Settings
  systemSettings: [
    { key: 'theme', value: 'dark' },
    { key: 'language', value: 'en' },
    { key: 'aiEngineVersion', value: 'v2.4-client' },
    { key: 'autoVerifyCompanies', value: false }
  ]
};

if (typeof window !== 'undefined') {
  window.SEED_DATA = SEED_DATA;
}
