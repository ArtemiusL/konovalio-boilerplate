import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const MainPage = ({ children, title, classes, item }) => (
  <div>
    <Item>MainPage</Item>
    {item}
  </div>
);

MainPage.propTypes = {
  className: PropTypes.string,
};

const Item = styled.div`
  color: red;
`;

export default MainPage;
