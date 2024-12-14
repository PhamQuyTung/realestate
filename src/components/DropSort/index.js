import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './DropSort.module.scss';

const cx = classNames.bind(styles);

const DropSort = ({ options, onOptionSelect, initialValue }) => {
    // Sử dụng initialValue làm giá trị khởi tạo cho selectedOption
    const [selectedOption, setSelectedOption] = useState(initialValue || '');

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onOptionSelect) onOptionSelect(option); // Gọi callback khi chọn option
    };

    const handleSelectOption1 = (selected) => {
        console.log('Selected from Box 1:', selected);
    };

    const handleSelectOption2 = (selected) => {
        console.log('Selected from Box 2:', selected);
    };

    return (
        <div className={cx('drop-sort')}>
            <div className={cx('dropdown-header')} onClick={toggleDropdown}>
                <span>{selectedOption}</span>
                <FontAwesomeIcon
                    icon={isOpen ? faAngleUp : faAngleDown}
                    className={cx('dropdown-icon')}
                />
            </div>

            {isOpen && (
                <ul className={cx('dropdown-list')}>
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
