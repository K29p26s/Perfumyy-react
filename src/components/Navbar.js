function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar__s1">
                <h1 className="navbar__s1__title"> Udemy</h1>

            </div>

            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "rgb(0, 0, 0)" }}></i>

                <input type="text" placeholder="Search for Anything here.."/>
            </div>

            <div className="navbar__s3">

                <p> courses</p>
                <p> My Learning</p>

                <i class="fa-solid fa-cart-shopping" style={{ color: "rgb(0, 0, 0);" }}> </i>
                <i class="fa-solid fa-bell" style={{ color: " rgb(0, 0, 0);" }}> </i>
                <i class="fa-solid fa-user" style={{ color: " rgb(0, 0, 0);" }}> </i>
            </div>
        </div>
    );
}

export default Navbar;


