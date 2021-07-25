import React from 'react';
import { useState, useEffect } from 'react';
import { TutorialDataServices } from '../../Services/tutorialDataServices';
import {useHistory} from 'react-router-dom';
import { BrowserRouter as Router , Link } from "react-router-dom";


function ListTutorials(id) {
    const history = useHistory();
    const [searchTitle,setSearchTitle] = useState('');
    const [activeTutorial,setActiveTutorial] = useState('');
    const [tutorials,setTutorials] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
            TutorialDataServices.getAll()
            .then((response) => {
                setTutorials(response.data)
                console.log(response.data.results)
            })
        
      }, []);
    

    

    const search = (e)=>{
        TutorialDataServices.findByTitle(searchTitle)
        .then((response)=>{
         setTutorials(response.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const removeAllTutorials = () =>{
        TutorialDataServices.deleteAll()
        .then((response)=>{
            console.log(response.data);
            history.push('/');
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={(e)=>setSearchTitle(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={search}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Tutorials List</h4>

                <ul className="list-group">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            
                            <li
                                className="list-group-item "
                                onClick={() => setActiveTutorial(tutorial)}
                                key={index}
                            >
                                {tutorial.title}
                            </li>
                        ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllTutorials}
                >
                    Remove All
                </button>
            </div>
            <div className="col-md-6">
                {activeTutorial ? (
                    <div>
                        <h4>Tutorial</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {activeTutorial.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {activeTutorial.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {activeTutorial.published ? "Published" : "Pending"}
                        </div>


                        <Router>
                        <Link
                            to={"/tutorials/" + activeTutorial.id}
                            className="badge badge-warning"
                            params={{id : activeTutorial.id}}
                        >
                            Edit
                        </Link>
                        </Router>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
            </div>
        </div>
            
        </div >
    )
}

export default ListTutorials
