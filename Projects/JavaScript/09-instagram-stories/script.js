let storyImgs = [
    {
        dp: 'https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243_1280.jpg',
        story: 'https://cdn.pixabay.com/photo/2017/07/05/19/32/oldtimer-2475748_1280.jpg'
    },

    {
        dp: 'https://cdn.pixabay.com/photo/2024/04/10/07/02/man-8687405_1280.jpg',
        story: 'https://cdn.pixabay.com/photo/2023/11/23/07/11/ai-generated-8407141_1280.jpg'
    },

    {
        dp: 'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        story: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'
    },

    {
        dp: 'https://cdn.pixabay.com/photo/2019/10/27/13/49/lion-4581841_1280.jpg',
        story: 'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg'
    },
];

let stories_box = document.querySelector('.stories_box');
let fullSize = document.querySelector('.full_screen');


let generateStory = '';

storyImgs.forEach((val, indx) => {
    generateStory += `
     <div class="story">
        <img id = '${indx}' src="${val.dp}" alt="">
    </div>`;
    stories_box.innerHTML = generateStory
});


stories_box.addEventListener('click', (detls) => {

    console.log(storyImgs[detls.target.id].story)

    fullSize.style.backgroundImage = `url(${storyImgs[detls.target.id].story})`;
    fullSize.style.display = 'block';

    setTimeout(() => {
        fullSize.style.display = 'none';
    }, 3000)
});

