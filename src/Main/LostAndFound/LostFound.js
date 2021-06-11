import React, { useState, useEffect } from "react";
import axios from "axios";
import FoundList from "./FoundList";
import LostList from "./LostList";
import Search from "../Search";
import AddForm from "./AddForm";
import { Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

import logo from "./images/found.svg";
import "./LostFound.css";
import "./Pagination.css";

const LostFound = () => {
  // our items lists
  const [items, setItems] = useState([]);

  // loading for cards
  const [loading, setLoading] = useState(false);

  //search of cards
  const [searchInput, setSearchInput] = useState("");

  // pagination, quantity of pages for Lost cards
  const [offsetLost, setOffsetLost] = useState(0);

  // pagination, quantity of pages for Lost cards
  const [offsetFound, setOffsetFound] = useState(0);

  // numbers of card on the page of each category
  const [perPage] = useState(3);

  //search
  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  };

  //Data

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("https://iknow-backend.herokuapp.com/lost");
      setItems(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  /**********Found Cards *******************/

  // Filtering cards by "found" value

  const itemFoundFilter = items.filter((found) => {
    return (
      found.category === "found" &&
      found.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  //Found cards Slicing
  const sliceFound = itemFoundFilter.slice(offsetFound, offsetFound + perPage);

  //Pagination Found

  const handlePageClickFound = (e) => {
    const selectedPageFound = e.selected;
    setOffsetFound(selectedPageFound + 1);
  };

  /**********Lost Cards ********************/

  // Filtering cards by "lost" value

  const itemLostFilter = items.filter((lost) => {
    return (
      lost.category === "lost" &&
      lost.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  //Lost Cards Slicing
  const sliceLost = itemLostFilter.slice(offsetLost, offsetLost + perPage);

  // Pagination Lost

  const handlePageClickLost = (i) => {
    const selectedPageLost = i.selected;
    setOffsetLost(selectedPageLost + 1);
  };

  return (
    <div className="containerMain">
      <Row className="lostfoundBanner">
        <Col className="logoFound">
          <img className="logo-found" src={logo} alt="found" />
        </Col>
        <Col className="searchBox">
          <Search search={searchValueHandler} />
        </Col>
      </Row>
      <div className="foundContainer">
        <h2 className="foundTitle">
          <strong>Found properties</strong>
        </h2>
        <div className="pagination-mob">
          <ReactPaginate
            previousLabel={"<<<prev"}
            nextLabel={"next>>>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(itemFoundFilter.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClickFound}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        <div>
          <FoundList items={sliceFound} loading={loading} />
        </div>
        <div className="pagination-desc">
          <ReactPaginate
            previousLabel={"<<<prev"}
            nextLabel={"next>>>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(itemFoundFilter.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClickFound}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <div className="lostContainer">
        <h2 className="lostTitle">
          <strong>Lost properties</strong>
        </h2>
        <div className="pagination-mob">
          <ReactPaginate
            previousLabel={"<<<prev"}
            nextLabel={"next>>>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(itemLostFilter.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClickLost}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        <div>
          <LostList items={sliceLost} loading={loading} />
        </div>
        <div className="pagination-desc">
          <ReactPaginate
            previousLabel={"<<<prev"}
            nextLabel={"next>>>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(itemLostFilter.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClickLost}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <div className="formContainer">
        <h2 className="formTitle">
          <strong>Add found/lost property </strong>
        </h2>
        <AddForm />
      </div>
    </div>
  );
};

export default LostFound;
