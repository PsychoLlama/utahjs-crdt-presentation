import React from 'react';

import createTheme from 'spectacle/lib/themes/default';
import SET_DELETE from '../assets/set-delete.svg';
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
  Code,
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
          <Notes>Appears: optimistic updates</Notes>
        </Slide>

        <Slide bgColor="quaternary">
          <Text>WHY WOULD YOU WANT THAT!</Text>
        </Slide>

        <Slide>
          <Heading size={4}>
            {FIRE} divergence {FIRE}
          </Heading>
          <Text>
            Clients have radically different (sometimes invalid) states
          </Text>
          <List>
            <ListItem>Operations arrive out of order</ListItem>
            <ListItem>Retry logic duplicates operations</ListItem>
          </List>
          <Notes>
            You ask 2 replicas you get 2 different answers. Invalid states from
            delete & updating.
          </Notes>
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
            textSize={30}
            theme="light"
            lang="js"
          />
          <Text>&nbsp;</Text>
          <Heading size={6}>State-based merge</Heading>
          <CodePane
            source="yourState = merge(yourState, theirState)"
            textSize={30}
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
          <Heading size={1}>Rules</Heading>
          <Text>
            Making a well-behaved <Code>merge(...)</Code> function
          </Text>
          <Notes>Let's talk about constraints.</Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Commutative
          </Heading>
          <Text textColor="primary">
            <Code textColor="primary">merge(...)</Code> can't depend on order of
            updates
          </Text>
          <br />
          <CodePane
            source={
              'merge(merge(state, update1), update2)\n// is equal to...\nmerge(merge(state, update2), update1)'
            }
            textSize={30}
            lang="js"
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Associative
          </Heading>
          <Text textColor="primary">
            Usually goes hand-in-hand with commutativity
          </Text>
          <Notes>Unless you're building rock-paper-scissors...</Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Idempotent
          </Heading>
          <Text textColor="primary">
            Applying an update more than once should have no effect.
          </Text>
          <br />
          <CodePane
            source={
              'merge(merge(state, update), update)\n// is equal to...\nmerge(state, update)'
            }
            textSize={30}
            lang="js"
          />
          <Notes>Usually duplicates are from the network.</Notes>
        </Slide>

        <Slide>
          <Heading size={3}>All together now</Heading>
          <List>
            <ListItem>Commutative</ListItem>
            <ListItem>Associative</ListItem>
            <ListItem>Idempotent</ListItem>
          </List>
          <Text>Gives you a state-based CRDT.</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Okay, but in practice?</Heading>
          <br />
          <Appear>
            <Code>new Set()</Code>
          </Appear>
          <Notes>It's already in your language</Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            It's commutative
          </Heading>
          <br />
          <CodePane
            source={
              'set.add(1).add(2) // {1, 2}\n// is equal to...\nset.add(2).add(1) // {1, 2}'
            }
            textSize={30}
            lang="js"
          />
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            It's idempotent
          </Heading>
          <br />
          <CodePane
            source={
              'set.add(1).add(1).add(1) // {1}\n// is equal to...\nset.add(1) // {1}'
            }
            textSize={30}
            lang="js"
          />
        </Slide>

        <Slide>
          <Heading size={3}>Grow-only set</Heading>
          <Text>It's the base of almost every other CRDT</Text>
        </Slide>

        <Slide>
          <Heading size={3}>The catch?</Heading>
          <Text>
            You can <strong>never</strong> delete.
          </Text>
        </Slide>

        <Slide>
          <Text>Delete breaks commutativity</Text>
          <br />
          <Image src={SET_DELETE} />
          <Notes>
            The Delete is just reaching you because of a lagging connection
          </Notes>
        </Slide>

        {/*
         * Ending
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
