const mobileMenu = document.querySelector('.mobile-menu')
mobileMenu.addEventListener('click', () => {
    const header = document.querySelector('.header')
    const mobileIcon = document.querySelector('#mobile-icon')
    const headerItens = document.querySelector('.header-itens')
    const headerItemList = document.querySelectorAll('.header-item')
    const isActive = mobileIcon.classList.contains('active')

    if(isActive) {
        header.classList.remove('active')
        mobileIcon.classList.remove('active')
        headerItens.classList.remove('active')
        headerItens.style.display = 'none'
        headerItemList.forEach(item => {
            item.classList.remove('active')
        })
    }
    else {
        header.classList.add('active')
        mobileIcon.classList.add('active')
        headerItens.classList.add('active')
        headerItens.style.display = 'flex'
        headerItemList.forEach(item => {
            item.classList.add('active')
        })
    }
})