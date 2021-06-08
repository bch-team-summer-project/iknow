import React, { useState, useEffect } from "react";
import axios from "axios";
import FoundList from "./FoundList";
import LostList from "./LostList";
import Search from "../Search";
import AddForm from "./AddForm";
import ReactPaginate from "react-paginate";
import Row from "react-bootstrap/Row";

import logo from "./images/found.svg";
import "./LostFound.css";
import "./Pagination.css";

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [offsetLost, setOffsetLost] = useState(0);
  const [offsetFound, setOffsetFound] = useState(0);
  const [perPage] = useState(3);

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
      console.log(res.data);
    };

    fetchItems();
  }, []);

  // Found Filter

  const itemFoundFilter = items.filter((found) => {
    return (
      found.category === "found" &&
      found.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  //Found Slice
  const sliceFound = itemFoundFilter.slice(offsetFound, offsetFound + perPage);

  //Pagination Found

  const handlePageClickFound = (e) => {
    const selectedPageFound = e.selected;
    setOffsetFound(selectedPageFound + 1);
  };

  // Lost Filter

  const itemLostFilter = items.filter((lost) => {
    return (
      lost.category === "lost" &&
      lost.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  //Lost Slice
  const sliceLost = itemLostFilter.slice(offsetLost, offsetLost + perPage);

  // Pagination Lost

  const handlePageClickLost = (i) => {
    const selectedPageLost = i.selected;
    setOffsetLost(selectedPageLost + 1);
  };

  return (
    <div className="containerMain">
      <div className="searchContainer">
        <div className="searchRow">
          <img className="logoFound" src={logo} alt="found" />
          <div className="searchBar">
            <Search search={searchValueHandler} />
          </div>
        </div>
      </div>
      <div className="foundContainer">
        <h2 className="foundTitle">
          <strong>Found Items</strong>
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
          <strong>Lost items</strong>
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
          <strong>Add found/lost item </strong>
        </h2>
        <AddForm />
      </div>
    </div>
  );
};

export default LostFound;
