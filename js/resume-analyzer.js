/**
 * Client-Side Resume Extraction & Scoring Engine
 */
class ResumeAnalyzer {
  analyzeText(rawText) {
    const text = rawText || '';
    const lower = text.toLowerCase();

    // Key technical keywords lookup
    const potentialSkills = [
      'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'React', 'Spring Boot',
      'Docker', 'AWS', 'Linux', 'Git', 'Pandas', 'NumPy', 'Scikit-Learn', 'REST API',
      'Cybersecurity', 'Tableau', 'PowerBI', 'C++', 'C#'
    ];

    const extractedSkills = potentialSkills.filter(skill => lower.includes(skill.toLowerCase()));

    // Extract Education keywords
    let degree = 'Computer Science / Engineering';
    if (lower.includes('b.s') || lower.includes('bachelor')) degree = 'Bachelor of Science';
    if (lower.includes('b.tech') || lower.includes('b.e')) degree = 'B.Tech / B.E.';
    if (lower.includes('master') || lower.includes('m.s')) degree = 'Master of Science';

    // Calculate score out of 100
    let score = 50; // base score for uploading
    if (extractedSkills.length >= 3) score += 20;
    if (extractedSkills.length >= 6) score += 10;
    if (lower.includes('project') || lower.includes('github')) score += 10;
    if (lower.includes('certification') || lower.includes('aws') || lower.includes('oracle')) score += 10;

    score = Math.min(98, score);

    const suggestions = [];
    if (extractedSkills.length < 5) {
      suggestions.push('Add more explicit technical framework keywords to improve ATS scanning.');
    }
    if (!lower.includes('github') && !lower.includes('demo')) {
      suggestions.push('Include public GitHub repository links for your top engineering projects.');
    }
    if (!lower.includes('cgpa') && !lower.includes('gpa')) {
      suggestions.push('Specify your academic CGPA if above 3.0 to unlock filtered enterprise roles.');
    }
    if (suggestions.length === 0) {
      suggestions.push('Great job! Your resume format is clean and optimized for modern AI screeners.');
    }

    return {
      score,
      extractedSkills,
      degree,
      suggestions,
      rawTextLength: text.length
    };
  }
}

window.resumeAnalyzer = new ResumeAnalyzer();
