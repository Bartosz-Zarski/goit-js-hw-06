const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(".gallery");
const newLi = document.createElement("li");


images.forEach((image) => {
  list.appendChild(newLi);
  newLi.insertAdjacentHTML("beforeend", `<img src="${image.url}" alt="${image.alt}" />`)
});

const imageTag = document.querySelectorAll("img");

imageTag.forEach((image) => {
  image.style.width = "25%";
  image.style.height = "auto";
});

newLi.style.display = "flex";
newLi.style.justifyContent = "center";
newLi.style.flexDirection = "column";
newLi.style.alignItems = "center";
newLi.style.gap = "20px";

