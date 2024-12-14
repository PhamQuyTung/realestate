import React from 'react';
import styles from './SearchForm.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

// import các ảnh icon từ fontawesome
import { faAngleUp, faAngleDown, faSliders, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function SearchForm() {
    const SelectOptionBox1 = [
        'California',
        'Texas',
        'Florida',
        'New York',
        'Illinois',
        'Washington',
        'Pennsylvania',
        'Ohio',
        'Georgia',
        'North Carolina',
    ];

    // ----------------------------------------------------------------
    // Logic xử lý input number
    const [bedroom, setBedroom] = useState(0);
    const [price, setPrice] = useState([100, 500000]);
    const [size, setSize] = useState([0, 1000]);

    //Logic xử lý dropdown
    const [isOpen, setIsOpen] = useState(false); //set isOpen flag to true when opening the dialog box
    const [selectedOption, setSelectedOption] = useState('Select Option'); //set selectedOption flag to true when selecting option from the dialog box

    // ----------------------------------------------------------------
    // Logic xử lý input text
    const handlePriceChange = (e, index) => {
        const newPrice = [...price];
        newPrice[index] = Number(e.target.value);
        if (index === 0 && newPrice[0] > newPrice[1]) {
            newPrice[1] = newPrice[0];
        } else if (index === 1 && newPrice[1] < newPrice[0]) {
            newPrice[0] = newPrice[1];
        }
        setPrice(newPrice);
    };

    // Logic xử lý input text
    const handleSizeChange = (e, index) => {
        const newSize = [...size];
        newSize[index] = Number(e.target.value);
        if (index === 0 && newSize[0] > newSize[1]) {
            newSize[1] = newSize[0];
        } else if (index === 1 && newSize[1] < newSize[0]) {
            newSize[0] = newSize[1];
        }
        setSize(newSize);
    };

    // Logic xử lý click vào dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Logic xử lý click vào option dropdown
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Cập nhật chữ hiển thị
        setIsOpen(false); // Đóng dropdown sau khi chọn
    };

    // ----------------------------------------------------------------
    // render jsx
    return (
        <div className={cx('widget-price')}>
            <div className={cx('range-section')}>
                <div className={cx('slider')}>
                    <label>
                        Price range from <span>${price[0]}</span> to <span>${price[1]}</span>
                    </label>
                    <input
                        type="range"
                        min="100"
                        max="500000"
                        step="100"
                        value={price[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                    />
                    <input
                        type="range"
                        min="100"
                        max="500000"
                        step="100"
                        value={price[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                    />
                </div>
                <div className={cx('slider')}>
                    <label>
                        Size range from <span>{size[0]}</span> to <span>{size[1]}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={size[0]}
                        onChange={(e) => handleSizeChange(e, 0)}
                    />
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={size[1]}
                        onChange={(e) => handleSizeChange(e, 1)}
                    />
                </div>
            </div>

            <div className={cx('filter-section')}>
                {/* drop-sort Province/State */}
                <div className={cx('drop-sort')}>
                    <div className={cx('dropdown-header')} onClick={toggleDropdown}>
                        <span>{selectedOption}</span>
                        <FontAwesomeIcon
                            icon={isOpen ? faAngleUp : faAngleDown} // icon size change to fit
                            className={cx('dropdown-icon')}
                        />
                    </div>

                    {/* Logic dropdown  */}
                    {isOpen && (
                        <ul className={cx('dropdown-list')}>
                            {SelectOptionBox1.map((option) => (
                                <li
                                    key={option}
                                    className={cx('dropdown-item', {
                                        'dropdown-item-selected': selectedOption === option, // Highlight khi được chọn
                                    })}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* drop-sort Rooms */}
                <div className={cx('drop-sort')}>
                    <div className={cx('dropdown-header')} onClick={toggleDropdown}>
                        <span>{selectedOption}</span>
                        <FontAwesomeIcon
                            icon={isOpen ? faAngleUp : faAngleDown} // icon size change to fit
                            className={cx('dropdown-icon')}
                        />
                    </div>

                    {/* Logic dropdown  */}
                    {isOpen && (
                        <ul className={cx('dropdown-list')}>
                            {arrSelectOption.map((option) => (
                                <li
                                    key={option}
                                    className={cx('dropdown-item', {
                                        'dropdown-item-selected': selectedOption === option, // Highlight khi được chọn
                                    })}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* drop-sort Bath */}
                <div className={cx('drop-sort')}>
                    <div className={cx('dropdown-header')} onClick={toggleDropdown}>
                        <span>{selectedOption}</span>
                        <FontAwesomeIcon
                            icon={isOpen ? faAngleUp : faAngleDown} // icon size change to fit
                            className={cx('dropdown-icon')}
                        />
                    </div>

                    {/* Logic dropdown  */}
                    {isOpen && (
                        <ul className={cx('dropdown-list')}>
                            {arrSelectOption.map((option) => (
                                <li
                                    key={option}
                                    className={cx('dropdown-item', {
                                        'dropdown-item-selected': selectedOption === option, // Highlight khi được chọn
                                    })}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* drop-sort Beds */}
                <div className={cx('drop-sort')}>
                    <div className={cx('dropdown-header')} onClick={toggleDropdown}>
                        <span>{selectedOption}</span>
                        <FontAwesomeIcon
                            icon={isOpen ? faAngleUp : faAngleDown} // icon size change to fit
                            className={cx('dropdown-icon')}
                        />
                    </div>

                    {/* Logic dropdown  */}
                    {isOpen && (
                        <ul className={cx('dropdown-list')}>
                            {arrSelectOption.map((option) => (
                                <li
                                    key={option}
                                    className={cx('dropdown-item', {
                                        'dropdown-item-selected': selectedOption === option, // Highlight khi được chọn
                                    })}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className={cx('amenities-section')}>
                <p>Amenities:</p>
                <div className={cx('amenities')}>
                    {[
                        'Bed linens',
                        'Carbon alarm',
                        'Check-in lockbox',
                        'Coffee maker',
                        'Dishwasher',
                        'Extra pillows',
                        'Fireplace',
                        'First aid kit',
                        'Hangers',
                        'Iron',
                        'Microwave',
                        'Refrigerator',
                        'Security cameras',
                        'Smoke alarm',
                    ].map((amenity) => (
                        <label key={amenity}>
                            <input type="checkbox" />
                            {amenity}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
