import Cliente from "../core/Cliente"
import { DeletIcon, EditIcon } from "./Icons"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const showActions = props.clienteExcluido || props.clienteSelecionado

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                    bg-gradient-to-r from-blue-600 to-blue-900
                    text-gray-100
                `}>
                <tr>
                    <td className="text-left p-4">Código</td>
                    <td className="text-left p-4">Nome</td>
                    <td className="text-left p-4">Idade</td>
                    {showActions ? <td className="text-center p-4">Ações</td> : false}
                </tr>
            </thead>
            <tbody>
                {renderClients()}
            </tbody>
        </table>
    )

    function renderClients() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {showActions ? renderActions(cliente) : false}
                </tr>
            )
        })
    }

    function renderActions(cliente: Cliente) {
        return (
            <td className="justify-center flex">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado(cliente)} className={`
                        flex justify-center items-center p-2 m-1
                        text-green-600 rounded-full
                        hover:bg-blue-50
                    `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido(cliente)} className={`
                        flex justify-center items-center p-2 m-1
                        text-red-500 rounded-full
                        hover:bg-blue-50
                    `}>
                        {DeletIcon}
                    </button>
                ) : false}
            </td>
        )
    }
}