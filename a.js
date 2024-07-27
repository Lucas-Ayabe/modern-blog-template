class Content {
  #value;
  #listeners = [];

  constructor(value) {
    this.#value = value;
  }

  subscribe(listener) {
    this.#listeners.push(listener);
  }

  get value() {
    return this.#value;
  }

  set value(content) {
    this.#value = content;
    this.#listeners.forEach((listener) => listener(this.#value));
  }
}

const content = new Content(localStorage.getItem("content") ?? "");

const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("keyup", () => (content.value = input.value));

content.subscribe((value) => localStorage.setItem("content", value));
content.subscribe((value) => (span.textContent = value));
span.textContent = content.value;
