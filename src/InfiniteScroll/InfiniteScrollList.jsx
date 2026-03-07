import React, { useEffect, useState } from 'react';

const InfiniteScrollList = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const randomInt = Math.floor(Math.random() * 10) + 1;
    const newList = Array(20).fill(randomInt);
    setList([...list, ...newList]);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(
      //   window.innerHeight,
      //   window.scrollY,
      //   document.body.offsetHeight
      // );
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prev) => (prev += 1));
      }
    };
    window.addEventListener('scroll', handleScroll);
    setList(Array(20).fill(8));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={`${item}-${index}`}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScrollList;
