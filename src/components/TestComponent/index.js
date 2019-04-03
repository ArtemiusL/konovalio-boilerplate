import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const TestComponent = ({ children, title, classes, item }) => (
  <div>
    <Item>TestComponent</Item>
    {item}
  </div>
);

TestComponent.propTypes = {
  className: PropTypes.string,
};

const Item = styled.div`
  color: red;
`;

export default TestComponent;
