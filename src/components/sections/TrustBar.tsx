import { useTranslations } from 'next-intl';
import Icon from '../ui/Icon';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const trustItems = [
    { icon: 'water-drop', text: t('waterAnalysis') },
    { icon: 'shield', text: t('certified') },
    { icon: 'check', text: t('americanMade') },
    { icon: 'phone', text: t('support') },
  ];

  return (
    <section className="bg-ghost border-y border-border py-8">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-white border border-border shadow-xs flex items-center justify-center text-ocean">
                <Icon name={item.icon} size={22} />
              </div>
              <span className="text-sm font-semibold text-text-mid">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
