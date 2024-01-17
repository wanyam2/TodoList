import "./Header.css";
const Header = () => {
    return (
        <div className="Header">
            <h5>{new Date().toDateString()}</h5>
            <h1> To-Do List </h1>
        </div>
    );
};
export default Header;