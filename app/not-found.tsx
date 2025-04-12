import Link from 'next/link'
import Banner from '@/components/shared/ui/Banner'

export default function NotFound() {
  return (
    <div className="relative w-full h-[100svh] bg-[#166534] overflow-hidden flex justify-center items-center">
      <Banner />
      <div className="absolute inset-0 text-center px-4 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-green-500 tracking-tight mb-4">404</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-6">Page Non Trouvée</h2>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-[#C9D6DF] mb-8 opacity-90">
          Oups! On dirait que vous vous êtes perdu dans la nature...
          <br />
          Pas de panique, notre équipe de secours est là pour vous aider!
        </p>
        <div className="space-x-4">
          <Link 
            href="/"
            className="inline-block bg-white text-[#166534] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}