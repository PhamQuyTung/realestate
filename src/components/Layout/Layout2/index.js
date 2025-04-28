import Header from '~/components/Header';
import Footer from '../../Footer';
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
            <Footer />
        </div>
    );
}

export default Layout2;
