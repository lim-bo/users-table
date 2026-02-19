import "./UserInfo.css";

function UserInfo({ user }) {
    if (!user) return null;

    return (
        <article className="user-info">
            <img className="user-info__avatar" src={user.image} alt="user's avatar"></img>
            <ul className="user-info__list">
                <li className="user-info__list-item">
                    <p>{`${user.firstName} ${user.lastName}`}{user.maidenName ? ` (${user.maidenName})` : ""}</p>
                </li>
                <li className="user-info__list-item">
                    <p>{`Возраст: ${user.age}`}</p>
                </li>
                <li className="user-info__list-item">
                    <p>{`Адрес: ${user.address.country}, ${user.address.state}, ${user.address.city}, ${user.address.address}`}</p>
                </li>
                <li className="user-info__list-item">
                    <p>{`Рост: ${user.height}`}</p>
                </li>
                <li className="user-info__list-item">
                    <p>{`Вес: ${user.weight}`}</p>
                </li>
                <li className="user-info__list-item">
                    <p>{`Телефон: ${user.phone}`}</p>
                </li>
                <li className="user-info__list-item">
                    <p>{`Email: ${user.email}`}</p>
                </li>
            </ul>
        </article>
    );
}

export default UserInfo;