const pedido ={ 

    mesa: "mesa 03",
    pedido: "Coca-cola",
    status: "Em preparo",
    

}

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

pedidos.push(pedido);

localStorage.setItem("pedidos", JSON.stringify(pedidos));