import { useEffect, useMemo, useState } from "react";
import { API_CONFIG } from "../../client/api_config";
import { useFetch } from "../../client/hooks";
import { tableConfig } from "./table_config";
import "./UsersTable.css";
import UserRow from "../UserRow/UserRow";
import Pagination from '../Pagination/Pagination'
import { useUsers } from "../../context/UsersContext";
import Loader from "../Loader/Loader";

function UsersTable() {
    const {sortField, sortOrder, filter, page} = useUsers();
    const fetchURL = useMemo(() => {
        let url;
        if (filter.field) {
            url = new URL(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}/filter`);
        } else {
            url = new URL(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}`);
        }
        const offset = tableConfig.rowsPerList * (page - 1);
        url.searchParams.append("limit", tableConfig.rowsPerList);
        url.searchParams.append("skip", offset);
        if (sortField && sortOrder) {
            url.searchParams.append("sortBy", sortField);
            url.searchParams.append("order", sortOrder);
        }
        if (filter.field && filter.value) {
            url.searchParams.append("key", filter.field);
            url.searchParams.append("value", filter.value);
        }
        return url.toString();
    }, [page, sortField, sortOrder, filter]);
    const { data, loading, error, refetch} = useFetch(fetchURL);

    if (loading) {
        return (
            <div className="table-placeholder">
                <Loader/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="table-placeholder">
                <p>{`Ошибка: ${error.name}`}</p>
            </div>
        );
    }

    return (
        <>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Девичья фамилия</th>
                        <th>Возраст</th>
                        <th>Пол</th>
                        <th>Номер телефона</th>
                        <th>Email</th>
                        <th>Страна</th>
                        <th>Город</th>
                    </tr>
                </thead>
                <tbody className="users-table__body">
                {
                    data?.users.map((user) => {
                        return (<UserRow key={user.id} user={user}/>);
                    })
                }
                </tbody>
            </table>
            <Pagination totalPages={Math.ceil(data?.total / tableConfig.rowsPerList)}/>
        </>
    );
}

export default UsersTable;