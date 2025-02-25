import React from 'react';
import '../App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// import ContactSection from '../components/landingpage/ContactSection';

function ContactLandingPage() {
  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2)); // Handle form submission
      resetForm(); // Reset form after submission
    },
  });


  return (
    <div className=' bg-[whitesmoke]'>
      <div className='wrapper flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className='relative'>
          <div>
            <img src="/images/Rectangle13.png" alt="" />
          </div>
          <div className='icon absolute right-4 bottom-3 flex gap-1'>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2 10C13.2 10.6329 13.0123 11.2516 12.6607 11.7778C12.3091 12.3041 11.8093 12.7142 11.2246 12.9564C10.6399 13.1986 9.99645 13.262 9.37571 13.1385C8.75497 13.015 8.18479 12.7103 7.73726 12.2627C7.28973 11.8152 6.98496 11.245 6.86149 10.6243C6.73801 10.0035 6.80138 9.36014 7.04359 8.77541C7.28579 8.19069 7.69594 7.69092 8.22218 7.3393C8.74841 6.98768 9.3671 6.8 10 6.8C10.8479 6.80264 11.6603 7.14063 12.2598 7.74017C12.8594 8.33972 13.1974 9.15212 13.2 10ZM20 5.6V14.4C20 15.8852 19.41 17.3096 18.3598 18.3598C17.3096 19.41 15.8852 20 14.4 20H5.6C4.11479 20 2.69041 19.41 1.6402 18.3598C0.589998 17.3096 0 15.8852 0 14.4V5.6C0 4.11479 0.589998 2.69041 1.6402 1.6402C2.69041 0.589998 4.11479 0 5.6 0H14.4C15.8852 0 17.3096 0.589998 18.3598 1.6402C19.41 2.69041 20 4.11479 20 5.6ZM14.8 10C14.8 9.05065 14.5185 8.12262 13.9911 7.33326C13.4636 6.54391 12.714 5.92868 11.8369 5.56538C10.9598 5.20208 9.99468 5.10702 9.06357 5.29223C8.13246 5.47744 7.27718 5.9346 6.60589 6.60589C5.9346 7.27718 5.47744 8.13246 5.29223 9.06357C5.10702 9.99468 5.20208 10.9598 5.56538 11.8369C5.92868 12.714 6.54391 13.4636 7.33326 13.9911C8.12262 14.5185 9.05065 14.8 10 14.8C11.273 14.8 12.4939 14.2943 13.3941 13.3941C14.2943 12.4939 14.8 11.273 14.8 10ZM16.4 4.8C16.4 4.56266 16.3296 4.33066 16.1978 4.13332C16.0659 3.93598 15.8785 3.78217 15.6592 3.69134C15.4399 3.60052 15.1987 3.57676 14.9659 3.62306C14.7331 3.66936 14.5193 3.78365 14.3515 3.95147C14.1837 4.11929 14.0694 4.33311 14.0231 4.56589C13.9768 4.79867 14.0005 5.03995 14.0913 5.25922C14.1822 5.47849 14.336 5.66591 14.5333 5.79776C14.7307 5.92962 14.9627 6 15.2 6C15.5183 6 15.8235 5.87357 16.0485 5.64853C16.2736 5.42348 16.4 5.11826 16.4 4.8Z" fill="white" />
              </svg>

            </div>
            <div>
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 2.35294C23.1166 2.76471 22.1644 3.03529 21.1778 3.16471C22.1874 2.54118 22.9675 1.55294 23.3346 0.364706C22.3824 0.952941 21.327 1.36471 20.2141 1.6C19.3078 0.588235 18.0344 0 16.5889 0C13.8929 0 11.6902 2.25882 11.6902 5.04706C11.6902 5.44706 11.7361 5.83529 11.8164 6.2C7.73231 5.98824 4.0956 3.97647 1.67495 0.929412C1.25048 1.67059 1.00956 2.54118 1.00956 3.45882C1.00956 5.21176 1.86998 6.76471 3.20077 7.64706C2.38623 7.64706 1.62906 7.41177 0.963671 7.05882V7.09412C0.963671 9.54118 2.66157 11.5882 4.91013 12.0471C4.18822 12.2497 3.43032 12.2778 2.69599 12.1294C3.00758 13.1323 3.61782 14.0099 4.44094 14.6387C5.26405 15.2676 6.25864 15.6161 7.2849 15.6353C5.54527 17.0476 3.38891 17.811 1.17017 17.8C0.780115 17.8 0.390057 17.7765 0 17.7294C2.17973 19.1647 4.77247 20 7.54876 20C16.5889 20 21.5564 12.3059 21.5564 5.63529C21.5564 5.41177 21.5564 5.2 21.5449 4.97647C22.5086 4.27059 23.3346 3.37647 24 2.35294Z" fill="white" />
              </svg>


            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10.0251C20 4.49123 15.52 0 10 0C4.48 0 0 4.49123 0 10.0251C0 14.8772 3.44 18.9173 8 19.8496V13.0326H6V10.0251H8V7.5188C8 5.58396 9.57 4.01003 11.5 4.01003H14V7.01754H12C11.45 7.01754 11 7.46867 11 8.02005V10.0251H14V13.0326H11V20C16.05 19.4987 20 15.2281 20 10.0251Z" fill="white" />
              </svg>


            </div>
            <div>
              <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14.2857L19.785 10L12 5.71429V14.2857ZM29.34 3.1C29.535 3.77143 29.67 4.67143 29.76 5.81429C29.865 6.95714 29.91 7.94286 29.91 8.8L30 10C30 13.1286 29.76 15.4286 29.34 16.9C28.965 18.1857 28.095 19.0143 26.745 19.3714C26.04 19.5571 24.75 19.6857 22.77 19.7714C20.82 19.8714 19.035 19.9143 17.385 19.9143L15 20C8.715 20 4.8 19.7714 3.255 19.3714C1.905 19.0143 1.035 18.1857 0.66 16.9C0.465 16.2286 0.33 15.3286 0.24 14.1857C0.135 13.0429 0.0899999 12.0571 0.0899999 11.2L0 10C0 6.87143 0.24 4.57143 0.66 3.1C1.035 1.81429 1.905 0.985714 3.255 0.628572C3.96 0.442857 5.25 0.314286 7.23 0.228571C9.18 0.128571 10.965 0.0857142 12.615 0.0857142L15 0C21.285 0 25.2 0.228572 26.745 0.628572C28.095 0.985714 28.965 1.81429 29.34 3.1Z" fill="white" />
              </svg>


            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='text-center font-semibold'>
              <h2 className='text-black text-[70px] mb-5'>Contact</h2>
            </div>
            <div className='p-6 md:mt-0 mt-10'>

              <h2 className='text-gray-600 mb-4'>
                Have questions about our products? We'd love to hear from you. Send us a <br />message and we'll respond as soon as possible.
              </h2>
              <form className='space-y-5' onSubmit={formik.handleSubmit}>
                <div>
                  <label className='block text-sm font-medium text-gray-700 relative'>Name</label>
                  <input
                    type='text'
                    name='name'
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black'
                    placeholder='Your Name'
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className='absolute  text-red-500 text-sm'>{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 relative'>Email</label>
                  <input
                    type='email'
                    name='email'
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black'
                    placeholder='Your Email'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className='absolute text-red-500 text-sm'>{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <label className=' block text-sm font-medium text-gray-700 relative'>Message</label>
                  <textarea
                    name='message'
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black'
                    rows='4'
                    placeholder='Your Message'
                    {...formik.getFieldProps('message')}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className='absolute  text-red-500 text-sm'>{formik.errors.message}</p>
                  )}
                </div>
                <button
                  type='submit'
                  className='mt-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
         </div>
     </div>
      <div className='wrapper bottom'>
        <div className='details flex justify-around mt-5 pb-9 '>
          <div className='flex items-center gap-2'>
            <a href="https://maps.app.goo.gl/CBm6HHajYQGa3jq98"><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="#252525" />
          </svg></a>

            <p> 1234 Main St, Anytown, USA</p>
          </div>
          <div className='flex items-center gap-2'>
           <a href="mailto:"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#252525" />
            </svg></a> 

            <p>info@example.com</p>
          </div>
          <div className='flex items-center gap-2'>
           <a href="tel:9747049193"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#252525" />
            </svg>
            </a>
            <p>+1 123-456-7890</p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLandingPage

