import React from 'react'
import styles from './Pagination.module.css'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.container}>
            <ul className={styles.grid}>
               {pageNumbers.map(number => (
                <li key={number} className={styles.pageItem}>
                    <a onClick={() => paginate(number)} className='page-link'>
                        {number}
                    </a>
                </li>
               ))} 
            </ul>
        </nav>
)
}
