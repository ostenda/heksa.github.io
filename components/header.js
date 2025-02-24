import Image from 'next/image'

export default function Header() {

    return (
        <header class="bg-white bg-opacity-95 shadow-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
    
    <div class="flex items-center">
      <img class="h-16 object-contain" src="./img/logo.jpg" alt="KS HEKSA" />
    </div>

   
    <nav>
      <ul class="flex space-x-6 text-gray-700 text-lg font-medium">
        <li><a href="#about" class="hover:text-blue-600">Klub</a></li>
        <li><a href="#programs" class="hover:text-blue-600">Program</a></li>
        <li><a href="#schedule" class="hover:text-blue-600">Plan</a></li>
        <li><a href="#news" class="hover:text-blue-600">Aktualnosci</a></li>
        <li><a href="#contact" class="hover:text-blue-600">Kontakt</a></li>
      </ul>
    </nav>
  </div>
</header>
    )
};

