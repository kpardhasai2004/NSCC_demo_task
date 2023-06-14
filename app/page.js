import Image from 'next/image'

export default function Home() {
  return (
    <main className=" bg-white text-black ">
      <div className='flex flex-col px-10 justyfy-around sm:justify-start sm:flex-row space-x-4 py-2'>
        <div className='shrink-0'>
          <Image
            className=""
            src="/logo.jpg"
            alt=""
            width={100}
            height={60}
            priority
          />
        </div>
        <a href="#" className="bg-white text-center font-b my-5 px-0 py-2 ">Our services</a>
      
        <a href="#" className="bg-white text-center font-b my-5 pl-40 py-2 ">About</a>
        
        <a href="#" className="bg-white text-center font-b my-5 px-0 py-2 ">Blog&News</a>
        
        <a href="#" className="bg-white text-center font-b my-5 px-0 py-2 ">Contact</a>

        <a href="#" className="bg-white text-center font-b my-5 pl-40 py-2 ">Account</a>

        <div className='shrink-0 my-5'>
          <Image
            className=""
            src="/call.jpg"
            alt=""
            width={40}
            height={40}
            priority
          />
        </div>

        <a href="#" className="bg-white text-center font-b my-5 px-0 py-2 ">+2349067322844</a>  
      </div>

      <div className="p-6 box-content mx-auto flex items-center space-x-4">
        <div className="">
          <h1 className="text-5xl font-extrabold text-black rounded-md p-3 ">Premium Web hosting for your website</h1>
          
          <p className="text-slate-900 rounded-md pt-3 pl-3 font-medium"> Blazing fast web hosting for indivuduals and </p>
          <p className="text-slate-900 rounded-md pl-3 font-medium"> businesses of all sizes backed by 24*7*365 Support.</p>
          
          <div className="flex">
            <button className="rounded-xl m-4 p-3 bg-rose-700 text-white ">Create an account</button>
            <button className="rounded-xl m-4 p-3 bg-rose-700 text-white ">Choose your plan</button>
          </div>
        </div>

        <div className="shrink-0">
          <Image 
            className="" 
            src="/p1.jpg" 
            alt=""             
            width={500}
            height={400}
            priority/>
        </div>    
      </div>
      
      <div className="p-6 box-content mx-auto flex items-center space-x-4">
        <div className="">
          <h1 className="text-5xl font-extrabold text-black rounded-md p-3 ">True Cloud Web Hosting</h1>
          <p className="text-slate-900 rounded-md pt-3 pl-3 font-medium"> True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don't use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable </p>
        </div>

        <div className="shrink-0">
          <Image 
            className="" 
            src="/p2.jpg" 
            alt=""
            width={300}
            height={150}
            priority
          />
        </div>    
      </div>
      

      <div className="flex flex-wrap justify-center text-center">

        <div className="w-3/12">
          <a>
            <Image 
              className="mx-auto" 
              src="/p3.jpg" 
              alt=""
              width={200}
              height={150}
              priority
            />
          </a>
          <div className="p-6">
            <h5 className=" text-xl font-extrabold mb-2 ">99.9%uptime</h5>
            <p className=" text-xl mb-4">
              We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.
            </p>
          </div>
        </div>

        <div className=" w-3/12 ">
          <a>
            <Image 
              className="mx-auto" 
              src="/p4.jpg" 
              alt=""
              width={200}
              height={150}
              priority
            />
          </a>
          <div className="p-6">
            <h5 className=" text-xl font-extrabold mb-2 ">Blazing Fast Web Hosting</h5>
            <p className=" mb-4">
              We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.            
            </p>
          </div>
        </div>

        <div className=" w-3/12 ">
          <a>
            <Image 
              className="mx-auto" 
              src="/p5.jpg" 
              alt=""
              width={200}
              height={150}
              priority
            />
          </a>
          <div className="p-6">
            <h5 className=" text-xl font-extrabold mb-2 ">Free SSL Certificates</h5>
            <p className=" text-xl mb-4">
              We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.
            </p>
          </div>
        </div>

        <div className=" w-3/12 ">
          <a>
            <Image 
              className="mx-auto" 
              src="/p6.jpg" 
              alt=""
              width={200}
              height={150}
              priority
            />
          </a>
          <div className="p-6">
            <h5 className=" text-xl font-extrabold mb-2 ">24*7 Friendly Support</h5>
            <p className=" text-xl mb-4">
              We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.
            </p>
          </div>
        </div>

      </div>

    </main>
  )
}
