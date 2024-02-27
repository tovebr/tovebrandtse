export const data = {
  code: {
    about: {
      header: 'These are some of my codeing-projects!',
      text: 'I use my own artwork as much as i can to make the projects more alive. These are all written in vanilla JavaScript, some of them has a sprinkle of bootstrap but  I take great pride in writing my own css for the most part.',
      buttonText: 'View Code',
    },
    workSamples: [
      {
        description:
          'Photograph your wardrobe, upload it, and press a button to get a random outfit! This is the app that helps the user choose what to wear.',
        title: 'what to wear',
        url: 'https://github.com/tovebr/whattowear',
        img: 'https://github.com/tovebr/whattowear/assets/70133569/57605b06-65a6-48b4-8c41-2ee97aa42f43',
        video:
          'https://github.com/tovebr/whattowear/assets/70133569/ef853955-77c9-481a-9ed8-2da0e6d66b1c',
        tech: ['TypeScript', 'React Native', 'Firebase'],
      },
      {
        description:
          'The place to share and save your favourite colors and to be inspired by others! Create an account and preform superfun CRUD-operations and searches in the database! A fullstack project with node.js/express, mongoDB, React and Redux Toolkit.',
        title: 'colorShare',
        url: 'https://github.com/tovebr/colorShare',
        img: 'images/webshop.jpg',
        video:
          'https://user-images.githubusercontent.com/70133569/219844874-bcfbd1fa-6d20-42ba-98e2-11099feb2555.mp4',

        tech: ['React', 'Redux Toolkit', 'node.js/express', 'Mongo DB'],
      },
      {
        description:
          'Search for your favourite cocktails and get the recipes. Save the ones you dislike so that you wont accidentally make them again! (superwierd function but it was part of an assignment so I did it)',
        title: 'coctailsearch',
        url: 'https://github.com/tovebr/cocktailsearch',
        img: 'https://github.com/tovebr/react-portfolio/blob/main/src/images/cocktails.jpg?raw=true',
        tech: ['React', 'CSS', 'Redux'],
      },
      {
        description:
          'Every now and then the food in your fridge will go bad. Often due to forgetting it was there! With this application the user can list their foods and be alerted when it is soon to expire. The user can also be inspired by recipes based on the shortlived goods in the fridgez',
        title: 'FridgeEase',
        url: 'https://github.com/tovebr/fridgeease',
        img: 'images/sherlock.jpg',
        video:
          'https://user-images.githubusercontent.com/70133569/219574756-76ee8f33-3eb8-4110-aa8d-896c3627dc6d.mp4',
        tech: ['React', 'Typescript', 'Redux Toolkit', 'SCSS', 'Firebase'],
      },
    ],
  },
  music: {
    about: {
      header: 'My first profession',
      text: `I've been playing music practically all my life. The bass has been my closest companion for about 20 years now. I started my company in 2005 and have been working as a musician professionally long before that. Here are some records where you can here my play, I have also composed some of the songs!`,
      buttonText: 'Listen',
    },
    workSamples: [
      {
        title: 'among lynx',
        url: 'https://open.spotify.com/album/6RM23p643GZjKSN8jMhAyJ?si=16FdbZ4-SPWShKwUqmHYHA',
        img: 'https://rockfarbror.se/wp-content/uploads/2019/09/Among-Lynx-Movement.jpg',
      },
      {
        title: 'sha3k',
        url: 'https://open.spotify.com/album/7FXjh2AsEJc3FNlMZUIJPf?si=xLmVaLAWSq27VptJGv6cYQ',
        img: 'https://jazzfuel.com/wp-content/uploads/2020/04/sha3k-winning-isnt-everything-1080x972.jpg',
      },
      {
        title: 'erik dahl ensemble',
        url: 'https://open.spotify.com/album/581rNZfwhlqTv878dubrz3?si=zVgnHMubR-GrPKFJBht2ow',
        img: 'https://svalkarecords.com/wp-content/uploads/2020/03/CD-SVALKACD005-digitalcover-1200.jpg',
      },
      {
        title: 'into the wild',
        url: 'https://open.spotify.com/album/1PyB2x9eqdeMj8xX9ZZUdi?si=2zM4P-j5QUKPcN8yBeA5XA',
        img: 'https://i1.sndcdn.com/avatars-000271008099-3njgkb-t500x500.jpg',
      },
    ],
  },

  photo: {
    about: {
      header: 'For the Love of Images',
      text: 'I have always painted and been intrested in colors and shapes. In the spring of 2021 i finally bought myself a camera and started learning photoshop. Here are some of my creations, check out my instagram for more!',
      buttonText: 'See more',
    },
    workSamples: [
      {
        title: 'the animal',
        url: 'https://instagram.com/p/CSmGKmatRuO/',
        img: 'images/theanimal.jpg',
      },
      {
        title: 'bassbaby',
        url: 'https://instagram.com/p/CSwlQ3SNjDR/',
        img: 'images/bassbaby.jpg',
      },
      {
        title: 'the law',
        url: 'https://instagram.com/p/CSj-MnGtm_S/',
        img: 'images/longarm.jpg',
      },
      {
        title: 'gorge glam',
        url: 'https://instagram.com/p/CUIB776skmM/',
        img: 'images/gorgeglam.jpg',
      },
    ],
  },
};

const oldSamp = [
  {
    description: 'memory game',
    title: 'memory',
    url: {
      demo: 'https://tovebr.github.io/memory/',
      github: 'https://github.com/tovebr/memory',
    },
    img: 'images/memory.jpg',
    desktopOnly: true,
    tech: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    description: 'made webshop, verry fun',
    title: 'webshop',
    url: {
      demo: 'https://tovebr.github.io/webshop/',
      github: 'https://github.com/tovebr/webshop',
    },
    img: 'images/webshop.jpg',
    desktopOnly: false,
    tech: ['JavaScript', 'SASS', 'HTML'],
  },
  {
    description: 'cocktail search',
    title: 'coctailsearch',
    url: {
      demo: 'https://tovebr.github.io/cocktailsearch/',
      github: 'https://github.com/tovebr/cocktailsearch',
    },
    img: 'https://github.com/tovebr/react-portfolio/blob/main/src/images/cocktails.jpg?raw=true',
    desktopOnly: false,
    tech: ['React', 'CSS', 'Redux'],
  },
  {
    description: 'using bootstrap, made quiz',
    title: 'sherlock',
    url: {
      demo: 'https://tovebr.github.io/bootstrap-study/',
      github: 'https://github.com/tovebr/bootstrap-study',
    },
    img: 'images/sherlock.jpg',
    desktopOnly: false,
    tech: ['JavaScript', 'Bootstrap', 'CSS', 'HTML'],
  },
];
