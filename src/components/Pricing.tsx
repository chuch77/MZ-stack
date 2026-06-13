import { Check, Star, Zap, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: "Básico",
      nameEn: "Basic",
      price: "$15",
      period: "/hora",
      periodEn: "/hour",
      description: "Perfecto para proyectos pequeños (Mínimo 10 horas)",
      descriptionEn: "Perfect for small projects (10 hours minimum)",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Formulario de contacto",
        "Optimización SEO básica",
        "Integración con redes sociales",
        "Despliegue en producción",
        "1 ronda de revisiones",
        "Entrega en 5-7 días",
        "Tecnologías: React, Next.js, Tailwind CSS",
        "Perfecto para: Restaurantes, gimnasios, consultorios, negocios locales y marcas personales."
      ],
      featuresEn: [
        "Contact form",
        "Basic SEO optimization",
        "Social media integration",
        "Production deployment",
        "1 revision round",
        "5-7 days delivery",
        "Technologies: React, Next.js, Tailwind CSS",
        "Perfect for: Restaurants, gyms, clinics, local businesses and personal brands."
      ],
      popular: false
    },
    {
      name: "Profesional",
      nameEn: "Professional", 
      price: "$1,500",
      period: " USD",
      periodEn: " USD",
      description: "Solución completa para empresas con funcionalidades avanzadas (Desde)",
      descriptionEn: "Complete solution for businesses with advanced features (Starting at)",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Hasta 10 páginas personalizadas",
        "Sistema de autenticación (Login y Registro)",
        "Base de datos integrada",
        "Panel de administración",
        "Dashboard básico",
        "Optimización SEO",
        "Diseño responsive avanzado",
        "3 rondas de revisiones",
        "Entrega en 10-14 días",
        "Tecnologías: React, Next.js, Spring Boot, PostgreSQL",
        "Perfecto para: Clínicas, agencias, restaurantes, gimnasios y negocios en crecimiento."
      ],
      featuresEn: [
        "Up to 10 custom pages",
        "Authentication system (Login and Register)",
        "Integrated database",
        "Admin panel",
        "Basic dashboard",
        "SEO optimization",
        "Advanced responsive design",
        "3 revision rounds",
        "10-14 days delivery",
        "Technologies: React, Next.js, Spring Boot, PostgreSQL",
        "Perfect for: Clinics, agencies, restaurants, gyms and growing businesses."
      ],
      popular: true
    },
    {
      name: "SaaS / CRM / E-commerce",
      nameEn: "SaaS / CRM / E-commerce",
      price: "$3,000",
      period: " USD",
      periodEn: " USD",
      description: "Solución Full Stack escalable para automatizar procesos y aumentar ventas (Desde)",
      descriptionEn: "Scalable Full Stack solution to automate processes and increase sales (Starting at)",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Sistema de autenticación y roles",
        "Dashboard avanzado con analytics",
        "CRUD completo",
        "Base de datos PostgreSQL",
        "Panel administrativo",
        "Integración de pagos (Stripe o PayPal)",
        "Gestión de usuarios y clientes",
        "APIs REST seguras",
        "Diseño responsive premium",
        "Despliegue en la nube",
        "5 rondas de revisiones",
        "Entrega en 15-30 días",
        "Tecnologías: React, Next.js, Spring Boot, PostgreSQL, AWS, Stripe",
        "Perfecto para: CRM, SaaS, Marketplaces, E-commerce, Sistemas de Reservaciones y Aplicaciones Empresariales."
      ],
      featuresEn: [
        "Authentication and roles system",
        "Advanced dashboard with analytics",
        "Full CRUD",
        "PostgreSQL database",
        "Admin panel",
        "Payment integration (Stripe or PayPal)",
        "User and client management",
        "Secure REST APIs",
        "Premium responsive design",
        "Cloud deployment",
        "5 revision rounds",
        "15-30 days delivery",
        "Technologies: React, Next.js, Spring Boot, PostgreSQL, AWS, Stripe",
        "Perfect for: CRM, SaaS, Marketplaces, E-commerce, Reservation Systems and Enterprise Applications."
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-2 border-brand shadow-lg shadow-brand/10 scale-105' 
                  : 'border border-gray-200 hover:border-brand/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-brand text-white text-center py-2 text-sm font-medium">
                  {t('pricing.popular')}
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  plan.popular ? 'bg-brand-light text-brand' : 'bg-gray-100 text-gray-600'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{language === 'en' ? plan.nameEn : plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{language === 'en' ? plan.descriptionEn : plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-brand">{plan.price}</span>
                  <span className="text-gray-500">{language === 'en' ? plan.periodEn : plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {(language === 'en' ? plan.featuresEn : plan.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand hover:bg-brand-dark text-white shadow-sm shadow-brand/20' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {t('pricing.start')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t('pricing.custom')}
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-gray-300 hover:border-gray-400"
          >
            {t('pricing.quote')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;