import { useEffect, useRef } from "react";
import { useUsers } from "../../context/UsersContext";
import "./TableOptions.css";

function TableOptions() {
    const { 
        sortField,
        sortOrder,
        setSortField,
        setSortOrder,
        filter,
        setFilter,
        setPage
    } = useUsers();

    const timerRef = useRef(null);

    const handleSortFieldChange = (evt) => {
        if (evt.target.value) {
            !sortOrder && setSortOrder("asc");
        } else {
            setSortOrder("");
        }
        setSortField(evt.target.value);
        setPage(1);
    }

    const handleSortOrderChange = (evt) => {
        if (evt.target.value) {
            !sortField && setSortField("lastName");
        } else {
            setSortField("");
        }
        setSortOrder(evt.target.value);
        setPage(1);
    }

    const handleFilterFieldChange = (evt) => {
        setFilter(prev => ({
            ...prev,
            field: evt.target.value
        }));
        setPage(1);
    }

    const handleFilterValueChange = (evt) => {
        if (!filter.field) return;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setFilter(prev => ({
                ...prev,
                value: evt.target.value
            }));
            setPage(1);
        }, 300);
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
    }, []);

    return (
        <form className="table-options-form" onSubmit={(evt) => {evt.preventDefault()}}>
            <label htmlFor="sort-field">Сортировка по:</label>
            <select id="sort-field" className="table-options__input" value={sortField} onChange={handleSortFieldChange}>
                <option value="">Без сортировки</option>
                <option value="lastName">Фамилия</option>
                <option value="firstName">Имя</option>
                <option value="age">Возраст</option>
                <option value="gender">Пол</option>
                <option value="phone">Номер телефона</option>
            </select>
            <label htmlFor="sort-order">Порядок: </label>
            <select id="sort-order" className="table-options__input" value={sortOrder} onChange={handleSortOrderChange}>
                <option value="">Без сортировки</option>
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </select>
            <label htmlFor="filter-field">Фильтрация по:</label>
            <select id="filter-field" className="table-options__input" value={filter.field} onChange={handleFilterFieldChange}>
                <option value="">Без фильтрации</option>
                <option value="lastName">Фамилия</option>
                <option value="firstName">Имя</option>
                <option value="age">Возраст</option>
                <option value="gender">Пол</option>
                <option value="phone">Номер телефона</option>
            </select>
            <label htmlFor="filter-value">Значение:</label>
            <input id="filter-value" className="table-options__input" placeholder="Без фильтра..." onChange={handleFilterValueChange}/>
        </form>
    );
}

export default TableOptions;