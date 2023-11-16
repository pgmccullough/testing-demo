import { useState } from 'react';
import scss from './App.module.scss';
import { NewPostForm } from './components/NewPostForm/NewPostForm';
import { Posts } from './components/Posts/Posts';

import { users } from './utils/userData';

export const App = () => {

  const [ contacts, setContacts ] = useState(users);

  return (
    <div>
      <header className={scss['header']}>
        <h1 className={scss['header__title']}>My Contacts</h1>
      </header>
      <main className={scss['main']}>
        <aside className={scss['post-form']}>
          <NewPostForm setContacts={setContacts} />
        </aside>
        <section className={scss['posts']}>
          <Posts contacts={contacts} />
        </section>
      </main>
    </div>
  );
}
