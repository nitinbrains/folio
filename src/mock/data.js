import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, i am',
  name: 'Nitin Sharma,',
  subtitle: 'a 24 year old React Js developer living in New Delhi, India.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'I am a Computer Science Engineer, currently working with QueueBuster POS. I began my journey in 2018, working as a web developer in an e-commerce startup. So far, i have around 3 years of experience in building Javascript/React Js based Web Applications. ',
  paragraphTwo: 'I ❤️ javascript & have good understanding of React, Redux-thunk/saga, Jest & Enzyme, Gatsby, PWAs and Firebase🔥 etc.  ',
  paragraphThree: ' I am quietly confident, naturally curious, and perpetually working on improving my technical chops, working with GraphQL, Design patterns, build pipeline tools & optimizations.',
  resume: 'https://drive.google.com/file/d/1QW_uSHWH4mLiTQMOjbovOPEGJ0dPHbe6/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'forhims.png',
    title: 'Forhims',
    info: 'Forhims is an ecommerce WebApp, which sells men`s and women`s personal care products.',
    info2: 'Made with React, Redux(Saga), Reactstrap & payments with Stripe API. Optimizations were kept in mind like using react-selectors, react-lazy, code splitting, memoization & more. Its architecture is made in such a way that the WebApp is quite scalable. ',
    url: 'https://www.forhims.com/',
   // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'qbuster.png',
    title: 'QueueBuster POS',
    info: 'QueueBuster is a powerful Mobile POS Solution for all kinds of businesses. From large format retail stores to small carts and kiosks, QueueBuster is all that you need to run your business with ease. Manage your Billing, Inventory, Loyalty/CRM, Payments and eCommerce from a single location, anytime anywhere.',
    info2: 'Its a very vast dashboard which has feautures to create Products, Inventory management, Vendor management, Payments and so and so. Made with React, Redux(Thunk), Reactstrap, Stripe etc. A lot of javascript libraries have been used like chart js, excel js, jspdf etc. ',
    url: 'https://queuebuster.co/',
   // repo: 'https://github.com/MapleGraph/qbweb-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'betashop1.png',
    title: 'QB-Ecom',
    info: 'It is an ecommerce web-app.',
    info2: 'Made with React, Redux(thunk), Reactstrap, Sass. ',
    url: 'https://betashop.queuebuster.co/shop/17',
   // repo: 'https://github.com/MapleGraph/qbweb-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yeastman.png',
    title: 'Whitelabs - Yeastman',
    info: 'Yeastman is White Labs ecommerce WebApp, which sells Yeast Strains, has custom-built tracking and ordering.',
    info2: 'Made with React, Redux(Saga), Material UI',
    url: 'https://yeastman.com/',
    repo: 'https://github.com/nitinbrains/YiestLabs-e-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'topevents.png',
    title: 'Top Events Jamaica',
    info: 'Top Events Jamaica is an Event Management WebApp its an initiative of The Ministry of Tourism Jamaica under the Tourism Enhancement Fund (TEF).',
    info2: 'Made with React, Redux(thunk), Reactstrap, Sass.',
    url: 'https://www.topeventsinjamaica.com/',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    //img: 'multree.png',
    title: 'Multreeselect - NPM Repository',
    info: 'A tree select dropdown component which can be used with react js based projects',
    //info2: 'Made with React, Redux(thunk), Reactstrap, Sass.',
    npm:true,
    url: 'https://www.npmjs.com/package/multreeselect',
    //repo: 'https://www.npmjs.com/package/multreeselect', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    //img: 'colorpick.png',
    title: 'Colorpick - NPM Repository',
    info: 'A color picker component which can be used with react js based projects',
    //info2: 'Made with React, Redux(thunk), Reactstrap, Sass.',
    npm:true,
    url: 'https://www.npmjs.com/package/colorpick',
    //repo: 'https://www.npmjs.com/package/colorpick', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nitinbrains@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nitpedia_org',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nitinbrains/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nitinbrains',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
