document.addEventListener('DOMContentLoaded', () => {
  const studentSelect = document.getElementById('student-select');
  const iaSelect = document.getElementById('internship-a-select');
  const ibSelect = document.getElementById('internship-b-select');
  const runBtn = document.getElementById('compare-run');

  const colATitle = document.getElementById('col-a-title');
  const colBTitle = document.getElementById('col-b-title');

  const ids = {
    scoreA: document.getElementById('score-a'),
    scoreB: document.getElementById('score-b'),
    stipendA: document.getElementById('stipend-a'),
    stipendB: document.getElementById('stipend-b'),
    modeA: document.getElementById('mode-a'),
    modeB: document.getElementById('mode-b'),
    durationA: document.getElementById('duration-a'),
    durationB: document.getElementById('duration-b'),
    skillsA: document.getElementById('skills-a'),
    skillsB: document.getElementById('skills-b'),
    whyA: document.getElementById('why-a'),
    whyB: document.getElementById('why-b')
  };

  if (!window.SEED_DATA) {
    console.warn('SEED_DATA not found; compare UI will not populate.');
    return;
  }

  const students = SEED_DATA.students || [];
  const internships = SEED_DATA.internships || [];

  function populateSelect(selectEl, items, getLabel) {
    selectEl.innerHTML = '';
    items.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = getLabel(item);
      selectEl.appendChild(opt);
    });
  }

  populateSelect(studentSelect, students, s => s.name + ' (' + s.email + ')');
  populateSelect(iaSelect, internships, i => i.role + ' — ' + i.companyName);
  populateSelect(ibSelect, internships, i => i.role + ' — ' + i.companyName);

  // default picks
  if (internships.length >= 2) {
    iaSelect.selectedIndex = 0;
    ibSelect.selectedIndex = 1;
  }

  function getById(list, id) {
    return list.find(x => x.id === id);
  }

  function renderMatchToCell(match, targetElems) {
    targetElems.score.textContent = match.matchScore + '%';
    targetElems.stipend.textContent = match.internship?.stipend || '—';
    targetElems.mode.textContent = match.internship?.workMode || '—';
    targetElems.duration.textContent = match.internship?.duration || '—';
    targetElems.skills.textContent = (match.internship?.requiredSkills || []).join(', ');
    targetElems.why.innerHTML = (match.matchDetails?.why || []).map(w => '<div>' + w + '</div>').join('') || '—';
  }

  function computeAndRender() {
    const sid = studentSelect.value;
    const aId = iaSelect.value;
    const bId = ibSelect.value;
    const student = getById(students, sid);
    const a = getById(internships, aId);
    const b = getById(internships, bId);

    colATitle.textContent = a ? (a.role + ' (' + a.companyName + ')') : 'Internship A';
    colBTitle.textContent = b ? (b.role + ' (' + b.companyName + ')') : 'Internship B';

    if (!window.recommendationEngine) {
      console.error('recommendationEngine not available');
      return;
    }

    const matchA = a ? window.recommendationEngine.calculateMatch(student, a) : { matchScore: '—', matchDetails: {}, internship: a };
    const matchB = b ? window.recommendationEngine.calculateMatch(student, b) : { matchScore: '—', matchDetails: {}, internship: b };

    renderMatchToCell({ ...matchA, internship: a, matchDetails: matchA }, {
      score: ids.scoreA,
      stipend: ids.stipendA,
      mode: ids.modeA,
      duration: ids.durationA,
      skills: ids.skillsA,
      why: ids.whyA
    });

    renderMatchToCell({ ...matchB, internship: b, matchDetails: matchB }, {
      score: ids.scoreB,
      stipend: ids.stipendB,
      mode: ids.modeB,
      duration: ids.durationB,
      skills: ids.skillsB,
      why: ids.whyB
    });
  }

  runBtn.addEventListener('click', computeAndRender);

  // compute once on load
  computeAndRender();
});
