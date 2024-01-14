import Image from 'next/image'

export default function Header() {

    return (
    <div
        className={
            "container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
        }
       >

        <h1 className ="font=bold flex-grow">
        <img 
            class='h-20 object-contain' 
            src='./img/logo.jpg' 
            alt='KS HEKSA'
             />
        </h1>
       <div className="grow">
            <div className='flex item-center justity-center gap-2 md:gap-8'>
                <a href="#">STRONA GŁÓWNA</a>
                <a href="#">AKTUALNOŚCI</a>
                <a href="#">KLUB</a>
                <a href="#">KONTAKT</a>
            </div>
        </div>
    </div>
    )
};

