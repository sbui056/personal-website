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