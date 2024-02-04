const shareBtn = document.querySelector('.share');
const bubble = document.querySelector('.speech-bubble');

shareBtn.addEventListener('click', function () {
	bubble.classList.toggle('display');
});
