import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams,useHistory} from 'react-router-dom'


const EditMovie = (props) => {

const params = useParams();
const {goBack} =useHistory();

const initialMovie = {
    title:'',
    director:'',
    metascore:0,
    stars:[],
    id:0
}

const [movie,setMovie] = useState(initialMovie)

useEffect(()=> {
    axios 
      .get(`http://localhost:5000/api/movies/${params.id}`)
      .then(res=> setMovie(res.data))
      .catch(res=> console.log('movie.js res', res))
  },[params.id])

    const handleChange = (e) => {
        e.persist()
        let value=e.target.value;
        if(e.target.name === 'metascore' ){
            value = parseInt(value, 10)
        }
        setMovie({
            ...movie,
            [e.target.name]: value            
        }
        )
    }

    const editSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${params.id}`, movie)
            .then((res) => console.log('edit res' ,res))
            .catch((err)=> console.log('edit err', err))
            goBack()
    }

    return(
        <div className="save-wrapper movie-card">
            <div>
            <   label>
                    <h3>Title</h3>
                    <input name='title' type='textarea' value={movie.title} onChange={handleChange}/>
                </label>            
            </div>
            <div>
                <label>
                    <h3>Director</h3>
                    <input name='director' value={movie.director} onChange={handleChange}/>
                </label>            
            </div>
            <div>
                <label>
                    <h3>Metascore</h3> 
                    <input name='metascore' value={movie.metascore} onChange={handleChange}/>
                </label>            
            </div>
            <div>
                <label>
                    <h3>Stars</h3>
                    <input name='stars' value={movie.stars} onChange={handleChange}/>
                </label>            
            </div>

            <button className='save-change' onClick={editSubmit}>Save Changes</button>
        </div>
    )
}

export default EditMovie