/**
 * Skill Extraction, Gap Analysis & Learning Roadmap Engine
 */
class SkillEngine {
  constructor() {
    this.categories = {
      'Programming': ['java', 'python', 'javascript', 'c++', 'c#', 'go', 'rust', 'typescript'],
      'Frontend': ['html5', 'css3', 'react', 'vue', 'angular', 'tailwind', 'bootstrap'],
      'Backend': ['spring boot', 'node.js', 'express', 'django', 'fastapi', 'rest api', 'graphql'],
      'Database': ['sql', 'postgresql', 'mysql', 'mongodb', 'redis'],
      'AI/ML': ['pandas', 'numpy', 'scikit-learn', 'tensorflow', 'pytorch', 'nlp', 'deep learning'],
      'Cloud': ['aws', 'azure', 'gcp', 'cloud basics'],
      'DevOps': ['docker', 'kubernetes', 'ci/cd', 'linux', 'git', 'terraform'],
      'Cybersecurity': ['networking', 'penetration testing', 'siem', 'wireshark', 'cybersecurity basics'],
      'Data Analytics': ['tableau', 'powerbi', 'data visualization', 'excel'],
      'Soft Skills': ['problem solving', 'communication', 'teamwork', 'leadership']
    };
  }

  categorizeSkill(skillName) {
    const lower = skillName.toLowerCase();
    for (const [cat, list] of Object.entries(this.categories)) {
      if (list.some(s => lower.includes(s))) {
        return cat;
      }
    }
    return 'Other Technical';
  }

  analyzeSkillGap(studentSkills = [], requiredSkills = []) {
    const studentLower = studentSkills.map(s => s.toLowerCase());
    const matched = [];
    const missing = [];

    requiredSkills.forEach(req => {
      if (studentLower.some(s => s === req.toLowerCase() || s.includes(req.toLowerCase()))) {
        matched.push(req);
      } else {
        missing.push(req);
      }
    });

    const gapPercentage = requiredSkills.length > 0
      ? Math.round((matched.length / requiredSkills.length) * 100)
      : 100;

    return {
      gapScore: gapPercentage,
      matchedSkills: matched,
      missingSkills: missing
    };
  }

  generateLearningRoadmap(skillName) {
    const cat = this.categorizeSkill(skillName);
    return {
      skillName,
      category: cat,
      estimatedHours: 10,
      steps: [
        { title: `Core ${skillName} Fundamentals`, duration: '2.5 hrs', task: 'Study syntax & architectural patterns.' },
        { title: `Building Practical Labs with ${skillName}`, duration: '3.5 hrs', task: 'Implement standard coding exercises & unit tests.' },
        { title: `Mini Project Integration`, duration: '3.0 hrs', task: 'Integrate skill into a working application repository.' },
        { title: `Final Assessment & Knowledge Check`, duration: '1.0 hr', task: 'Complete scenario-based interview question quiz.' }
      ]
    };
  }
}

window.skillEngine = new SkillEngine();
