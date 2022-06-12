import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function next() {
    if (next.onClick) {
      currentPage++;
    }
  }
  console.log(currentPage);

  return (
    <nav className={styles.container}>
      <ul className={styles.grid}>
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className={styles.pageItem}
          >
            <a className={number === currentPage ? styles.currentPage : null}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
