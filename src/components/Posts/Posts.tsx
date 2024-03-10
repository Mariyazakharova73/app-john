import cn from 'classnames';
import { cardData } from '../../utils/const';
import s from './Posts.module.css';

const Posts = () => {
  return (
    <section className={s.postsWrapper}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>Recent posts</h2>
        <p className={cn(s.link, 'fade')}>View all</p>
      </div>

      <ul className={s.cardWrapper}>
        {cardData.map(item => {
          return (
            <li className={s.card} key={item.id}>
              <h3 className={s.cardTitle}>{item.cardTitle}</h3>
              <div className={s.dateWrapper}>
                <p>{item.date}&nbsp; | &nbsp;</p>
                <p>{item.link}</p>
              </div>
              <p className={s.cardText}>{item.cardText}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
