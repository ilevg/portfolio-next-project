import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/main-bg.webp)' }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Web Development
            </span>
          </h1>
          <p className="text-gray-300 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde iure in, provident dolore id maiores assumenda facilis voluptatum quam itaque ad molestiae aliquam delectus optio adipisci cupiditate eveniet reiciendis!</p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href='/my-skills'
              className="rounded-[20px] relative group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
            </Link>
            <Link
              href='/my-projects'
              className="rounded-[20px] relative group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href='/contact-me'
              className="rounded-[20px] relative group bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              {/* <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" /> */}
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href='/my-skills'
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn more
        </Link>
        <Link href='/my-projects' className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          My projects
        </Link>
        <Link href='/contact-me' className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image 
          src='/horse.png'
          alt='horse'
          height={300}
          width={300}
          className='absolute right-55 top-40'
        />
        <Image 
          src='/cliff.webp'
          alt='cliff'
          height={480}
          width={480}
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image 
          src='/trees.webp'
          alt='trees'
          height={2000}
          width={2000}
          className="w-full h-full"
        />
        
      </div>
    </main>
  );
}
