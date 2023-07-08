const menu = document.getElementById('menu');

function openMenu() {
  menu.style.display = 'flex';
}

function closeMenu() {
  menu.style.display = 'none';
}

menu.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);
const speakers = document.getElementById('speakers-container');

const speakerData = [

  {
    img: './imgs/speaker1.png',
    name: 'Bill Gates',
    company: 'Software Engineer!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './imgs/speaker2.png',
    name: 'Elon Musk',
    company: 'Software Engineer!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './imgs/speaker3.png',
    name: 'Steve Jobs',
    company: 'Software Engineer!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './imgs/speaker4.png',
    name: 'Zhao',
    company: 'Software Engineer!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
];

if (speakers) {
  for (let i = 0; i < speakerData.length; i += 1) {
    speakers.innerHTML += `
      <article class= "speakers-sample">
        <img src="${speakerData[i].img}" class="speakers-images" alt="speakers Gates photo">
        <div class= "speakers-info">
          <h3 class= "speakers-name">${speakerData[i].name}</h3>
          <p class= "speakers-company">${speakerData[i].company}</p>
          <div class="short-line"></div>
          <p class= "speakers-subject">${speakerData[i].subject}</p>
        </div>
      </article>`;
  }
}