'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Clock, MapPin, CheckCircle, Droplets } from 'lucide-react';

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const en = locale === 'en';

  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    const subject = en
      ? `Water Test Request from ${form.name}`
      : `Solicitud de Análisis de Agua de ${form.name}`;
    const body = [
      `${en ? 'Name' : 'Nombre'}: ${form.name}`,
      `${en ? 'Phone' : 'Teléfono'}: ${form.phone}`,
      `Email: ${form.email}`,
      `${en ? 'Service Needed' : 'Servicio Necesario'}: ${form.service}`,
      `${en ? 'Message' : 'Mensaje'}: ${form.message}`,
    ].join('%0A');
    window.location.href = `mailto:info@aquaionic.us?subject=${encodeURIComponent(subject)}&body=${body}`;
    setTimeout(() => setStatus('sent'), 800);
  }

  const services = en
    ? ['Well Water Treatment', 'Iron & Sulfur Removal', 'Hard Water / Water Softener', 'Reverse Osmosis System', 'Whole House Filtration', 'City Water Purification', 'Free Water Test', 'Other']
    : ['Tratamiento de Agua de Pozo', 'Eliminación de Hierro y Azufre', 'Agua Dura / Ablandador de Agua', 'Sistema de Ósmosis Inversa', 'Filtración para Toda la Casa', 'Purificación de Agua de Ciudad', 'Análisis de Agua Gratuito', 'Otro'];

  return (
    <div className="pt-[72px]">

      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-[13px] font-semibold text-cyan mb-8">
              <Droplets size={14} strokeWidth={2.5} />
              {en ? 'Free Water Test — No Obligation' : 'Análisis de Agua Gratis — Sin Compromiso'}
            </div>
            <h1 className="text-5xl md:text-6xl font-jakarta font-bold text-deep-blue mb-6 leading-tight tracking-tight">
              {en ? 'Contact' : 'Contacto'}
              <br />
              <span className="text-cyan">Aquaionic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {en
                ? 'Schedule your free water test or ask us anything. We serve Miami-Dade, Broward, and Palm Beach County. Same-day response.'
                : 'Programe su análisis de agua gratuito o consúltenos cualquier cosa. Servimos Miami-Dade, Broward y el condado de Palm Beach. Respuesta el mismo día.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Phone CTA */}
              <div className="bg-gradient-to-br from-deep-blue to-ocean text-white rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Phone size={22} strokeWidth={2} />
                </div>
                <h3 className="text-[18px] font-jakarta font-bold mb-1">
                  {en ? 'Call Us Now' : 'Llámenos Ahora'}
                </h3>
                <p className="text-white/70 text-[13.5px] mb-4">
                  {en ? 'Mon–Fri 8 AM – 6 PM EST' : 'Lun–Vie 8 AM – 6 PM EST'}
                </p>
                <a
                  href="tel:+13054671525"
                  className="inline-flex items-center gap-2 text-[20px] font-jakarta font-bold text-white hover:text-cyan-soft transition-colors"
                >
                  (305) 467-1525
                  <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              </div>

              {/* Info Cards */}
              <div className="bg-white rounded-2xl border border-gray-100 p-7 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-cyan" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-deep-blue mb-0.5">{en ? 'Email' : 'Correo'}</div>
                    <a href="mailto:info@aquaionic.us" className="text-[14px] text-gray-600 hover:text-cyan transition-colors">
                      info@aquaionic.us
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-cyan" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-deep-blue mb-1">{en ? 'Business Hours' : 'Horario'}</div>
                    <div className="text-[14px] text-gray-600 space-y-0.5">
                      <div>{en ? 'Monday – Friday: 8:00 AM – 6:00 PM' : 'Lunes – Viernes: 8:00 AM – 6:00 PM'}</div>
                      <div>{en ? 'Saturday: 9:00 AM – 2:00 PM' : 'Sábado: 9:00 AM – 2:00 PM'}</div>
                      <div>{en ? 'Sunday: Closed' : 'Domingo: Cerrado'}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-cyan" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-deep-blue mb-1">{en ? 'Service Area' : 'Área de Servicio'}</div>
                    <div className="text-[14px] text-gray-600 space-y-0.5">
                      <div>{en ? 'Miami-Dade County' : 'Condado de Miami-Dade'}</div>
                      <div>{en ? 'Broward County' : 'Condado de Broward'}</div>
                      <div>{en ? 'Palm Beach County' : 'Condado de Palm Beach'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included with every visit */}
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <h3 className="text-[15px] font-jakarta font-bold text-deep-blue mb-4">
                  {en ? 'Every Visit Includes:' : 'Cada Visita Incluye:'}
                </h3>
                <ul className="space-y-3">
                  {(en ? [
                    'Free professional water analysis',
                    'Honest assessment of your water quality',
                    'Customized treatment recommendation',
                    'No-pressure, no-obligation quote',
                  ] : [
                    'Análisis de agua profesional gratuito',
                    'Evaluación honesta de la calidad de su agua',
                    'Recomendación de tratamiento personalizada',
                    'Cotización sin presión y sin compromiso',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-cyan flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-2 tracking-tight">
                  {en ? 'Schedule Your Free Water Test' : 'Programe Su Análisis de Agua Gratuito'}
                </h2>
                <p className="text-[14px] text-gray-500 mb-8">
                  {en
                    ? "Fill out the form and we'll contact you within a few hours to schedule your visit."
                    : 'Complete el formulario y nos comunicaremos con usted en pocas horas para programar su visita.'}
                </p>

                {status === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-cyan" strokeWidth={2} />
                    </div>
                    <h3 className="text-[20px] font-jakarta font-bold text-deep-blue mb-2">
                      {en ? 'Message Sent!' : '¡Mensaje Enviado!'}
                    </h3>
                    <p className="text-gray-600 text-[15px]">
                      {en
                        ? "Thank you! We'll reach out shortly to schedule your free water test."
                        : 'Gracias. Nos comunicaremos en breve para programar su análisis de agua gratuito.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-semibold text-deep-blue mb-2">
                          {en ? 'Full Name *' : 'Nombre Completo *'}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder={en ? 'John Smith' : 'Juan García'}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-deep-blue placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/10 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-deep-blue mb-2">
                          {en ? 'Phone Number *' : 'Número de Teléfono *'}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="(305) 000-0000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-deep-blue placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/10 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-deep-blue mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={en ? 'your@email.com' : 'tu@correo.com'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-deep-blue placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/10 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-deep-blue mb-2">
                        {en ? 'Service Needed' : 'Servicio Necesario'}
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-deep-blue focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/10 transition-colors bg-white"
                      >
                        <option value="">{en ? 'Select a service...' : 'Seleccione un servicio...'}</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-deep-blue mb-2">
                        {en ? 'Describe Your Water Issue' : 'Describa su Problema de Agua'}
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={en
                          ? 'e.g. My water smells like rotten eggs, there are orange stains on my sinks...'
                          : 'Ej: Mi agua huele a huevo podrido, hay manchas anaranjadas en mis lavabos...'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-deep-blue placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/10 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-cyan text-white font-semibold text-[15px] rounded-xl hover:bg-cyan-soft transition-colors duration-200 disabled:opacity-60 animate-breathe"
                    >
                      {status === 'sending'
                        ? (en ? 'Sending...' : 'Enviando...')
                        : (en ? 'Send Message & Schedule Test' : 'Enviar Mensaje y Programar Análisis')}
                      {status !== 'sending' && <ArrowRight size={18} strokeWidth={2.5} />}
                    </button>

                    <p className="text-center text-[12px] text-gray-400">
                      {en
                        ? 'By submitting you agree to be contacted about your water quality needs. No spam, ever.'
                        : 'Al enviar acepta ser contactado sobre sus necesidades de calidad del agua. Sin spam, nunca.'}
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-jakarta font-bold text-deep-blue mb-6 tracking-tight">
            {en ? 'Our ' : 'Nuestros '}<span className="text-cyan">{en ? 'Services' : 'Servicios'}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(en ? [
              { label: 'Well Water Treatment', href: '/en/well-water-treatment' },
              { label: 'Iron & Sulfur Removal', href: '/en/iron-sulfur-removal' },
              { label: 'Hard Water Solutions', href: '/en/hard-water-solutions' },
              { label: 'Reverse Osmosis Systems', href: '/en/reverse-osmosis-systems' },
              { label: 'Whole House Filtration', href: '/en/whole-house-filtration' },
              { label: 'City Water Purification', href: '/en/city-water-purification' },
            ] : [
              { label: 'Tratamiento de Agua de Pozo', href: '/es/tratamiento-agua-de-pozo' },
              { label: 'Eliminación de Hierro y Azufre', href: '/es/eliminacion-hierro-azufre' },
              { label: 'Soluciones para Agua Dura', href: '/es/soluciones-agua-dura' },
              { label: 'Sistemas de Ósmosis Inversa', href: '/es/sistemas-osmosis-inversa' },
              { label: 'Filtración para Toda la Casa', href: '/es/filtracion-toda-la-casa' },
              { label: 'Purificación de Agua de Ciudad', href: '/es/purificacion-agua-ciudad' },
            ]).map((svc, i) => (
              <Link
                key={i}
                href={svc.href}
                className="group flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-cyan/40 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <CheckCircle size={18} className="text-cyan flex-shrink-0 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
                <span className="text-[14px] font-semibold text-deep-blue group-hover:text-cyan transition-colors duration-200">{svc.label}</span>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-cyan ml-auto transition-colors duration-200" strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
