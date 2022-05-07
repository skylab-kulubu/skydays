"use strict";

/*if (window.location.protocol != "https:") {
  location.href = location.href.replace("http://", "https://");
}*/

/*const overviewSection = document.querySelector(".overview-section");
const overviewTitle = document.querySelector(".overview-section__title");*/
const decriptionRight = document.querySelectorAll(".description--right");
const decriptionLeft = document.querySelectorAll(".description--left");
const eventSection = document.querySelector(".event-section");
const eventDays = document.querySelector(".event__days");
const eventActivities = document.querySelectorAll(".event-activities");
const container = document.querySelector(".eacikkaynak-section-container");
const informationContainer = document.querySelector(
  ".information-section__container"
);
/*const descriptionGift = document.querySelector(".description--gift");*/

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const revealTitle = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("title--hidden");
  observer.unobserve(entry.target);
};

const revealRight = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("right--hidden");
  observer.unobserve(entry.target);
};

const revealLeft = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("left--hidden");
  observer.unobserve(entry.target);
};

const activeDay = function (id) {
  document
    .querySelectorAll(".event__day")
    .forEach((day) => day.classList.remove("event__day--active"));
  document
    .querySelector(`.event__day[data-id = "${id}"]`)
    .classList.add("event__day--active");
};

const activeEvents = function (tab) {
  eventActivities.forEach((event) =>
    event.classList.remove("active--activity")
  );
  eventActivities.forEach((event) => event.classList.add("hidden--activity"));
  document
    .querySelector(`.event-activities[data-tab = "${tab}"]`)
    .classList.add("active--activity");
};

const revealContainer = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden--container");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

const contObserver = new IntersectionObserver(revealContainer, {
  root: null,
  threshold: 0.15,
});

const titleObserver = new IntersectionObserver(revealTitle, {
  root: null,
  threshold: 0.15,
});

const rightObserver = new IntersectionObserver(revealRight, {
  root: null,
  threshold: 0.15,
});

const leftObserver = new IntersectionObserver(revealLeft, {
  root: null,
  threshold: 0.15,
});

decriptionRight.forEach((right) => {
  rightObserver.observe(right);
});

decriptionLeft.forEach((left) => {
  leftObserver.observe(left);
});

eventDays.addEventListener("click", function (e) {
  //if (e.target.classList.contains("event__day")) {
  //  const { id } = e.target.dataset;
  //  activeDay(id);
  //  activeEvents(id);
  //}

  const clicked = e.target.closest(".event__day");
  if (!clicked) return;
  const { id } = clicked.dataset;
  activeDay(id);
  activeEvents(id);
});

sectionObserver.observe(eventSection);
contObserver.observe(container);
contObserver.observe(informationContainer);
/*titleObserver.observe(overviewTitle);*/
/*titleObserver.observe(descriptionGift);*/

class Guest {
  constructor(name, status, about, company, imgSource) {
    this.name = name;
    this.status = status;
    this.about = about;
    this.company = company;
    this.imgSource = imgSource ? imgSource : './sources/blank-profile-picture-973460_960_720.png'
  }
}

const guests28 = [
  new Guest('*', '*', '*', '*'),
  new Guest('Gökay Pekşen', 'Principal Advisor', 'Kariyer Planlaması', 'Prime Threat', './sources/Gökay-Pekşen.jpg'),
  new Guest('*', '*', '*', '*'),
  new Guest('*', '*', '*', '*'),
  new Guest('*', '*', '*', '*')
]

const guests29 = [
  new Guest('Osman Doğan', 'CEO & FOUNDER', 'CAR HACKING', 'GAIS', './sources/Osman-Doğan.jpg'),
  new Guest('PERİM ASENA POLAT', 'CYBER SECURITY CONSULTANT', 'WEB SECURITY', 'DELOITTE', './sources/Perim-Asena-Polat.jpg'),
  new Guest('*', '*', '*', '*'),
  new Guest('*', '*', '*', '*'),
  new Guest('*', '*', '*', '*'),
  new Guest('*', '*', '*', '*')
]

let innerhtml = '';
guests28.map((guest, index) => {
  innerhtml = innerhtml.concat(`
    <div class="card" style="width: 25rem;">
      <img src=${guest.imgSource} class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${guest.name}</h2>
      </div>
    </div>
  `)
  if (index === 2) {
    window.document.getElementById("activity-row-1").innerHTML = innerhtml
    innerhtml = '';
  }
  if (index === 4) {
    window.document.getElementById("activity-row-2").innerHTML = innerhtml
    innerhtml = '';
  }
})
guests29.map((guest, index) => {
  innerhtml = innerhtml.concat(`
    <div class="card" style="width: 25rem;">
      <img src=${guest.imgSource} class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${guest.name}</h2>
      </div>
    </div>
  `)
  if (index === 2) {
    window.document.getElementById("activity-row-3").innerHTML = innerhtml
    innerhtml = '';
  }
  if (index === 5) {
    window.document.getElementById("activity-row-4").innerHTML = innerhtml
    innerhtml = '';
  }
})