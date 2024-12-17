import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TitleContent({ title, description, align = 'center', paddingTop = 104, className }) {
    return (
        <div className={cx('tf-title', {
            [`align-${align}`]: align,
            paddingTop: paddingTop,
            className,
        })}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default TitleContent;
