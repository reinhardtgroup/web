// Function to open modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
