import React from 'react'
import {BsEyeFill} from 'react-icons/bs';
import {AiFillLike, AiOutlineSearch} from 'react-icons/ai'
import styles from './Posts.module.css'
import Link from 'next/link'

export function Posts  ({ posts, loading }) {
    if(loading){
        return <h2>Loading...</h2>
    }

    function numFormatter(num) {
        if(num > 999 &&  num< 1000000){
            return (num/1000).toFixed(1) + 'K'; 
        }else if(num > 1000000){
            return (num/1000000).toFixed(1) + 'M'; 
        }else if(num < 900){
            return num; 
        }
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
                        {/* <Link href='/character/[id]' as={`/character/${post.id}`}> */}
                        <Link href='https://www.ted.com/talks'>
                            <a target="_blank">
                                
                                <div className={styles.imgBackground}>
                                    <img   src={post.img} alt={`${post.title} Thumb`}/> 
                                </div>
                                
                                {/* <h1>{ id } </h1> */}

                                {/* <div>{post.views}</div> */}
                                <ul  className={styles.titleDetails}>
                                    <li className={styles.title}>{ post.title }</li>
                                    <li className={styles.author}>{ post.author }</li>
                                    {/* <li className={styles.viewAndDate}>{post.views} views • {post.date} </li> */}
                                    <li id='views' onLoad={numFormatter(post.views)} className={styles.viewAndDate}>{numFormatter(post.views)} views • {post.date}</li>        
                                </ul>
                            </a>
                        </Link>
                </li>
                ))}
            </ul>
        </div>
  )
}


