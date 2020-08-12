import React, {useState} from 'react'


const EditMovie = (props) => {

const initialMovie = {
    title:'',
    director:'',
    metascore:0,
    stars:[],
    id:Date.now()
}

const [movie,setMovie] = useState({initialMovie})

    const handleChange = () => {
        
    }

    const editSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
        <label>
            Title
            <input name='title' onChange={handleChange}/>
        </label>
        <label>
            Director
            <input name='director' onChange={handleChange}/>
        </label>
        <label>
            Metascore 
            <input name='metascore' onChange={handleChange}/>
        </label>
        <label>
            stars
            <input name='stars' onChange={handleChange}/>
        </label>
        <button onClick={editSubmit}>Save Changes</button>
        </>
    )
}

export default EditMovie