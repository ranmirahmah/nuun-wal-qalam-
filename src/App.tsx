import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProfileSection } from "./components/ProfileSection";
import { HistorySection } from "./components/HistorySection";
import { TeachersSection } from "./components/TeachersSection";
import { ManagementSection } from "./components/ManagementSection";
import { TeachingMethodsSection } from "./components/TeachingMethodsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProfileSection />
        <HistorySection />
        <TeachersSection />
        <ManagementSection />
        <TeachingMethodsSection />
      </main>
      <Footer />
    </div>
  );
}