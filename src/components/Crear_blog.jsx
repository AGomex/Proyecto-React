import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Crear_blog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null); // Estado para el archivo de imagen

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto de entrada de blog con la información del formulario
    const newBlogEntry = {
      id: Date.now().toString(),
      title,
      author,
      category,
      content,
      image: '', // Inicialmente vacío, se actualizará después de cargar la imagen
    };

    // Guardar la entrada en localStorage
    localStorage.setItem(`blogEntry_${newBlogEntry.id}`, JSON.stringify(newBlogEntry));

    // Función para leer el contenido del archivo de imagen como una URL de datos
    const reader = new FileReader();
    reader.onload = function(event) {
      newBlogEntry.image = event.target.result; // Actualizar el campo de imagen con la URL de datos
      localStorage.setItem(`blogEntry_${newBlogEntry.id}`, JSON.stringify(newBlogEntry)); // Actualizar entrada en localStorage con la URL de imagen
      navigate('/'); // Redirigir a la página principal después de guardar
    };

    // Leer el contenido del archivo de imagen como una URL de datos
    reader.readAsDataURL(imageFile);
  };

  // Función para manejar cambios en la selección de archivo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <main className="main2">
      <section className="create-blog">
        <h2>Create a New Blog</h2>
        <form id="blogForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label><br />
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label><br />
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label><br />
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Comida">Comida</option>
              <option value="Musica">Musica</option>
              <option value="Tecnologia">Tecnologia</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label><br />
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label><br />
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Create Blog</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Crear_blog;
