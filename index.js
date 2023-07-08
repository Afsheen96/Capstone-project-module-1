const menu = document.getElementById('menu');

function openMenu() {
  if (menu.style.display = 'none') {
    menu.style.display = 'flex';
  }
}

function closeMenu() {
  if (menu.style.display = 'flex') {
    menu.style.display = 'none';
  }
}
menu.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);
const speakers = document.getElementById('speakers-container');

const speakerData = [

  {
    speakerImg: './imgs/speaker1.png',
    speakerName: 'Bill Gates',
    company: 'Software Engineer!',
    speakerSubject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    speakerImg: './imgs/speaker2.png',
    speakerName: 'Elon Musk',
    speakerPost: 'Software Engineer!',
    speakerSubject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    speakerImg: './imgs/speaker3.png',
    speakerName: 'Steve Jobs',
    speakerPost: 'Software Engineer!',
    speakerSubject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    speakerImg: './imgs/speaker4.png',
    speakerName: 'Zhao',
    speakerPost: 'Software Engineer!',
    speakerSubject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    speakerImg: './imgs/speaker4.png',
    speakerName: 'Zhao',
    speakerPost: 'Software Engineer!',
    speakerSubject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    speakerImg: './imgs/speaker4.png',
    speakerName: 'Zhao',
    speakerPost: 'Software Engineer!',
    speakerSubject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
];

if (speakers) {
  for (let i = 0; i < speakerData.length; i += 1) {
    speakers.innerHTML += `
      <article class= "speakers-sample">
        <img src="${speakerData[i].speakerImg}" class="speakers-images" alt="speakers Gates photo">
        <div class= "speakers-info">
          <h3 class= "speakers-name">${speakerData[i].speakerName}</h3>
          <p class= "speakers-company">${speakerData[i].speakerPost}</p>
          <div class="short-line"></div>
          <p class= "speakers-subject">${speakerData[i].speakerSubject}</p>
        </div>
      </article>`;
  }
}