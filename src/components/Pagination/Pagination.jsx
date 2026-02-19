import { useUsers } from "../../context/UsersContext";
import "./Pagination.css";

function Pagination({ totalPages }) {
    const { page, setPage } = useUsers();

    const handlePrevPage = (e) => {
        if (page === 1) return;
        setPage(prev => prev - 1);
    }

    const handleNextPage = (e) => {
        if (page === totalPages) return;
        setPage(prev => prev + 1); 
    }

    return (
        <div className="pagination">
            {
                page !== 1 ? 
                    <div className="pagination__prev-page pagination__item" onClick={handlePrevPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10.6 12.71a1 1 0 010-1.42l4.59-4.58a1 1 0 000-1.42 1 1 0 00-1.41 0L9.19 9.88a3 3 0 000 4.24l4.59 4.59a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.42z"/>
                        </svg>
                    </div>
                :
                    <></>
            }
            <div className="pagination__current-page pagination__item">{page}</div>
            {
                page !== totalPages ?
                    <div className="pagination__next-page pagination__item" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.4 9.88l-4.59-4.59a1 1 0 00-1.41 0 1 1 0 000 1.42l4.6 4.58a1 1 0 010 1.42l-4.6 4.58a1 1 0 001.41 1.42l4.59-4.59a3 3 0 000-4.24z"/>
                        </svg>
                    </div>
                :
                    <></>
            }
            
        </div>
    );
}

export default Pagination;