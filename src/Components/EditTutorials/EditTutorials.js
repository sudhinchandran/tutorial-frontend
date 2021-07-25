import React from 'react'
import { useState,useEffect } from 'react';
import {TutorialDataServices} from '../../Services/tutorialDataServices';
import {useHistory,useParams} from 'react-router-dom';

function EditTutorials() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [currentTutorial,setCurrentTutorial] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        TutorialDataServices.get(id)
        .then((response)=>{
            setCurrentTutorial(response.data)
        })
    }, [])


    return (
        <div>
            <div className="edit-form">
                <h4>Tutorials</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input 
                        className="form-control"
                        type="text"
                        id="description"
                        value={description}
                        onchange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <strong>Status:</strong>
                        </label>
                        
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EditTutorials
