const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gif = document.querySelector('.gif');
const logo = document.getElementById('logo');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click', () => {
    question.innerHTML = 'That\'s what I thought. See you! \n I love you! :>';

    logo.className = 'fa-solid fa-heart';
    logo.style.border = '0';
    logo.style.outline = '0';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    gif.style.display = 'block';

})

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

})

noBtn.addEventListener('click', () => {
    document.location.reload(true);

})

