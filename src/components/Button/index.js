import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

// Sử dụng classnames để dễ quản lý className
const cx = classNames.bind(styles);

const Button = ({
    children,
    size = 'medium', // small, medium, large
    variant = 'primary', // primary, secondary, outline, text
    onClick,
    className,
    disabled = false,
    ...props
}) => {
    const classes = cx('button', {
        [size]: size,
        [variant]: variant,
        disabled: disabled,
    }, className);

    return (
        <button className={classes} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

// Kiểm tra kiểu dữ liệu và giá trị mặc định
Button.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
