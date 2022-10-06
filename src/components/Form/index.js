import { useForm } from "react-hook-form"

import style from './form.module.css'
import Loader from "../Loader"

import { AddHandler } from "./Form.handler"

const Form = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm()

    const onSubmit = data => {
        AddHandler(data)
    }
    return (
        <>
            <div className={`${style.wrapper} ${isSubmitting ? 'loading' : ''} ${isSubmitSuccessful ? 'success' : ''}`}>
                {isSubmitting && <Loader />}
                {isSubmitSuccessful && <p>Student has been submitted</p>}
                <form>
                    <div className={style.inputWrapper}>
                        <label htmlFor="name">Input Name</label>
                        <input type="text" aria-label="name" id='name' {...register('name', { required: 'required field' })} />
                        {errors.name && <span data-testid='errorName' className={style.errorLabel}>{errors.name.message}</span>}
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="age">Age</label>
                        <input type="number" id='age' aria-label="age" {...register('age', { required: 'required field' })} />
                        {errors.age && <span data-testid='errorAge' className={style.errorLabel}>{errors.age.message}</span>}
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="description">Short bio</label>
                        <textarea
                            id='description' {...register('description', { required: 'required field' })} aria-label="description" />
                        {errors.description && <span data-testid='errorDescription' className={style.errorLabel}>{errors.description.message}</span>}
                    </div>
                    <button type='button' aria-label="addStudent" className={style.submitBtn} onClick={handleSubmit(onSubmit)}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form