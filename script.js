function showYouSure(){
    let ready = document.getElementById('ready');
    let yousure = document.getElementById('yousure');
    let cover = document.getElementById('cover');

    ready.style.animation = 'fadeOut 1s linear forward';
    ready.style.display = 'none';
    yousure.style.animation = 'fadeIn 1s linear';
    yousure.style.display = 'flex';
}

function hideCover(){
    let cover = document.getElementById('cover');
    let paragraph = document.getElementById('paragraph');

    cover.style.animation = 'fadeOut 1s linear';

    cover.addEventListener('animationend', () => {
        cover.style.display = 'none';
        setTimeout(() => {
            paragraph.style.animation = 'fadeIn 2s linear';
            paragraph.style.display = 'block';
        });
    });

}