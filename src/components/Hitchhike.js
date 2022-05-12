import React from 'react'
import { Link } from 'react-router-dom'


const Hitchhike = () => {
    return (
        <>
            <div className='himg'>
                <div className='text-center' style={{paddingTop: "2rem"}}>
                    <h1>TOUR COMPANION</h1>
                </div>
                <div className='container t3'>
                    <div className='t1'>
                        <h3>Hitchhiker</h3>
                        <i><p>"Travel is a Journey which takes us near to people, rather than places"</p></i>
                        <br />
                        <Link className='bttn' to="/map">HITCHHIKE</Link>
                    </div>
                    <div className='t2'>
                        <h3>Car Driver</h3>
                        <i><p>"Time flies, It's upto you to be the navigator"</p></i>
                        <br />
                        <Link className='bttn' to="/map">RECEIVE</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hitchhike