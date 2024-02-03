const header = document.querySelector('header')
const menu_icon = document.querySelector('.hamburger-icon')
const navLink = document.querySelectorAll('nav a h4')
const sections = document.querySelectorAll('section')
const resNav = document.querySelector('#res')
const resIten = document.querySelector('#res-item')

window.onscroll = () => {
    const body = document.documentElement.scrollTop
    if (body > 80) {
        header.classList.toggle('scroll-header', true)
    }
    else {
        header.classList.toggle('scroll-header', false)
    } 
}


let transparent_head = false
menu_icon.addEventListener('click', () => {
    
    transparent_head = !transparent_head
    if(transparent_head === true) {
        header.classList.toggle('scroll-header', true)
        resNav.classList.toggle('res-height', true)
        resIten.classList.toggle('res-transform',true)
    } else {
        const distance = window.pageYOffset
        console.log(distance);
        if(distance < 80) {
            header.classList.toggle('scroll-header', false)
            resNav.classList.toggle('res-height', false)
            resIten.classList.toggle('res-transform',false)

        } else {
            header.classList.toggle('scroll-header', true)
            resNav.classList.toggle('res-height', false)
            resIten.classList.toggle('res-transform',false)
        }
    }
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
       const sectionId = entry.target.id
       document.querySelector(`nav a[href="#${sectionId}"]`).classList.toggle('active', entry.isIntersecting)
       console.log(sectionId);
    })
},{
    threshold:0.5
})

sections.forEach(section => {
    observer.observe(section)
})


    