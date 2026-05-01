import { ArrowLeft, Database, Globe, Smartphone, Code, Cloud, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const TechDetails = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact-info";
  };

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              Detalles Técnicos Full Stack
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-xl text-gray-600 mb-12"
            >
              Explora los detalles técnicos detrás de mi stack de desarrollo y aprende cómo mi arquitectura de sistema permite un desarrollo y despliegue rápido.
            </motion.p>

            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Arquitectura del Sistema</h2>
              <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                Mi plataforma utiliza una arquitectura de tres capas conectando el frontend, backend y base de datos. 
                El diagrama a continuación ilustra cómo fluyen los datos a través de mi sistema, desde la interfaz de usuario hasta el almacenamiento de datos.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <p className="text-sm text-gray-500 mb-4">Interfaz de usuario</p>
                    <ul className="text-sm space-y-2">
                      <li>• React & TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Next.js</li>
                      <li>• Responsive Design</li>
                      <li>• State Management</li>
                      <li>• API Integration</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">
                      La interfaz que los usuarios ven e interactúan
                    </p>
                  </CardContent>
                </Card>

                {/* Backend */}
                <Card className="text-center border-2 border-blue-500">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <p className="text-sm text-gray-500 mb-4">Lógica del servidor</p>
                    <ul className="text-sm space-y-2">
                      <li>• Node.js & Express</li>
                      <li>• REST APIs</li>
                      <li>• Authentication</li>
                      <li>• Data Processing</li>
                      <li>• Security</li>
                      <li>• Performance Optimization</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">
                      Mi plataforma procesa datos y potencia aplicaciones inteligentes
                    </p>
                  </CardContent>
                </Card>

                {/* Database */}
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Base de Datos</h3>
                    <p className="text-sm text-gray-500 mb-4">Almacenamiento de datos</p>
                    <ul className="text-sm space-y-2">
                      <li>• MongoDB</li>
                      <li>• PostgreSQL</li>
                      <li>• MySQL</li>
                      <li>• Data Modeling</li>
                      <li>• Query Optimization</li>
                      <li>• Backup & Recovery</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">
                      Cómo se almacenan y gestionan los datos de manera segura
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Product Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Mi Enfoque de Desarrollo</h2>
              <p className="text-gray-600 mb-8 text-lg">
                1 año invertido en tecnologías enfocadas en una plataforma end-to-end que permite a los clientes 
                tener control total sobre precios, branding, marketing y ventas. Puedo ayudar con todos los aspectos 
                de la creación de productos, desarrollo inicial y desarrollo de aplicaciones.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Responsive Design</h4>
                  <p className="text-sm text-gray-600">Aplicaciones que funcionan perfectamente en todos los dispositivos</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Cloud Deployment</h4>
                  <p className="text-sm text-gray-600">Despliegue en AWS, Vercel y otras plataformas cloud</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <p className="text-sm text-gray-600">Optimización de velocidad y experiencia de usuario</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Security</h4>
                  <p className="text-sm text-gray-600">Implementación de mejores prácticas de seguridad</p>
                </div>
              </div>
            </motion.div>

            {/* Development Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Mi Proceso de Desarrollo</h2>
              <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                He desarrollado un enfoque sistemático para crear soluciones web que combina innovación técnica 
                con implementación práctica. Mi proceso de desarrollo integral asegura que cada proyecto se mueva 
                eficientemente desde el concepto hasta el producto listo para el mercado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Descubrimiento</h3>
                    <p className="text-gray-600 text-sm">
                      Comienzo con una investigación exhaustiva del mercado y recopilación de requisitos 
                      para entender tus necesidades específicas y oportunidades.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Diseño y Prototipado</h3>
                    <p className="text-gray-600 text-sm">
                      Mis equipos crean diseños iniciales y prototipos funcionales que permiten 
                      pruebas tempranas e iteración.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Desarrollo y Testing</h3>
                    <p className="text-gray-600 text-sm">
                      Desarrollo y pruebo rigurosamente todos los componentes para asegurar que 
                      cumplan con los estándares de rendimiento y confiabilidad.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center bg-blue-50 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold mb-4">Explora Mi Proceso de Desarrollo</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                ¿Interesado en saber más sobre cómo trabajo? Contáctame para discutir tu proyecto 
                y ver cómo puedo ayudarte a crear la solución perfecta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Contactarme
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = "/services"}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Ver Mis Servicios
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;