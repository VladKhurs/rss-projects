document.querySelectorAll('.icon-like').forEach((e)=>{
    e.addEventListener('click', ()=> {
        alert('Кофе добавлен в понравившиеся')
    })
})

document.querySelectorAll('.icon-dislike').forEach((e)=> {
    e.addEventListener('click', ()=> {
        alert('Кофе убран из понравившихся')
    })
})

document.querySelectorAll('.icon-cart').forEach((e)=>{
    e.addEventListener('click', ()=> {
        alert('Кофе добавлен в карзину')
    })
})


document.querySelectorAll('.icon-nocart').forEach((e)=>{
    e.addEventListener('click', ()=> {
        alert('Кофе убран из карзины')
    })
})
