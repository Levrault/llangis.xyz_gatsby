import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VerticalList from '../commons/verticalList';
import Icon from '../commons/icon';

const TagsList = VerticalList.extend`
margin-top: 8px;
`;

const Tag = styled.li`
  display: flex;
  margin-bottom: 4px;
`;

/**
 * Tag
 * @param {array} items
 */
const Tags = ({ items }) => (
  <TagsList>
    {items.map(({ icon, text }) => (
      <Tag key={`tags-${text}`}>
        <Icon src={icon} alt={`${text} icon`} />
        <span>{text}</span>
      </Tag>
    ))}
  </TagsList>
);

Tags.propTypes = {
  items: PropTypes.array.isRequired
};

export default Tags;
