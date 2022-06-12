<ul className={styles.grid}>
          {data.map(result =>{
            const { id, title, img, views,likes, author, date } = result;

          //   return (
          //   <li key={id} className={styles.card}>
          //     <Link href='/character/[id]' as={`/character/${id}`}>
          //       <a>
          //         <img  src={img} alt={`${title} Thumb`}/> 
          //         {/* <h1>{ id } </h1> */}
          //         <ul className={styles.views_likes}>
          //           <li><BsEyeFill /> {views}</li>
          //           <li><AiFillLike /> {likes}</li>
          //         </ul>
          //         <p className={styles.date}>{ date }</p>
          //         <p className={styles.author}>{ author }</p>
          //         <h2>{ title }</h2>
          //       </a>
          //     </Link>
          //   </li>
          //   )
          // })}
          </ul>