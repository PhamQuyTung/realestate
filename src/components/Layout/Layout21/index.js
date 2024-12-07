import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import SearchTop from '~/components/SearchTop';

function Layout21({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <SearchTop />
                </div>

                <div className="main-content">
                    <div className="content">
                        {children}
                    </div>

                    <div className="sidebar-menu">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout21;
