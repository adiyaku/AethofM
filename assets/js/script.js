'use strict';

/**
 * Navbar variables
 */

const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener('click', function () {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('active');
    });
}

/**
 * Header sticky
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
    window.scrollY >= 10
        ? header.classList.add('active')
        : header.classList.remove('active');
});



/**
 * Go top button
 */

const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', () => {
    window.scrollY >= 500
        ? goTopBtn.classList.add('active')
        : goTopBtn.classList.remove('active');
});

/**
 * Play audio
 */

const audio = document.querySelector('#audio');
const btn = document.querySelector('#play-btn');

btn.addEventListener('click', () => {
    if (btn.getAttribute('playing')) {
        audio.pause();
        btn.removeAttribute('playing');
    } else {
        audio.play();
        btn.setAttribute('playing', true);
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedBox = document.getElementById('animatedBox');
  const playSoundBtn = document.getElementById('playSoundBtn');
  const audio = document.getElementById('audio');

 


  // Event Listener for playing sound
  playSoundBtn.addEventListener('click', () => {
    audio.play();
    console.log('Sound played');
  });

  // Additional tasks with JavaScript functions
  function changeBoxSize() {
    animatedBox.style.width = '150px';
    animatedBox.style.height = '150px';
  }

  function resetBoxSize() {
    animatedBox.style.width = '100px';
    animatedBox.style.height = '100px';
  }

  // Event Listener for 'dblclick'
  animatedBox.addEventListener('dblclick', () => {
    changeBoxSize();
    console.log('Box size increased');
  });

  // Event Listener for 'mouseleave'
  animatedBox.addEventListener('mouseleave', () => {
    resetBoxSize();
    console.log('Box size reset');
  });
});
