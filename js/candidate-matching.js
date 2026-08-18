/**
 * Candidate Matching Engine for Recruiters
 */
class CandidateMatcher {
  rankCandidatesForInternship(internship, candidates) {
    if (!window.recommendationEngine) return candidates;

    const scored = candidates.map(candidate => {
      const match = window.recommendationEngine.calculateMatch(candidate, internship);
      return {
        ...candidate,
        matchScore: match.matchScore,
        matchDetails: match
      };
    });

    return scored.sort((a, b) => b.matchScore - a.matchScore);
  }
}

window.candidateMatcher = new CandidateMatcher();
