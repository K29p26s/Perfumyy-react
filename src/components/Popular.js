import pop1 from "../images/pop1.png"
import pop2 from "../images/pop2.png"
import pop3 from "../images/pop3.jpg"
import pop4 from "../images/pop4.jpg"
import pop5 from "../images/pop5.jpg"
import pop6 from "../images/pop6.jpg"
import pop7 from "../images/pop7.jpg"
import pop8 from "../images/pop8.jpg"



function Popular(){
    return(
    <div className="popular">
    <h1 className="popular__title">Most Popular</h1>
    <p className="popular_subtitle"> Pick the best fit</p>
    <div className="popular__container">

        <div className="course-card">
            <img src={pop1} alt="popimage1"/>
            <h3>Cloud Computing(AWS/Azure)</h3>
            <p>Col steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹499 <del> ₹999</del></p>
        </div>

        <div className="course-card">
            <img src={pop2} alt="popimg2"/>
            <h3>Full stack web development</h3>
            <p>Col steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>₹449 <del> ₹999</del></p>
        </div>

        <div className="course-card">
            <img src={pop3} alt="popimg3"/>
            <h3>Artificial Intelligence & ML</h3>
            <p>Col steele</p>
            <p>5.0 ⭐⭐⭐⭐⭐</p>
            <p> ₹499<del> ₹999</del></p>
        </div>

        <div className="course-card">
            <img src={pop4} alt="popimg4"/>
            <h3>Data science  & Analytics</h3>
            <p>Col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>₹499 <del> ₹999</del></p>
        </div>

        <div className="course-card">
            <img src={pop5} alt="popimg5"/>
            <h3>Quantum Computing</h3>
            <p>Col steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>₹449 <del> ₹999</del></p>
           
        </div>

        <div className="course-card">
            <img src={pop6} alt="popimg6"/>
            <h3> Natural Language Processing</h3>
            <p>Col steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>₹499 <del> ₹999</del></p>
        </div>

        <div className="course-card">
            <img src={pop7} alt="popimg7"/>
            <h3>CyberSecurity-Ethical  Hacking</h3>
            <p>Col steele</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>₹499 <del> ₹999 </del></p>
        </div>

        <div className="course-card">
            <img src={pop8} alt="popimg8"/>
            <h3>DevOps Engineering</h3>
            <p>Col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>₹499 <del> ₹999</del></p>
        </div>


    </div>
</div>
    )

}

export default Popular;