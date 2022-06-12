import React from 'react'
import {BsEyeFill} from 'react-icons/bs';
import {AiFillLike, AiOutlineSearch} from 'react-icons/ai'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Posts  ({ posts, loading }) {
    if(loading){
        return <h2>Loading...</h2>
    }
 
    return (
        <div className={styles.container}>
            <ul className={styles.grid}>
                {/* <main className={styles.main}>
                    <h1 className={styles.title}>
                    <a><span>TED</span>ed</a> 
                    </h1>
                </main> */}
                {posts.map(post => (
                    // const { id, title, img, views, likes, date, author } = post;
                    // <li key={post.id} className='list-group-item'>
                    //     {post.title}
                    // </li>
                    <li key={post.id} className={styles.card}>
                        <Link href='/character/[id]' as={`/character/${post.id}`}>
                            <a>
                            <img  src={post.img} alt={`${post.title} Thumb`}/> 
                            {/* <h1>{ id } </h1> */}
                            <ul className={styles.views_likes}>
                                <li><BsEyeFill /> {post.views}</li>
                                <li><AiFillLike /> {post.likes}</li>
                            </ul>
                            <p className={styles.date}>{ post.date }</p>
                            <p className={styles.author}>{ post.author }</p>
                            <h2>{ post.title }</h2>
                            </a>
                        </Link>
                </li>
                ))}
            </ul>
        </div>
  )
}


