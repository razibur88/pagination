import React, { useContext, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";

import { Apidata } from "../components/ContextApi";
import Post from "../components/pagination/Post";
import PaginationArea from "../components/pagination/PaginationArea";

const Product = () => {
  let [show, setShow] = useState(false);
  let [showtwo, setShowtwo] = useState(false);
  let data = useContext(Apidata);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(9);
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = data.slice(firstPage, lastPage);
  let pageNumber = [];
  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i);
  }
  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((currentState) => currentState + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((currentState) => currentState - 1);
    }
  };

  let handleShowCa = () => {
    setShow(!show);
  };
  let handleShowCaTwo = () => {
    setShowtwo(!showtwo);
  };

  return (
    <div>
      <Container>
        <span className="font-dm font-normal text-[18px]">
          <Link to="/">Home</Link> / Products
        </span>
        <Flex>
          <div className="w-[20%]">
            <div className="">
              <Link onClick={handleShowCa}>Under Contruction</Link>
              {show && (
                <ul className="bg-[gray]">
                  <li>hhhhs</li>
                  <li>hhhhs</li>
                  <li>hhhhs</li>
                  <li>hhhhs</li>
                </ul>
              )}
            </div>
            <div className="">
              <Link onClick={handleShowCaTwo}>Under Contruction</Link>
              {showtwo && (
                <ul className="bg-[gray]">
                  <li>hhhhs</li>
                  <li>hhhhs</li>
                  <li>hhhhs</li>
                  <li>hhhhs</li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-[80%]">
            <div className="flex justify-between flex-wrap">
              <Post post={allPage} />
            </div>
            <PaginationArea
              pageNum={pageNumber}
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
