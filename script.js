const handleVideoClick = (e) => {
  document.querySelector('#overlay').classList.remove('hidden');
  document.querySelector('#overlay').classList.add('visible');
  document.querySelector('nav').classList.remove('visible');
  document.querySelector('nav').classList.add('hidden');
  
}

const handleCloseVideoClick = (e) => {
  document.querySelector('#overlay').classList.remove('visible');
  document.querySelector('#overlay').classList.add('hidden');
  document.querySelector('nav').classList.remove('hidden');
  document.querySelector('nav').classList.add('visible');
}

document.querySelector('#showChessedVideo').addEventListener('click',handleVideoClick);
document.querySelector('#watchChessedVideoIcon').addEventListener('click',handleVideoClick);
document.querySelector('#closeVideo').addEventListener('click',handleCloseVideoClick);

document.querySelector('#menuIcon').addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('active');
});

document.querySelectorAll('.dropdown a').forEach(el => el.addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('active');
}));