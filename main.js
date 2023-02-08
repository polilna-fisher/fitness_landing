const exerciseItems = document.querySelectorAll('.examples_list_item')
const arrowItems = document.querySelectorAll('.examples_list_item_header')

const hideAllItem = () => {
    exerciseItems.forEach(el => {
        const content = el.querySelector('.examples_list_item_content')
        content.style.display = 'none'
    })
}
const hideAllArrows = () => {
    arrowItems.forEach(el => {
        const arrow = el.querySelector('.examples_link_img')
        arrow.style.transform = 'none'
    })
}

exerciseItems.forEach(item => {
    const header = item.querySelector('.examples_list_item_header')
    const content = item.querySelector('.examples_list_item_content')
    const arrow = item.querySelector('.examples_link_img')

    header.addEventListener('click', () => {
        if ((!content.style.display ||  content.style.display === 'none') && (!arrow.style.transform || arrow.style.transform === 'none'))
        {
            hideAllItem()
            hideAllArrows()
            content.style.display = 'block'
            arrow.style.transform = 'rotate(90deg)'
        } else {
            content.style.display = 'none'
            arrow.style.transform = 'none'
        }

    })
})



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}



const burgerLink = document.querySelector('.header_burger')
const burgerLines = document.querySelectorAll('.header_burger_content')
const menuList = document.querySelector('.header_navigation')
const backDrop= document.querySelector('.backdrop')
const mainView = document.querySelector('.body')

const toggleMenu = () => {
    const clientWidth = document.body.clientWidth
    // if(menuList.classList.contains('header_navigation_show')){
    //     menuList.classList.remove('header_navigation_show')
    //     backDrop.style.display = 'none'
    //     mainView.style.height = ''
    //     mainView.style.overflow = ''
    //
    // }else{
    //     menuList.classList.add('header_navigation_show')
    //     backDrop.style.display = 'block'
    //     mainView.style.height = '100vh'
    //     mainView.style.overflow = 'hidden'
    // }

    if (clientWidth <= 893) {
        burgerLines.forEach(item => {
            item.classList.toggle('close_icon')
        })
        mainView.classList.toggle('body_lock')
        menuList.classList.toggle('header_navigation_show')
        backDrop.classList.toggle('backdrop_show')
    }
}

burgerLink.addEventListener('click', () => {
     toggleMenu()
})
menuList.addEventListener('click', () => toggleMenu())
backDrop.addEventListener('click', toggleMenu)

