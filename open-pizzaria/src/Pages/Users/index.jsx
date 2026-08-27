import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Users.css'

export default function index() {
    const [usuarios, setUsuarios] = useState([])

    //Hook useEffect para lidar com efeitos colaterais no componente
    useEffect(() => {
        console.log("Olaaaa")
    }, [])
  return (
    
    <main>
        <h1>Lista de usuarios</h1>
        <Link to="/">Voltar para HOME</Link>
        <section className="contentUsers">
            <article>
                <strong>Nome: Kaio</strong>
                <strong>Telefone: 4022-8922</strong>
            </article>
        </section>
    </main>
  )
}
