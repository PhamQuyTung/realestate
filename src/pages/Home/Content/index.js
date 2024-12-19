import { Tf, ListingProperty, Discover, FormLoan } from './exp';
import styles from './Content.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Content() {
    return (
        <>
            <div className="tf-content">
                <Tf />
            </div>

            <div className="listing-content">
                <ListingProperty />
            </div>

            <div className="discover-content">
                <Discover />
            </div>

            <div className="FormLoan-content">
                <FormLoan />
            </div>
        </>
    );
}

export default Content;
