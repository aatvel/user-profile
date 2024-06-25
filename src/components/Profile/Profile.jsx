import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <aside>
        <img
          className={styles.profpic}
          src="photo.jpg"
          alt="Аватар пользователя"
        />
      </aside>
      <div>
        <h2 className={styles.profName}>Алина Школьная</h2>
      </div>
      <div className={styles.userDesc}>
        <p>
          Прошла путь от учителя английского до frontend-разработчика! Мой путь
          в IT был нестандартным, что позволило мне развить уникальный подход к
          решению задач. А опыт разработки включает такие проекты, как :
        </p>
        <ul className={styles.list}>
          <li>музыкальная метавселенная Korus</li>
          <li>стенд Тверской области на выставке «Россия» на ВДНХ</li>
          <li>интерактивный стенд для мероприятия медиа ресурса REPEAT</li>
        </ul>
      </div>
      <div className={styles.contactInfo}>
        <p>Email: aatvel@yandex.ru</p>
        <p>Telegram: aatvel</p>
      </div>
    </div>
  );
};

export default Profile;
