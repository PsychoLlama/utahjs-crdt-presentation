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
          <Notes>I'll be talking about a recurring hobby</Notes>
        </Slide>

        <Slide>
          <Heading size={3}>CRDTs</Heading>
          <Text>&nbsp;</Text>
        </Slide>

        <Slide>
          <Heading size={3}>CRDTs</Heading>
          <Text>(see-are-dee-tees)</Text>
          <Notes>
            It's a lesser-known field in peer to peer systems. Who's heard of
            CRDTs?
          </Notes>
        </Slide>

        <Slide>
          <Heading size={1}>Context</Heading>
          <Text>need moar</Text>
          <Notes>Let's build the hype.</Notes>
        </Slide>

        {/*
         * Why CRDTs are cool.
         */}

        <Slide>
          <Text>Rules for collaborating on shared state</Text>
          <Text>&nbsp;</Text>
          <Text>Servers optional</Text>
          <Notes>They don't need coordination or a centralized server.</Notes>
        </Slide>

        <Slide>
          <Heading size={2}>Guarantee</Heading>
          <Text>
            After all the mutations propagate, all replicas are guaranteed to be
            identical.
          </Text>
          <Notes>Strong Eventual Consistency</Notes>
        </Slide>

        <Slide>
          <Heading size={4}>Advantages</Heading>
          <List>
            <ListItem>Offline friendly</ListItem>
            <ListItem>Blazingly fast</ListItem>
            <ListItem>Real-time optimized</ListItem>
          </List>
          <Notes>
            Everything's an optimistic update. Streams of updates can easily be
            turned into live user interfaces.
          </Notes>
        </Slide>

        {/*
         * CRDT implementation details
         */}

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
