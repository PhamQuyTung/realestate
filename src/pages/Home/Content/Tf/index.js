import TitleContent from '~/components/Title';
import styles from './Tf.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ListItemContentTF = [
    {
        icon: <FontAwesomeIcon icon={faBuilding} className={cx('icon-building')} />,
        to: '/',
        title: 'Apartment',
        description: '234 Property',
    },
    {
        icon: <FontAwesomeIcon icon={faBuilding} className={cx('icon-building')} />,
        to: '/',
        title: 'Villa',
        description: '234 Property',
    },
    {
        icon: <FontAwesomeIcon icon={faBuilding} className={cx('icon-building')} />,
        to: '/',
        title: 'Studio',
        description: '234 Property',
    },
    {
        icon: <FontAwesomeIcon icon={faBuilding} className={cx('icon-building')} />,
        to: '/',
        title: 'Office',
        description: '234 Property',
    },
    {
        icon: <FontAwesomeIcon icon={faBuilding} className={cx('icon-building')} />,
        to: '/',
        title: 'Townhouse',
        description: '234 Property',
    },
    {
        icon: <FontAwesomeIcon icon={faBuilding} className={cx('icon-building')} />,
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
                    {ListItemContentTF.map((list, index) => {
                        return (
                            <div className={cx('col', 'l-2', 'm-4', 'c-12')}>
                                <Link to={list.to} key={index} className={cx('tf-link')}>
                                    {list.icon}
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