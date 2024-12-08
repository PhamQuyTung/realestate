import styles from './PropertyContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PropertyContent() {
    return (
        <div className={cx('property-main')}>
            <h1>PropertyContent Page</h1>
        </div> // This is a functional component in React. It returns JSX, a JavaScript syntax extension used to create HTML in JavaScript.
    );
}

export default PropertyContent;
