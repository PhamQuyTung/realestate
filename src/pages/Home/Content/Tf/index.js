import TitleContent from '~/components/Title';
import styles from './Tf.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCity, faHotel, faHouse, faShop, faTreeCity } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ListItemContentTF = [
    {
        id: 1,
        iconClass: 'icon-apartment1',
        to: '/',
        title: 'Apartment',
        description: '234 Property',
    },
    {
        id: 2,
        iconClass: 'icon-villa',
        to: '/',
        title: 'Villa',
        description: '234 Property',
    },
    {
        id: 3,
        iconClass: 'icon-studio',
        to: '/',
        title: 'Studio',
        description: '234 Property',
    },
    {
        id: 4,
        iconClass: 'icon-office1',
        to: '/',
        title: 'Office',
        description: '234 Property',
    },
    {
        id: 5,
        iconClass: 'icon-townhouse',
        to: '/',
        title: 'Townhouse',
        description: '234 Property',
    },
    {
        id: 6,
        iconClass: 'icon-commercial',
        to: '/',
        title: 'Commercial',
        description: '234 Property',
    },
];

function Tf() {
    return (
        <div className={cx('tf-container')}>
            <TitleContent
                title="Try Searching For"
                description="Thousands of luxury home enthusiasts just like you have found their dream home"
                // align='center' mặc định
                className="custom-class"
            />

            <div className={cx('tf-wrapper', 'grid', 'wide')}>
                <div className={cx('tf-box', 'row')}>
                    {ListItemContentTF.map((list) => {
                        return (
                            <div className={cx('col', 'l-2', 'm-4', 'c-12')} key={list.id}>
                                <Link to={list.to} className={cx('tf-link')}>
                                    <i className={cx('icon', list.iconClass)}></i>

                                    <div className={cx('tf-text')}>
                                        <h5>{list.title}</h5>
                                        <p>{list.description}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Tf;
