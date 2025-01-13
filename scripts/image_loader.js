document.addEventListener("DOMContentLoaded", async () => {
    const imageContainer = document.getElementById("image-grid");
    const previewModal = document.getElementById("fullscreen-preview");
    const previewImage = document.getElementById("preview-image");
    const closePreviewButton = document.getElementById("close-preview");

    // Load images dynamically (mock API call or local logic)
    const images = [
        "cheetah.jpg",
        "dark elf.jpg",
        "original.jpg",
        "troll.jpg",
        "desert runner.jpg",
        "dishu.jpg",
        "Dungeon Deserter render2.jpg",
        "sphynx.jpg",
        "panther.jpg",
    ];



// Dynamically add images to the grid container
images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `pics/${image}`;
    imgElement.alt = `Artwork: ${image}`;
    imgElement.classList.add("art-image");

    // Add click event to open full-screen preview
    imgElement.addEventListener("click", () => {
        previewImage.src = imgElement.src; // Set the modal image source
        previewModal.classList.remove("hidden");
    });

    imageContainer.appendChild(imgElement);
});

// Close the preview when the close button is clicked
closePreviewButton.addEventListener("click", () => {
    console.log("Close button clicked");
    previewModal.classList.add("hidden");
    previewImage.src = ""; // Clear image source
});

// Close the preview when clicking outside the image
previewModal.addEventListener("click", (event) => {
    if (event.target === previewModal) {
        console.log("Clicked outside image");
        previewModal.classList.add("hidden");
        previewImage.src = ""; // Clear image source
    }
});
});