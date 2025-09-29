import Card from './Card';

export default function About() {
  return (
    <div className="m-5">
      <header className="flex justify-center text-3xl">
        <h1>About Me</h1>
      </header>

      <main className="flex items-center flex-col">
        <Card image="https://i.redd.it/7nijxy33rl411.jpg" altText="My Father Gambino">
          My earliest memory was of my father, Gambino, giving me my first sword. You might think
          this odd, but he was the leader of a mercenary group, so I had no choice but to learn to
          live that life, and the sooner, the better.
        </Card>
        <Card image="https://static.tvtropes.org/pmwiki/pub/images/band_of_the_hawk_group_painting.jpg" altText="The Band Of The Hawk">
          After some pretty unfortunate circumstances, I was forced to flee my own group. This is
          when I first started fighting on my own for money. Eventually though, I was found by a
          highly feared mercenary band, known as the Bank of the Hawk.
        </Card>
        <Card image="https://tse3.mm.bing.net/th/id/OIP.lQiN3BXM7Szxi2aqFPNCfQHaJX?rs=1&pid=ImgDetMain&o=7&rm=3" altText="Griffith">
          At first, I kept to myself. I barely knew them, anyway, and it's not like I joined them
          out of the kindness of my heart, but, over time, they grew on me. And, of course, so did
          my friendship with the leader Griffith and my fellow commander Casca.
        </Card>
        <Card image="https://i.pinimg.com/736x/df/70/65/df7065c70fcbc0cee609e38a7224b180--kentaro-miura-berserk-manga.jpg" altText="'Femto'">
          As it turned out, though, Griffith was low filth and betrayed all of us for ultimate
          power. Nearly the entire band was killed that day. At least, what was left of it.
        </Card>
        <Card image="https://i.pinimg.com/originals/42/12/ba/4212ba17d0504fd14e7b3a11cb849255.png" altText="Little Rickert">
          Little Rickert, a field soldier, was left out. Poor kid had no idea what had happened
          until Griffith had already propped himself up as some sort of messiah. Casca wasn't so
          well off either. She completely lost her mind.
        </Card>
        <Card image="https://vignette.wikia.nocookie.net/berserk/images/c/c5/Mozgus_Profil_Manga.png/revision/latest?cb=20190901123157&path-prefix=de" altText="Mozgus, Inquisitor Of The Holy See Cult">
          At first the plan was to just survive as well as we could. We met this blacksmith
          named Godot, and his granddaughter Erica. But when I learned Griffith came back, I felt
          like I needed to get revenge. So I went alone. Unfortunately, Casca wandered off,
          and I was being hunted by this crazy cult group.
        </Card>
        <Card image="https://vignette.wikia.nocookie.net/berserk/images/a/a4/Manga_E328_Moonlight_Boy.png/revision/latest?cb=20170930090455" altText="Griffith Reincarnated As My Kid">
          Eventually I was able to find her again. And I realized my mistake. Then I learned about
          some powerful witch that could supposedly restore her mind, met some fellows along the
          way, and met her. Unfortunately, Griffith, reincarnated as Casca and I's child (it's
          complicated), infiltrated the place, destroyed it, and kidnapped Casca.
        </Card>
        <Card image="https://preview.redd.it/redraw-i-made-of-this-funny-frame-of-guts-from-the-berserk-v0-pbrluq5kyqgc1.jpg?width=1080&format=pjpg&auto=webp&s=7e283af2a0b20f0c418063460d6370407d21b95e" altText="My Live Reaction To My Bank Account">
          It's kind of a blur what happened after, but we won. So now I need money because I'm a bit
          tired of purely living off the land.
        </Card>
      </main>
    </div>
  );
}