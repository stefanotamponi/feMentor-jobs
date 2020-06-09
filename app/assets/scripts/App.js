import "../styles/styles.css";

// Accept hot modules (CSS Injection)
if (module.hot) module.hot.accept()


document.getElementById("root").insertAdjacentHTML("beforeend", "<h1>Hello World!!</h1>")