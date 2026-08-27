import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Comentario.css'

export default function index() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/comments")
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.error("Erro na API", error))
    }, [])

    console.log(comments)
    return (
        <main>
            <h1>Comentários</h1>

            <Link to="/">Voltar para HOME</Link>

            <section className="comments">

                <article className="comment">
                    <strong>Kaio</strong>
                    <span>★★★★★</span>
                    <p>
                        Gostei muito do projeto, ficou simples e fácil de usar!
                    </p>
                </article>

                <article className="comment">
                    <strong>Maria</strong>
                    <span>★★★★☆</span>
                    <p>
                        O sistema está muito bonito. Gostei bastante do design.
                    </p>
                </article>
            </section>
        </main>
    )
}
