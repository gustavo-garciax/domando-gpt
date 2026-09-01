import React, { useState } from 'react'
import "./Cadastro.css"

export default function () {
    // Estado para armazenar os dados do formulario
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    //função para atualizar o estado ao digitar no formulario
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    //funçao para enviar formulario
    const handleSubmit = (event) => {
        event.preventDeFault()
        console.log("Enviar...")
    }

    return (
        <main className="containerCadastro">
            <h1>Cadastro de usuário</h1>
            <form onSubmit={handleSubmit}>
                <article className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name='nome'
                        placeholder='Digite seu nome'
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </article>

                <article className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='Digite seu email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </article>

                <article className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        name='telefone'
                        placeholder='Digite seu telefone'
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </article>
                <br />
                <button>Cadastrar</button>
            </form>
        </main>
    )
}
