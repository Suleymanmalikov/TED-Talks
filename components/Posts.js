import React from "react";
import styles from "./Posts.module.css";
import Link from "next/link";

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const numFormatter = (num) => {
    return num > 999 && num < 1000000
      ? (num / 1000).toFixed(1) + "K"
      : num > 1000000
      ? (num / 1000000).toFixed(1) + "M"
      : num < 900 && num;
  };

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {posts.map((post) => (
          <li key={post.id} className={styles.card}>
            {/* <Link href='/character/[id]' as={`/character/${post.id}`}> */}
            <Link href={post.link}>
              <a target="_blank">
                <div className={styles.imgBackground}>
                  <img src={post.img} alt={`${post.title} Thumb`} />
                </div>
                <ul className={styles.titleDetails}>
                  <li className={styles.title}>{post.title}</li>
                  <li className={styles.author}>{post.author}</li>
                  <li id="views" className={styles.viewAndDate}>
                    {numFormatter(post.views)} views • {post.date}
                  </li>
                </ul>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
