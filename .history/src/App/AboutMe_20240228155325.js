import '../css/general.css';
import '../css/aboutme.css';

function AboutMe() {
    onst [slideIndex, setSlideIndex] = useState(0);
    var sliderRef = useRef(null);

    var sliderSettings = {
        swipe: false,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setSlideIndex(next)
    };
    
    return (
        <div id='about-me'>
            <h1 id='about-me-header'>About Me</h1>
        </div>
    )
}

export default AboutMe;