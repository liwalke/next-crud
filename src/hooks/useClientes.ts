import Cliente from "../core/Cliente"
import { useState, useEffect } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTableOrForm from "./useTableOrForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente

    const { isShowingForm, isShowingTable, showTable, showForm } = useTableOrForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(getAllClients, [])

    function getAllClients() {
        repo.obterTodos()
            .then(clientes => {
                setClientes(clientes)
                showTable()
            })
    }

    function editClient(cliente) {
        setCliente(cliente)
        showForm()
    }

    function createClient() {
        setCliente(Cliente.vazio())
        showForm()
    }

    async function deleteClient(cliente) {
        await repo.excluir(cliente)
        getAllClients()
    }

    async function saveClient(cliente: Cliente) {
        await repo.salvar(cliente)
        getAllClients()
    }

    return {
        cliente,
        clientes,
        isShowingForm,
        isShowingTable,
        showTable,
        saveClient,
        createClient,
        deleteClient,
        editClient,
        getAllClients
    }
}