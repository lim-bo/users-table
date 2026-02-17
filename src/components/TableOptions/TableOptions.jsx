import { useUsers } from "../../context/UsersContext";
import "./TableOptions.css";

function TableOptions() {
    const { 
        sortField,
        sortOrder,
        setSortField,
        setSortOrder,
        filter,
        setFilter
    } = useUsers();

    const handleSortFieldChange = (evt) => {
        if (evt.target.value) {
            !sortOrder && setSortOrder("asc");
        } else {
            setSortOrder("");
        }
        setSortField(evt.target.value);
    }

    const handleSortOrderChange = (evt) => {
        if (evt.target.value) {
            !sortField && setSortField("lastName");
        } else {
            setSortField("");
        }
        setSortOrder(evt.target.value);
    }

    const handleFilterFieldChange = (evt) => {
        setFilter(prev => ({
            ...prev,
            field: evt.target.value
        }));
    }

    const handleFilterValueChange = (evt) => {
        if (!filter.field) return;
        setFilter(prev => ({
            ...prev,
            value: evt.target.value
        }));
    }

    return (
        <form className="table-options-form">
            <label htmlFor="sort-field">Сортировка по:</label>
            <select id="sort-field" value={sortField} onChange={handleSortFieldChange}>
                <option value="">Без сортировки</option>
                <option value="lastName">Фамилия</option>
                <option value="firstName">Имя</option>
                <option value="age">Возраст</option>
                <option value="gender">Пол</option>
                <option value="phone">Номер телефона</option>
            </select>
            <label htmlFor="sort-order">Порядок: </label>
            <select id="sort-order" value={sortOrder} onChange={handleSortOrderChange}>
                <option value="">Без сортировки</option>
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
            </select>
            <label htmlFor="filter-field">Фильтрация по:</label>
            <select id="filter-field" value={filter.field} onChange={handleFilterFieldChange}>
                <option value="">Без фильтрации</option>
                <option value="lastName">Фамилия</option>
                <option value="firstName">Имя</option>
                <option value="age">Возраст</option>
                <option value="gender">Пол</option>
                <option value="phone">Номер телефона</option>
            </select>
            <label htmlFor="filter-value">Значение:</label>
            <input id="filter-value" placeholder="Без фильтра..." onChange={handleFilterValueChange}/>
        </form>
    );
}

export default TableOptions;