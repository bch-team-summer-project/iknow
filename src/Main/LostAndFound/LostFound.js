import React, { useState, useEffect } from "react";
import axios from "axios";
import FoundList from "./FoundList";
import LostList from "./LostList";
import SearchBox from "./SearchBox";
import AddForm from "./AddForm";
import PaginationFound from "./PaginationFound";
import PaginationLost from "./PaginationLost";

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchFoundList = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3002/items");
      setItems(res.data);
      setLoading(false);
    };

    fetchFoundList();
  }, []);

  // Found list

  const itemFoundFilter = items.filter((item) => {
    return (
      item.category === "found" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  /* const listFound = itemFoundFilter.map((found) => {
    console.log(found.category);
    return (
      <FoundCard
        key={found.id}
        img={found.img}
        name={found.name}
        date={found.date}
        location={found.location}
        placeOrigin={found.placeOrigin}
        description={found.description}
        id={found.id}
      />
    );
  }); */

  // LostList

  const itemLostFilter = items.filter((item) => {
    console.log(item);
    return (
      item.category === "lost" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  /* const listLost = itemLostFilter.map((lost) => {
    console.log(lost.category);
    return (
      <LostCard
        key={lost.id}
        img={lost.img}
        name={lost.name}
        date={lost.date}
        location={lost.location}
        description={lost.description}
        id={lost.id}
      />
    );
  }); */

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPostsFound = itemFoundFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const currentPostsLost = itemLostFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <h1>Search items</h1>
        <SearchBox search={searchValueHandler} />
      </div>
      <h2>Found items</h2>
      <FoundList items={currentPostsFound} loading={loading} />
      <PaginationFound
        postsPerPage={postsPerPage}
        totalPosts={currentPostsFound.length}
        paginate={paginate}
      />
      <h2>Lost items</h2>
      <LostList items={currentPostsLost} loading={loading} />
      <PaginationLost
        postsPerPage={postsPerPage}
        totalPosts={currentPostsLost.length}
        paginate={paginate}
      />
      <div>
        <h2>Add found/lost item</h2>
        <AddForm />
      </div>
    </div>
  );
};

export default LostFound;
