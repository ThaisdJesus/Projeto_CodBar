const lista = document.getElementById("listaPedidos")

const totalPedidos = document.getElementById("totalPedidos")
const emPreparo = document.getElementById("emPreparo")
const finalizados = document.getElementById("finalizados")

function carregarPedidos(){

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || []

    lista.innerHTML = ""

    let total = pedidos.length

    let preparo = 0
    let finalizado = 0

    pedidos.forEach((pedido, index) => { 

        if(pedido.status === "Em preparo"){

            preparo++

        } else {

            finalizado++
        }

        lista.innerHTML += `

            <div class="card">

                <h2>${pedido.mesa}</h2>

                <p>${pedido.descricao}</p>

                <span class="${
                    pedido.status === "Em preparo"
                    ? "emPreparo"
                    : "finalizado"
                }">

                    ${pedido.status}

                </span>

                <br>

                <button onclick="concluir(${index})">
                    Concluir
                </button>

                <button onclick="remover(${index})">
                    Remover
                </button>

            </div>

        `
    })

    totalPedidos.textContent = total
    emPreparo.textContent = preparo
    finalizados.textContent = finalizado
}

function concluir(index){

    let pedidos = JSON.parse(localStorage.getItem("pedidos"))

    pedidos[index].status = "Finalizado"

    localStorage.setItem("pedidos", JSON.stringify(pedidos))

    carregarPedidos()
}

function remover(index){

    let pedidos = JSON.parse(localStorage.getItem("pedidos"))

    pedidos.splice(index, 1)

    localStorage.setItem("pedidos", JSON.stringify(pedidos))

    carregarPedidos()
}

carregarPedidos()