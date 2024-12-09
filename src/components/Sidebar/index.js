import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import SBOption from './SBOption/SBOption';
import SBRealEstateLocation from './SBRealEstateLocation/SBRealEstateLocation';
import SBAgentsLocation from './SBAgentsLocation/SBLocation';
import FeaturedListings from '~/components/FeaturedListings/FeaturedListings';
import Ads from '~/components/Ads/Ads';

const cx = classNames.bind(styles);

const sidebarItems = [
    { id: 1, Component: SBOption, title: 'Advanced Search' },
    { id: 2, Component: FeaturedListings, title: 'Featured Listings' },
    { id: 3, Component: SBRealEstateLocation, title: 'Real estate near you' },
    { id: 4, Component: SBAgentsLocation, title: 'Agents near you' },
    { id: 5, Component: Ads, title: 'Advertisements' },
];

function Sidebar() {
    return (
        <div className={cx('sidebar-main')}>
            <div className={cx('sidebar-container')}>
                <div className={cx('sidebar-title')}>
                    <h1>Sidebar</h1>
                </div>
                <ul className={cx('sidebar-list')}>
                    {sidebarItems.map(({id, Component, title}) => {
                        return (
                            <li key={id} Component={Component} title={title}>
                                <h2>{title}</h2>
                                <Component />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
