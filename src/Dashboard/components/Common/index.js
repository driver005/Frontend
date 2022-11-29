import React from 'react';
import {
    Textfiledcontainer,
    Textfiledwrapper,
    Filedlabel,
    Formlabel,
    Textfiledinput,
} from './styles';
import { useForm } from 'react-hook-form';

function Commoninput({
    widht,
    onChange,
    error,
    backgroundcolor,
    style,
    color,
    errormessage,
    showlabel,
    inputtype,
    inputvalue,
    label,
    maxlength = 256,
    inputname,
    inputid,
    inputplaceholder = '',
    inputhtmlfor = '/',
    inputisrequired,
    inputpattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
}) {
    const { register } = useForm();
    return (
        <Textfiledcontainer widht style={style}>
            <Textfiledwrapper onChange={onChange}>
                <Textfiledinput
                    type={inputtype}
                    value={inputvalue}
                    onChange={onChange}
                    maxlength={maxlength}
                    name={inputname}
                    data-name={inputid}
                    placeholder={inputplaceholder}
                    id={inputid}
                    {...register(inputname, { required: inputisrequired, pattern: inputpattern })}
                />
                <Filedlabel
                    style={{ backgroundColor: backgroundcolor, color: color }}
                    htmlFor={inputhtmlfor}
                    className={showlabel ? 'load' : 'hide'}>
                    {label}
                </Filedlabel>
            </Textfiledwrapper>
            {error && (
                <FormControl.Feedback type='invalid' className={'d-block'}>
                    {errormessage}
                </FormControl.Feedback>
            )}
        </Textfiledcontainer>
    );
}

export default Commoninput;
