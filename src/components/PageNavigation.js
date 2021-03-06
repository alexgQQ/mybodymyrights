import './PageNavigation.css';
import { Link } from "react-router-dom";

// TODO: This will work a bit smoother on mobile using bootstrap components

export default function PageNavigation() {
    return (
        <div className="pageNavigation">
            <Link className="pageLink" to="/">home</Link>
            <Link className="pageLink" to="/do_more">do more</Link>
            <Link className="pageLink" to="/donate">donate</Link>
        </div>
    );
}
