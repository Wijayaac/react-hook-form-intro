import { useForm } from "react-hook-form"
import axios from "axios"

import style from './form.module.css'
import Loader from "../Loader"

const API_URL = process.env.REACT_APP_API_URL

const Form = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm()
    const onSubmit = async data => {
        try {
            await axios.post(`${API_URL}/students`, data)
            reset()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className={`${style.wrapper} ${isSubmitting ? 'loading' : ''} ${isSubmitSuccessful ? 'success' : ''}`}>
                {isSubmitting && <Loader />}
                {isSubmitSuccessful && <p>Student has been submitted</p>}
                <form>
                    <div className={style.inputWrapper}>
                        <label htmlFor="name">Input Name</label>
                        <input type="text" id='name' {...register('name', { required: 'Please input your name' })} />
                        {errors.name && <span className={style.errorLabel}>{errors.name.message}</span>}
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="age">Age</label>
                        <input type="number" id='age' {...register('age', { required: 'Please add your age' })} />
                        {errors.age && <span className={style.errorLabel}>{errors.age.message}</span>}
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="description">Short bio</label>
                        <textarea
                            id='description' {...register('description', { required: 'Please write about yourself' })} />
                        {errors.description && <span className={style.errorLabel}>{errors.description.message}</span>}
                    </div>
                    <button type='button' className={style.submitBtn} onClick={handleSubmit(onSubmit)}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form