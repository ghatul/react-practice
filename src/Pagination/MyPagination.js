import React, { useState } from 'react';

const Pagination = ({ data = [1, 2, 3, 4, 5, 6, 7, 8] }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.ceil(data.length / perPage);
  const currentData = data.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      {currentData.map((item, i) => (
        <div key={i}>{item}</div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};
export default Pagination;
