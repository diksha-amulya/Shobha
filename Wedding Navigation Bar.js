document.querySelectorAll('.image-card img').forEach((image) => {
    image.addEventListener('click', function () {
        // Create the lightbox modal
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = '1000';

        // Create the large image element
        const largeImage = document.createElement('img');
        largeImage.src = this.src;
        largeImage.style.maxWidth = '90%';
        largeImage.style.maxHeight = '80%';
        largeImage.style.borderRadius = '10px';

        // Append the image to the lightbox
        lightbox.appendChild(largeImage);

        // Add event listener to close the lightbox
        lightbox.addEventListener('click', function () {
            lightbox.remove();
        });

        // Append the lightbox to the body
        document.body.appendChild(lightbox);
    });
});