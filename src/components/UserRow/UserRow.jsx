import { useModal } from "../Modal/hooks";
import Modal from "../Modal/Modal";
import UserInfo from "../UserInfo/UserInfo";
import "./UserRow.css";

function UserRow({ user }) {
    const { isOpen, open, data, close } = useModal();

    const handleOpenInfo = () => {
        open(user);
    }

    return (
        <tr className="users-table__row" onClick={handleOpenInfo}>
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.maidenName ? user.maidenName : "-"}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>

            <Modal isOpen={isOpen} onClose={close}>
                {data && <UserInfo user={data}></UserInfo>}
            </Modal>
        </tr>
    );
}

export default UserRow;