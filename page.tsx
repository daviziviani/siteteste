import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header com navegação responsiva */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl">MeuSite</div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Menu para mobile */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#" className="hover:text-primary transition-colors py-2">
                  Início
                </Link>
                <Link href="#" className="hover:text-primary transition-colors py-2">
                  Sobre
                </Link>
                <Link href="#" className="hover:text-primary transition-colors py-2">
                  Serviços
                </Link>
                <Link href="#" className="hover:text-primary transition-colors py-2">
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Seção principal */}
      <main className="flex-1">
        {/* Hero section responsiva */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Bem-vindo ao Meu Site</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Um exemplo de layout totalmente responsivo que se adapta perfeitamente a dispositivos móveis e desktop.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Saiba Mais
            </Button>
          </div>
        </section>

        {/* Cards responsivos */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">Serviço {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    Uma descrição detalhada do serviço que oferecemos aos nossos clientes.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de recursos com layout responsivo */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Recursos</h2>
            <div className="space-y-12">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`flex flex-col ${item % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2 bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-gray-500">Imagem {item}</span>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-semibold mb-3">Recurso {item}</h3>
                    <p className="text-muted-foreground">
                      Uma descrição detalhada do recurso que torna nosso produto único e valioso para os usuários. Este
                      texto se ajusta automaticamente em diferentes tamanhos de tela.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer responsivo */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
              <p className="text-gray-300">Uma breve descrição sobre nossa empresa e o que fazemos.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <address className="not-italic text-gray-300">
                <p>Rua Exemplo, 123</p>
                <p>São Paulo, SP</p>
                <p>contato@meusite.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} MeuSite. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
