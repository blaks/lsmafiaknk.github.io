const loadingBar = document.querySelector('.loading-bar');
let progress = 0;

function updateLoadingBar() {
    progress += 1;
    loadingBar.style.width = `${progress}%`;
    if (progress < 100) {
        requestAnimationFrame(updateLoadingBar);
    }
}

updateLoadingBar();
