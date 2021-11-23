import React from 'react';
import { Link } from 'react-router-dom';

export default function RecruitProfile(props) {
    return (
        <div className="p-2">
            <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top" src={props.recruit.image} alt={props.recruit.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.recruit.name}</h5>
                    <p className="card-text"><strong>Age: </strong>{props.recruit.age}</p>
                    <p className="card-text"><strong>Postion: </strong>{props.recruit.postion}</p>
                    <p className="card-text"><strong>Availability: </strong>{props.recruit.availability}</p>
                    <p className="card-text"><strong>Favorability: </strong>{props.recruit.favorability}</p>
                    <p className="card-text"><strong>Hired: </strong>{props.recruit.hired}</p>
                    <div>
                        <div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button>Edit</button>
                            <Link className='btn btn-xs btn-warning' to={{ pathname: `/recruit/edit/${props.recruit.id}`, state: {selectedRecruit: props.recruit} }}>Edit</Link>
                            <button
                                className='btn btn-xs btn-danger'
                                onClick={() => props.removeRecruit(props.recruit.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
