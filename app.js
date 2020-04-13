const avatar = document.getElementById('avatar');

avatar.addEventListener('mouseleave', () => {
  avatar.classList.add('shrink');

  setTimeout(() => {
    avatar.classList.remove('shrink');
  }, 200);
});

console.log(document.documentElement.clientWidth);
