import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import LangContext from '../../contexts/LangContext';

const Form = () => {
  const { text } = useContext(LangContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log('data', data);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result);
        alert(text.emailOk)
      }, (error) => {
        console.log(error);
        alert.show(text.emailFail)
      });
  };

  return (
    <form className='contactform mb-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='form-group'>
            <input
              {...register('name', { required: true })}
              type='text'
              name='name'
              placeholder={text.yourName}
            />
            {errors.name && errors.name.type === 'required' && (
              <span className='invalid-feedback'>{text.nameRequired}</span>
            )}
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <div className='form-group'>
            <input
              {...register(
                'email',
                {
                  required: text.emailRequired,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: text.emailFormat,
                  },
                },
                { required: true }
              )}
              type='email'
              name='email'
              placeholder={text.yourEmail}
            />
            {errors.email && (
              <span className='invalid-feedback'>{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className='col-12 col-md-12'>
          <div className='form-group'>
            <input
              {...register('subject', { required: true })}
              type='text'
              name='subject'
              placeholder={text.yourSubject}
            />
            {errors.subject && (
              <span className='invalid-feedback'>{text.subjectRequired}</span>
            )}
          </div>
        </div>

        <div className='col-12'>
          <div className='form-group'>
            <textarea
              {...register('message', { required: true })}
              name='message'
              placeholder={text.yourMessage}
            ></textarea>
            {errors.message && (
              <span className='invalid-feedback'>{text.messageRequired}</span>
            )}
          </div>
        </div>

        <div className='col-12'>
          <button type='submit' className='button'>
            <span className='button-text'>{text.sendMessage}</span>
            <span className='button-icon fa fa-send'></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
