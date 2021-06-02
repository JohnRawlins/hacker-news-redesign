import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import prevArrow from "./assets/prev-arrow.svg";
import nextArrow from "./assets/next-arrow.svg";
import * as searchActions from "../../redux/actions/search";
import "./styles.scss";

const Paginator = () => {
  const { page: currentPage, nbPages: totalPages } = useSelector(
    (state) => state.searchResults
  );
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();

  const handlePageNavClick = ({ target }) => {
    const searchParams = new URLSearchParams(`${search}`);
    const searchTerm = searchParams.get("q");
    let pageSelected = null;
    if (target.id === "next-page") {
      pageSelected = currentPage + 1;
    } else if (target.id === "prev-page") {
      pageSelected = currentPage - 1;
    } else {
      pageSelected = Number(target.textContent);
    }

    dispatch(searchActions.searchForStories(searchTerm, pageSelected));
  };

  const createPath = (page) => {
    const searchParams = new URLSearchParams(`${search}`);
    searchParams.set("page", page);
    return encodeURI(`${pathname}?${searchParams.toString()}`);
  };

  const createPaginator = (pages, currentPage) => {
    if (currentPage === 0) {
      currentPage = 1;
    }
    return pages.map((page, index) => {
      return (
        <li
          className={page === currentPage ? "page page--current" : "page"}
          key={index.toString()}
        >
          <Link
            className="page__link"
            to={createPath(page)}
            onClick={handlePageNavClick}
          >
            {page}
          </Link>
        </li>
      );
    });
  };
  const createPages = (currentPage, totalPages) => {
    const PAGES_DISPLAYED = 5;
    const pages = [];
    const offset = Math.floor(PAGES_DISPLAYED / 2);

    if (totalPages <= PAGES_DISPLAYED) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }
    } else if (currentPage <= PAGES_DISPLAYED / 2) {
      for (let page = 1; page <= PAGES_DISPLAYED; page++) {
        pages.push(page);
      }
    } else {
      let startPage = currentPage - offset;
      let endPage =
        PAGES_DISPLAYED % 2 === 0
          ? currentPage + offset - 1
          : currentPage + offset;

      if (endPage > totalPages) {
        const surplus = endPage - totalPages;
        endPage -= surplus;
        startPage -= surplus;
      }
      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }
    }

    return pages;
  };

  const pages = createPages(currentPage, totalPages - 1);

  const paginatorList = createPaginator(pages, currentPage);

  return (
    <div className="paginator">
      {currentPage > 1 && (
        <Link
          className="paginator-prev"
          to={createPath(currentPage - 1)}
          onClick={handlePageNavClick}
        >
          <img
            id="prev-page"
            className="paginator-prev__img"
            src={prevArrow}
            alt="Previous Page"
          />
        </Link>
      )}
      <ul className="paginator-list">{paginatorList}</ul>
      {currentPage < totalPages - 1 && (
        <Link
          className="paginator-next"
          to={createPath(currentPage + 1)}
          onClick={handlePageNavClick}
        >
          <img
            id="next-page"
            className="paginator-next__img"
            src={nextArrow}
            alt="Next Page"
          />
        </Link>
      )}
    </div>
  );
};

export default Paginator;
