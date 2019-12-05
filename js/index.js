const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('a');
navLinks.forEach((nav, index)=>{
  nav.textContent = siteContent["nav"][`nav-item-${index+1}`];
  nav.style.color = '#00A693';
});


const h1Text = document.getElementsByTagName('h1');
h1Text[0].textContent = "DOM \n Is \n Awesome";
const btn = document.getElementsByTagName('button');
btn[0].textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', 'img/header-img.png');

const h4Text = document.getElementsByTagName('h4');
h4Text[0].textContent = 'Features';
h4Text[1].textContent = 'About';
h4Text[2].textContent = 'Services';
h4Text[3].textContent = 'Product';
h4Text[4].textContent = 'Vision';
h4Text[5].textContent = 'Contact';
// const h4Align = document.querySelectorAll('h4','p');
// h4Align.style.textAlign = "right";
const pText = document.querySelectorAll('p');
pText[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText[5].textContent = '123 Way 456 Street Somewhere, USA';
pText[6].textContent = '1 (888) 888-8888';
pText[7].textContent = 'sales@greatidea.io';
pText[8].textContent = 'Copyright Great Idea! 2018'
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');
const newNavObj1 = document.createElement('a');
newNavObj1.textContent = 'Home';
newNavObj1.style.color = '#00A693';
const newNavObj2 = document.createElement('a');
newNavObj2.textContent = 'Sign-In';
newNavObj2.style.color = '#00A693';
const navLinks2 = document.querySelector('nav');
navLinks2.prepend(newNavObj1);
navLinks2.append(newNavObj2);
