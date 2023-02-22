import Button from "../components/Button";
import Form from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    isShowingTable,
    showTable,
    saveClient,
    createClient,
    deleteClient,
    editClient } = useClientes()

  return (
    
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-black
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {isShowingTable ? (
          <>
            <div className="flex justify-end">
              <Button onClick={createClient} cor="green" className="mb-4">Novo Cliente</Button>
            </div>
            <Tabela
              clienteSelecionado={editClient}
              clienteExcluido={deleteClient}
              clientes={clientes} />
          </>
        ) : (
          <Form
            cliente={cliente}
            onSubmit={saveClient}
            cancelled={showTable}
          />
        )}
      </Layout>
    </div>
  )
}