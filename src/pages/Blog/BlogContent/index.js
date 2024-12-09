import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BlogContent() {
    return (
        <div className={cx('blog-container')}>
            <h1>BlogContent Page</h1>
        </div> 
    );
}

export default BlogContent;
