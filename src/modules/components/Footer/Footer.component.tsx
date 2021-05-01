import React from 'react';

const style = {
    color: 'white',
    backgroundColor: '#9c2d9c',
    padding: '10px 20px',
    fontStyle: 'Roboto',
};
const footer = {
    fontSize: '20px',
};

export const Footer: React.FC = () => {
    return (
        <div style={style}>
            <p style={footer}>
                Copyright
                {' '}
                <i className="far fa-copyright" />
                {' '}
                2021. All Rights Reserved.
            </p>
        </div>
    );
};
