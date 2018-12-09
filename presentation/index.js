import React from 'react';

import createTheme from 'spectacle/lib/themes/default';
import LOLWUT from '../assets/lolwut.png';
import 'normalize.css';
import {
  BlockQuote,
  Appear,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Notes,
} from 'spectacle';

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

const FIRE = String.fromCharCode(55357, 56613);

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
          <Text>Rules for collaborating on shared mutable state</Text>
          <Appear>
            <div>
              <Text>&nbsp;</Text>
              <Text>Servers optional</Text>
            </div>
          </Appear>
          <Notes>
            Shared state: postgres. Users collaboratively mutate it with
            PUT/POST/PATCH.
          </Notes>
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="primary">Every client has their own replica</Text>
          <Text textColor="primary">&nbsp;</Text>
          <Appear>
            <Text textColor="primary">All updates are optimistic</Text>
          </Appear>
        </Slide>

        <Slide bgColor="quaternary">
          <Text>WHY WOULD YOU WANT THAT!</Text>
        </Slide>

        <Slide>
          <Heading size={4}>
            {FIRE} divergence {FIRE}
          </Heading>
          <Text>Clients have radically different states</Text>
          <List>
            <ListItem>Operations arrive out of order</ListItem>
            <ListItem>Retry logic duplicates operations</ListItem>
          </List>
          <Notes>You ask 2 replicas you get 2 different answers.</Notes>
        </Slide>

        <Slide>
          <Heading size={2}>Guarantee</Heading>
          <Text>
            After all the mutations propagate, all replicas are guaranteed to be
            identical.
          </Text>
          <Notes>Strong Eventual Consistency. Out of order, duplicated.</Notes>
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

        <Slide>
          <Heading size={1}>&lt;/hype&gt;</Heading>
          <Notes>Now to the implementation.</Notes>
        </Slide>

        <Slide>
          <Heading size={3}>Categories</Heading>
          <List>
            <ListItem>Operation based</ListItem>
            <ListItem>State based</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6}>Operation-based merge</Heading>
          <CodePane
            source="yourState = merge(yourState, operation)"
            textSize={25}
            theme="light"
            lang="js"
          />
          <Text>&nbsp;</Text>
          <Heading size={6}>State-based merge</Heading>
          <CodePane
            source="yourState = merge(yourState, theirState)"
            textSize={25}
            theme="light"
            lang="js"
          />
          <Notes>Set your language. Append a string at this index.</Notes>
        </Slide>

        <Slide>
          <Heading size={3}>Categories</Heading>
          <List>
            <ListItem>Operation based</ListItem>
            <ListItem>State based</ListItem>
            <Appear>
              <ListItem>Delta-state</ListItem>
            </Appear>
          </List>
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
            <Text textColor="primary">
              You may worship C, A, or P. Choose up to two. P smites all
              non-followers at random intervals.
            </Text>
            <Text>&nbsp;</Text>
            <Text textColor="tertiary">
              <em>- Someone on twitter</em>
            </Text>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
