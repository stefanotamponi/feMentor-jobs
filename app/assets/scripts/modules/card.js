const card = props => (
  `<div class="card">
    <img class="card__image" src="./assets${props.logo.substr(1)}" />
    <div class="card__main">
      <div class="card__meta-main">
        <small>${props.company}</small>
        ${props.new ? "<span class='card__features'>New!</span>" : ""}
        ${props.featured ? "<span class='card__features card__features--featured'>Featured</span>" : ""}
      </div>
      <h3>${props.position}</h3>
      <span class="card__meta">${props.postedAt} • ${props.contract} • ${props.location}</span>
    </div>
    <hr />
    <div class="card__tags">
      <span class="tile">${props.role}</span>
      <span class="tile">${props.level}</span>
      ${props.languages.map( l => `<span class='tile'>${l}</span>`).join("")}
      ${props.tools.map(t => `<span class="tile">${t}</span>`).join("")}
    </div>
  </div>`
)

export default card;