const jobsData = [{
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "FullStack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
];
const filteredArgs = [];

const displayOffers = (data = jobsData) => {
    if (document.querySelector('.site-main-section')) document.querySelector('.site-main').innerHTML = '';
    console.log(document.querySelector('.site-main'));
    data.map(el => {
        const jobOffer = `
        <header class="site-main-section__header">
            <img src="${el.logo}" alt="${el.company}" class="site-main-section__image">
            <div class="site-main-section__header-info">
                <h2 class="site-main-section__header-info-company">${el.company}</h2>
                ${el.new ? '<button class="site-main-section__header-info-badge">New!</button>' : ''}
                ${el.featured ? '<button class="site-main-section__header-info-badge">Featured</button>' : ''}
            </div>
            <h2 class="site-main-section__header-role">${el.position}</h2>
            <div class="site-main-section__header-list">
                <span>${el.postedAt}</span>
                <span>&bull; ${el.contract}</span>
                <span>&bull; ${el.location}</span>
            </div>
        </header>
        <aside>
            ${el.languages.map(lang => `<button class="site-main-section__button">${lang}</button>`).join('')}
            ${el.tools.map(tool => `<button class="site-main-section__button">${tool}</button>`).join('')}
        </aside>
    `
        const offerSection = document.createElement('section');
        offerSection.className = `site-main-section ${el.featured ? 'u-border-featured' : ''}`;
        offerSection.innerHTML = jobOffer;

        document.querySelector('.site-main').appendChild(offerSection);

    });
};

const addToFiltering = e => {
    filteredArgs.push(e.target.innerText);

    filterOffers(filteredArgs);
};

const filterOffers = filteredArgs => {
    const header = document.querySelector('.site-header');
    const aside = document.createElement('aside');
    aside.className = 'site-header-filter';

    filteredArgs.forEach(el => {
        const button = document.createElement('button');
        button.textContent = el;
        const deleteElement = document.createElement('span')
        deleteElement.textContent = 'X';
        button.appendChild(deleteElement);
        aside.appendChild(button)
    });

    header.appendChild(aside);

    const filteredData = jobsData.filter(el => el.languages.includes(...filteredArgs) || el.tools.includes(...filteredArgs));

    rerenderOffers(filteredData)
};

const rerenderOffers = (filteredData) => {
    const section = document.querySelector('.site-main-section').remove();

    displayOffers(filteredData);
}

displayOffers();

const buttons = document.querySelectorAll('.site-main-section__button');
buttons.forEach(button => button.addEventListener('click', addToFiltering));