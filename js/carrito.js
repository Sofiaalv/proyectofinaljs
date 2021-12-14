let botonCompra = document.querySelectorAll('.botonCompra')
const tbody = document.querySelector('.tbody')
let carrito = []


botonCompra.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let itemTitle = padre.querySelector("h2").textContent;
    let itemPrice = padre.querySelector("span").textContent;

    const newItem= {
        title: itemTitle,
        precio: itemPrice,
        cantidad:1
    }

    addItemCarrito(newItem)
}    

function addItemCarrito(newItem){

    const alert = document.querySelector('.alert')

    setTimeout( function(){
        alert.classList.add('hide')
    }, 2000)
        alert.classList.remove('hide')



    const InputElemento = tbody.getElementsByClassName('input__elemento')

    for(let i =0; i < carrito.length; i++){

        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = InputElemento[i]
            inputValue.value++;
            carritoTotal()
            return null
        }


    }
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML=''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `              
        <th scope="row">1</th>
        <td class="table__productos">
            <h3 class="title">${item.title}</h3>
        </td>
        <td class="table__precio">${item.precio} </td>
        <td class="table__cantidad">
            <input type="number" min="1" value=${item.cantidad} class="input__elemento" >
            <button class="delete bnt btn-danger">x</button>
        </td>
        `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItem)
        tr.querySelector(".input__elemento").addEventListener("change", sumarCantidad)
        
    })
    carritoTotal()
}

function carritoTotal(){
    let total=0;
    const cartTotal = document.querySelector('.cartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace('$',''));
        total = total + precio*item.cantidad

    })

    cartTotal.innerHTML = `total $${total}`
    addLocalStorage()
}

function removeItem(e){
    const botonDelete = e.target
    const tr = botonDelete.closest(".ItemCarrito")
    const title = tr.querySelector(".title").textContent;
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].title.trim()=== title.trim()){
            carrito.splice(i,1)
        }
    }

    const alert = document.querySelector('.remove')

    setTimeout( function(){
        alert.classList.add('remove')
    }, 2000)
        alert.classList.remove('remove')

    tr.remove()
    carritoTotal()

}

function sumarCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item =>{
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1): sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
}

function addLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem("carrito"));
    if(storage){
        carrito= storage;
        renderCarrito()
    }
}