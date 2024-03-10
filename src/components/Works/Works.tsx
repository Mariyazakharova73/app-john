import { worksData } from '../../utils/const';
import s from './Works.module.css';

const Works = () => {
  return (
    <section className={s.works}>
      <h2 className={s.title}>Featured works</h2>
      <ul className={s.worksWrapper}>
        {worksData.map(item => {
          return (
            <li key={item.id} className={s.item}>
              <img className={s.image} src={item.img} alt={`${item.text}.`} />
              <div className={s.textWrapper}>
                <h3 className={s.worksTitle}>{item.title}</h3>
                <div className={s.yearWrapper}>
                  <div className={s.year}>{item.year}</div>
                  <p className={s.theme}>{item.theme}</p>
                </div>
                <p className={s.text}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Works;
