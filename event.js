// Lightbox effect to show full-screen images
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    lightboxImg.src = imgElement.src;
    lightbox.style.display = "flex";
  
    // Close lightbox when clicking outside the image
    lightbox.onclick = function () {
      lightbox.style.display = "none";
    };
  }
  