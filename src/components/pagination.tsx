import { Link } from "gatsby"
import React from "react"

interface Props {
    type: "blog" | "shelf"
    totalPages: number;
    currentPage: number;
}

export default function Pagination({ type, totalPages, currentPage }:Props){

    const paginationItems = [];

    for(let i=1; i<=totalPages; i++){
        paginationItems.push(
            <PaginationItem active={(currentPage === i)} link={`/${type}/${i}`} pageNumber={i} key={`${type}-pagination-${i}`}/>
        )
    }

    return (
        <div className="my-6 mx-auto">
            <ul className="mx-auto flex items-center justify-center">
                {paginationItems}
            </ul>
        </div>
    )
}

function PaginationItem({ pageNumber, link, active}:{ pageNumber: number; link: string; active: boolean; }) {
    return (
        <li className="inline-block mx-2">
            <Link to={link} className={`flex items-center justify-center w-10 h-10 rounded-full border-2 hover:border-primary transition-all duration-300 focus:bg-bg-accent text-fg-primary ${active ? 'bg-primary border-primary': 'border-secondary' }`}>{pageNumber}</Link>
        </li>
    )
}