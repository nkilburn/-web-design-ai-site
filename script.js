console.log("Website is connected.");

const tipOutput = document.getElementById('tip-output');
const generateTip = document.getElementById('generate-tip');
const learnMore = document.getElementById('learn-more');

const tips = [
  'Use a strong visual hierarchy to guide visitors through your page.',
  'Keep buttons clear and bold, with a single action per section.',
  'Use whitespace intentionally to make content feel modern and uncluttered.',
  'Select a limited color palette to strengthen your brand identity.',
  'Optimize images and fonts so the page loads quickly on any device.',
];

function showRandomTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  tipOutput.textContent = tip;
}

generateTip.addEventListener('click', showRandomTip);
learnMore.addEventListener('click', () => {
  tipOutput.textContent = 'AI design works best when you mix smart templates with your own creativity.';
});
