import React, { useState } from 'react'
import "./Cadastro.css"

export default function () {

    // Estado para armazenar os dados do formulario
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    // Estado para armazenar os erros
    const [errors, setErrors] = useState({})

    // Função para atualizar o estado ao digitar no formulario
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    // Função para validar o formulario
    const validateForm = () => {
        const newErrors = {}

        if (!formData.nome.trim()) {
            newErrors.nome = "O nome é obrigatório"
        } else if (formData.nome.trim().length < 3) {
            newErrors.nome = "O nome deve ter pelo menos 3 caracteres"
        }

        if (!formData.email.trim()) {
            newErrors.email = "O email é obrigatório"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Digite um email válido"
        }

        if (!formData.telefone.trim()) {
            newErrors.telefone = "O telefone é obrigatório"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    // Função para enviar formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        // Verifica se o formulario é válido
        if (!validateForm()) {
            return
        }

        // Enviando os dados para o backend
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Usuario cadastrado com sucesso", data)

                // Limpa o formulario após o envio
                setFormData({
                    nome: "",
                    email: "",
                    telefone: ""
                })

                // Limpa os erros
                setErrors({})
            })
    }

    return (
        <main className="containerCadastro">
            <h1>Cadastro de usuário</h1>

            <form onSubmit={handleSubmit}>

                <article className="form-control">
                    <label htmlFor="nome">Nome</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />

                    {errors.nome && (
                        <span className="error">
                            {errors.nome}
                        </span>
                    )}
                </article>

                <article className="form-control">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {errors.email && (
                        <span className="error">
                            {errors.email}
                        </span>
                    )}
                </article>

                <article className="form-control">
                    <label htmlFor="telefone">Telefone</label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />

                    {errors.telefone && (
                        <span className="error">
                            {errors.telefone}
                        </span>
                    )}
                </article>

                <br />

                <button type="submit">
                    Cadastrar
                </button>

            </form>
        </main>
    )
}
