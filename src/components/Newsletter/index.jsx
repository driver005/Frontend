import React from 'react'
import { useForm } from 'react-hook-form'
import { createNewsletter } from '../../api/index'
import { ToastonError } from '../Toast';
import { Formblock, Formwrapper, Newsletterfield, Sendbutton } from './styles';



export default function Newsletter(props) {
    //const [input, setinput] = React.useState()
    //const { register, formState: { errors }, handleSubmit } = useForm();

    //const onSubmit = () => {
    //    createNewsletter({ email: input })
    //        .then(data => {
    //            ToastonError(data)
    //        })
    //}
    {/*<Newsletterfield
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    id="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    onChange={(e) => setinput(e.target.value)}
                />*/}
    return (
        <a href="https://news.sfz-tuebingen.org/lists/?p=subscribe" target="_blank">
            <Sendbutton
                primary={props.primary}
            >Register to our newsletter</Sendbutton>
        </a>
    )
}