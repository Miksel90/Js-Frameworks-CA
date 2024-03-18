import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Helmet } from "react-helmet";
import styles from "./Contact.module.css";

const schema = yup
  .object({
    name: yup.string().trim().min(3).max(50).required(),
    email: yup.string().trim().email().min(3).required(),
    subject: yup.string().trim().min(3).max(30).required(),
    message: yup.string().trim().min(3).max(200).required(),
  })
  .required();

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(data) {
    console.log(data);
    // Send the data to your server here
    reset();
    setIsSubmitted(true);
  }

  return (
    <main className={styles.contactPage}>
      <Helmet>
        <title>Contact | GadgetVault</title>
      </Helmet>
      <section className={styles.ContactInfo}>
        <h1 className={styles.header}>Contact</h1>
        <div className={styles.divider}></div>
        {!isSubmitted ? (
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="name">Name</label>
            <input
              name="name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
            />
            <p className={styles.formError}>{errors.name?.message}</p>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              {...register("email", {
                required: true,
              })}
            />
            <p className={styles.formError}>{errors.email?.message}</p>
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              {...register("subject", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            <p className={styles.formError}>{errors.subject?.message}</p>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              {...register("message", {
                required: true,
                minLength: 10,
                maxLength: 200,
              })}
            />
            <p className={styles.formError}>{errors.message?.message}</p>
            <button type="submit" className="cta large">
              Submit
            </button>
          </form>
        ) : (
          <p className={styles.successText}>
            Your message has been sent. Please wait for our reply.
          </p>
        )}
      </section>
    </main>
  );
}

export default ContactPage;
