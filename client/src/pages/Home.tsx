import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Shield, Users, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Reportar la conversión a Google Ads ANTES de salir de la página
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-18299764228/PQ8GCIaG9MocEIT8gJZE',
          'value': 1.0,
          'currency': 'USD',
          'transaction_id': ''
      });
    }

    // 2. Preparar el mensaje y abrir WhatsApp
    const mensaje = `Hola, mi nombre es ${formData.nombre}. \nMi correo es: ${formData.email}. \nMi teléfono es: ${formData.telefono}. \n\nNecesito asesoría por lo siguiente: ${formData.motivo}`;
    const whatsappUrl = `https://wa.me/50493812079?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    // 3. Limpiar el formulario
    setFormData({ nombre: "", email: "", telefono: "", motivo: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
      {/* HEADER / NAVEGACIÓN */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/__manus__/Logo (3).png" alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-[#005CBB]" style={{ fontFamily: "'Lora', serif" }}>Abogado Fajardo</span>
          </div>
          <nav className="hidden md:flex gap-8 text-gray-700">
            <a href="#beneficios" className="hover:text-[#005CBB] transition">Beneficios</a>
            <a href="#servicios" className="hover:text-[#005CBB] transition">Servicios</a>
            <a href="#proceso" className="hover:text-[#005CBB] transition">Proceso</a>
            <a href="#testimonios" className="hover:text-[#005CBB] transition">Testimonios</a>
            <a href="#faq" className="hover:text-[#005CBB] transition">FAQ</a>
          </nav>
            <Button className="btn-cta hidden md:block" onClick={() => window.open('https://wa.me/50493812079?text=Hola,%20Abogado%20Fajardo.%20Me%20interesa%20agendar%20una%20consulta%20legal.', '_blank')}>Agendar Consulta</Button>
        </div>
      </header>

      {/* HERO SECTION - ABOVE THE FOLD */}
      <section className="relative bg-[#0A192F] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/__manus__/Eduardo Fajardo.jpeg"
            alt="Oficina Legal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Lora', serif" }}>
              Protección Legal Estratégica
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Asesoría jurídica especializada que te blinda contra riesgos legales y maximiza tus oportunidades comerciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cta text-lg py-4 px-8" onClick={() => window.open('https://wa.me/50493812079?text=Hola,%20Abogado%20Fajardo.%20Me%20interesa%20agendar%20una%20consulta%20legal.', '_blank')}>
                Agendar Consultoría
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0A192F] text-lg py-4 px-8"
            onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conocer Más
          </Button>
            </div>
            <p className="text-gray-300 mt-8 text-sm">
              ✓ Respuesta en menos de 24 horas | ✓ Confidencialidad garantizada | ✓ Resultados
            </p>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR - BENEFICIOS */}
      <section id="beneficios" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">El valor de una representación transparente</h2>
            <p className="section-subtitle">
              "Ofrezco asesoría jurídica estratégica y representación integral, diseñada tanto para las exigencias del sector corporativo como para las necesidades legales de particulares. Mi compromiso es brindarle certeza, protección patrimonial y un acompañamiento ético en cada etapa de su vida o de su negocio. Me dedico a transformar la complejidad legal en soluciones claras y seguras."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <Card className="card-benefit">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-[#005CBB] rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#005CBB] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Blindaje Legal Integral
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Protejo lo que más le importa: su patrimonio personal y su negocio. Me anticipo a los riesgos legales para que usted pueda enfocarse en sus metas con total tranquilidad y seguridad.
                </p>
              </CardContent>
            </Card>

            {/* Beneficio 2 */}
            <Card className="card-benefit">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-[#005CBB] rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#005CBB] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Proceso Ágil y Transparente
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sin burocracia innecesaria. Le hablo con claridad sobre los tiempos reales de sus trámites y lo mantengo informado paso a paso hasta llegar a la solución que necesita.
                </p>
              </CardContent>
            </Card>

            {/* Beneficio 3 */}
            <Card className="card-benefit">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-[#005CBB] rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#005CBB] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Especialización Comprobada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Con trayectoria resolviendo desde disputas comerciales hasta asuntos personales. Le garantizo un trato directo, estratégico y con honorarios claros desde el primer día.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
{/* SECCIÓN DE SERVICIOS PROFESIONALES */}
      <section id="servicios" className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#005CBB] mb-4" style={{ fontFamily: "'Lora', serif" }}>
             Mis Servicios Profesionales
            </h2>
            <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
              Asesoría Legal Integral (Personal y Corporativa)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Servicio 1 */}
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-[#0A192F] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                   Gestión de Trámites Notariales
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                 Autenticas, Apostillas, Protocolización de actas, traspasos y compraventas de bienes y vehículos, autorización de salida de menores, Matrimonios, Divorcios, Declaración de Herederos. 
                </p>
              </CardContent>
            </Card>

            {/* Servicio 2 */}
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-[#0A192F] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Aseoria Empresarial y PYME
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Contratos Estratégicos,Redacción de Contratos de Trabajo, Redacción, revisión y negociación de contratos comerciales B2B, acuerdos de confidencialidad (NDA), Elaboación de Reglamentos Internos, arrendamientos y distribución.
                </p>
              </CardContent>
            </Card>

            {/* Servicio 3 */}
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-[#0A192F] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Derecho de Familia
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Divorcios, Demanda de Alimentos, Reconocimiento Forzoso de Paternidad, Demanda por Guarda Y Custodia. 
                </p>
              </CardContent>
            </Card>

            {/* Servicio 4 */}
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-[#0A192F] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Litigios, Arbitrajes comerciales y Civiles
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Representación legal eficiente en disputas contractuales, cobros judiciales y resolución alternativa de conflictos comerciales, Declaración de Herederos. 
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="btn-cta text-md py-3 px-8"
              onClick={() => window.open('https://wa.me/50493812079?text=Hola,%20Abogado%20Fajardo.%20Deseo%20cotizar%20uno%20de%20sus%20servicios%20profesionales.', '_blank')}
            >
              Consultar por un Servicio Específico
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN DE PRESENTACIÓN PERSONAL */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#0A192F] to-[#0B1B3D] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00A8E8] rounded-2xl transform rotate-3 blur-sm" />
                <img
                  src="/__manus__/Eduardo Fajardo.jpeg"
                  alt="Eduardo Fajardo"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Lora', serif" }}>
                Abogado Eduardo Fajardo
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                ¡Listo para atenderte!
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Con varios años de experiencia en derecho, me dedico a proteger las inversiones y derechos de mis clientes. Mi enfoque es simple: soluciones claras, sin complicaciones, orientadas a resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-cta text-lg py-3 px-8" onClick={() => window.open('https://wa.me/50493812079?text=Hola,%20Abogado%20Fajardo.%20Me%20interesa%20agendar%20una%20consulta%20legal.', '_blank')}>
                  Agendar Consulta Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO SIMPLIFICADO */}
      <section id="proceso" className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Nuestro Proceso: 3 Pasos Simples</h2>
            <p className="section-subtitle">
              Adiós a la incertidumbre. Aquí está exactamente cómo trabajo contigo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Paso 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#005CBB]">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#005CBB] text-white rounded-full flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Lora', serif" }}>
                  1
                </div>
                <h3 className="text-xl font-bold text-[#005CBB] mt-4 mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Diagnóstico Estratégico
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Envía tus requerimientos o agenda una sesión de diagnóstico en nuestro calendario automatizado. Conocemos tu situación en profundidad.
                </p>
              </div>
              {/* Flecha */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-[#005CBB]" />
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#00A8E8]">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#00A8E8] text-white rounded-full flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Lora', serif" }}>
                  2
                </div>
                <h3 className="text-xl font-bold text-[#00A8E8] mt-4 mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Diseño de Estrategia
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Diseño una estrategia jurídica o plan personalizado para blindar a la medida. Cada solución es única y adaptada a tu negocio.
                </p>
              </div>
              {/* Flecha */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-[#00A8E8]" />
              </div>
            </div>

            {/* Paso 3 */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#0A192F]">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#0A192F] text-white rounded-full flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Lora', serif" }}>
                  3
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mt-4 mb-4" style={{ fontFamily: "'Lora', serif" }}>
                  Ejecución y Resultados
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ejecución limpia, protección legal garantizada y resultados sin complicaciones. Seguimiento permanente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL - TESTIMONIOS */}
      <section id="testimonios" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Lo Que Dicen Mis Clientes</h2>
            <p className="section-subtitle">
              Empresarios y profesionales que han blindado sus negocios con mi asesoría.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <Card className="bg-[#F8F9FA] border-none">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "Blindó mi empresa en 3 semanas. El proceso fue transparente y sin sorpresas. Ahora duermo tranquilo sabiendo que mis activos están protegidos."
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-[#005CBB]">Empresario de Construcción</p>
                  <p className="text-sm text-gray-600">Tegucigalpa, Honduras</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonio 2 */}
            <Card className="bg-[#F8F9FA] border-none">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "El abogado Fajardo me ayudo a resolver una disputa contractual que me tenía bloqueado. Es muy Ágil, profesional y con resultados reales. Lo recomiendo al 100%."
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-[#005CBB]">Dueño de Plataforma Digital</p>
                  <p className="text-sm text-gray-600">Tegucigalpa, Honduras</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonio 3 */}
            <Card className="bg-[#F8F9FA] border-none">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "Excelente atención. El abogado Eduardo me explicó cada paso en términos claros, no en tecnicismos. Muy satisfecho con el resultado final."
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-[#005CBB]">Gerente de PYME</p>
                  <p className="text-sm text-gray-600">Tegucigalpa, Honduras</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONVERSIÓN */}
      <section className="py-20 md:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005CBB] mb-2 text-center" style={{ fontFamily: "'Lora', serif" }}>
                Comienza Tu Consultoría Hoy
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Completa este formulario y nos pondremos en contacto en menos de 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                  <Input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005CBB] focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005CBB] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+504 XXXX-XXXX"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005CBB] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cuál es tu necesidad legal?</label>
                  <Textarea
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleInputChange}
                    placeholder="Describe brevemente tu situación..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005CBB] focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-cta w-full text-lg py-4 font-bold"
                >
                  Enviar Consulta y Agendar
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Garantizo confidencialidad total. Tu información está segura conmigo.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - OBJECIONES Y GARANTÍAS */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-header">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-subtitle">
              Resuelvo tus dudas sobre confidencialidad, tiempos y procesos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#005CBB] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  ¿Está garantizada la confidencialidad de mi información?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutamente. Se cumplen estrictamente con el secreto profesional. Toda la información que compartas está protegida bajo las normas legales más rigurosas. Nunca se comparten datos de clientes con terceros.
                </p>
              </CardContent>
            </Card>

            {/* FAQ 2 */}
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#005CBB] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  ¿Cuánto tiempo toma resolver un caso típico?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Depende de la complejidad. Un blindaje corporativo básico toma 3-4 semanas. Las disputas contractuales pueden variar de 1 a 3 meses. En la consulta inicial te daremos un cronograma exacto.
                </p>
              </CardContent>
            </Card>

            {/* FAQ 3 */}
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#005CBB] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  ¿Cuáles son los métodos de pago aceptados?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transferencias bancarias y depósitos en efectivo. Ofrezco planes flexibles para proyectos grandes. Consulta sin costo estos planes para empresas, PYME o personal.
                </p>
              </CardContent>
            </Card>

            {/* FAQ 4 */}
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#005CBB] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  ¿Cómo se maneja el seguimiento de expedientes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recibirás actualizaciones semanales por correo. Tendrás acceso a un portal privado donde puedes ver el estado de tu caso en tiempo real. Respuestas a consultas en máximo 24 horas.
                </p>
              </CardContent>
            </Card>

            {/* FAQ 5 */}
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#005CBB] mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  ¿Qué sucede si no estoy satisfecho con el resultado?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Garantizamos profesionalismo y dedicación. Si tienes dudas sobre nuestro trabajo, revisamos el caso sin costo adicional. Tu satisfacción es nuestra prioridad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL DE CIERRE */}
      <section className="py-16 md:py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Lora', serif" }}>
            ¿Listo para estar seguro de tus decisiones?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No esperes a que un problema legal te paralice. Actúa hoy y protege tu futuro.
          </p>
          <Button className="btn-cta text-lg py-4 px-10" onClick={() => window.open('https://wa.me/50493812079?text=Hola,%20Abogado%20Fajardo.%20Me%20interesa%20agendar%20una%20consulta%20legal.', '_blank')}>
            Agendar Consultoría Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1B3D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Columna 1 - Branding */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/__manus__/Logo (3).png" alt="Logo" className="w-12 h-12" />
                <h3 className="text-2xl font-bold text-[#00A8E8]" style={{ fontFamily: "'Lora', serif" }}>
                  Abogado Fajardo
                </h3>
              </div>
              <p className="text-gray-400">
                Asesoría jurídica especializada para empresarios y particulares que no quieren complicaciones.
              </p>
            </div>

            {/* Columna 2 - Servicios */}
            <div>
              <h4 className="font-bold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00A8E8] transition">Blindaje Corporativo</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition">Disputas Comerciales</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition">Contratos Estratégicos</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition">Consultoría Legal</a></li>
              </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+504 9381-2079</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@legalpro.hn</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Tegucigalpa, Honduras</span>
                </li>
              </ul>
            </div>

            {/* Columna 4 - Legal */}
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00A8E8] transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition">Código de Ética</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 Legal Pro. Todos los derechos reservados. | Asesoría Legal Profesional en Honduras
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
