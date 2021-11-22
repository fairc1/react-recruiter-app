import React from 'react';
import RecruitProfile from './components/RecruitProfile';

export default function ListRecruits(props) {
    return (
        <>
            <h1>Recruit List</h1>
            <div className='d-flex flex-wrap'>
                {props.listRecruits.map(recruit => 
                    <RecruitProfile
                        key={recruit.id}
                        recruit={recruit}
                        removeRecruit={props.removeRecruit}
                    />
                )}
            </div>
        </>
    )
}
