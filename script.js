document.addEventListener('DOMContentLoaded', () => {
    const launchBtn = document.getElementById('launchBtn');

    if (launchBtn) {
        launchBtn.addEventListener('click', () => {
            const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSe28A3NMllw4rYEyd6oml1wD2XxTGJ312WOOUTxfD2ZjKAaWw/viewform?usp=publish-editor";
            
            // Modern buton yükleniyor efekti
            const btnText = launchBtn.querySelector('span');
            btnText.innerText = "Connecting Grid Engine...";
            launchBtn.style.opacity = "0.8";
            
            setTimeout(() => {
                window.open(formLink, '_blank');
                btnText.innerText = "Launch Distribution Gateway";
                launchBtn.style.opacity = "1";
            }, 750);
        });
    }
});