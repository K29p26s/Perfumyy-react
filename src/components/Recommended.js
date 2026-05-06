import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"
import card4 from "../images/card4.jpg"


function Recommended() {
    return (
        <div className="recommended" >

            <h1 className="recommended__title">Recommended for you</h1>
            <p> Pick up the best fit</p>
            <div className="recommended__container">

                <div className="course-card">
                    <img src={card1} alt="coimg1" />
                    <h3>2026 Python data Visualization Masterclass</h3>
                    <p>Col steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>₹499 <del> ₹999</del></p>
                </div>

                <div className="course-card">
                    <img src={card2} alt="coimg2" />
                    <h3>Web development bootcamp 2026</h3>
                    <p>Col steele</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>₹499  <del>₹999</del></p>
                </div>


                <div className="course-card">
                    <img src={card3} alt="coimg3" />
                    <h3>Master UI\UX Designing with Figma</h3>
                    <p>Col steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>₹499 <del>₹999</del></p>
                </div>

                <div className="course-card">
                    <img src={card4} alt="coimg4" />
                    <h3>Basic to Advance programming with EMC</h3>
                    <p>Col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>₹499 <del> ₹999</del></p>
                </div>

            </div>
        </div>
    )
}
export default Recommended;