import React from 'react';

import PropTypes from 'prop-types';


function Header({ N }) {
    const array = [...Array(N).keys()].map(num => num + 1);
    return (
        <thead>
            <tr>
                {array.map(num => <th key={`header-${num}`}>{num}</th>)}
                <th>Score</th>
            </tr>
        </thead>
    );
}

Header.propTypes = {
    N: PropTypes.number.isRequired,
};

export default Header;
