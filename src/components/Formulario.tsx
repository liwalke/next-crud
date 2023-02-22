import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    cliente: Cliente
    onSubmit?: (cliente: Cliente) => void
    cancelled?: () => void
}

export default function Form (props: FormProps) {
    const id = props.cliente?.id
    const [name, setName] = useState(props.cliente?.nome ?? "")
    const [age, setAge] = useState(props.cliente?.idade ?? 0)
    
    return (
        <div>
            {id? <Input readOnly text="Código:" value={id}/> : false}
            <Input onChange={onChangeName} text="Nome:" value={name}/>
            <Input onChange={onChangeIdade} text="Idade:" type="number" value={age}/>
            <div className="flex justify-end mt-6">
                <Button 
                    onClick={() => props.onSubmit?.(new Cliente(name, +age, id))}
                    cor="blue">{id ? 'Atualizar' : 'Cadastrar'}</Button>
                <Button onClick={props.cancelled} className="ml-4">Cancelar</Button>
            </div>
        </div>
    )

    function onChangeName(newValue){
        setName(newValue)
    }

    function onChangeIdade(newValue){
        setAge(newValue)
    }
}