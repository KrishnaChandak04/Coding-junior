import Hero from '@/components/Hero';
import Features from '@/components/Features';
import KeyboardSection from '@/components/KeyboardSection';
import Navbar from '@/components/Navbar';
import CollaborationSection from '@/components/CollaborationSection';
import GitHubSyncSection from '@/components/GitHubSyncSection';
import DeploymentsSection from '@/components/DeploymentsSection';
import MagicSection from '@/components/MagicSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05051E] text-[#E2E8FF]">
      <Navbar />
      <Hero />
      <Features />
      <KeyboardSection />
      <CollaborationSection />
      <GitHubSyncSection />
      <DeploymentsSection />
      <MagicSection />
      <CTASection />
      <Footer />
    </div>
  );
}
