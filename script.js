"use strict";

const drumData = [
  { id: "tom1", key: "w", image: "images/tom1.png", sound: "sounds/tom-1.mp3" },
  {
    id: "tom2",
    key: "a",
    image: "images/tom2.png",
    sound: "sounds/tom-2.mp3",
  },
  {
    id: "tom3",
    key: "s",
    image: "images/tom3.png",
    sound: "sounds/tom-3.mp3",
  },
  {
    id: "tom4",
    key: "d",
    image: "images/tom4.png",
    sound: "sounds/tom-4.mp3",
  },
  {
    id: "snare",
    key: "j",
    image: "images/snare.png",
    sound: "sounds/snare.mp3",
  },
  {
    id: "crash",
    key: "k",
    image: "images/crash.png",
    sound: "sounds/crash.mp3",
  },
  {
    id: "kick",
    key: "l",
    image: "images/kick.png",
    sound: "sounds/kick-bass.mp3",
  },
];

const container = document.querySelector(".container");

function createButton(drum) {
  const button = document.createElement("button");
  button.classList.add("drum");
  button.setAttribute("id", drum.id);
  button.textContent = drum.key;

  const audio = document.createElement("audio");
  const source = document.createElement("source");
  source.setAttribute("src", drum.sound);
  source.setAttribute("type", "audio/mpeg");
  audio.appendChild(source);
  button.appendChild(audio);

  const style = document.createElement("style");
  style.textContent = `
    #${drum.id} {
      background-image: url("${drum.image}");
      background-size: cover;
      border: none;
      height: 150px;
      width: 200px;
      margin-bottom: 20px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  container.appendChild(button);
}

drumData.forEach(createButton);

// Add event listener for button clicks to play the corresponding sound
const drums = document.querySelectorAll(".drum");
drums.forEach(function (drum) {
  drum.addEventListener("click", function () {
    drum.querySelector("audio").currentTime = 0;
    drum.querySelector("audio").play();
  });
});

// Add event listener for key presses to play the corresponding sound
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const drum = drumData.find((drum) => drum.key === key);
  if (drum) {
    const button = document.getElementById(drum.id);
    button.querySelector("audio").currentTime = 0;
    button.querySelector("audio").play();
  }
});
