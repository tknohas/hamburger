'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const hamburger = document.querySelector('.hamburger');
  open.addEventListener('click', () => {
    hamburger.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    hamburger.classList.remove('show');
    open.classList.remove('hide');
  });
}

