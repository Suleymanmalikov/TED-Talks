import React from 'react'
import styles from './Pagination.module.css'

export const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);

        // console.log(i);
    }
    function next(){
        if(next.onClick){
            currentPage ++;
        }
    }
    console.log(currentPage)
    
    console.log(currentPage)
    
    return (
        
        <nav className={styles.container}>
            <ul className={styles.grid}>
               {pageNumbers.map(number => (
                <li onClick={() => paginate(number)} key={number} className={styles.pageItem}>
                    <a className={number === currentPage ? styles.currentPage : null}>
                        {number}
                    </a>
                </li>
               ))}
               {/* <li>
                    <a onClick={}>

                    </a>
                </li>   */}
            </ul>
        </nav>
    //     <nav className='container'>
    //         <style jsx>{`
    // .container {
    //     padding: 0;
    //     margin: 0;
    //     display: flex;
    // }
    // .grid {
    //     display: flex;
    //     align-items: flex-start;
    //     justify-content: start;
    //     flex-wrap: wrap;
    //     max-width: 100%;
    //     list-style-type: none;
    //     /* border: 1px solid black; */
    //     cursor: pointer;
    // }
    
    
    // .pageItem{
    //     /* background-color: green; */
    //     padding: 3px;
    //     margin: 3px;
    //     /* background-color: #dadada; */
    //     /* border-radius: 5px;
    //     border: 1px solid #eaeaea; */
    //     transition: color 0.15s ease, border-color 0.15s ease;
    //     /* cursor: pointer; */
    //     font-size: large;
    
    // }
    
    // .non-current-page{
    //     color: black;
    // }
    
    // .current-page{
    //     color: red;
    // }
    
    // /* .pageItem:hover,
    // .pageItem:focus,
    // .pageItem:active{
    //     color: rgb(253, 63, 63);
    //     border-color: rgb(253, 63, 63);
    // } */
    //   `}</style>
    //         <ul className='grid'>
    //            {pageNumbers.map(number => (
    //             <li onClick={() => paginate(number)} key={number} className={number === currentPage ? 'pageItem' : 'non-current-page'}>
    //                 <a>
    //                     {number}
    //                 </a>
    //             </li>
    //            ))} 
    //         </ul>
    //     </nav>
        
)
}

