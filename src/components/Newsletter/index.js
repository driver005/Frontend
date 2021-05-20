import React from 'react'
import { useForm } from 'react-hook-form'
import { createNewsletter } from '../../api/index'
import { ToastonError } from '../Toast';
import { Formblock, Formwrapper, Newsletterfield, Sendbutton } from './styles';



export default function Newsletter(props) {
    const [input, setinput] = React.useState()
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = () => {
        createNewsletter({email: input})
        .then(data => {
            ToastonError(data)
        })
    }
    return(
        <Formblock>
            <Formwrapper onSubmit={handleSubmit(onSubmit)}>
                <Newsletterfield 
                    type="text"
                    name="email" 
                    placeholder="Enter Email" 
                    id="email" 
                    onChange={(e) => setinput(e.target.value)}
                    ref={register({ required: true, pattern: /^\S+@\S+$/i})}
                />
                <Sendbutton
                    primary={props.primary}
                    type="submit" 
                >Submit</Sendbutton>
            </Formwrapper>
        </Formblock>
    )
}