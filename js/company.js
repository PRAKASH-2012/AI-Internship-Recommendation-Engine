/**
 * Company Profile & Trust Score Engine
 */
class CompanyManager {
  calculateTrustScore(company) {
    if (!company) return 50;
    let score = 50;

    if (company.isVerified) score += 30;
    if (company.website && company.website.includes('http')) score += 10;
    if (company.reviewsCount > 10) score += 10;

    return Math.min(99, Math.max(10, score));
  }
}

window.companyManager = new CompanyManager();
