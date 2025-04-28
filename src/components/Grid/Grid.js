import React from 'react';
import styles from './Grid.module.scss'; // Import CSS Module

const Grid = ({ children, wide, className }) => {
    return (
        <div
            className={`${styles.grid} ${wide ? styles.wide : ''} ${className || ''}`}
        >
            {children}
        </div>
    );
};

const Row = ({ children, noGutters, className }) => {
    return (
        <div
            className={`${styles.row} ${noGutters ? styles['row-no-gutters'] : ''} ${
                className || ''
            }`}
        >
            {children}
        </div>
    );
};

const Col = ({ children, sizeL, sizeM, sizeC, offset, className }) => {
    const colLClass = sizeL ? styles[`l-${sizeL}`] : '';
    const colMClass = sizeM ? styles[`m-${sizeM}`] : '';
    const colCClass = sizeC ? styles[`c-${sizeC}`] : '';
    const offsetClass = offset ? styles[`c-o-${offset}`] : '';
    return (
        <div className={`${styles.col} ${colLClass} ${colMClass} ${colCClass} ${offsetClass} ${className || ''}`}>
            {children}
        </div>
    );
};

export { Grid, Row, Col };
