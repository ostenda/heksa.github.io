import Image from 'next/image'

export default function Header() {

    return (
        <div
        className={
            "container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
        }
       >

        <h1 className ="font=bold">KS HEKSA</h1>
       <div className="grow">
            <div className='flex item-center justity-center gap-2 md:gap-8'>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            </div>
       </div>
       </div>
    )
};

