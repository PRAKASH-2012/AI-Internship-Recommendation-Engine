/**
 * Fraud & Scam Internship Detection Engine
 * Calculates risk scores based on suspicious salary, upfront fee requests, fake contact details, etc.
 */
class FraudDetector {
  analyzeListing(internship, company) {
    let riskScore = 0;
    const reasons = [];

    const desc = (internship.description || '').toLowerCase();
    const title = (internship.role || '').toLowerCase();

    // 1. Fee / Payment demand check
    if (desc.includes('fee') || desc.includes('telegram') || desc.includes('pay') || desc.includes('deposit') || desc.includes('whatsapp')) {
      riskScore += 45;
      reasons.push('Mentions payment fee, Telegram or unauthorized external messaging channel');
    }

    // 2. Unrealistic Stipend Check
    if (internship.stipendNumeric && internship.stipendNumeric > 8000 && (title.includes('data entry') || title.includes('typing') || title.includes('easy'))) {
      riskScore += 35;
      reasons.push('Unrealistically high stipend offered for low-skill data entry work');
    }

    // 3. Unverified Company Check
    if (company && !company.isVerified) {
      riskScore += 15;
      reasons.push('Company entity profile is unverified on the platform');
    }

    // 4. Missing Responsibilities / Vague description
    if (desc.length < 50) {
      riskScore += 10;
      reasons.push('Listing description is brief and lacks technical requirements');
    }

    riskScore = Math.min(100, riskScore);

    let riskLevel = 'Verified';
    if (riskScore >= 70) riskLevel = 'High Risk';
    else if (riskScore >= 35) riskLevel = 'Needs Review';
    else if (riskScore >= 15) riskLevel = 'Low Risk';

    return {
      riskScore,
      riskLevel,
      reasons
    };
  }
}

window.fraudDetector = new FraudDetector();
