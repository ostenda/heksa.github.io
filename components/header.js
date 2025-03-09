import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white bg-opacity-95 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Image
            src="/img/logo.jpg"
            alt="KS HEKSA"
            width={64}
            height={64}
            className="h-16 object-contain"
          />
        </div>

        <nav>
          <ul className="flex space-x-6 text-gray-700 text-lg font-medium">
            <li><a href="#about" className="hover:text-orange-600">Klub</a></li>
            <li><a href="#programs" className="hover:text-orange-600">Program</a></li>
            <li><a href="#schedule" className="hover:text-orange-600">Plan</a></li>
            <li><a href="#news" className="hover:text-orange-600">Aktualności</a></li>
            <li><a href="#contact" className="hover:text-orange-600">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
