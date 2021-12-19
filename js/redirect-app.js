const elementsToRedirectApp = document.querySelectorAll('.redirect-app')
elementsToRedirectApp.forEach(element => {
    element.addEventListener('click', () => {
        location.replace('https://nango-platform.netlify.app')
    })
})