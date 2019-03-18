import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';

import createTheme from 'spectacle/lib/themes/default';
import SLEEPING_CAT from '../assets/sleeping-cat.jpg';
import GOOGLE_WAVE from '../assets/google-wave.gif';
import GRUMPY_CAT from '../assets/grumpy-cat.jpg';
import SET_DELETE from '../assets/set-delete.svg';
import MOAR_CAT from '../assets/moar-cat.jpg';
import LOLWUT from '../assets/lolwut.png';
import SourceCode from './source-code';
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
const TADA = String.fromCharCode(55356, 57225);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={250} transition={['fade']} theme={theme}>
        <Slide bgColor="secondary">
          <Heading size={5} textColor="tertiary">
            Safely Syncing Real-Time Data
          </Heading>
          <Notes>
            Welcome! I usually attend. Sean convinced me to present. This title
            is a little hand-wavy. What do I mean by "real-time" and "safely"?
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5}>A "real-time" app</Heading>
          <Notes>How I'm describing it. Google Docs, Cloud 9</Notes>

          <Text>
            A category of apps that maintain local state, listen for changes
            over the network, and incrementally update to reflect the current
            state.
          </Text>
        </Slide>

        <Slide>
          <Heading size={5}>Some examples</Heading>
          <List>
            <ListItem>Collaborative text editors</ListItem>
            <ListItem>Multiplayer games (turn-based, FPS, RPG)</ListItem>
            <ListItem>Social apps (Instagram, Twitter, Slack)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={5}>Things I'm ignoring</Heading>
          <Notes>
            Dashboards generally sync one-way making them inconveniently boring
            for this presentation. Same for conferencing since video sync is
            mostly handled by the browser.
          </Notes>
          <List>
            <ListItem>Dashboards (climate, stocks, traffic)</ListItem>
            <ListItem>Video conferencing</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={5}>What makes sync dangerous?</Heading>
          <Notes>
            Many reasons. Updates can arrive out of order, you can get
            conflicts, you can get duplicates, and worst of all replicas can
            permanently diverge.
          </Notes>
          <List>
            <ListItem>Duplicates</ListItem>
            <ListItem>Conflicts</ListItem>
            <ListItem>Incorrect ordering</ListItem>
            <ListItem>Diverging replicas</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>
            {FIRE} divergence {FIRE}
          </Heading>
          <Notes>
            This is more a database term, but as we add syncing to the frontend
            space we become susceptible to those same problems.
          </Notes>
          <Text>
            Two or more instances disagree on application state and their paths
            have forked.
          </Text>
        </Slide>

        <Slide>
          <Heading size={5}>Surely someone's solved it, right?</Heading>
          <Notes>These are hard problems.</Notes>
        </Slide>

        <Slide>
          <Heading size={1}>Story Time!</Heading>
        </Slide>

        <Slide>
          <Notes>
            2009, Google Wave. At that point it was one of the most ambitious
            real-time apps ever attempted.
          </Notes>
          <Image src={GOOGLE_WAVE} />
        </Slide>

        <Slide>
          <Notes>
            Many research papers came out of it. But it was brittle and awful.
          </Notes>
          <Text>
            Collaboration was implemented using a pattern called{' '}
            <strong>Operational Transformation</strong>
          </Text>
          <Text>
            (or <strong>OT</strong> for short)
          </Text>
          <Text>&nbsp;</Text>
          <Appear>
            <Text>It was awful.</Text>
          </Appear>
        </Slide>

        <Slide>
          <Notes>
            The architecture was very centralized, so making it scale was a
            painful endeavour.
          </Notes>
          <Text>
            It was an ad-hoc pattern with edge cases, bugs, and gnarly
            scalability issues. It was hard to write, hard to maintain, and hard
            to prove that it worked.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Ugh</Heading>
        </Slide>

        <Slide>
          <Notes>
            You're probably thinking "Gee, this sounds peachy, I can't wait to
            ship it". Thankfully there's an alternative.
          </Notes>
          <Image src={GRUMPY_CAT} />
        </Slide>

        <Slide>
          <Heading size={5}>A challenger appears</Heading>
          <Notes>
            In 2011, a group of researchers were like "nah my dudes that's
            lamesauce hold my beer" and formalized possibly the most ambitious
            CAP theorem tradeoff the world had ever seen. Appear: "CDRTs".
          </Notes>
          <Appear>
            <Text>CRDTs</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Guarantee</Heading>
          <Notes>
            Their systems offer a pretty attractive guarantee called Strong
            Eventual Consistency. No coordination, no consensus, no rollbacks.
          </Notes>
          <Text>
            After all the mutations propagate, all replicas are guaranteed to be
            identical.
          </Text>
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
            Because of that guarantee, it made many hard problems _easy_.
            Everything's an optimistic update. Streams of updates can easily be
            turned into live user interfaces.
          </Notes>
        </Slide>

        <Slide>
          <Heading size={3}>Traction</Heading>
          <Notes>
            Distributed systems, database designs, file sharing, and text
            collaboration (Atom teletype).
          </Notes>
          <Text>CRDTs started being used everywhere.</Text>
        </Slide>

        <Slide>
          <Heading size={6}>But there was a downside...</Heading>
          <Notes>I lied.</Notes>
        </Slide>

        <Slide>
          <Notes>
            Haha lol no downside CRDTs are perfect and they solve everything
          </Notes>
          <Text>I lied.</Text>
        </Slide>

        <Slide>
          <Heading size={1}>&lt;/hype&gt;</Heading>
          <Notes>Enough hype.</Notes>
        </Slide>

        {/*
         * How they work
         */}

        <Slide>
          <Heading size={4}>What exactly is it?</Heading>
        </Slide>

        <Slide>
          <Notes>They mostly define what you can't do.</Notes>
          <Text>
            It's a set of rules for collaborating on shared mutable state.
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Notes>
            Everything but the merge function is up to you. The merge function
            must implement a few mathematical properties.
          </Notes>
          <SourceCode textSize={35}>
            {['ourState = merge(ourState, theirState)']}
          </SourceCode>
        </Slide>

        <Slide>
          <Heading size={4}>Required properties</Heading>
          <Notes>I'll cover those in more depth shortly.</Notes>
          <List>
            <ListItem>Must be commutative</ListItem>
            <ListItem>Must be associative</ListItem>
            <ListItem>Must be idempotent</ListItem>
          </List>
        </Slide>

        <Slide>
          <Notes>
            ...along with the flexibility and peace of mind that comes with.
          </Notes>
          <Text>
            If <Code>merge(...)</Code> implements all constraints, you've got a
            state-based CRDT {TADA}
          </Text>
        </Slide>

        <Slide>
          <Notes>
            You've released zalgo, your systems will surely descend into chaos.
          </Notes>
          <Text>
            If <Code>merge(...)</Code> doesn't fully implement{' '}
            <strong>all</strong> those properties, your system will d̫̤̎̿ͮ̈́͂͜è̺̞̼̤̜̬ͬș̝̳c͟e̸͈ͯ̎̑ͅn̛͓͎̮̞̭̖͋̌͛d̶̻̂̊̍̓ î̥̺̥̣͖͐͒ͯ̍ͥ͜n̷̖̲͉͛ͫ̇͌͊͜t͚̯̯͑ͥ̔̎̾oͮͩͤ̑́̈̑̅͗́͏͍͕
            c̷͓̦͉̱̫͎͍̅̆ͫ́͗̽͐̄̑̋̊͢ͅh̢͛͆̊ͣ̓͆͑ͫ̎̓̾̾͌͐͊ͤ̽͏̺̤̜̤͙̬a̠̳̲̠͇̼̙̪̭͖͙͙̲̲͎͉̬ͦ̆͒̆̃̈́̊͐͢͜ͅơ̸͉͎͙̻̋͑͌ͣͧ͒̂͛̅͘͜͠s̛̯̥͎͓̻̥̞̅ͩ̀̊͟.
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>Commutativity</Heading>
          <Notes>
            If merge(...) ever assumes an update has already arrived, you've
            broken commutativity. In practice, this is the most difficult rule.
          </Notes>
          <Text>
            <Code>merge(...)</Code> can't be affected by the order of updates.
          </Text>
          <Text>&nbsp;</Text>
          <SourceCode>
            {[
              '// These must produce identical states.',
              'merge(merge(state, update1), update2)',
              'merge(merge(state, update2), update1)',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Heading size={3}>Associative</Heading>
          <Text>
            <Code>merge(...)</Code> can't be affected by a change in grouping.
          </Text>
          <Text>&nbsp;</Text>
          <SourceCode>
            {[
              '// These must produce identical states.',
              'merge(merge(state, update1), update2)',
              'merge(state, merge(update1, update2))',
            ]}
          </SourceCode>
          <Notes>
            Usually goes hand-in-hand with commutativity. Unless you're building
            rock-paper-scissors.
          </Notes>
        </Slide>

        <Slide>
          <Heading size={3}>Idempotent</Heading>
          <Text>
            <Code>merge(...)</Code> can't be affected by duplicates.
          </Text>
          <Text>&nbsp;</Text>
          <SourceCode>
            {[
              '// These must produce identical states.',
              'merge(merge(merge(state, update), update), update)',
              'merge(state, update)',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Notes>
            Waaaay too many words. What does it actually look like! Show me
            code!
          </Notes>
          <Image src={SLEEPING_CAT} />
        </Slide>

        <Slide>
          <Heading size={2}>Ready?</Heading>
        </Slide>

        <Slide>
          <Notes>There it is. Thank you for coming to my TED talk.</Notes>
          <Text>
            <Code>new Set()</Code>
          </Text>
          <Appear>
            <div>
              <br />
              <Text>Technically the "union" function of a set.</Text>
              <SourceCode>
                {[
                  'function merge(state, update) {',
                  '  return new Set([...state, ...update])',
                  '}',
                ]}
              </SourceCode>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Why?</Heading>
          <Notes>
            Set union is our merge function. Why do we consider it a CRDT?
          </Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            It's commutative
          </Heading>
          <br />
          <SourceCode>
            {[
              'set.add(1).add(2) // {1, 2}',
              '// is equal to...',
              'set.add(2).add(1) // {1, 2}',
            ]}
          </SourceCode>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            It's associative
          </Heading>
          <br />
          <SourceCode>
            {[
              'new Set([ // {1, 2, 3}',
              '  ...new Set().add(1).add(2), ',
              '  ...new Set().add(3)',
              '])',
              '// is equal to...',
              'new Set([ // {1, 2, 3}',
              '  ...new Set().add(1),',
              '  ...new Set().add(2).add(3)',
              '])',
            ]}
          </SourceCode>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            It's idempotent
          </Heading>
          <Notes>That's kinda the whole point...</Notes>
          <br />
          <SourceCode>
            {[
              'set.add(1).add(1).add(1) // {1}',
              '// is equal to...',
              'set.add(1) // {1}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Notes>
            And one of the most well-researched, too. This is pretty
            foundational. Before I move on, break for questions.
          </Notes>
          <Text>So yeah, it's a CRDT.</Text>
        </Slide>

        <Slide>
          <Heading size={3}>Grow-only set</Heading>
          <Text>It's the base of almost every other CRDT</Text>
        </Slide>

        <Slide>
          <Image src={LOLWUT} height={300} />
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
          <Heading size={5}>Actually doing something useful</Heading>
          <br />
          <Text>
            The simplest example is the <strong>Grow-Counter</strong>.
          </Text>
          <Notes>It counts things.</Notes>
        </Slide>

        <Slide>
          <Text>All members of the set are numbers.</Text>
          <br />
          <Text>To derive the current count, sum everything together.</Text>
        </Slide>

        <Slide>
          <SourceCode>{['// Sums to 6', 'new Set([-2, 3, 5])']}</SourceCode>
          <Notes>
            This has an obvious constraint. You can't add the same number twice.
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            Normally this is done with tuples. JavaScript doesn't have tuples.
          </Notes>
          <Text>
            Allow duplicates by adding an ID to every number, separated by a
            colon.
          </Text>
          <br />
          <SourceCode>
            {[
              '// Sums to 9',
              'new Set([',
              "  'a:2',",
              "  'b:2',",
              "  'c:5',",
              '])',
            ]}
          </SourceCode>
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
            theme="external"
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
            theme="external"
            lang="python"
            source={
              "set([\n  ('counter1', 'id1', 3),\n  ('counter1', 'id2', 6),\n  ('counter1', 'id3', 23),\n  ('counter2', 'id1', 10),\n  ('counter2', 'id2', -6),\n])"
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
          <CodePane
            textSize={30}
            lang="python"
            theme="external"
            source={
              "adds = set([\n  (1, 'hello'), \n  (3, 'world'), \n  (5, 'third update'), \n  (6, 'the 2nd and 4th values were deleted'),\n])\ndeletes = set([2, 4])"
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
            theme="external"
            source={
              "adds = set([\n  (1, 'hello'), \n  (3, 'world'), \n  (5, 'third update'), \n  (6, 'final'),\n])\ndeletes = set([2, 4])"
            }
          />
          <Text>&nbsp;</Text>
          <Text>
            The current state is the value with the largest version number.
          </Text>
          <Text>&nbsp;</Text>
          <Text>Obsolete values can safely be discarded.</Text>
        </Slide>

        <Slide>
          <Text>What about conflicts?</Text>
          <Text>&nbsp;</Text>
          <CodePane
            textSize={30}
            lang="python"
            theme="external"
            source={
              "adds = set([\n  (1, 'conflicting'), \n  (1, 'value'),\n])\ndeletes = set([1])"
            }
          />
          <Notes>
            Aren't these conflict free? No. They're just handled
            deterministically. All your replicas will still converge.
          </Notes>
        </Slide>

        <Slide>
          <Text>Detour</Text>
          <Notes>Talk about the reasoning of conflicts.</Notes>
        </Slide>

        <Slide>
          <Text>What about conflicts?</Text>
          <Text>&nbsp;</Text>
          <CodePane
            textSize={30}
            lang="python"
            theme="external"
            source={
              "adds = set([\n  (1, 'conflicting'), \n  (1, 'value'),\n])\ndeletes = set([1])"
            }
          />
          <Notes>
            Aren't these conflict free? No. They're just handled
            deterministically. All your replicas will still converge.
          </Notes>
        </Slide>

        <Slide>
          <Text>And that's everything about the LWW-E-Set.</Text>
        </Slide>

        <Slide>
          <Text>
            Once you have shared mutable values, you can build anything.
          </Text>
          <Text>&nbsp;</Text>
          <CodePane
            textSize={30}
            lang="python"
            theme="external"
            source={
              "# Pseudo-code for an object type.\nG-Set([\n  ('<field-name>', LWW-E-Set)\n])"
            }
          />
        </Slide>

        {/*
         * Ending
         */}

        <Slide>
          <Heading size={3}>Things I skipped</Heading>
          <Text>
            <small>
              <em>Well, some of them.</em>
            </small>
          </Text>
          <List>
            <ListItem>Read/write permissions</ListItem>
            <ListItem>Metadata compaction</ListItem>
            <ListItem>Vector clocks & causal tracking</ListItem>
            <ListItem>Operation-based CRDTs</ListItem>
            <ListItem>Branching, pointers, & foreign key constraints</ListItem>
          </List>
          <Notes>
            This scratches the surface, but hopefully communicates that it _can_
            be done, it's _worth_ attempting, and it gives you a place to start
            looking.
          </Notes>
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
