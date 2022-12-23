var cookiepop = document.createElement('div')
cookiepop.className = 'pop'
cookiepop.id = 'cookiepop'
var cookietitle = document.createElement('h1')
cookietitle.innerHTML = 'Cookies!'
var cookiep = document.createElement('p')
cookiep.innerHTML = 'Ce site utilise les cookies, voulez vous les accepter?'
var cookieaccept = document.createElement('button')
cookieaccept.onclick = 'acceptcookie()'
cookieaccept.className = 'accept'
cookieaccept.innerHTML = 'ACCEPTER'
cookiepop.appendChild(cookietitle)
cookiepop.appendChild(cookiep)
cookiepop.appendChild(cookieaccept)
document.body.appendChild(cookiepop)
function acceptcookie(){
  document.getElementByID('cookiepop').remove()
}
