import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
       <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
	  
	<details>
    <summary>Чат-бот </summary>
	 <p>
      <a href="https://github.com/annavladimirts/bot">Чат-бот подбор литературы</a>
	</p>
	  <p>Во втором семестре четвертого курса у нас было два больших проекта.
	  Одним из них является разработка чат-бота на платформе Telegram. Чат-бот - это программа, которая имитирует разговор с пользователем.
	  В нашем случае тематикой чат-бота была помощь с подбором литературы. При входе в диалог с ботом пользователь выбирает жанр, а ему выдается 
	  результат с названием книги, годом издания, автором и страной написания. </p>
	 <img 
      src="/images/chat_bot.png"
      />
	  </details>
	  
	 <details>
	<summary>Результат прохождения учебника по установке React</summary>
	  <p>
		  <a href="https://github.com/EgorovaAnastasia/next_blog20">Результат прохождения учебника по установке React</a>
        </p>
	  <p>Вторым большим проектом являлось установка React и прохождение материала по учебнику.
	  </p>
	  <img
                  src="/images/vercel.png"
                />
	  </details>
		
	  </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
	  
        <h2 className={utilStyles.headingLg}>Дипломные работы</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}