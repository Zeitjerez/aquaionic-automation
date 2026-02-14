import { useTranslations } from 'next-intl';
import WaterTestForm from '../forms/WaterTestForm';

export default function WaterTestCTA() {
  const t = useTranslations('waterTest');

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-ocean" />

      {/* Radial overlays */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,188,212,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
              {t('label')}
            </div>
            <h2 className="text-4xl md:text-5xl font-jakarta font-extrabold mb-6">
              {t('title')}
              <br />
              <span className="text-cyan">{t('titleLine2')}</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              {t('description')}
            </p>
          </div>

          {/* Form */}
          <div className="form-glass rounded-2xl p-8 animate-scale-in">
            <WaterTestForm />
          </div>
        </div>
      </div>
    </section>
  );
}
