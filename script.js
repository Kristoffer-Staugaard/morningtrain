document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    document.querySelectorAll('.item-hover').forEach(item => {
        item.addEventListener('click', () => {
            modalImg.src = item.parentElement.querySelector('img').src;
            modal.style.display = 'block';
        });
    });
    
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
