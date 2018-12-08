// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Notes,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import LOLWUT from '../assets/lolwut.png';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={250} transition={['fade']} theme={theme}>
        <Slide>
          <em>internal screaming</em>
        </Slide>

        <Slide>
          <Heading size={3}>Other nominations</Heading>

          <List>
            <ListItem>Why Lua is Great</ListItem>
            <ListItem>A basic introduction to Rust</ListItem>
            <ListItem>A thorough analysis of the Taco Bell menu</ListItem>
            <ListItem>
              Why 3rd dimensional tabular databases manifest actual lizard
              people
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>CRDTs</Heading>

          <Text>&nbsp;</Text>

          <Notes>A recurring hobby</Notes>
        </Slide>

        <Slide>
          <Heading size={3}>CRDTs</Heading>

          <Text>(see-are-dee-tees)</Text>

          <Notes>But first, why.</Notes>
        </Slide>

        <Slide>
          <Image src={LOLWUT} height={300} />

          <Notes>Any questions?</Notes>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              You may worship C, A, or P. Choose up to two. P smites all
              non-followers at random intervals.
            </Quote>

            <Cite>Someone on twitter</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
