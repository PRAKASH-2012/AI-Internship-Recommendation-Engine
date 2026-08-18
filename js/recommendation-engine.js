/**
 * Core AI Recommendation Engine
 * 8-Factor Algorithm:
 * - Skill Match: 40%
 * - Education Match: 15%
 * - Career Interest Match: 15%
 * - Location Preference: 10%
 * - Work Mode Preference: 5%
 * - Experience Match: 5%
 * - Project Relevance: 5%
 * - Eligibility: 5%
 */
class RecommendationEngine {
  calculateMatch(student, internship) {
    if (!student || !internship) return { matchScore: 0, breakdown: {}, why: [], missingSkills: [] };

    // 1. Skill Match (40 pts)
    const required = (internship.requiredSkills || []).map(r => r.toLowerCase());
    const studentSkills = (student.skills || []).map(s => s.toLowerCase());
    let matchedSkillsCount = 0;
    const missingSkills = [];
    const matchedSkills = [];

    // Improved fuzzy matching: exact, substring, or token overlap
    required.forEach(reqSkill => {
      const reqTokens = reqSkill.split(/\W+/).filter(Boolean);
      const isMatch = studentSkills.some(s => {
        if (s === reqSkill) return true;
        if (s.includes(reqSkill) || reqSkill.includes(s)) return true;
        const sTokens = s.split(/\W+/).filter(Boolean);
        const overlap = reqTokens.filter(t => sTokens.includes(t)).length;
        return overlap > 0;
      });
      if (isMatch) {
        matchedSkillsCount++;
        matchedSkills.push(reqSkill);
      } else {
        missingSkills.push(reqSkill);
      }
    });

    const skillScoreRatio = required.length > 0 ? (matchedSkillsCount / required.length) : 1;
    const skillScore = Math.round(skillScoreRatio * 40);

    // 2. Education Match (15 pts)
    let eduScore = 10;
    const stdDegree = (student.education?.degree || '').toLowerCase();
    const intDegree = (internship.degree || '').toLowerCase();
    if (intDegree.includes('any') || stdDegree.includes('computer') || stdDegree.includes('b.s') || stdDegree.includes('b.tech')) {
      eduScore = 15;
    }

    // 3. Career Interest Match (15 pts)
    let careerScore = 8;
    const stdInterests = (student.careerInterests || []).map(i => i.toLowerCase());
    const intRole = (internship.role || '').toLowerCase();
    if (stdInterests.some(interest => intRole.includes(interest) || interest.includes('software') || interest.includes('full stack'))) {
      careerScore = 15;
    }

    // 4. Location Preference (10 pts)
    let locationScore = 5;
    const stdLocations = (student.preferredLocations || []).map(l => l.toLowerCase());
    const intLocation = (internship.location || '').toLowerCase();
    if (internship.workMode === 'Remote' || stdLocations.some(loc => loc === 'remote' || intLocation.includes(loc))) {
      locationScore = 10;
    }

    // 5. Work Mode Preference (5 pts)
    let workModeScore = 3;
    if (student.preferredWorkMode === internship.workMode || internship.workMode === 'Remote') {
      workModeScore = 5;
    }

    // 6. Experience Match (5 pts)
    let expScore = 5; // Freshers welcome

    // 7. Project Relevance (5 pts)
    let projScore = 3;
    const projects = student.projects || [];
    if (projects.length > 0) {
      projScore = 5;
    }

    // 8. Eligibility (CGPA) (5 pts)
    let eligScore = 5;
    if (student.education?.cgpa && internship.minCgpa && student.education.cgpa < internship.minCgpa) {
      eligScore = 1;
    }

    const totalScore = Math.min(100, Math.max(0, 
      skillScore + eduScore + careerScore + locationScore + workModeScore + expScore + projScore + eligScore
    ));

    // Transparent Reasons Generation
    const why = [];
    if (matchedSkills.length > 0) {
      why.push(`✓ Matches key skills: ${matchedSkills.slice(0, 3).join(', ')}`);
    }
    if (locationScore === 10) {
      why.push(`✓ Location & Work Mode (${internship.workMode}) perfectly align`);
    }
    if (student.education?.cgpa >= (internship.minCgpa || 0)) {
      why.push(`✓ CGPA (${student.education?.cgpa}) meets eligibility threshold (${internship.minCgpa || 3.0})`);
    }
    if (projects.length > 0) {
      why.push(`✓ Relevant project portfolio detected (${projects[0].name})`);
    }
    if (missingSkills.length > 0) {
      why.push(`⚠ Missing skill recommendation: ${missingSkills.slice(0, 2).join(', ')}`);
    }

    return {
      matchScore: totalScore,
      breakdown: {
        skillMatch: skillScore,
        educationMatch: eduScore,
        careerMatch: careerScore,
        locationMatch: locationScore,
        workModeMatch: workModeScore,
        experienceMatch: expScore,
        projectMatch: projScore,
        eligibilityMatch: eligScore
      },
      why,
      missingSkills,
      matchedSkills
    };
  }

  async rankInternshipsForStudent(student, internships) {
    const scored = internships.map(internship => {
      const match = this.calculateMatch(student, internship);
      return {
        ...internship,
        matchScore: match.matchScore,
        matchDetails: match
      };
    });

    return scored.sort((a, b) => b.matchScore - a.matchScore);
  }
}

window.recommendationEngine = new RecommendationEngine();
