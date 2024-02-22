import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const repo: ClienteRepositorio = new ColecaoCliente()

    useEffect(obterTodos,[])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}