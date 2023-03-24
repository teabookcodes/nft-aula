import React from "react";

export default function Pagination({ totalNfts, nftsPerPage, currentPage, setCurrentPage }) {
    const activeButton = "text-gray-50 bg-indigo-700 w-8 mr-2 px-3 py-1 rounded-md"
    const nonActiveButton = "text-gray-50 bg-aulaBlack w-8 mr-2 px-3 py-1 rounded-md hover:bg-indigo-600"

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalNfts / nftsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="text-center md:text-left">
            {pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? activeButton : nonActiveButton}>
                    {page}
                </button>
            })}
        </div>
    )
}