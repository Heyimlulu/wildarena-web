import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import FAQ from '@/components/shared/ui/FAQ'

export const metadata = {
  title: 'Wild Arena | FAQ',
  description: 'Trouvez les réponses à vos questions sur Wild Arena',
  keywords: 'faq, questions fréquentes, laser game, wild arena, aide',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
