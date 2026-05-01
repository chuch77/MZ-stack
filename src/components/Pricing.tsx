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
        "Landing Page Responsiva",
        "Hasta 5 secciones",
        "Formulario de contacto",
        "SEO básico",
        "1 revisión incluida",
        "Entrega en 5-7 días"
      ],
      featuresEn: [
        "Responsive Landing Page",
        "Up to 5 sections",
        "Contact form",
        "Basic SEO",
        "1 revision included",
        "5-7 days delivery"
      ],
      popular: false
    },
    {
      name: "Profesional",
      nameEn: "Professional", 
      price: "$20",
      period: "/hora",
      periodEn: "/hour",
      description: "Ideal para negocios en crecimiento (Mínimo 20 horas)",
      descriptionEn: "Ideal for growing businesses (20 hours minimum)",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Sitio web completo (hasta 10 páginas)",
        "Panel de administración",
        "Base de datos",
        "Sistema de autenticación",
        "SEO avanzado",
        "3 revisiones incluidas",
        "Entrega en 10-14 días"
      ],
      featuresEn: [
        "Complete website (up to 10 pages)",
        "Admin panel",
        "Database",
        "Authentication system", 
        "Advanced SEO",
        "3 revisions included",
        "10-14 days delivery"
      ],
      popular: true
    },
    {
      name: "E-commerce",
      nameEn: "E-commerce",
      price: "$25",
      period: "/hora", 
      periodEn: "/hour",
      description: "Tienda online completa (Mínimo 30 horas)",
      descriptionEn: "Complete online store (30 hours minimum)",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Tienda online completa",
        "Carrito de compras",
        "Sistema de pagos (Stripe/PayPal)",
        "Gestión de inventario",
        "Panel de administración",
        "Revisiones ilimitadas",
        "Entrega en 15-21 días"
      ],
      featuresEn: [
        "Complete online store",
        "Shopping cart",
        "Payment system (Stripe/PayPal)",
        "Inventory management",
        "Admin panel",
        "Unlimited revisions",
        "15-21 days delivery"
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