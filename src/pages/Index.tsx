
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import Pricing from '@/components/Pricing';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Jesús Eliud Soto Méndez - Desarrollador Full Stack" 
        description="Jesús Eliud Soto Méndez - Desarrollador Full Stack Junior especializado en React, Node.js y e-commerce. Portfolio con 5 proyectos desarrollados."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['desarrollador full stack', 'react', 'nodejs', 'ecommerce', 'javascript', 'typescript', 'portfolio', 'programador junior']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <Pricing />
    </PageLayout>
  );
};

export default Index;
