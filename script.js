document.getElementById('giftBox').addEventListener('click', function() {
    const lid = document.querySelector('.lid');
    const letters = document.querySelectorAll('.letter');
    const messageContainer = document.getElementById('messageContainer');

    lid.style.transform = 'rotateX(-120deg)';

    messageContainer.style.display = 'flex';

    letters.forEach((letter, index) => {
        letter.style.opacity = '1';
        letter.style.animation = `float 3s ease-out forwards, fadeIn 3s forwards ${index * 0.1}s`;
        letter.style.setProperty('--i', Math.random().toString());
        letter.style.setProperty('--j', Math.random().toString());
    });

    setTimeout(() => {
        letters.forEach((letter, index) => {
            letter.style.transition = 'transform 2s ease, opacity 2s';
            letter.style.transform = `translate(${index * 25}px, 0)`;
            letter.style.opacity = '1';
        });
    }, 3000);
});
