/**
 * Multilingual Translation Dictionaries (EN, TN, HI)
 */
const TRANSLATIONS = {
  en: {
    brand_name: "AI Internship Recommendation Engine",
    hero_headline: "Find the Internship That Fits Your Future.",
    hero_subheading: "AI-powered internship recommendations based on your skills, education, interests, career goals and preferences.",
    btn_get_started: "Get Started",
    btn_explore: "Explore Internships",
    btn_recruiters: "For Recruiters",
    nav_dashboard: "Dashboard",
    nav_internships: "Internships",
    nav_recommendations: "AI Recommendations",
    nav_skill_gap: "Skill Gap",
    nav_career: "Career Path",
    nav_applications: "Applications",
    nav_saved: "Saved",
    nav_profile: "Profile",
    search_placeholder: "Search roles, skills, companies...",
    match_score: "Match Score",
    apply_now: "Apply Now"
  },
  tn: {
    brand_name: "செயற்கை நுண்ணறிவு தொழிற்பயிற்சி பரிந்துரை எஞ்சின்",
    hero_headline: "உங்கள் எதிர்காலத்திற்கு ஏற்ற தொழிற்பயிற்சியைக் கண்டறியவும்.",
    hero_subheading: "உங்கள் திறன்கள், கல்வி, ஆர்வங்கள் மற்றும் விருப்பங்களின் அடிப்படையில் AI தொழிற்பயிற்சி பரிந்துரைகள்.",
    btn_get_started: "தொடங்கவும்",
    btn_explore: "தொழிற்பயிற்சிகளை ஆராயுங்கள்",
    btn_recruiters: "நிறுவனங்களுக்கு",
    nav_dashboard: "முகப்பு",
    nav_internships: "தொழிற்பயிற்சிகள்",
    nav_recommendations: "AI பரிந்துரைகள்",
    nav_skill_gap: "திறன் இடைவெளி",
    nav_career: "வாழ்க்கை பாதை",
    nav_applications: "விண்ணப்பங்கள்",
    nav_saved: "சேமிக்கப்பட்டவை",
    nav_profile: "சுயவிவரம்",
    search_placeholder: "பணிகள், திறன்களைத் தேடுங்கள்...",
    match_score: "பொருத்தம் மதிப்பீடு",
    apply_now: "இப்போதே விண்ணப்பிக்கவும்"
  },
  hi: {
    brand_name: "एआई इंटर्नशिप सिफारिश इंजन",
    hero_headline: "अपने भविष्य के अनुकूल सही इंटर्नशिप खोजें।",
    hero_subheading: "आपके कौशल, शिक्षा, रुचियों और प्राथमिकताओं के आधार पर एआई-संचालित इंटर्नशिप सिफारिशें।",
    btn_get_started: "शुरू करें",
    btn_explore: "इंटर्नशिप खोजें",
    btn_recruiters: "नियक्ताओं के लिए",
    nav_dashboard: "डैशबोर्ड",
    nav_internships: "इंटर्नशिप",
    nav_recommendations: "एआई सिफारिशें",
    nav_skill_gap: "कौशल अंतर",
    nav_career: "करियर पथ",
    nav_applications: "आवेदन",
    nav_saved: "सहेजे गए",
    nav_profile: "प्रोफ़ाइल",
    search_placeholder: "भूमिकाएं, कौशल, कंपनियां खोजें...",
    match_score: "मैच स्कोर",
    apply_now: "अभी आवेदन करें"
  }
};

class TranslationManager {
  constructor() {
    this.currentLang = Storage.getLanguage() || 'en';
  }

  setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
      this.currentLang = lang;
      Storage.setLanguage(lang);
      this.applyTranslations();
    }
  }

  t(key) {
    return (TRANSLATIONS[this.currentLang] && TRANSLATIONS[this.currentLang][key]) || 
           (TRANSLATIONS['en'][key] || key);
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        if (el.tagName === 'INPUT' && el.type === 'text') {
          el.placeholder = this.t(key);
        } else {
          el.textContent = this.t(key);
        }
      }
    });
  }
}

window.translator = new TranslationManager();
