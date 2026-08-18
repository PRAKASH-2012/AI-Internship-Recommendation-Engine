/**
 * Web Speech API Voice Search Integration
 */
class VoiceSearchManager {
  constructor() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = SpeechRecognition ? new SpeechRecognition() : null;
  }

  startListening(onResultCallback) {
    if (!this.recognition) {
      Utils.showToast('Voice Search (Speech API) is not supported in this browser version.', 'warning');
      return;
    }

    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;

    Utils.showToast('🎙 Listening... Speak search term now (e.g. "Find Java Internships")', 'info');

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      Utils.showToast(`Recognized: "${transcript}"`, 'success');
      if (onResultCallback) onResultCallback(transcript);
    };

    this.recognition.onerror = (event) => {
      console.error('Voice Recognition Error:', event.error);
      Utils.showToast('Could not recognize voice input. Please try again.', 'error');
    };

    this.recognition.start();
  }
}

window.voiceSearch = new VoiceSearchManager();
