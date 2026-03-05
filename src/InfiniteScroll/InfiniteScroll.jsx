import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await res.json();
    setItems((prev) => [...prev, ...data]);
  };

  useEffect(() => { fetchData(); }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return items.map(item => <div key={item.id}>{item.title}</div>);
}

export default InfiniteScroll