import React, { useState, useEffect } from "react";
import axios from "axios";
import FoundList from "./FoundList";
import LostList from "./LostList";
import SearchBox from "./SearchBox";
import AddForm from "./AddForm";
import ReactPaginate from "react-paginate";

import logo from "./images/found.svg";
import "./LostFound.css";
import "./LostPag.css";

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3002/items");
      setItems(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  // Found Filter

  const itemFoundFilter = items.filter((item) => {
    return (
      item.category === "found" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });
  console.log(itemFoundFilter);

  const sliceFound = itemFoundFilter.slice(offset, offset + perPage);
  console.log(sliceFound);

  const handlePageClickFound = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  // Lost Filter

  const itemLostFilter = items.filter((item) => {
    return (
      item.category === "lost" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const sliceLost = itemLostFilter.slice(offset, offset + perPage);
  console.log(sliceLost);

  const handlePageClickLost = (i) => {
    const selectedPage = i.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div className="containerMain">
      <div className="searchContainer">
        <img
          className="logoFound"
          src={logo}
          alt="found"
          width="400"
          height="300"
        />

        <SearchBox search={searchValueHandler} />
      </div>
      <div className="foundContainer">
        <h2 className="lostfoundTitle">
          <strong>Found Items</strong>
        </h2>
        <FoundList items={sliceFound} loading={loading} />
        <div>
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
        <h2 className="lostfoundTitle">
          <strong>Lost items</strong>
        </h2>
        <LostList items={sliceLost} loading={loading} />
        <div>
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
        <h2 className="lostfoundTitle">
          <strong>Add found/lost item</strong>
        </h2>
        <AddForm />
      </div>
    </div>
  );
};

export default LostFound;
