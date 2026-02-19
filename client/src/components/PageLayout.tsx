import { Link } from 'wouter';
import { ReactNode } from 'react';
import { ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-deep-slate">
      {/* Layered Background — mirrors main game */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-stone-texture" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: "url('/assets/Werewolves-Village-background.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-slate/80 via-transparent to-deep-slate/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-slate/60 via-transparent to-deep-slate/60" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blood/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-ember/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle sparkles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        <div className="sparkle" style={{ top: '10%', left: '8%', animationDelay: '0s' }}></div>
        <div className="sparkle" style={{ top: '30%', right: '12%', animationDelay: '1.2s' }}></div>
        <div className="sparkle" style={{ bottom: '40%', left: '15%', animationDelay: '2.4s' }}></div>
        <div className="sparkle" style={{ bottom: '15%', right: '8%', animationDelay: '3.6s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-parchment min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">

          {/* Back navigation */}
          <Link href="/">
            <div className="inline-flex items-center gap-2 text-parchment/40 hover:text-ember transition-colors duration-200 mb-10 group cursor-pointer">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium">Back to Village</span>
            </div>
          </Link>

          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-3">
              <span className="text-chiselled">{title}</span>
            </h1>
            {subtitle && (
              <p className="text-parchment/50 text-base md:text-lg font-medium tracking-wide mt-3 italic">
                {subtitle}
              </p>
            )}
            <div className="divider-medieval w-64 mx-auto mt-6" />
          </div>

          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
