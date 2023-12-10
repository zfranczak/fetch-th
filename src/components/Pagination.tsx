import React from 'react';

interface PaginationProps {
  nextPage: number;
  total: number;
  //   pageNumber: number;
  handlePrevPageClick: () => void;
  handleNextPageClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  nextPage,
  total,
  handlePrevPageClick,
  handleNextPageClick,
  //   pageNumber,
}) => {
  return (
    <div
      className='pag-container'
      style={{
        justifyContent:
          nextPage === 0
            ? 'flex-end'
            : nextPage + 25 >= total
            ? 'flex-start'
            : 'space-between',
      }}
    >
      <button
        className='next25 btn'
        onClick={handlePrevPageClick}
        style={{ display: nextPage === 0 ? 'none' : 'block' }}
      >
        Previous 25
      </button>
      {/* <p>{pageNumber}</p> */}
      <button
        className='next25 btn'
        onClick={handleNextPageClick}
        style={{ display: nextPage + 25 >= total ? 'none' : 'block' }}
      >
        Next 25
      </button>
    </div>
  );
};

export default Pagination;
