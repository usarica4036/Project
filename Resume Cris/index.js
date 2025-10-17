document.addEventListener('DOMContentLoaded', function() {
            const imageModal = document.getElementById('image-preview-modal');
            const modalImage = document.getElementById('modal-image');

            const certItems = document.querySelectorAll('#sertifikasi .list-unstyled li');
            certItems.forEach(item => {
                item.addEventListener('click', () => {
                    const imageSrc = item.getAttribute('data-image');
                    if (imageSrc) {
                        modalImage.src = imageSrc;
                        imageModal.style.display = 'flex';
                    }
                });
            });

            function closeImageModal() {
                imageModal.style.display = 'none';
            }

            imageModal.querySelector('.modal-close-btn').addEventListener('click', closeImageModal);
            imageModal.addEventListener('click', (event) => {
                if (event.target === imageModal) {
                    closeImageModal();
                }
            });
            
        
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && imageModal.style.display === 'flex') {
                    closeImageModal();
                }
            });

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-in-section').forEach(section => { observer.observe(section); });

            const qrCodeElement = document.getElementById("qrcode");
            if(qrCodeElement) {
                new QRCode(qrCodeElement, {
                    text: window.location.href,
                    width: 120,
                    height: 120,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            }
        });