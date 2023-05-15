function changeBottomImage(src) {
    document.getElementById("bottom-img").src = src;
  }

  if (localStorage.getItem('stylemode') === 'dark') {
    const themeStylesheet = document.querySelector('#style-mode');
    themeStylesheet.setAttribute('href', 'darkmode.css');
  }
  if (localStorage.getItem('stylemode') === 'light') {
    const themeStylesheet = document.querySelector('#style-mode');
    themeStylesheet.setAttribute('href', 'bullfrog.css');
  }
  if (localStorage.getItem('stylemode') === 'party') {
    const themeStylesheet = document.querySelector('#style-mode');
    themeStylesheet.setAttribute('href', 'partymode.css');
  }

  const darkToggle = document.getElementById('toggle-darktheme');
  darkToggle.addEventListener('click', function() {
    const themeStylesheet = document.querySelector('#style-mode');
    if (themeStylesheet.getAttribute('href') !== 'darkmode.css') {
      if (document.getElementById("bottom-img") ){
        document.getElementById("bottom-img").src = 'imgs/navmenu0.jpg'};
      themeStylesheet.setAttribute('href', 'darkmode.css');
      localStorage.setItem('stylemode', 'dark')
    } else {
      themeStylesheet.setAttribute('href', 'bullfrog.css')
      localStorage.setItem('stylemode', 'light')
      if (document.getElementById("bottom-img") ){
        document.getElementById("bottom-img").src = 'imgs/navmenu0.jpg'};;

    }
  });

  const partyTheme = document.getElementById('toggle-partytheme');
  partyTheme.addEventListener('click', function() {
    const themeStylesheet = document.querySelector('#style-mode');
    if (themeStylesheet.getAttribute('href') !== 'partymode.css'){
      themeStylesheet.setAttribute('href', 'partymode.css');
      if (document.getElementById("bottom-img") ){
        document.getElementById("bottom-img").src = 'imgs/partymenu.jpg'};;
      localStorage.setItem('stylemode', 'party')
    } else {
      if (document.getElementById("bottom-img") ){
        document.getElementById("bottom-img").src = 'imgs/navmenu0.jpg'};
      themeStylesheet.setAttribute('href', 'bullfrog.css')
      localStorage.setItem('stylemode', 'light')
    }
  });



