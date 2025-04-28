import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import BigTitle from './BigTitle'
import Content from './Content';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-container')}>
            {/* Big title home page */}
            <BigTitle />

            {/* main content home */}
            <Content />
            
            {/* footer home */}
        </div> 
    )
}

export default Home;
