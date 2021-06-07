import React, { useState, useEffect } from "react";
import axios from "axios";
import FoundList from "./FoundList";
import LostList from "./LostList";
import SearchBox from "./SearchBox";
import AddForm from "./AddForm";
import PaginationFound from "./PaginationFound";
import PaginationLost from "./PaginationLost";
import LostPag from "./LostPag";
import FoundPag from "./FoundPag";

import logo from "./images/found.svg";
import "./LostFound.css";

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

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

  // Lost Filter

  const itemLostFilter = items.filter((item) => {
    return (
      item.category === "lost" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Pagination

  const currentPostsFound = itemFoundFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  console.log(currentPostsFound);
  console.log(itemFoundFilter.length);

  const currentPostsLost = itemLostFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  //Change page
  const paginateFound = (pageNumber) => setCurrentPage(pageNumber);

  const paginateLost = (pageNumber) => setCurrentPage(pageNumber);

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
        <FoundList items={currentPostsFound} loading={loading} />
        <PaginationFound
          postsPerPage={postsPerPage}
          totalPosts={itemFoundFilter.length}
          paginate={paginateFound}
        />
      </div>
      <div className="lostContainer">
        <h2 className="lostfoundTitle">
          <strong>Lost items</strong>
        </h2>
        <LostList items={currentPostsLost} loading={loading} />
        <PaginationLost
          postsPerPage={postsPerPage}
          totalPosts={itemLostFilter.length}
          paginate={paginateLost}
        />
      </div>
      <div className="formContainer">
        <h2 className="lostfoundTitle">
          <strong>Add found/lost item</strong>
        </h2>
        <AddForm />
      </div>
      <LostPag />
      <FoundPag />
    </div>
  );
};

export default LostFound;
