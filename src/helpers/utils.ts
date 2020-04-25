export function sayHello() {
  return Math.random() < 0.5 ? "Hello" : "Hola";
}

export function today() {
  return new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(Date.now());
}
