/**
 * AI Service Abstraction Layer
 * Handles floating AI Assistant queries, local rule-based simulation, and future OpenAI/Gemini API key integration.
 */
class AIService {
  constructor() {
    this.apiKey = null;
    this.provider = 'local'; // 'local', 'openai', 'gemini'
  }

  setApiKey(key, provider = 'openai') {
    this.apiKey = key;
    this.provider = provider;
  }

  async askAssistant(prompt, context = {}) {
    // If an external API key is set, real API call can be hooked here.
    // For browser client-only mode, we use high-quality local rule engine response.
    return new Promise(resolve => {
      setTimeout(() => {
        const reply = this.generateLocalResponse(prompt.toLowerCase(), context);
        resolve(reply);
      }, 600);
    });
  }

  generateLocalResponse(query, context) {
    if (query.includes('find') || query.includes('search') || query.includes('recommend')) {
      return "🤖 **AI Recommendation Assistant**:\nBased on your profile, I found high match internships in **Software Engineering** and **Data Science**. You currently match 94% with *TechPulse Labs* (Full Stack Engineer). Would you like me to highlight missing skills?";
    }
    if (query.includes('skill') || query.includes('gap') || query.includes('missing')) {
      return "💡 **Skill Gap Analysis**:\nTo unlock higher paying backend internships, learning **Spring Boot** and **Docker** will boost your overall match score from 88% to 96%! Check out your custom Learning Roadmap tab.";
    }
    if (query.includes('resume') || query.includes('improve')) {
      return "📄 **Resume Optimization Tip**:\nYour resume is currently **82% optimized**. Adding quantifiable metrics to your microservice project (e.g., 'Reduced API latency by 35%') will increase recruiter visibility by 40%.";
    }
    if (query.includes('interview') || query.includes('prepare') || query.includes('java')) {
      return "🎯 **Interview Preparation**:\nFor Java/Backend roles, expect questions on **HashMap internal implementation**, **Multithreading synchronization**, and **REST API idempotency**. You can practice on the AI Interview Prep page!";
    }
    if (query.includes('remote') || query.includes('stipend')) {
      return "🌐 **Filter Alert**:\nThere are 12 Active Remote internships with stipends ranging from $2,000 to $2,800/month currently open for applications!";
    }

    return `🤖 **AI Career Assistant**:
I analyzed your query regarding "${query}". Based on your target role as a Software Developer, I recommend completing the Spring Boot module on your Learning Roadmap to maximize your match score with top tier companies!`;
  }
}

window.aiService = new AIService();
