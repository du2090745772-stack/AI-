import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import InfiniteMenu from './InfiniteMenu/InfiniteMenu';

export default function CinematicPage({
  id,
  video,
  kicker,
  title,
  titleLines,
  description,
  badge,
  stats,
  works = [],
  nextId,
  primaryLabel = 'View Process →',
}) {
  const scroll = (target) => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id={id} className={`cinematic-page${works.length ? ' cinematic-page-with-works' : ''}`}>
      <FadingVideo src={video} className="cinematic-video" />
      <div className="cinematic-vignette" />
      <div className="cinematic-content">
        <motion.div className="cinematic-badge liquid-glass"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .15, ease: 'easeOut' }}>
          <span>{badge}</span>
        </motion.div>

        <motion.div className="cinematic-kicker"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .28, ease: 'easeOut' }}>
          {kicker}
        </motion.div>

        {titleLines?.length ? (
          <h2 className="cinematic-title cinematic-title-long cinematic-title-composed">
            {titleLines.map((line, index) => (
              <BlurText text={line} as="span" className="cinematic-title-line" delay={.35 + index * .08} key={line} />
            ))}
          </h2>
        ) : (
          <BlurText text={title} as="h2" className={`cinematic-title${title.length > 30 ? ' cinematic-title-long' : ''}`} delay={.35} />
        )}

        <motion.p className="cinematic-description cinematic-description-caption"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .55, ease: 'easeOut' }}>
          {description}
        </motion.p>

        <motion.div className="cinematic-actions"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .7, ease: 'easeOut' }}>
          <button className="liquid-glass-strong cinematic-primary" onClick={() => scroll(nextId)}>
            {primaryLabel}
          </button>
          <button className="cinematic-secondary" onClick={() => scroll('contact')}>
            联系我 <span>↗</span>
          </button>
        </motion.div>

        <motion.div className="cinematic-stats"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .85, ease: 'easeOut' }}>
          {stats.map((stat) => (
            <div className="liquid-glass cinematic-stat hover-text-card" key={stat.value}>
              <strong className="hover-scale-text">{stat.value}</strong>
              <span className="hover-scale-text">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {works.length > 0 && (
        <motion.div className="cinematic-work-menu"
          initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: .6, delay: .28 }}>
          <div className="embedded-works-label liquid-glass hover-text-card">
            <strong className="hover-scale-text">作品集</strong>
            <small className="hover-scale-text">鼠标点击可滑动</small>
          </div>
          <InfiniteMenu items={works} scale={.92} />
        </motion.div>
      )}
    </section>
  );
}
