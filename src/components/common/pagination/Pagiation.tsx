import { useGetProducts } from 'hooks/UseGetProducts';
import React from 'react';
import { styled } from 'styled-components';

const Pagination = ({ totalPages, currentPage, onPageChange }: any) => {
  // 페이지 버튼들을 생성합니다.
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={currentPage === i ? 'active' : ''}
      >
        {i}
      </button>,
    );
  }

  return <PageBoxDiv>{pageButtons}</PageBoxDiv>;
};
export default Pagination;

const PageBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  width: 100%;
  button {
    font-size: 30px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 15px;
    margin: 0px 20px;
  }
  .active {
    background-color: lightgrey;
  }
`;
