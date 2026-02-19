import { createContext, useContext, useState } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [filter, setFilter] = useState({
        field: "",
        value: ""
    });
    const [page, setPage] = useState(1);

    const value = {
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        filter,
        setFilter,
        page,
        setPage
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("useUsers must be used within UsersProvider");
    }
    return context;
}