let parent = document.querySelector('.parent');
let cursor = document.querySelector('.cursor');

parent.addEventListener('mousemove', (val) => {
    cursor.style.opacity = 1;
    cursor.style.left = val.x + 'px';
    cursor.style.top = val.y + 'px';
})