import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './DropSort.module.scss';

const cx = classNames.bind(styles);

const DropSort = ({ options, onOptionSelect, initialValue, isWide }) => {
    // Sử dụng initialValue làm giá trị khởi tạo cho selectedOption
    const [selectedOption, setSelectedOption] = useState(initialValue || '');

    const [isOpen, setIsOpen] = useState(false);

    // Logic xử lý click vào dropdown
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Logic xử lý click vào option dropdown
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Cập nhật chữ hiển thị
        setIsOpen(false); // Đóng dropdown sau khi chọn
        if (onOptionSelect) onOptionSelect(option); // Gọi callback khi chọn option
    };

    return (
        <div className={cx('drop-sort')}>
            <div
                className={cx('dropdown-header', {
                    wide: isWide === true, // Chỉ thêm wide khi isWide = true
                    narrow: isWide === false, // Chỉ thêm narrow khi isWide = false
                    superSmall: isWide === undefined || isWide === null, // Chỉ thêm superSmall khi isWide không được truyền
                })}
                onClick={toggleDropdown}
            >
                <span>{selectedOption}</span>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className={cx('dropdown-icon')} />
            </div>

            {isOpen && (
                <ul
                    className={cx('dropdown-list', {
                        wide: isWide === true, // Chỉ thêm wide khi isWide = true
                        narrow: isWide === false, // Chỉ thêm narrow khi isWide = false
                        superSmall: isWide === undefined || isWide === null, // Chỉ thêm superSmall khi isWide không được truyền
                    })}
                >
                    {options.map((option) => (
                        <li
                            key={option}
                            className={cx('dropdown-item', {
                                'dropdown-item-selected': selectedOption === option,
                            })}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropSort;
