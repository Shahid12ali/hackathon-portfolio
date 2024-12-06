'use client';

const Contact = () => {
  return (
    <div>
       <section id="Contact">
        <h1 className='text-white text-center text-4xl mt-40'><span>Get</span> In Touch</h1>
        <div className="flex justify-center">
            <form id='#'>
                <div className="mt-20 grid grid-cols-2 gap-6 w-[350px] sm:w-[600px] md:[800px] ">
                    <input type="text" placeholder="  First Name" required className='bg-transparent focus:outline-none focus:border-yellow-400 border-b border-gray-500 font-sans p-2 mb-16 text-white'></input>
                    <input type="text" placeholder="Last Name" required className='bg-transparent focus:outline-none focus:border-yellow-400 border-b border-gray-500 font-sans p-2 mb-16 text-white'></input>
                    <input type="email" placeholder="Email" required className='bg-transparent focus:outline-none focus:border-yellow-400 border-b border-gray-500 font-sans p-2 text-white'></input>
                    <input type="number" placeholder="Phone Number" required className='bg-transparent focus:outline-none focus:border-yellow-400 border-b border-gray-500 font-sans p-2 text-white'></input>
                 </div>
                <div className="mt-16 grid grid-rows-2 justify-items-center">
                    <textarea name="Message" placeholder="Message" required className='bg-transparent text-white p-1 focus:outline-none font-sans w-[100%] border border-gray-500 rounded-sm h-24'></textarea>
                    <button type="submit" className='bg-blue-500 text-white w-32 h-12 mt-10 font-sans rounded-lg justify-items-center hover:bg-white hover:text-blue-500 duration-500'onClick={()=>{alert("Submitted")}}>Sumbit Now</button>
                </div>
              </form>
            </div>
          
          </section>
</div>
  )}

export default Contact;
