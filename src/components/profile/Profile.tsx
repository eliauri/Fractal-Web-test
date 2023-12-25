import styles from './profile.module.scss';
import Folder from '../../assets/svg/folder.svg?react';

const links = [
  { id: 0, title: 'Telegram' },
  { id: 1, title: 'GitHub' },
  { id: 2, title: 'Резюме' },
];
const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.avatar}>АИ</div>
      <div className={styles.info}>
        <h1 className={styles.name}>Алексей Иванов</h1>
        <div className={styles.links}>
          {links.map((item) => (
            <a className={styles.link} href='#' key={item.id}>
              <Folder />
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
