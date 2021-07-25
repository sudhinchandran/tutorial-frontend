import React from 'react';
import { useState } from 'react';
import {TutorialDataServices} from '../../Services/tutorialDataServices';
import {useHistory} from 'react-router-dom';

function AddTutorials() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let data = {
            title: title,
            description: desc,
        };
        
        TutorialDataServices.create(data)
        .then((response)=>{
            if(response.status === 200) {
                setTitle('');
                setDesc('');
                history.push('/add')
            };
        })
        .catch(err=>{
            
        })

    };

    return (
        <div>
            <div className="signupParentDiv">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Title">Title</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        name="title"
                    />
                    <br />
                    <label htmlFor="Description">Description</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        id="description"
                        name="description"
                    />
                    <br />
                    
                    <br />
                    <button>Add</button>
                </form>
            </div>

        </div>
    )
};

export default AddTutorials
