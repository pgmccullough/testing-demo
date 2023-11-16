import scss from "./Posts.module.scss";
import { dateToReadable } from "../../utils/dateToReadable";

export const Posts = ({ contacts }) => {

  return (
    contacts.map(({id, first_name, last_name, email, phone, date}) =>
      <article className={scss.post} key={id}>
        <header className={scss.post__header}>
          <section>{last_name}, {first_name}</section>
          <section>{dateToReadable(date)}</section>
        </header>
        <section className={scss['post__phone']}>
          <figure className={scss['post__phone-icon']}>
            <img src="/resources/phone-email-ico.png" alt="phone icon" />
          </figure>
          <p>{phone}</p>
        </section>
        <section className={scss['post__email']}>
          <figure className={scss['post__email-icon']}>
            <img 
              className={scss['post__email-img']}
              src="/resources/phone-email-ico.png"
              alt="email icon"
            />
          </figure>
          <p>{email}</p>
        </section>
      </article>
    )
  )
}