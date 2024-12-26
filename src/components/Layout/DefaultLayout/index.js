import Header from '../../Header';
import Footer from '../../Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// const App = () => {
//     const aboutLinks = [
//         'Contact',
//         'Why choose us?',
//         'Customer reviews',
//         'Our team',
//         'Careers with realty',
//         'Work with us',
//     ];

//     const popularLinks = ['#Penthouses', '#Villa', '#Smart home', '#Apartments', '#Office', '#Bungalow'];

//     const quickLinks = ['Terms of use', 'Privacy policy', 'Our services', 'Contact support', 'Pricing plans', 'FAQs'];

//     const newsletterText = 'Sign up to receive the latest articles';

//     return (
//         <div>
//             {/* Nội dung trang */}
//             <Footer
//                 aboutLinks={aboutLinks}
//                 popularLinks={popularLinks}
//                 quickLinks={quickLinks}
//                 newsletterText={newsletterText}
//             />
//         </div>
//     );
// };

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
