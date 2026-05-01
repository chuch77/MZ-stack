
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { TrendingUp, BarChart3, Wallet, Shield } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="Crypto Trading Platform"
      subtitle="Plataforma moderna de trading de criptomonedas"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      brandName="Jesús Soto Dev"
      darkMode={true}
    >
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <a 
            href="https://crypto-trade-template-2594.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Ver Proyecto Live →
          </a>
          <a 
            href="https://github.com/chuch77/crypto-trade-template-2594" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold"
          >
            Ver Código →
          </a>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Crypto Trading Platform - Proyecto Full Stack</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Descripción del Proyecto</h3>
        <p>
          Plataforma moderna de trading de criptomonedas desarrollada con React y TypeScript. 
          Incluye dashboard interactivo, gráficos en tiempo real, gestión de portfolio y 
          sistema de alertas para traders.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafío Técnico</h3>
      <p>
        Crear una interfaz intuitiva y responsiva para el trading de criptomonedas que maneje datos 
        en tiempo real, sea fácil de usar y proporcione herramientas avanzadas de análisis técnico.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solución Implementada</h3>
      <p>
        Desarrollo de una aplicación web completa utilizando tecnologías modernas como React, TypeScript 
        y Tailwind CSS. La plataforma incluye las siguientes características:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Trading Dashboard</h4>
            <p>Interfaz intuitiva con gráficos interactivos y datos de mercado en tiempo real.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Análisis Técnico</h4>
            <p>Herramientas avanzadas de charting y indicadores técnicos para análisis de mercado.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Wallet className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Portfolio Management</h4>
            <p>Gestión completa de portfolio con tracking de ganancias y pérdidas.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Seguridad</h4>
            <p>Implementación de mejores prácticas de seguridad y autenticación de usuarios.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Tecnologías Utilizadas</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS</li>
        <li><strong>Gráficos:</strong> Chart.js / Recharts para visualización de datos</li>
        <li><strong>Estado:</strong> Context API / Zustand para manejo de estado global</li>
        <li><strong>Deployment:</strong> Vercel con CI/CD automático</li>
        <li><strong>Responsive:</strong> Diseño mobile-first completamente adaptable</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Características Destacadas</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Interfaz Moderna</h4>
            <p>Diseño limpio y profesional con excelente UX/UI para traders.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Responsive Design</h4>
            <p>Funciona perfectamente en desktop, tablet y móvil con adaptación completa.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Performance Optimizado</h4>
            <p>Carga rápida y navegación fluida con optimizaciones de rendimiento.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Código Limpio</h4>
            <p>Arquitectura escalable con componentes reutilizables y mejores prácticas.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Resultados</h3>
      <p>
        Proyecto completado exitosamente demostrando habilidades en desarrollo Full Stack. 
        La aplicación muestra competencia en React, TypeScript, diseño responsive y 
        deployment en producción. Disponible en vivo en Vercel con código fuente en GitHub.
      </p>
    </ProjectPageLayout>
  );
};

export default FireCatProject;
