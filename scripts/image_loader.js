// External JavaScript File: script.js

const imageFolder = "pics"; // Folder name
const imageList = [
    "Aliens.jpg",
    "girrafe_back.jpg",
    "meerkat.jpg",
    "squirell_back.jpg"
]; // List of image filenames

const gridContainer = document.getElementById("image-grid");

// Dynamically load images
imageList.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `${imageFolder}/${image}`;
    imgElement.alt = `Artwork - ${image}`;
    gridContainer.appendChild(imgElement);
});
