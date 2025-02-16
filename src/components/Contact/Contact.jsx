import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import "./contact.css";

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const sendEmail = async (data) => {
        const templateParams = {
            name: data.name,
            email: data.email,
            project: data.project
        };

        const toastLoadingId = toast.loading('Sending message...');

        try {
            await emailjs.send(
                'service_u1rharn',
                'template_dzc27vi',
                templateParams,
                '6cW-R6IErcmpBlEFY'
            );
            
            toast.success('Message sent successfully!', {
                id: toastLoadingId,
                duration: 4000,
                className: 'toast-success',
                icon: '🎉'
            });
            reset();
        } catch (error) {
            console.error('Failed to send message:', error);
            toast.error('Failed to send message. Please try again.', {
                id: toastLoadingId,
                duration: 4000,
                className: 'toast-error',
                icon: '❌'
            });
        }
    };

    return (
        <section className="contact section" id="contact">
            <Toaster position="top-right" />
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        {[
                            {
                                icon: 'bx bx-mail-send',
                                title: 'Email',
                                data: 'fidhalatheefm@gmail.com',
                                link: 'mailto:fidhalatheefm@gmail.com',
                            },
                            {
                                icon: 'bx bxl-whatsapp',
                                title: 'Whatsapp',
                                data: '8714234014',
                                link: 'https://wa.me/+918714234014?text=Hello%20Fidha,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.',
                            },
                            {
                                icon: 'bx bxl-instagram',
                                title: 'Instagram',
                                data: '_f1.dha._',
                                link: 'https://www.instagram.com/_f1.dha._',
                            },
                        ].map((item, index) => (
                            <div className="contact__card" key={index}>
                                <i className={`${item.icon} contact__card-icon`}></i>
                                <h3 className="contact__card-title">{item.title}</h3>
                                <span className="contact__card-data">{item.data}</span>
                                <a href={item.link} className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form onSubmit={handleSubmit(sendEmail)} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                className={`contact__form-input ${errors.name ? 'input-error' : ''}`}
                                placeholder="Insert your name"
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Name must be at least 2 characters'
                                    }
                                })}
                            />
                            {errors.name && (
                                <span className="error-message">{errors.name.message}</span>
                            )}
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                className={`contact__form-input ${errors.email ? 'input-error' : ''}`}
                                placeholder="Insert your email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                            {errors.email && (
                                <span className="error-message">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                className={`contact__form-input ${errors.project ? 'input-error' : ''}`}
                                placeholder="Insert your project"
                                rows="10"
                                {...register('project', {
                                    required: 'Project description is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Please provide more details (minimum 10 characters)'
                                    }
                                })}
                            ></textarea>
                            {errors.project && (
                                <span className="error-message">{errors.project.message}</span>
                            )}
                        </div>

                        <button type="submit" className="button button--flex">
                            Send Message
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;