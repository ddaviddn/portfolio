import '../../App.css';
import github_logo from "../../assets/SocialIcons/github.svg";
import instagram_logo from "../../assets/SocialIcons/instagram.svg";
import spotify_logo from "../../assets/SocialIcons/spotify.svg";
import medium_logo from "../../assets/SocialIcons/medium.svg";

function SocialIcons() {
    return (<div className="App-icons">
        <p>
            <a href="http://github.com/ddaviddn" target="_blank"><img className="Social-icons-gh" src={github_logo}
                                                                      alt="github"/></a>
            <a href="http://instagram.com/ddaviddn" target="_blank"><img className="Social-icons-ig"
                                                                         src={instagram_logo} alt="instagram"/></a>
            <a href="https://open.spotify.com/user/12124605009?si=81483c820bda4e5a" target="_blank"><img
                className="Social-icons-sp" src={spotify_logo} alt="spotify"/></a>
            <a href="https://medium.com/@ddaviddn109" target="_blank"><img className="Social-icons-md" src={medium_logo}
                                                                           alt="medium"/></a>
        </p>
    </div>)
}

export default SocialIcons;