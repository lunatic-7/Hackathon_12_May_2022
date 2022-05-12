import React from 'react'

const List = ({ state, cases, recoveries, deaths }) => {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <ul className="list-group list-group-flush temp2 " >
                    <li className="list-group-item" id='stName'>
                        <h6>{state}</h6>
                        <hr/>
                    </li>
                </ul>
                <ul className="list-group list-group-flush temp7">
                    <li className="list-group-item" id='csName'>
                        <p>{cases}</p>
                        <hr/>
                    </li>
                </ul>
                <ul className="list-group list-group-flush temp7">
                    <li className="list-group-item" id='rvName'>
                        <p>{recoveries}</p>
                        <hr/>
                    </li>
                </ul>
                <ul className="list-group list-group-flush temp7">
                    <li className="list-group-item" id='dtName'>
                        <p>{deaths}</p>
                        <hr/>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default List