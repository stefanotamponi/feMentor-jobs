import * as data from '../../../data.json';
import Card from "./modules/card";
import "../styles/styles.css";

class App {
  constructor() {
    this.app = document.getElementById("root");
    this.data = data.default;
    this.mainContent = document.createElement("div");
    this.navigation = document.createElement("div");
    this.mount();
    this.test();
  }

  test() {
    document.documentElement.addEventListener("click", this.toggleNavigation.bind(this));
  }

  toggleNavigation() {
    if (this.navigation.classList.contains("navigation--visible")) {
      this.navigation.classList.remove("navigation--visible")
    } else {
      this.navigation.classList.add("navigation--visible");
    }
  }

  mount() {
    let navContent = `
      <div class="main card__tags">
        <span class="tile tile--filter">Frontend</span>
        <span class="tile tile--filter">CSS</span>
        <span class="tile tile--filter">JavaScript</span>
      </div>
      <aside>
        Clear
      </aside>
    `
    this.navigation.setAttribute("class", "navigation card card--small")
    this.navigation.setAttribute("id", "navigation");
    this.mainContent.setAttribute("class", "main-content");
    this.app.appendChild(this.navigation);
    this.app.appendChild(this.mainContent);
    this.navigation.insertAdjacentHTML("beforeend", navContent);
    this.mainContent.insertAdjacentHTML("beforeend", this.data.map(job => Card(job)).join(""))
  }
}

export default App;


let app = new App();