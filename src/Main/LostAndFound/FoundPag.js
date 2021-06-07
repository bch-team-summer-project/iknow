import { React, useEffect, useState } from "react";
import axios from "axios";
import LostCard from "./LostCard";
import ReactPaginate from "react-paginate";
import "./LostPag.css";

const LostPag = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(`http://localhost:3002/items`);
    const data = res.data;
    const founddata = data.filter((found) => {
      return found.category.includes("found");
    });
    console.log(founddata);
    const slice = founddata.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id}>
        <LostCard
          name={pd.name}
          img={pd.img}
          location={pd.location}
          date={pd.date}
          description={pd.description}
          placeOrigin={pd.placeOrigim}
        />
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(founddata.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <>
      <div className="pag">{data}</div>
      <div>
        <ReactPaginate
          previousLabel={"<<<prev"}
          nextLabel={"next>>>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default LostPag;
