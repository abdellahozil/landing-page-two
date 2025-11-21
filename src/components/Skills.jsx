import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='min-h-screen px-6 pt-15'>
        <div>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-40'>Our <span className='text-primary opacity-0 animate-fade-in-delay-1'>Skills</span>
            </h2>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 '>
                <div className='flex items-end gradient-border p-3 card-hover gap-4 bg-primary/10 cursor-pointer'>
                    <div className='w-10 h-[60px] bg-primary/20 rounded-[3rem] flex items-center justify-center'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z"/></svg>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold'>HTML</h3>
                            <span>90%</span>
                        </div>
                        <div className='h-[5px] rounded-sm  bg-gray-600 mt-2'>
                            <span  className='h-[5px] bg-primary rounded-sm block  w-[90%]'></span>
                        </div>
                    </div>
                </div>
                <div className='flex items-end gradient-border p-3 card-hover gap-4 bg-primary/10 cursor-pointer'>
                    <div className='w-10 h-[60px] bg-primary/20 rounded-[3rem] flex items-center justify-center'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z"/></svg>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold'>CSS</h3>
                            <span>90%</span>
                        </div>
                        <div className='h-[5px] rounded-sm  bg-gray-600 mt-2'>
                            <span  className='h-[5px] bg-primary rounded-sm block  w-[90%]'></span>
                        </div>
                    </div>
                </div>
                <div className='flex items-end gradient-border p-3 card-hover gap-4 bg-primary/10 cursor-pointer'>
                    <div className='w-10 h-[60px] bg-primary/20 rounded-[3rem] flex items-center justify-center'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583"/></svg>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold'>Javascript</h3>
                            <span>70%</span>
                        </div>
                        <div className='h-[5px] rounded-sm  bg-gray-600 mt-2'>
                            <span  className='h-[5px] bg-primary rounded-sm block  w-[70%]'></span>
                        </div>
                    </div>
                </div>
                <div className=' flex items-end gradient-border p-3 card-hover gap-4 bg-primary/10 cursor-pointer'>
                    <div className='w-10 h-[60px] bg-primary/20 rounded-[3rem] flex items-center justify-center'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 9.51a4.2 4.2 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.3 4.3 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.2 4.2 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.3 4.3 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51"/></svg>
                    </div>
                    <div className='flex-1 '>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold'>Tailwind</h3>
                            <span>80%</span>
                        </div>
                        <div className='h-[5px] rounded-sm  bg-gray-600 mt-2'>
                            <span  className='h-[5px] bg-primary rounded-sm block  w-[80%]'></span>
                        </div>
                    </div>
                </div>
                <div className='flex items-end gradient-border p-3 card-hover gap-4 bg-primary/10 cursor-pointer'>
                    <div className='w-10 h-[60px] bg-primary/20 rounded-[3rem] flex items-center justify-center'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5c.029-.18.077-.37.1-.545c.217-2.058-.273-3.543-1.379-4.182c-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182c.018.175.067.365.095.545c-2.127.819-3.466 2.071-3.466 3.5s1.339 2.681 3.466 3.5c-.028.18-.077.37-.095.545c-.218 2.058.272 3.543 1.379 4.182c.376.213.803.322 1.235.316a6 6 0 0 0 3.514-1.56a6 6 0 0 0 3.515 1.56a2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182c-.019-.175-.067-.365-.1-.545c2.132-.819 3.471-2.071 3.471-3.5m-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212c-.012.106-.043.222-.058.33q-1.263-.365-2.57-.523a16 16 0 0 0-1.747-1.972a4.9 4.9 0 0 1 2.731-1.234m-7.917 8.781c.172.34.335.68.529 1.017s.395.656.6.969a14 14 0 0 1-1.607-.376a14 14 0 0 1 .478-1.61m-.479-4.076a14 14 0 0 1 1.607-.376q-.308.468-.6.969c-.195.335-.357.677-.529 1.017q-.286-.79-.478-1.61M8.3 12a19 19 0 0 1 .888-1.75q.496-.852 1.076-1.65c.619-.061 1.27-.1 1.954-.1q1.025.001 1.952.1a20 20 0 0 1 1.079 1.654q.488.851.887 1.746a19 19 0 0 1-1.953 3.403a19.2 19.2 0 0 1-3.931 0a20 20 0 0 1-1.066-1.653A19 19 0 0 1 8.3 12m7.816 2.25c.2-.337.358-.677.53-1.017q.286.791.478 1.611a15 15 0 0 1-1.607.376c.202-.314.404-.635.597-.97zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20 20 0 0 0-.6-.97q.814.142 1.606.376a14 14 0 0 1-.478 1.611zM12.217 6.34q.6.563 1.13 1.193q-.555-.031-1.129-.033c-.574-.002-.76.013-1.131.033q.53-.63 1.13-1.193m-4.249-1.7a1.5 1.5 0 0 1 .76-.187a4.9 4.9 0 0 1 2.729 1.233A16 16 0 0 0 9.71 7.658q-1.306.158-2.569.524c-.015-.109-.047-.225-.058-.331c-.171-1.619.151-2.787.885-3.211M3.718 12c0-.9.974-1.83 2.645-2.506c.218.857.504 1.695.856 2.506c-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12m4.25 7.361c-.734-.423-1.056-1.593-.885-3.212c.011-.106.043-.222.058-.331q1.262.365 2.564.524a16.4 16.4 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037m3.11-2.895q.56.033 1.14.034q.58-.001 1.139-.034a14 14 0 0 1-1.14 1.215a14 14 0 0 1-1.139-1.215m5.39 2.895c-.782.451-2.075.072-3.5-1.038a16 16 0 0 0 1.757-1.981a16.4 16.4 0 0 0 2.565-.523c.015.108.046.224.058.33c.175 1.619-.148 2.789-.88 3.212m1.6-4.854A16.6 16.6 0 0 0 17.216 12q.529-1.22.856-2.507c1.671.677 2.646 1.607 2.646 2.507s-.975 1.83-2.646 2.507z"/><path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794"/></g></svg>
                    </div>
                    <div className='flex-1 '>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold'>REACT</h3>
                            <span>90%</span>
                        </div>
                        <div className='h-[5px] rounded-sm  bg-gray-600 mt-2'>
                            <span  className='h-[5px] bg-primary rounded-sm block  w-[90%]'></span>
                        </div>
                    </div>
                </div>
                <div className='flex items-end gradient-border p-3 card-hover gap-4 bg-primary/10 cursor-pointer'>
                    <div className='w-10 h-[60px] bg-primary/20 rounded-[3rem] flex items-center justify-center'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187"/></svg>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between'>
                            <h3 className='font-semibold'>GIT</h3>
                            <span>60%</span>
                        </div>
                        <div className='h-[5px] rounded-sm  bg-gray-600 mt-2'>
                            <span  className='h-[5px] bg-primary rounded-sm block  w-[60%]'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills