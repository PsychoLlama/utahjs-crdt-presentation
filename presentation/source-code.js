/* eslint-disable react/sort-prop-types */
import { CodePane } from 'spectacle';
import PropTypes from 'prop-types';
import React from 'react';

export default class SourceCode extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.arrayOf(PropTypes.string),
      textSize: PropTypes.number,
      lang: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      textSize: 30,
      lang: 'js',
    };
  }

  render() {
    const { lang, textSize, children } = this.props;
    const source = children.join('\n');

    return (
      <CodePane
        textSize={textSize}
        theme="external"
        source={source}
        lang={lang}
      />
    );
  }
}
