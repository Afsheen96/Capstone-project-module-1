
const speakersData = [
    {
        speakerName: 'Eugenia Cheng',
        speakerDesignation: 'Software Engineer',
        speakerDetail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sapiente',
        speakerImage: './imgs/speaker1.png',
    },
    {
        speakerName: 'Ronald Garcia',
        speakerDesignation: 'University of British Columbia',
        speakerDetail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sapiente',
        speakerImage: './imgs/speaker2.png',
    },
    {
        speakerName: 'Pat Hanrahan',
        speakerDesignation: 'Stanford University, USA',
        speakerDetail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sapiente',
        speakerImage: './imgs/speaker3.png',
    },
    {
        speakerName: 'Margo Seltzer',
        speakerDesignation: 'Software Engineer',
        speakerDetail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sapiente',
        speakerImage: './imgs/speaker4.png',
    },
];

const speakers = document.getElementById('speakers-container');
if (speakers) {
    for (let i = 0; i < speakersData.length; i += 1) {
      speakers.innerHTML += `
        <article class= "speakers-sample">
        <img class="speakers-images" src="${speakersData[i].speakerImage}" alt="Speaker Picture">
          <div class= "speakers-info">
            <h3 class= "speakers-name">${speakersData[i].speakerName}</h3>
            <p class= "speakers-company">${speakersData[i].speakerDesignation}</p>
            <hr class="line">
            <p class= "speakers-subject">${speakersData[i].speakerDetail}</p>
          </div>
        </article>`;
    }
  }