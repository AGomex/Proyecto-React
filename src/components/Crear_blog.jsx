import React from 'react';
import './Logo.css'
import { useNavigate } from 'react-router-dom';

function Crear_blog() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Detener la propagación del evento

        // Obtener los valores del formulario
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        const imageInput = document.getElementById('image');
        const content = document.getElementById('content').value;

        // Crear un objeto FileReader para leer el archivo de imagen seleccionado
        const reader = new FileReader();
        reader.onload = function(event) {
            const image = event.target.result;

            // Crear un objeto de entrada de blog con la información del formulario
            const entry = {
                title: title,
                author: author,
                category: category,
                content: content,
                image: image
            };

            // Almacenar la entrada en localStorage con una clave única para cada entrada
            const timestamp = new Date().getTime(); // Generar un timestamp único
            localStorage.setItem('blogEntry_' + timestamp, JSON.stringify(entry));

            // Redirigir a la página principal después de guardar
            navigate('/');
        };

        // Leer el contenido del archivo de imagen como una URL de datos
        reader.readAsDataURL(imageInput.files[0]);
    };

    return (
        <main className="main2">
            <section className="create-blog">
                <h2>Create a New Blog</h2>
                <form id="blogForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label><br />
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author:</label><br />
                        <input type="text" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoria:</label><br />
                        <select id="category" name="category" required>
                            <option value="Technology">Comida</option>
                            <option value="Travel">Musica</option>
                            <option value="Food">Tecnologia</option>
        
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image:</label><br />
                        <input type="file" id="image" name="image" accept="image/*" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label><br />
                        <textarea id="content" name="content" rows="5" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Create Blog</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Crear_blog;
