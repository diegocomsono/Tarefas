function addTarefa () {
    

    let inputTarefa = document.getElementById("inputTarefa")
    let add = document.getElementById("addTarefa")


    // Pega o valor do input
    let tarefa = inputTarefa.value.trim()

    if (tarefa == "" ){
        // Se a tarefa receber o valor de nulo ele aparece uma mensagem de error
        let mensagemError = "Digite uma mensagem valida!"
        document.getElementById("mensagem").textContent = mensagemError

        }else {
            // Se não ele aparece uma mensagem de sucecsso
            let mensagemSucess = "Tarefa adicionada com sucesso!"
             document.getElementById("mensagem").textContent = mensagemSucess
            

                // Pega o id da lista
        let listaTarefas = document.getElementById("listaTarefas")

        // Uma variavel que cria um  documento de lista
        let addLista = document.createElement("li")

        // Cria a lista e altera pelo valor do input
        addLista.textContent = tarefa
        listaTarefas.appendChild(addLista)
        }



    // Quando clicado no botão o input da um clear
    inputTarefa.value = ""


}