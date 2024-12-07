import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

function Layout2({ children }) {
    return (
        <div>
            <Header />
            <div className="main-content">
                <div className="sidebar-menu">
                    <Sidebar />
                </div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Layout2;
