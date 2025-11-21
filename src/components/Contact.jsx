import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gqomrvh', 'template_9odyv3d', form.current, {
        publicKey: 'VeIgf5IB9zXWa9QGw',
      })
      e.target.reset()
  };
    const data = [
        {
            title: "E-mail",
            icon: Mail,
            desc:"herriabdellah34@gmail.com"
        },
        {
            title: "Phone",
            icon: Phone,
            desc:"+212682419536"
        },
        {
            title: "Location",
            icon: MapPin,
            desc:"Agadir, Maroc"
        }
    ]
  return (
    <section id='contact' className='min-h-screen pt-15'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-15'>Contact <span className='text-primary opacity-0 animate-fade-in-delay-1'>Us</span>
        </h2>
        <div className='grid grid-cols-1 gap-y-14 md:gap-y-0 md:grid-cols-2 gap-5 px-4 sm:px-15 md:px-20 lg:px-40'>
            <div className='flex flex-col gap-y-15'>
                <h2 className='text-[35px] text-left'>Let's talk about <br />Your <span className='text-primary'>Project</span>
                </h2>
                <div className='flex flex-col gap-y-6'>
                    {
                    data.map((item,key) => (
                        <div key={key} className='grid grid-cols-[max-content_1fr] gap-x-5 items-center'>
                            <span className='p-3 rounded-full bg-primary/20'>
                                <item.icon className='h-6 w-6 text-primary '></item.icon>
                            </span>
                            <div className='text-left'>
                                <h3 className='text-[20px] font-semibold'>{item.title}</h3>
                                <p className='text-[16px]'>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4 bg-card p-8 rounded-lg shadow-md border border-black/10' >
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-[16px] text-left font-meduim'>Name</label>
                    <input type="text" name='name' className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-[16px] text-left font-meduim'>Email</label>
                    <input type="email" name='email' className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="" className='text-[16px] text-left font-meduim'>Message</label>
                    <textarea name='message' className='h-[100px] px-4 py-3 resize-none rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'/>
                </div>
                <button className='cosmic-button opacity-0 animate-fade-in-delay-4'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact