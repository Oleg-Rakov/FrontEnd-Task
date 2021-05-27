import styles from './styles.module.css';

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.container}>
        <div className={styles.title}>Become a five-star professional!</div>
        <div className={styles.description}>
          Join the growing community of professional icarians. Use the iCaria
          professional services to launch and grow your business, manage your
          clients, organize your schedule, and simplify your payments. With
          iCaria certification, your customers will be assured safe and secure
          access to services.
        </div>
        <div>
          <button className={styles.button}>Request Info</button>
        </div>
      </div>
    </div>
  );
};

export default Promo;
