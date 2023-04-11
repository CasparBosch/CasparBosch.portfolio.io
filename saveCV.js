const link = document.querySelector("a.dynamic");

let name = "Caspar";

let text = `My name in ${name}.

I love writing tutorials.`;

link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
);

link.setAttribute("download", `${name.toLowerCase()}.txt`);
