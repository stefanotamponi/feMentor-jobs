import "../styles/styles.css";

import * as data from '../../../data.json';

let Data = data.default,
app = document.getElementById("root");

let content = Data.map(job => {
  return `<div class="card">
    <img class="card__image" src="./assets${job.logo.substr(1)}" />
    <div class="card__main">
      <div class="card__meta-main">
        <small>${job.company}</small>
        ${job.new ? "<span class='card__features'>New!</span>" : ""}
        ${job.featured ? "<span class='card__features card__features--featured'>Featured</span>" : ""}
      </div>
      <h3>${job.position}</h3>
      <span class="card__meta">${job.postedAt} • ${job.contract} • ${job.location}</span>
    </div>
    <hr />
    <div class="card__tags">
      <span class="tile">${job.role}</span>
      <span class="tile">${job.level}</span>
      ${job.languages.map( l => `<span class='tile'>${l}</span>`).join("")}
      ${job.tools.map(t => `<span class="tile">${t}</span>`).join("")}
    </div>
  </div>`
}).join("");

app.innerHTML = content;