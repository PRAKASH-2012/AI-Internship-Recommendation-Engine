/**
 * Career Recommendation Engine
 * Analyzes student skills, education, and projects to match 10+ target tech career tracks.
 */
class CareerEngine {
  constructor() {
    this.careerPaths = [
      {
        id: 'car-1',
        title: 'Software Developer / Backend Engineer',
        keySkills: ['Java', 'Python', 'SQL', 'REST API', 'Git', 'Spring Boot'],
        avgSalary: '$2,200 - $3,500 / mo',
        description: 'Build enterprise web services, database architectures, and core software applications.'
      },
      {
        id: 'car-2',
        title: 'Full Stack Web Developer',
        keySkills: ['JavaScript', 'HTML5', 'CSS3', 'React', 'REST API', 'SQL'],
        avgSalary: '$2,400 - $3,800 / mo',
        description: 'Design responsive client interfaces and seamlessly integrate server backend APIs.'
      },
      {
        id: 'car-3',
        title: 'Data Scientist & ML Engineer',
        keySkills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow'],
        avgSalary: '$2,600 - $4,000 / mo',
        description: 'Clean data, build predictive machine learning models, and derive business insights.'
      },
      {
        id: 'car-4',
        title: 'Cloud Engineering & DevOps Specialist',
        keySkills: ['Linux', 'Docker', 'AWS', 'Python', 'Git', 'Kubernetes'],
        avgSalary: '$2,500 - $3,900 / mo',
        description: 'Automate CI/CD pipelines, manage container clusters, and deploy serverless cloud architecture.'
      },
      {
        id: 'car-5',
        title: 'Cybersecurity Analyst',
        keySkills: ['Networking', 'Linux', 'Cybersecurity Basics', 'Python', 'SIEM'],
        avgSalary: '$2,100 - $3,400 / mo',
        description: 'Monitor network security logs, audit vulnerabilities, and enforce zero-trust defense.'
      }
    ];
  }

  evaluateCareerMatches(student) {
    const studentSkills = (student.skills || []).map(s => s.toLowerCase());

    return this.careerPaths.map(career => {
      let matchedCount = 0;
      const missingSkills = [];
      const matchedSkills = [];

      career.keySkills.forEach(req => {
        if (studentSkills.some(s => s === req.toLowerCase() || s.includes(req.toLowerCase()))) {
          matchedCount++;
          matchedSkills.push(req);
        } else {
          missingSkills.push(req);
        }
      });

      const matchPct = Math.round((matchedCount / career.keySkills.length) * 100);

      return {
        ...career,
        matchPercentage: matchPct,
        matchedSkills,
        missingSkills
      };
    }).sort((a, b) => b.matchPercentage - a.matchPercentage);
  }
}

window.careerEngine = new CareerEngine();
