import { Tf, ListingProperty, Discover, FormLoan, Neighborhoods, Open, Brand } from './exp';
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

            <div className="Neighborhoods-content">
                <Neighborhoods />
            </div>

            <div className="Open-content">
                <Open />
            </div>

            <div className="Brand-content">
                <Brand />
            </div>
        </>
    );
}

export default Content;
