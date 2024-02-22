import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    onChange?: (cliente: Cliente) => void 
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')    
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)    
    return (
        <div>
            {id ? (
                <Entrada 
                    somenteLeitura
                    texto='Codigo' 
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                texto='Nome' 
                valor={nome}
                onChange={setNome}
                className="mb-5"
            />
            <Entrada 
                texto='Idade' 
                valor={idade}
                tipo="number"
                onChange={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.onChange?.(new Cliente(nome, +idade, id))}>
                        {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
};
