const icon = document.querySelector('.icon');
const cart = document.querySelector('.cart');
const iconImage = document.querySelector('.iconImage');
const body = document.querySelector('html')
const LOCAL_KEY = 'local.key';
const headerContent = document.querySelector('.headerContent');
const mainCard = document.querySelector('.mainCard');
console.log(headerContent.offsetHeight)
mainCard.style.paddingTop = headerContent.offsetHeight + 'px'
const savedIcon = JSON.parse(localStorage.getItem(LOCAL_KEY));
if(savedIcon){
    if(savedIcon.active){
        cart.classList.add('active');
    }
    else{
        cart.classList.remove('active')
    }
}

icon.addEventListener('click', () => {
    cart.classList.add('active');
    localStorage.setItem(LOCAL_KEY,JSON.stringify(
        {active: cart.classList.contains('active')}))
})
iconImage.addEventListener('click',() => {
    if(cart.classList.contains('active')){
        cart.classList.remove('active');
        localStorage.setItem(LOCAL_KEY,JSON.stringify(
            {active: cart.classList.contains('active')}))
    }
})