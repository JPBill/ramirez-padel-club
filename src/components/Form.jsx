import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style';

const Form = () => {
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: '7T0ejLpMVYL14Mr3g',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage('¡Mensaje enviado!');
          form.current.reset();
        },
        (error) => {
          console.log('Ocurrió un error...', error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid gap-4 sm:gap-6">
        <div>
          <label className="sr-only">Nombre</label>
          <input
            type="text"
            name="user_name"
            required
            className={styles.input}
            placeholder="Nombre"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="user_email"
            required
            className={styles.input}
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Consulta
          </label>
          <textarea
            name="message"
            rows="6"
            required
            className={styles.input}
            placeholder="Consulta"
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <input type="submit" value="Enviar" className={styles.btn} />
      </div>
      {message && <p className="mt-6 text-base font-medium">{message}</p>}
    </form>
  );
};

export default Form;
