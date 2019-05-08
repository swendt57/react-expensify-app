import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
    <div>
        You broke the Internet!! 404 error - <Link to="/">Back to Dashboard</Link>
    </div>
);

export default NotFoundPage;