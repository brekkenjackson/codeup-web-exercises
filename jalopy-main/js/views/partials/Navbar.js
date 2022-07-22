import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
        <nav>
            <a class="nav-item nav-link active" href="/" data-link>Home</a>`;

    // everyone can see about
    html +=
        `<a class="nav-item nav-link active" href="/about" data-link>About</a>`;

    // only logged in can see user info and logout
    if(loggedIn) {
        html +=
            `<a class="nav-item nav-link active" href="/users" data-link>User Info</a>
            <a href="/logout" data-link>Logout</a>`;
    } else {
        // if not logged in, can see login and register
        html +=
            `<a class="nav-item nav-link active" href="/login" data-link>Login</a>
        <a class="nav-item nav-link active" href="/register" data-link>Register</a>`;
    }
    html +=
        `<a class="nav-item nav-link active" href="/quotes" data-link>Quotes</a>`
    html +=
        `</nav>`;
    return html;
}