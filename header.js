let header = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 200){
        header.style.background = 'transparent'
    } else {
        header.style.background = 'rgb(64, 139, 208)'
    }
})