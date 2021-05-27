import styles from './styles.module.css';
import info from '../../assets/images/info.png';
import Forms from '../../common/Forms';

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Request info</div>
        <div className={styles.infoDesc}>
          Got a question? Need to see a demo? Want to start your free trial
          subscription? We'd love to hear from you! Contact us and we will get
          back to you shortly.
        </div>
        <div className={styles.infoImg}>
          <img src={info} alt="info" />
        </div>
      </div>
      <Forms />
    </div>
  );
};

export default Form;
