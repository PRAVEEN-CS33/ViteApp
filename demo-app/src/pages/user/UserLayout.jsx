import React from "react";
import PropTypes from 'prop-types'
function UserLayout({children}) {
    return (  
        <div className="user-container">
            <header>
                {/* nav bar */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* footer */}
            </footer>
        </div>
    );
}
UserLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default UserLayout;