import React, { useContext, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";

import { Apidata } from "../components/ContextApi";
import Post from "../components/pagination/Post";
import PaginationArea from "../components/pagination/PaginationArea";

const Product = () => {
  let data = useContext(Apidata);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(9);
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = data.slice(firstPage, lastPage);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let next = () => {
    if (currentPage < data.length) {
      setCurrentPage((currentState) => currentState + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((currentState) => currentState - 1);
    }
  };

  return (
    <div>
      <Container>
        <span className="font-dm font-normal text-[18px]">
          <Link to="/">Home</Link> / Products
        </span>
        <Flex>
          <div className="w-[20%]">
            <h2>Under Contruction</h2>
          </div>
          <div className="w-[80%]">
            <div className="flex justify-between flex-wrap">
              <Post post={allPage} />
            </div>
            <PaginationArea
              totalPage={data.length}
              perpage={perPage}
              paginate={paginate}
              next={next}
              prev={prev}
              currentPage={currentPage}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Product;
