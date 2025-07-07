import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

const ArticlesSection = () => {
  const { t } = useTranslation();
  const articleList = t('article-list', { returnObjects: true });

  // GSAP animation
  // TODO: avoid duplicate gsap settings
  useGSAP(() => {
    gsap.from('.article-list-item', {
      scrollTrigger: {
        trigger: '.section-articles',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      yPercent: 200,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.1,
    });
  });

  return (
    <section className="section-articles container my-6" id="articles">
      <h2 className="mb-5">
        <span className="pb-2 border-bottom border-primary">
          {t('articles')}
        </span>
      </h2>
      <div>
        <ul className="list-group list-group-flush">
          {articleList.map((article, index) => (
            <li className="list-group-item list-group-item-action article-list-item" key={index}>
              <a href={article.url} target="_blank">{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticlesSection;
