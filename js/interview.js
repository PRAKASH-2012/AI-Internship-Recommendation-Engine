/**
 * Interview Scheduler & AI Practice Generator
 */
class InterviewManager {
  getQuestionsForRole(role, skills = []) {
    const questions = [
      {
        id: 'q1',
        category: 'Technical',
        question: 'Explain the difference between process and thread, and how multithreading operates in your primary programming language.',
        sampleAnswer: 'A process is an executing program instance with isolated memory space. A thread is a lightweight execution unit sharing process memory...'
      },
      {
        id: 'q2',
        category: 'Technical',
        question: 'How do index structures optimize database read query performance, and what is the trade-off during write operations?',
        sampleAnswer: 'Indexes build B-Trees or Hash tables to reduce search complexity from O(N) to O(log N). Trade-off: write operations (INSERT/UPDATE) require index updates...'
      },
      {
        id: 'q3',
        category: 'Behavioral',
        question: 'Describe a situation where your project build failed close to a deadline. How did you diagnose and resolve it?',
        sampleAnswer: 'Focus on STAR framework: Situation, Task, Action (checking stack trace logs), Result (successful deployment)...'
      },
      {
        id: 'q4',
        category: 'Situational',
        question: 'If assigned a legacy codebase with zero documentation, what structured steps will you take to onboard yourself?',
        sampleAnswer: '1. Set up local dev environment. 2. Trace API endpoint routes. 3. Read automated unit tests. 4. Map data flow diagram.'
      }
    ];

    return questions;
  }
}

window.interviewManager = new InterviewManager();
