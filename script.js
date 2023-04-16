const handleVideoClick = (videoUrl) => {
  document.querySelector('iframe').src = videoUrl;
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

document.querySelector('#showChessedVideo').addEventListener('click',
() => handleVideoClick("https://www.youtube.com/embed/aVUuF8roI0o"));
document.querySelector('#click4VideoText').addEventListener('click',
() => handleVideoClick("https://www.youtube.com/embed/aVUuF8roI0o"));
document.querySelector('#closeVideo').addEventListener('click',handleCloseVideoClick);

document.querySelector('#showFMHVideo').addEventListener('click',
() => handleVideoClick("https://www.youtube.com/embed/FhLnFFknEek"));
document.querySelector('#click4FMHVideoText').addEventListener('click',
() => handleVideoClick("https://www.youtube.com/embed/FhLnFFknEek"));

document.querySelector('#menuIcon').addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('active');
});

document.querySelectorAll('.dropdown a').forEach(el => el.addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('active');
}));

// let letter = -1;

// setInterval(()=> {
//   if (letter !== -1) document.querySelectorAll("#comingSoon span")[letter].classList.toggle("light");
//   letter++;
//   if (letter > 9) letter = 0;
//   document.querySelectorAll("#comingSoon span")[letter].classList.toggle("light");
// },400);

setInterval( () => {
  document.querySelector("#click4VideoText").classList.toggle("flashingMsg");
},700)

setInterval( () => {
  document.querySelector("#click4FMHVideoText div").classList.toggle("flashingMsg");
},700)