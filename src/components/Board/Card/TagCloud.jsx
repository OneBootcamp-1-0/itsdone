import React from 'react';
import css from './TagCloud.css';

const TagCloud = props => {

  const { tags } = props;

  const tagItems = Object.keys(tags).map((tagName, i) => {
    return <li className={css.tag_cloud__item} style={{ color: tags[tagName] }} key={i}>{tagName}</li>
  });

  return tagItems.length
    ? <ul className={css.tag_cloud}>
      {tagItems}
    </ul>
    : null
};

export default TagCloud;
