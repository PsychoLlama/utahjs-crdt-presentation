import React from 'react';

import createTheme from 'spectacle/lib/themes/default';
import SET_DELETE from '../assets/set-delete.svg';
import MOAR_CAT from '../assets/moar-cat.jpg';
import LOLWUT from '../assets/lolwut.png';
import 'normalize.css';
import {
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
          <Notes>
            Some look tempting! I'll be talking about a recurring hobby
          </Notes>
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
          <Notes>What are they do?</Notes>
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
          <Text>Clients have radically different states</Text>
          <List>
            <ListItem>Operations arrive out of order</ListItem>
            <ListItem>Retry logic duplicates operations</ListItem>
          </List>
          <Notes>
            Everyone will derive their state using a different set of
            operations.
          </Notes>
        </Slide>

        <Slide>
          <Text>What about consistency??</Text>
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
            <ListItem>Server independent</ListItem>
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
          <Text>
            There are several different types of Conflict-free Replicated Data
            Types (<strong>CRDTs</strong>).
          </Text>
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
          <Text>"Rules for collaborating on shared mutable state"</Text>
          <Text>- me</Text>
          <Text>&nbsp;</Text>
          <Text>Where do these fit in?</Text>
        </Slide>

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
          <Notes>That's a lot of words. What's it look like in practice?</Notes>
        </Slide>

        <Slide>
          <Heading size={3}>Okay, but in practice?</Heading>
          <br />
          <Appear>
            <Code>new Set()</Code>
          </Appear>
          <Notes>Appears: new Set. Union is your merge function.</Notes>
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
          <Notes>I was too lazy to make a slide for associativity</Notes>
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
          <Notes>Add & delete are order-dependent.</Notes>
        </Slide>

        <Slide>
          <Text>So no deletes.</Text>
        </Slide>

        <Slide>
          <Heading size={3}>In practice</Heading>
          <br />
          <Text>
            Starting with the simplest example, the <strong>G-Counter</strong>.
          </Text>
          <Text>(grow-counter)</Text>
        </Slide>

        <Slide>
          <Text>Derive the count by summing all members.</Text>
          <br />
          <CodePane
            source={'set([-1, 3, 2]) # sums to 4'}
            textSize={30}
            theme="light"
            lang="python"
          />
          <Notes>
            You're not storing the count, you're storing state you can derive
            your count from. This has an obvious constraint.
          </Notes>
        </Slide>

        <Slide>
          <Text>Add an ID to every count</Text>
          <br />
          <CodePane
            source={
              "# sums to 4\nset([\n  ('id1', 1),\n  ('id2', 1),\n  ('id3', 2),\n])"
            }
            textSize={30}
            theme="light"
            lang="python"
          />
          <Notes>I'm gonna rephrase this without changing the meaning.</Notes>
        </Slide>

        <Slide>
          <Text>This is equivalent.</Text>
          <br />
          <CodePane
            source={'// sums to 4\n{\n  id1: 1,\n  id2: 1,\n  id3: 2,\n}'}
            textSize={30}
            theme="light"
            lang="js"
          />
          <Notes>Tuples are immutable. This must also be immutable.</Notes>
        </Slide>

        <Slide>
          <Heading size={2}>Demo</Heading>
          <br />
          <Text>crdt.herokuapp.com/counter</Text>
          <Notes>
            We're not gonna build the next facebook with a G-Counter. It can't
            model that much PII.
          </Notes>
        </Slide>

        <Slide>
          <Image src={MOAR_CAT} />
          <Notes>How do we get more data?</Notes>
        </Slide>

        <Slide>
          <Text>There are a lot of different CRDTs.</Text>
          <Notes>You can choose more than 1. You can even nest them.</Notes>
        </Slide>

        <Slide>
          <CodePane
            textSize={30}
            theme="light"
            lang="js"
            source={
              '// G-set with nested G-counters\n{\n  counter1: {\n    id1: 1,\n    id2: -7,\n  },\n  counter2: {\n    id1: 20,\n    id2: 8,\n    id3: -7,\n  },\n}'
            }
          />
          <Notes>
            These are just building blocks, and there are many ways to model the
            same thing.
          </Notes>
        </Slide>

        <Slide>
          <CodePane
            textSize={30}
            theme="light"
            lang="python"
            source={
              "set([\n  ('counter1', 'id1', 3)\n  ('counter1', 'id2', 6)\n  ('counter1', 'id3', 23)\n  ('counter2', 'id1', 10)\n  ('counter2', 'id2', -6)\n])"
            }
          />
          <Notes>
            So long as you can derive a meaningful value from a merge function,
            model it however you like.
          </Notes>
        </Slide>

        <Slide>
          <Text>
            Last Write Wins Element Set (<strong>LWW-E-Set</strong>).
          </Text>
          <Text>&nbsp;</Text>
          <Text>Attach an incrementing number to every operation.</Text>
          <Text>&nbsp;</Text>
          <CodePane
            textSize={30}
            lang="python"
            theme="light"
            source={
              "adds = set([\n  (1, 'hello'), \n  (3, 'world'), \n  (5, 'third update'), \n  (6, 'the 2nd and last values were deleted')\n])\ndeletes = set([2, 4])"
            }
          />
          <Notes>
            Sometimes called a lamport timestamp. Next is about deriving state.
          </Notes>
        </Slide>

        <Slide>
          <CodePane
            textSize={30}
            lang="python"
            theme="light"
            source={
              "adds = set([\n  (1, 'hello'), \n  (3, 'world'), \n  (5, 'third update'), \n  (6, 'final')\n])\ndeletes = set([2, 4])"
            }
          />
          <Text>&nbsp;</Text>
          <Text>The current state is the value with the highest count.</Text>
          <Text>&nbsp;</Text>
          <Text>Obsolete values can safely be discarded.</Text>
        </Slide>

        <Slide>
          <Text>What about conflicts?</Text>
          <Text>&nbsp;</Text>
          <CodePane
            textSize={30}
            lang="python"
            theme="light"
            source={
              "adds = set([\n  (1, 'conflicting'), \n  (1, 'value')\n])\ndeletes = set([1])"
            }
          />
          <Notes>
            Aren't these conflict free? No. They're just handled
            deterministically. All your replicas will still converge.
          </Notes>
        </Slide>

        <Slide>
          <Text>
            Once you have shared mutable values, you can build anything.
          </Text>
          <Text>&nbsp;</Text>
          <CodePane
            textSize={30}
            lang="python"
            theme="light"
            source={
              "# Pseudo-code for an object type.\nG-Set([\n  ('<field-name>', LWW-E-Set)\n])"
            }
          />
          <Notes />
        </Slide>

        {/*
         * Ending
         */}

        <Slide>
          <Heading size={2}>Confession</Heading>
          <Appear>
            <Text>I skipped a ton of stuff</Text>
          </Appear>
          <Notes>
            This scratches the surface, but hopefully communicates that it _can_
            be done, it's _worth_ attempting, and it gives you a place to start
            looking.
          </Notes>
        </Slide>

        <Slide>
          <Heading size={3}>words</Heading>
          <List>
            <ListItem>Read/write permissions</ListItem>
            <ListItem>Metadata compaction</ListItem>
            <ListItem>Vector clocks & causal tracking</ListItem>
            <ListItem>Operation-based CRDTs</ListItem>
            <ListItem>Branching, pointers, & foreign key constraints</ListItem>
          </List>
          <Notes>Thes are some of the things I skipped.</Notes>
        </Slide>

        <Slide>
          <Image src={LOLWUT} height={300} />
          <Notes>
            Any questions? I leave you with a quote that didn't fit anywhere
            else in my presentation.
          </Notes>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Text textColor="primary">
            You may worship C, A, or P. Choose up to two. P smites all
            non-followers at random intervals.
          </Text>
          <Text>&nbsp;</Text>
          <Text textColor="tertiary">
            <em>- Someone on twitter</em>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
