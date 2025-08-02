import './style.css'

const themeToggle = document.getElementById('themeToggle')
const body = document.body

function toggleTheme() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  body.classList.add('dark')
}

themeToggle?.addEventListener('click', toggleTheme) 

import { inject } from '@vercel/analytics';
inject();

const runaway = document.getElementById("runaway");
const threshold = 100;
const moveDistance = 150;

if (runaway) {
  document.addEventListener("mousemove", (e: MouseEvent) => {
    const rect = runaway.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < threshold) {
      const angle = Math.atan2(dy, dx);
      let newX = rect.left - Math.cos(angle) * moveDistance;
      let newY = rect.top - Math.sin(angle) * moveDistance;

      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      // If new position would go off-screen, teleport somewhere random
      if (newX < 0 || newX > maxX || newY < 0 || newY > maxY) {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
      }

      runaway.style.left = `${newX}px`;
      runaway.style.top = `${newY}px`;
    }
  });
}
