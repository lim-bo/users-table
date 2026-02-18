import "./UserRow.css";

function UserRow({ user }) {
    return (
        <tr className="users-table__row">
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.maidenName ? user.maidenName : "-"}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
        </tr>
    );
}

export default UserRow;