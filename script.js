document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src;
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Image">
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = () => {
                document.body.removeChild(modal);
            };

            modal.querySelector('.close').addEventListener('click', closeModal);
            modal.addEventListener('click', closeModal);
        }
    });
});
