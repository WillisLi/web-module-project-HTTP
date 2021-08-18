import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const AddMovieForm = props => {
    const { setMovies } = props;
    const { push } = useHistory();

    const [newMovie, setMovie] = useState({
		title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
	});

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/movies/`, newMovie)
            .then(response => {
                setMovies(response.data)
                push("/movies/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const changeHandler = event => {
        event.preventDefault();
        setMovie({
            ...newMovie,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Title:
                    <input
                        name = "title"
                        type = "text"
                        value = {newMovie.title}
                        onChange = {changeHandler}
                    />
                </label>

                <label>Director:
                    <input
                        name = "director"
                        type = "text"
                        value = {newMovie.director}
                        onChange = {changeHandler}
                    />
                </label>

                <label>Genre:
                    <input
                        name = "genre"
                        type = "text"
                        value = {newMovie.genre}
                        onChange = {changeHandler}
                    />
                </label>

                <label>Metascore:
                    <input
                        name = "metascore"
                        type = "number"
                        value = {newMovie.metascore}
                        onChange = {changeHandler}
                    />
                </label>

                <label>Description:
                    <input
                        name = "description"
                        type = "text"
                        value = {newMovie.description}
                        onChange = {changeHandler}
                    />
                </label>

                <button>Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovieForm;