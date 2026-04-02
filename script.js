// Mode sombre / clair
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});

// Citation du jour (statique pour l'instant)
const quotes = [
  {
    text: "La meilleure façon de se venger de ses ennemis, c’est de ne pas leur ressembler.",
    author: "Marc Aurèle"
  },
  {
    text: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les opinions qu’ils en ont.",
    author: "Épictète"
  },
  {
    text: "Nous souffrons plus souvent dans l’imagination que dans la réalité.",
    author: "Sénèque"
  }
];

function showDailyQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = `"${randomQuote.text}"`;
  document.getElementById('quote-author').textContent = `— ${randomQuote.author}`;
}

showDailyQuote();

// Bouton Mode Focus (alerte temporaire)
document.getElementById('focus-btn').addEventListener('click', () => {
  alert("Mode Focus activé ✨\n\nDans la prochaine version, cette page s’ouvrira en plein écran sans aucune distraction.");
});