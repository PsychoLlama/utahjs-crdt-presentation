import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';

import SYNCING_DATABASES from '../assets/syncing-databases.png';
import createTheme from 'spectacle/lib/themes/default';
import SLEEPING_CAT from '../assets/sleeping-cat.jpg';
import GOOGLE_WAVE from '../assets/google-wave.gif';
import GRUMPY_CAT from '../assets/grumpy-cat.jpg';
import RAISED_PAW from '../assets/raised-paw.jpg';
import SET_DELETE from '../assets/set-delete.svg';
import DATABASES from '../assets/databases.png';
import MOAR_CAT from '../assets/moar-cat.jpg';
import JOIN_ME from '../assets/join-me.jpg';
import LOLWUT from '../assets/lolwut.png';
import SourceCode from './source-code';
import 'normalize.css';
import {
  Appear,
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
            Safely Syncing Real-Time Data Stuff
          </Heading>
          <Notes>
            Welcome! I usually attend. Sean convinced me to present. Real time
            data is a broad category. What exactly am I talking about?
          </Notes>
        </Slide>

        <Slide>
          <Heading size={5}>A "real-time" app</Heading>
          <Text>
            A category of apps that maintain local state, listen for changes
            over the network, and incrementally update to reflect the most
            recent state.
          </Text>
        </Slide>

        <Slide>
          <Heading size={5}>Some examples</Heading>
          <Notes>How I'm describing it. Google Docs, Cloud 9</Notes>
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
          <Heading size={6}>
            <span style={{ fontFamily: 'Comic Sans MS' }}>
              Safely Syncing Real-Time Data
            </span>
          </Heading>
          <Notes>I did say "safely", that implies it's dangerous. Why?</Notes>
        </Slide>

        <Slide>
          <Heading size={5}>What makes sync dangerous?</Heading>
          <Notes>Appear: let's talk about databases.</Notes>
          <br />
          <Appear>
            <Text>Let's talk about databases.</Text>
          </Appear>
        </Slide>

        <Slide>
          <Notes>
            A common practice for large apps is to replicate their main database
            into several other servers.
          </Notes>
          <Image src={DATABASES} />
        </Slide>

        <Slide>
          <Notes>
            They all maintain a consistent state between themselves.
          </Notes>
          <Image src={SYNCING_DATABASES} />
        </Slide>

        <Slide>
          <Heading size={4}>Thar be problems</Heading>
          <Notes>That's very difficult.</Notes>
        </Slide>

        <Slide>
          <Notes>Reconciling differences and trying to get back in sync.</Notes>
          <List>
            <ListItem>Out of order updates</ListItem>
            <ListItem>Duplicates</ListItem>
            <ListItem>Concurrent writes</ListItem>
            <ListItem>Conflicts</ListItem>
            <ListItem>Divergence</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>
            {FIRE} divergence {FIRE}
          </Heading>
          <Notes>
            When two or more databases fall out of sync. It's very hard to get
            them back in agreement, and can risk data loss. There are many
            research papers about the topic.
          </Notes>
          <Text>Two or more databases disagree on application state.</Text>
          <br />
          <Text>their paths have forked.</Text>
        </Slide>

        <Slide>
          <Heading size={4}>Why do we care?</Heading>
          <Notes>This is a JavaScript meetup.</Notes>
          <Appear>
            <Text>
              Because real-time data sync is essentially the same problem.
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Notes>That's your app state.</Notes>
          <Text>Every browser instance maintains its own "database".</Text>
        </Slide>

        <Slide>
          <Notes>
            Sounding familiar? That network is nothing special. If anything,
            it's worse!
          </Notes>
          <Text>You synchronize state using messages over a network.</Text>
        </Slide>

        <Slide>
          <Notes>
            That network experiences exactly the same problems as those
            databases.
          </Notes>
          <List>
            <ListItem>Out of order updates</ListItem>
            <ListItem>Duplicates</ListItem>
            <ListItem>Concurrent writes</ListItem>
            <ListItem>Conflicts</ListItem>
            <ListItem>Divergence</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Divergence?</Heading>
          <Notes>
            We are not immune from divergence. Ever heard someone say "just
            refresh the page"?
          </Notes>
        </Slide>

        <Slide>
          <Heading size={2}>Conclusion:</Heading>
          <Notes>Which naturally makes it impossible.</Notes>
          <Appear>
            <Text>
              Real-time sync is dangerous because it's a{' '}
              <strong>distributed systems problem</strong>.
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={5}>Surely someone's solved it, right?</Heading>
          <Notes>But databases work! Hasn't someone solved it yet? No.</Notes>
        </Slide>

        <Slide>
          <Heading size={4}>Write locking</Heading>
          <Notes>
            It all boils down to write locking. Try doing that in a browser.
          </Notes>
        </Slide>

        <Slide>
          <Heading size={4}>That's what servers are for.</Heading>
          <Text>They handle all the write locks.</Text>
        </Slide>

        <Slide>
          <Notes>That means our server is the bottleneck</Notes>
          <Text>But that's not always possible.</Text>
        </Slide>

        <Slide>
          <Notes>Latency sensitive</Notes>
          <List>
            <ListItem>Multiplayer games</ListItem>
            <ListItem>Collaborative text editing</ListItem>
          </List>
        </Slide>

        <Slide>
          <Notes>
            I'm not saying this is a common pain point. I'm saying it's worth
            seeing how they solved it.
          </Notes>
          <Text>
            Imagine waiting for a round-trip request on every keystroke!
          </Text>
        </Slide>

        <Slide>
          <Heading size={4}>
            How do <em>we</em> solve it?
          </Heading>
          <Notes>People have tried. It's an interesting history.</Notes>
        </Slide>

        <Slide>
          <Heading size={5}>People have tried</Heading>
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
          <Notes>"Gee, you're really selling this."</Notes>
          <Image src={GRUMPY_CAT} />
        </Slide>

        <Slide>
          <Heading size={5}>A challenger appears</Heading>
          <Notes>
            In 2011, a group of researchers looked on in disgust. They were
            horrified with what we'd done, so they sat back and formalized
            possibly the most ambitious CAP theorem tradeoff the world had ever
            seen. Appear: "CDRTs".
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
          <Heading size={2}>So optimistic</Heading>
          <Notes>
            When I say updates, I'm talking about optimistic updates.
          </Notes>
          <Text>No servers necessary.</Text>
        </Slide>

        <Slide>
          <Heading size={4}>Advantages</Heading>
          <Notes>
            Most of these are possible because you no longer have to wait on a
            server to validate your change.
          </Notes>
          <List>
            <ListItem>Great for real-time data</ListItem>
            <ListItem>Offline friendly</ListItem>
            <ListItem>Blazingly fast</ListItem>
            <ListItem>Peer to peer</ListItem>
          </List>
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
          <Heading size={6}>But there is a downside...</Heading>
          <Notes>
            Haha lol no downside CRDTs are perfect and they solve everything
          </Notes>
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
          <SourceCode>{['ourState = merge(ourState, theirState)']}</SourceCode>
        </Slide>

        <Slide>
          <Heading size={3}>State-based</Heading>
          <Notes>
            It's pretty heavy, but easily optimized if you're just exchanging
            patches (diffs). This is equivalent and easier to reason about.
          </Notes>
          <Text>
            Convergent Replicated Data Type (<strong>CvRDT</strong>)
          </Text>
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
          <Text>So how do we implement those properties?</Text>
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
              'merge(merge(state1, state2), state3)',
              'merge(state1, merge(state2, state3))',
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
          <Heading size={2}>Show me the code!</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Ready?</Heading>
        </Slide>

        <Slide>
          <Notes>
            There it is. Thank you for coming to my TED talk. Appears: union.
          </Notes>
          <Text>
            <Code>new Set()</Code>
          </Text>
          <Appear>
            <div>
              <br />
              <Text>Technically we only care about the "union" operation.</Text>
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
          <Notes>Why is set union a CRDT?</Notes>
        </Slide>

        <Slide>
          <Text>Because it implements all the properties.</Text>
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
          <Notes>And one of the most well-researched, too.</Notes>
          <Text>So yeah, it's a CRDT.</Text>
        </Slide>

        <Slide>
          <Heading size={3}>The catch?</Heading>
          <Appear>
            <Text>
              You can <strong>never</strong> delete.
            </Text>
          </Appear>
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
          <Heading size={3}>Grow-only set</Heading>
          <Text>It's the base of almost every other CRDT</Text>
          <Notes>
            This is pretty foundational. Before I move on, break for questions.
          </Notes>
        </Slide>

        <Slide>
          <Image src={LOLWUT} height={300} />
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

        <Slide bgColor="secondary">
          <SourceCode>{['// Sums to 6', 'new Set([-2, 3, 5])']}</SourceCode>
          <Notes>
            This has an obvious constraint. You can't add the same number twice.
          </Notes>
        </Slide>

        <Slide>
          <Notes>
            Normally this is done with tuples. JavaScript doesn't have tuples.
            Worth noting there's an implicit step. This set isn't very useful to
            your app. It only cares about the number.
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
        </Slide>

        <Slide>
          <Text>
            There's a subtle distinction between CRDT state and app state.
          </Text>
          <br />
          <SourceCode>
            {[
              'onUpdate(function(update) {',
              '  crdtState = merge(crdtState, update)',
              '  appState = derive(crdtState)',
              '})',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Image src={MOAR_CAT} />
          <Notes>
            We're not gonna build the next facebook with a G-Counter. It can't
            model that much PII.
          </Notes>
        </Slide>

        <Slide>
          <Text>There are a lot of different CRDTs.</Text>
          <Text>Even better, you can compose them.</Text>
        </Slide>

        <Slide>
          <Heading size={3}>2-Phase Set</Heading>
          <Notes>
            Set union is incapable of modeling deletion. Good. Deletion is
            non-commutative.
          </Notes>
          <Text>Finally, a way to delete things.</Text>
        </Slide>

        <Slide>
          <Text>Two Grow-only Sets. One for adding, one for removing.</Text>
        </Slide>

        <Slide>
          <Notes>Pretty self-explanatory.</Notes>
          <Text>
            New items go in "additions". Deleted items are added to "deletions".
          </Text>
          <br />
          <SourceCode>
            {['{', '  additions: new Set(),', '  deletions: new Set(),', '}']}
          </SourceCode>
        </Slide>

        <Slide>
          <Notes>Pretty self-explanatory.</Notes>
          <Text>
            When you derive state, hide any items that exist in the "deletions"
            set.
          </Text>
          <br />
          <SourceCode>
            {[
              '// The derived set should be {1, 3, 5}',
              '// because "2" and "4" are ignored.',
              '{',
              '  additions: new Set([1, 2, 3, 4, 5]),',
              '  deletions: new Set([2, 4]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Notes>It's a pretty common pattern in distributed systems.</Notes>
          <Text>That's called "tombstoning".</Text>
        </Slide>

        <Slide>
          <Text>Caveat: things can only be added and deleted once.</Text>
          <br />
          <SourceCode>
            {[
              '// The derived set should be {1, 3, 5}',
              '// because "2" and "4" are ignored.',
              '{',
              '  additions: new Set([1, 2, 3, 4, 5]),',
              '  deletions: new Set([2, 4]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Text>
            Next up: The Observed-Remove Set (<strong>OR-Set</strong>).
          </Text>
          <br />
          <Text>Add and remove, more than once.</Text>
        </Slide>

        <Slide>
          <Notes>Mixes some ideas from the G-Counter with the 2P-Set.</Notes>
          <Text>
            Each time you add, use an ID. Only ignore the value when all IDs
            exist in the deletions set.
          </Text>
          <br />
          <SourceCode>
            {[
              '{ // 2 out of the 3 were deleted.',
              `  deletions: new Set(['id1', 'id2']),`,
              '  additions: new Set([',
              `    'id1:"first"',`,
              `    'id2:"second"',`,
              `    'id3:"third"',`,
              '  ]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Text>
            Unlike the <strong>2P-Set</strong>, items can be added and removed
            more than once.
          </Text>
        </Slide>

        <Slide>
          <Notes>AKA, a variable.</Notes>
          <Text>
            Next up: The Last Write Wins Element Set (<strong>LWW-E-Set</strong>
            ).
          </Text>
          <br />
          <Text>It tracks a single value over time.</Text>
        </Slide>

        <Slide>
          <Text>
            To derive the current state, get the value with the highest version.
            The rest can be ignored.
          </Text>
          <Text>&nbsp;</Text>
          <SourceCode>
            {[
              '{',
              '  deletions: new Set([]),',
              '  additions: new Set([',
              '    \'1:"first value"\',',
              '    \'2:"second value"\',',
              '    \'3:"third value"\', // latest',
              '  ]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Text>
            If the highest value is in the deletions set, then it's considered
            "deleted".
          </Text>
          <Text>&nbsp;</Text>
          <SourceCode>
            {[
              '{',
              '  deletions: new Set([2, 4]),',
              '  additions: new Set([',
              '    \'1:"first value"\',',
              '    \'3:"third value"\',',
              '  ]),',
              '}',
            ]}
          </SourceCode>
          <Notes>
            Explain what happened in this example, and how to add a new value.
          </Notes>
        </Slide>

        <Slide>
          <Heading size={4}>A note on conflicts</Heading>
          <Notes>
            Aren't these conflict free? No. They're just handled
            deterministically. All your replicas will still converge.
          </Notes>
          <Text>And how to handle them.</Text>
          <br />
          <SourceCode>
            {[
              '{',
              '  deletions: new Set([]),',
              '  additions: new Set([',
              '    \'1:"iPhone"\',',
              '    \'1:"Android"\',',
              '  ]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <SourceCode>
            {[
              'if (string1 > string2) {',
              '  return string1',
              '} else {',
              '  return string2',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Heading size={4}>More notes on conflicts</Heading>
          <Notes>
            Which do you choose? In these instances, have the winning collection
            hard-coded (e.g. writes always win over deletions).
          </Notes>
          <br />
          <SourceCode>
            {[
              '{',
              '  deletions: new Set([1]),',
              '  additions: new Set([',
              '    \'1:"Some rando value"\',',
              '  ]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Heading size={4}>Garbage collection</Heading>
          <Notes>Little easier on the disk footprint.</Notes>
          <br />
          <Text>
            Unlike the <strong>OR-Set</strong>, obsolete versions can be
            discarded.
          </Text>
        </Slide>

        <Slide>
          <Notes>This is one of my favorites, simply for its elegance.</Notes>
          <Text>
            Max-Change Set (<strong>MC-Set</strong>) for maximum clever.
          </Text>
          <br />
          <Text>Do the same thing, but better.</Text>
        </Slide>

        <Slide>
          <Text>
            The highest number denotes the current value. Even numbers were
            deleted.
          </Text>
          <br />
          <SourceCode>
            {[
              '// Derives to "latest value".',
              'new Set([',
              `  '1:"added"',`,
              `  '2',`,
              `  '3:"added again"',`,
              `  '5:"latest value"',`,
              '])',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Heading size={4}>Many ways</Heading>
          <Notes>And there are tradeoffs to all of them.</Notes>
          <Text>
            As with most programming, the same problem can be solved many
            different ways.
          </Text>
        </Slide>

        <Slide>
          <Notes>I've covered quite a bit. Are there questions?</Notes>
          <Image src={RAISED_PAW} />
        </Slide>

        {/*
         * Rando topics
         */}
        <Slide>
          <Heading size={4}>JSON interop</Heading>
          <Notes>Stretch goal.</Notes>
          <Text>Naturally sets aren't part of JSON.</Text>
        </Slide>

        <Slide>
          <Heading size={4}>LWW-E-Set in JSON</Heading>
          <Notes>
            Any ideas how we could make this JSON-friendly? (Array?)
          </Notes>
          <br />
          <SourceCode>
            {[
              '{',
              '  deletions: new Set([]),',
              '  additions: new Set([',
              '    \'1:"first value"\',',
              '    \'2:"second value"\',',
              '    \'3:"third value"\', // latest',
              '  ]),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Heading size={4}>LWW-E-Set in JSON</Heading>
          <Notes>Objects make good deduplicators.</Notes>
          <br />
          <SourceCode>
            {[
              '{',
              '  deletions: {},',
              '  additions: {',
              `    '1:"first value"': true,`,
              `    '2:"second value"': true,`,
              `    '3:"third value"': true, // latest`,
              '  }',
              '}',
            ]}
          </SourceCode>
        </Slide>

        <Slide>
          <Text>Easily rehydrated.</Text>
          <Notes>Take all the keys and plug 'em into a new set.</Notes>
          <br />
          <SourceCode>
            {[
              '{',
              '  deletions: new Set(Object.keys(update.deletions)),',
              '  additions: new Set(Object.keys(update.additions)),',
              '}',
            ]}
          </SourceCode>
        </Slide>

        {/*
         * Ending
         */}

        <Slide>
          <Heading size={2}>That's it!</Heading>
        </Slide>

        {/*
        <Slide>
          <Heading size={3}>Things I skipped</Heading>
          <Text>
            <small>
              <em>Well, some of them.</em>
            </small>
          </Text>
          <List>
            <ListItem>Operation-based CRDTs</ListItem>
            <ListItem>Composing into collections</ListItem>
            <ListItem>Metadata compaction</ListItem>
            <ListItem>Branching, pointers, & foreign key constraints</ListItem>
          </List>
          <Notes>
            This scratches the surface, but hopefully communicates that it _can_
            be done, it's _worth_ attempting, and it gives you a place to start
            looking.
          </Notes>
        </Slide>
        */}

        <Slide bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Ulterior Motives
          </Heading>
          <Notes>
            I love CRDTs. I want to use them everywhere. Spread the word that
            they exist, they're awesome, and build some demand. I want fabulous
            tooling. Together, we can change the real-time landscape.
          </Notes>
          <br />
          <Appear>
            <Image src={JOIN_ME} />
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
