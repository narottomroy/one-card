function toggleActive(button) {
    // Remove active class from all buttons
    const button = document.querySelectorAll('.btn-2');

    if(button == "active") {
        button.classList.remove('active');
    } else {
        button.classList.add('active');
    }
}

