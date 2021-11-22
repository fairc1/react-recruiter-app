import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowRecruit(props) {
    const { selectedRecruit } = props.location.state;
    return (
        <div className="p-2">
            <div className="card" style={{'width': '38rem'}}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-3">{selectedRecruit.name.toUpperCase()}</h2>
                    <div className="d-flex justify-content-around">
                        <div className="card-text"><strong>Image: </strong>{selectedRecruit.image}</div>
                        <div className="card-text"><strong>Age: </strong>{selectedRecruit.age}</div>
                        <div className="card-text"><strong>Postion: </strong>{selectedRecruit.position}</div>
                        <div className="card-text"><strong>Availability: </strong>{selectedRecruit.availability}</div>
                        <div className="card-text"><strong>Favorability: </strong>{selectedRecruit.favorability}</div>
                        <div className="card-text"><strong>Hired: </strong>{selectedRecruit.hired}</div>
                    </div>
                </div>
                <img className="card-img-top border-top border-bottom" src={selectedRecruit.image} alt={selectedRecruit.name} />
                <div className="card-body">
                    <div className='d-flex justify-content-center'>
                        <Link className='btn btn-xs btn-warning' to={{ pathname: `/recruit/edit/${selectedRecruit.id}`, state: {selectedRecruit: selectedPuppy}  }}>EDIT</Link>
                        <button
                            className='btn btn-xs btn-danger margin-left-10'
                            onClick={() => props.removePuppy(selectedRecruit.id)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}