/**
 * Lightbox Functionality for Portfolio
 * Handles pop-up view for all certificates
 */

const modal = document.getElementById("certModal");
const modalImg = document.getElementById("fullCertImage");
const closeBtn = document.querySelector(".close");

// Attach click listener to all images with the 'cert-item' class
document.querySelectorAll(".cert-item img").forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Close when clicking the (X) button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close when clicking anywhere on the dark background
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Allow 'Escape' key to close the modal for better UX
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});