import React from 'react'
import Authentication from '../models/Authentication'

const SignIn = () => {
    return (
        <>
            <Authentication name="Sign In" type="Don't have an account Sign Up" url="/signup"/>
        </>
    )
}

export default SignIn