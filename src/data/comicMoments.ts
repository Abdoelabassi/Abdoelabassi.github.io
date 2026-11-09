// Story highlights for comics & manga on the Books page.
// Keyed by the book's content-collection id (its filename in src/content/books).
// Panels are low-resolution excerpts stored in /public/panels, credited to their publishers.

export type Moment = {
  title: string;
  where?: string; // issue / chapter / arc
  text: string;
};

export type Panel = {
  src: string;
  caption: string;
  credit: string; // creators + publisher
  source: string; // where the image was obtained
  kind?: "panel" | "artwork";
};

export type ComicExtras = {
  moments: Moment[];
  panels?: Panel[];
};

const WP = (file: string) => `https://en.wikipedia.org/wiki/File:${file}`;

export const comicExtras: Record<string, ComicExtras> = {
  "v-for-vendetta": {
    moments: [
      { title: "Remember, remember", where: "Book I", text: "V saves Evey from the Fingermen, then blows up the Houses of Parliament on the fifth of November while conducting the explosion like a symphony." },
      { title: "Valerie's letter", where: "Book II", text: "Evey, imprisoned and tortured, finds a letter written on toilet paper by Valerie, a woman jailed for loving another woman. Then she learns who her jailer really was." },
      { title: "Larkhill", where: "Book II", text: "V's past is uncovered: he survived the Larkhill resettlement camp's experiments, and he is killing its former staff one by one." },
      { title: "A Viking funeral", where: "Book III", text: "Mortally wounded, V dies in Evey's arms. She sends his body down the line on a train packed with explosives, then puts on the mask herself." },
    ],
    panels: [
      { src: "/panels/v-for-vendetta-1.webp", caption: "V takes a bow.", credit: "Alan Moore & David Lloyd · © DC Comics", source: WP("V_taking_a_bow.jpg"), kind: "panel" },
      { src: "/panels/v-for-vendetta-2.webp", caption: "Evey Hammond, Book II, Chapter 7.", credit: "Alan Moore & David Lloyd · © DC Comics", source: WP("Evey_Hammond_2.jpg"), kind: "panel" },
    ],
  },
  "secret-invasion": {
    moments: [
      { title: "Elektra is a Skrull", where: "New Avengers #31 (prelude)", text: "Elektra is killed, and her body reverts to a Skrull that no power could detect. After that, every hero is a suspect." },
      { title: "The Savage Land ship", where: "#1", text: "A Skrull ship crashes and out step heroes in their 1970s costumes, each claiming to be the real one." },
      { title: "Who do you trust?", where: "#1–7", text: "Jarvis, Hank Pym and Spider-Woman turn out to be Skrull infiltrators, while Skrull armies hit New York." },
      { title: "The kill shot", where: "#8", text: "Norman Osborn kills the Skrull queen Veranke on camera, and the Wasp's apparent death leaves the heroes broken. It sets up Dark Reign." },
    ],
  },
  "annihilation": {
    moments: [
      { title: "Xandar falls", where: "Prologue", text: "The Annihilation Wave wipes out the Nova Corps. Richard Rider survives as the last Nova and becomes the host of the Xandarian Worldmind." },
      { title: "Drax kills Thanos", where: "#4", text: "Drax finally does what he was made for and tears out Thanos's heart before he can betray the universe again." },
      { title: "Galactus unleashed", where: "#4–5", text: "Annihilus captures Galactus and the Silver Surfer and turns the Power Cosmic into a weapon, until Galactus breaks free." },
      { title: "Nova vs. Annihilus", where: "#6", text: "Richard Rider rips Annihilus's insides out with his bare hands and ends the war." },
    ],
  },
  "52": {
    moments: [
      { title: "A year without the Trinity", where: "Week 1", text: "After Infinite Crisis, Superman, Batman and Wonder Woman are gone, and 52 weeks are told in real time through the B-list heroes." },
      { title: "The Question's last case", where: "Week 38", text: "Vic Sage dies of lung cancer in Nanda Parbat, and Renee Montoya takes up his faceless mask." },
      { title: "World War III", where: "Week 50", text: "Black Adam's grief turns into a massacre of Bialya that the whole DC Universe has to stop." },
      { title: "Fifty-two worlds", where: "Week 52", text: "The truth comes out: the Multiverse is back, as 52 new Earths." },
    ],
  },
  "absolute-batman": {
    moments: [
      { title: "A working-class Bruce", where: "#1", text: "No fortune and no manor. This Bruce Wayne grew up working-class with his mother still alive, shaped by his father's death." },
      { title: "The Party Animals", where: "#1–6", text: "Gotham is overrun by Black Mask's masked gang, and a hulking Batman takes them on with an axe-bladed bat-symbol." },
      { title: "Old friends", where: "Opening arc", text: "Oswald, Waylon, Harvey, Selina and Eddie, Bruce's childhood friends, are recast as allies before they become anything else." },
    ],
  },
  "absolute-martian-manhunter": {
    moments: [
      { title: "Something in John's head", where: "#1", text: "After an attack nearly kills him, FBI agent John Jones starts sharing his mind with an alien presence, the Martian." },
      { title: "Seeing in colour", where: "Opening arc", text: "Javier Rodríguez's psychedelic pages show people as shapes and colours of feeling, so the art itself becomes a way of reading minds." },
    ],
  },
  "absolute-wonder-woman": {
    moments: [
      { title: "Raised in Hell", where: "#1", text: "In this world Diana didn't grow up on Themyscira. She grew up in the Underworld, raised by the witch Circe after the Amazons were cast out." },
      { title: "The Tetracide", where: "#1–3", text: "Diana arrives in Gateway City to fight a monster the military can't touch, armed with sorcery, a battle-scarred lasso and Hell's own arsenal." },
    ],
  },
  "all-star-superman": {
    moments: [
      { title: "A dying sun-god", where: "#1", text: "After saving a mission to the Sun, Superman learns the solar overload is killing him, and sets out to put his affairs in order." },
      { title: "Pa Kent", where: "#6", text: "Young Clark learns that even Superman can't save everyone. He loses his father to a heart attack." },
      { title: "\"You're much stronger than you think\"", where: "#10", text: "In the middle of building a universe, Superman stops to talk a girl named Regan down from a ledge. It's the series in one page." },
      { title: "Engine of the Sun", where: "#12", text: "Superman flies into the Sun to keep it burning. Lex, briefly superpowered, sees the world the way Superman always did." },
    ],
  },
  "animal-man": {
    moments: [
      { title: "The Coyote Gospel", where: "#5", text: "A Wile E. Coyote-like creature who suffers for his world's sins shows that this series will be stranger than any other book on the rack." },
      { title: "Loss", text: "Buddy Baker's family is murdered, and the book turns into grief and revenge." },
      { title: "Meeting the writer", where: "#26", text: "Buddy meets Grant Morrison, his author, and asks him why his family had to die." },
    ],
  },
  "avengers-time-runs-out": {
    moments: [
      { title: "Eight months later", where: "#35", text: "The Avengers and the Illuminati are at war with each other while the incursions keep coming." },
      { title: "The Beyonders", text: "The cosmic hierarchy, the Living Tribunal included, is wiped out by the beings destroying the multiverse." },
      { title: "The last incursion", where: "#44", text: "Earth-616 meets the Ultimate Earth, time runs out, and Secret Wars begins." },
    ],
  },
  "batman-and-robin-year-one": {
    moments: [
      { title: "Learning the job", where: "Opening arc", text: "Dick Grayson's first year as Robin. He is fearless and funny, and he makes rookie mistakes that cost them both." },
      { title: "Is this right?", where: "Throughout", text: "Waid keeps returning to Bruce's doubts about whether a child should be anywhere near Gotham's streets, and Samnee's clean lines keep it light." },
    ],
  },
  "batman-court-of-owls": {
    moments: [
      { title: "Beware the Court of Owls", where: "Batman #1–2", text: "A Gotham nursery rhyme turns out to be true. A secret society has ruled the city for centuries." },
      { title: "The Labyrinth", where: "Batman #5", text: "Drugged and starving in the Owls' maze, Batman loses his grip, and the comic's pages rotate and invert with him." },
      { title: "Night of the Owls", where: "Batman #8–11", text: "The Talons hit Gotham's leaders in a single night. Lincoln March then claims to be Thomas Wayne Jr." },
    ],
    panels: [
      { src: "/panels/batman-court-of-owls-1.webp", caption: "The Court of Owls gathered.", credit: "Scott Snyder & Greg Capullo · © DC Comics", source: WP("The_Court_of_Owls.jpg"), kind: "panel" },
    ],
  },
  "batman-dark-patterns": {
    moments: [
      { title: "Detective first", where: "Opening case", text: "Early-career Batman, told as a procedural: one grim, grisly case at a time, with clues the reader can follow." },
      { title: "Sherman's Gotham", where: "Throughout", text: "Hayden Sherman's jagged layouts make Gotham feel like a crime scene that is still being processed." },
    ],
  },
  "batman-grant-morrison": {
    moments: [
      { title: "Batman and Son", where: "Batman #655–658", text: "Talia introduces Damian, the son Bruce never knew about, raised by assassins." },
      { title: "Batman R.I.P.", where: "Batman #676–681", text: "The Black Glove takes Bruce apart, and he answers with the Zur-En-Arrh backup personality." },
      { title: "The Return of Bruce Wayne", where: "2010", text: "Sent back in time by Darkseid's Omega Sanction, Bruce fights his way forward through history." },
      { title: "Batman, Incorporated", where: "2011–2013", text: "Bruce takes Batman global, and Damian falls to Leviathan." },
    ],
  },
  "batman-hush": {
    moments: [
      { title: "The cut line", where: "#608", text: "Batman's grapple line is cut and he falls into Gotham's underworld. Someone has studied him closely." },
      { title: "Bat vs. Superman", where: "#612", text: "With Poison Ivy controlling Superman, Batman fights him with a kryptonite ring Catwoman holds." },
      { title: "Jason?", where: "#617–618", text: "Batman fights a grown-up Jason Todd and goes too far, until the trick is revealed." },
      { title: "Hush unmasked", where: "#619", text: "Tommy Elliot is behind the bandages, and the Riddler is pulling the strings." },
    ],
  },
  "batman-the-long-halloween-the-last-halloween": {
    moments: [
      { title: "Holiday", where: "The Long Halloween", text: "A killer strikes Falcone's empire once a month on a holiday, and Batman, Gordon and Dent swear to bring him down together." },
      { title: "Two-Face is born", where: "The Long Halloween", text: "Acid is thrown in Harvey Dent's face in court, and Gotham's best hope becomes its tragedy." },
      { title: "The Last Halloween", where: "2024–2025", text: "Jeph Loeb's coda is drawn by an all-star line-up of artists in tribute to Tim Sale." },
    ],
  },
  "batman-three-jokers": {
    moments: [
      { title: "Three crime scenes", where: "Book One", text: "Three Joker killings at the same moment confirm Batman's oldest suspicion: there is more than one Joker." },
      { title: "The Criminal, the Clown, the Comedian", where: "Book Two", text: "Batman, Batgirl and Red Hood face the versions of the Joker that hurt each of them." },
      { title: "Joe Chill", where: "Book Three", text: "The Jokers try to turn the man who killed Bruce's parents into a new Joker." },
    ],
  },
  "batman-white-knight": {
    moments: [
      { title: "The cure", where: "#1", text: "Batman forces pills down the Joker's throat. Jack Napier wakes up sane and declares war on Batman in the courts and the press." },
      { title: "Napier for council", where: "#2–5", text: "Jack makes a convincing case that Batman's war costs Gotham more than it saves." },
      { title: "Two Harleys", where: "#4–8", text: "The original Harley returns to fight the Neo-Joker who replaced her." },
    ],
  },
  "batman-year-one": {
    moments: [
      { title: "Gordon arrives", where: "#404", text: "An honest cop transfers into the most corrupt police department in America." },
      { title: "\"I shall become a bat\"", where: "#404", text: "Bleeding in his study, Bruce watches a bat crash through the window and finds his answer." },
      { title: "The bats come", where: "#405", text: "Trapped in a burning tenement by a SWAT team, Batman calls a swarm of bats to cover his escape." },
      { title: "The bridge", where: "#407", text: "Bruce dives after Gordon's baby son without his mask, and Gordon chooses not to see his face." },
    ],
  },
  "berserk": {
    moments: [
      { title: "The Black Swordsman", where: "Vol. 1", text: "Guts drags the Dragon Slayer through a cursed world, hunting apostles and drawing demons to him every night." },
      { title: "Guts vs. Griffith", where: "Golden Age arc", text: "Guts loses the duel and joins the Band of the Hawk. Years later he wins the duel and leaves, and Griffith never recovers." },
      { title: "The Eclipse", where: "Vol. 12–13", text: "Griffith sacrifices the Band of the Hawk to be reborn as Femto. It is one of the most devastating chapters in manga." },
      { title: "The Berserker Armor", where: "Vol. 27+", text: "The armor lets Guts fight past his limits, and it eats away at his humanity each time he uses it." },
    ],
    panels: [
      { src: "/panels/berserk-1.webp", caption: "Guts in the Berserker Armor.", credit: "Kentaro Miura · © Hakusensha", source: WP("GutsBerserkerarmor.png"), kind: "artwork" },
    ],
  },
  "daredevil-brian-michael-bendis": {
    moments: [
      { title: "Outed", where: "Underboss", text: "A tabloid prints that Matt Murdock is Daredevil, and his secret identity is gone." },
      { title: "Kingpin of Hell's Kitchen", where: "Hardcore", text: "Matt beats Wilson Fisk in front of a bar full of criminals and declares himself the Kingpin." },
      { title: "The Murdock Papers", where: "Final arc", text: "The FBI finally gets its proof, and Matt is taken to prison." },
    ],
  },
  "daredevil-frank-miller": {
    moments: [
      { title: "Sold for a fix", where: "#227", text: "Karen Page sells Daredevil's identity for heroin, and it ends up with the Kingpin." },
      { title: "The brownstone burns", where: "#228–229", text: "Fisk takes Matt's job, money and home, then blows up the building." },
      { title: "Born again", where: "#230–231", text: "Broken and paranoid, Matt is taken in by a nun who is closer to him than he knows." },
      { title: "Nuke", where: "#232–233", text: "The Kingpin sets a super-soldier loose on Hell's Kitchen, which brings the Avengers in and exposes him." },
    ],
  },
  "dark-phoenix-saga": {
    moments: [
      { title: "The Black Queen", where: "#132–134", text: "Mastermind seduces Jean Grey into the Hellfire Club, and she breaks free as Dark Phoenix." },
      { title: "A star dies", where: "#135", text: "Dark Phoenix devours a star and wipes out the five billion inhabitants of the D'Bari system." },
      { title: "Sacrifice on the Moon", where: "#137", text: "In the Blue Area of the Moon, as the Phoenix takes over again, Jean chooses to die." },
    ],
    panels: [
      { src: "/panels/dark-phoenix-saga-1.webp", caption: "Phoenix consumes the D'Bari star.", credit: "Chris Claremont & John Byrne · © Marvel Comics", source: WP("Phoenixconsumesstar.png"), kind: "panel" },
    ],
  },
  "doomsday-clock": {
    moments: [
      { title: "A new Rorschach", where: "#1", text: "With his world about to end, Ozymandias recruits a new Rorschach to find Doctor Manhattan in the DC Universe." },
      { title: "Manhattan's experiment", text: "Manhattan admits he has been rewriting the DC timeline, and that Superman's existence keeps resetting it." },
      { title: "The Metaverse", where: "#12", text: "Manhattan restores the Justice Society and finds a reason for hope." },
    ],
  },
  "emerald-twilight": {
    moments: [
      { title: "Coast City is gone", where: "GL #48", text: "Hal Jordan tries to rebuild his destroyed home with his ring, and the Guardians call him back for misuse." },
      { title: "Parallax", where: "GL #49–50", text: "Hal kills Kilowog and Sinestro, absorbs the Central Power Battery, and becomes Parallax." },
      { title: "\"You'll have to do\"", where: "GL #50", text: "Ganthet gives the last power ring to Kyle Rayner, a cartoonist chosen at random." },
    ],
    panels: [
      { src: "/panels/emerald-twilight-1.webp", caption: "Hal Jordan as Parallax.", credit: "Ron Marz & Darryl Banks · © DC Comics", source: WP("Parallax_(Hal_Jordan).png"), kind: "panel" },
    ],
  },
  "fall-of-the-house-of-x-rise-of-the-powers-of-x-omnibus": {
    moments: [
      { title: "Krakoa", where: "House of X #1", text: "Xavier announces a mutant nation on a living island and trades miracle drugs for recognition." },
      { title: "Moira's ten lives", where: "House of X #2", text: "Moira MacTaggert is a mutant reborn into each new life, and every timeline she has lived ends in mutant extinction." },
      { title: "Resurrection", where: "House of X #6", text: "The Five can bring dead mutants back: \"We are not dead. We are not gone.\"" },
      { title: "The fall", where: "Fall of the House of X", text: "Orchis brings Krakoa down, and the dream ends the way Moira feared it would." },
    ],
  },
  "final-crisis": {
    moments: [
      { title: "J'onn J'onzz dies", where: "#1", text: "The Martian Manhunter is murdered on page one, which tells you how this will go." },
      { title: "Anti-Life", where: "#3–5", text: "Darkseid's Anti-Life Equation spreads across Earth and humanity falls." },
      { title: "The radion bullet", where: "#6", text: "Batman breaks his one rule to shoot Darkseid, and the Omega Sanction hits him." },
      { title: "The Miracle Machine", where: "#7", text: "Superman sings the frequency that ends Darkseid, then wishes the world back." },
    ],
  },
  "flashpoint": {
    moments: [
      { title: "Wrong world", where: "#1", text: "Barry Allen wakes up without his powers. Thomas Wayne is Batman, and Aquaman and Wonder Woman's war is drowning Europe." },
      { title: "Lightning, twice", where: "#2", text: "Barry recreates the accident that gave him his powers and nearly burns to death doing it." },
      { title: "Thawne's reveal", where: "#5", text: "Reverse-Flash tells Barry that Barry caused all of it by saving his mother." },
      { title: "A letter to Bruce", where: "#5", text: "Back home, Barry gives Bruce his father's letter, a message across timelines." },
    ],
  },
  "gotham-central": {
    moments: [
      { title: "In the Line of Duty", where: "#1–2", text: "Mr. Freeze kills a detective, and the MCU decides to take him down without Batman." },
      { title: "Half a Life", where: "#6–10", text: "Renee Montoya is outed at work and framed for murder. It won the Eisner Award." },
      { title: "Soft Targets", where: "#12–15", text: "The Joker snipes civilians at Christmas, and the city's police are the only shield." },
      { title: "Corrigan", where: "#38–40", text: "Crispus Allen is murdered by a corrupt crime-scene tech. His story continues as the Spectre." },
    ],
    panels: [
      { src: "/panels/gotham-central-1.webp", caption: "From \"Half a Life\": Montoya's private life made public.", credit: "Greg Rucka & Michael Lark · © DC Comics", source: WP("GC01.jpg"), kind: "panel" },
    ],
  },
  "green-lantern-by-geoff-johns": {
    moments: [
      { title: "Rebirth", where: "Green Lantern: Rebirth", text: "Hal Jordan returns. Parallax was a fear entity living inside the Central Battery all along." },
      { title: "The Sinestro Corps War", where: "2007", text: "Sinestro arms an army with yellow fear rings, and the Guardians allow lethal force." },
      { title: "The emotional spectrum", where: "2008–2009", text: "Red rage, blue hope, orange avarice, violet love. Johns builds a mythology out of colour." },
      { title: "Blackest Night", where: "2009", text: "The dead rise wearing black rings, and every Corps has to fight together." },
    ],
  },
  "hunter-x-hunter": {
    moments: [
      { title: "The Hunter Exam", where: "Vol. 1–5", text: "Gon, Killua, Kurapika and Leorio meet in a deadly exam that is only the warm-up." },
      { title: "Yorknew City", where: "Vol. 8–13", text: "Kurapika's chain-binding revenge on the Phantom Troupe, against Uvogin and Chrollo." },
      { title: "Netero vs. Meruem", where: "Chimera Ant arc", text: "The world's strongest Hunter faces the Ant King with a hundred-type Guanyin Bodhisattva, and finally the Poor Man's Rose." },
      { title: "Meruem and Komugi", where: "Chimera Ant arc", text: "Two people die quietly over a game of gungi. It may be the most tender ending in shōnen manga." },
    ],
    panels: [
      { src: "/panels/hunter-x-hunter-1.webp", caption: "Gon Freecss.", credit: "Yoshihiro Togashi · © Shueisha", source: WP("GonFreecsmanga.png"), kind: "artwork" },
    ],
  },
  "infinite-crisis": {
    moments: [
      { title: "Max Lord pulls the trigger", where: "Countdown", text: "Blue Beetle is shot in the head, and the crisis is set in motion." },
      { title: "Wonder Woman's choice", where: "Sacrifice", text: "Diana breaks Max Lord's neck to free Superman, live on the world's screens." },
      { title: "Superboy-Prime", where: "#4–7", text: "The boy from Earth-Prime murders his way through the Teen Titans and kills Conner Kent." },
      { title: "Two Supermen", where: "#7", text: "Kal-L and Kal-El drive Prime through Krypton's red sun." },
    ],
  },
  "invincible": {
    moments: [
      { title: "The Guardians of the Globe", where: "#7", text: "Omni-Man murders the world's greatest heroes, and Mark's life changes for good." },
      { title: "Father vs. son", where: "#11–12", text: "Father against son, a city in ruins, and the truth about Viltrum." },
      { title: "Conquest", where: "#60–61", text: "The most brutal fight in the series, and the point where Mark stops being a kid." },
      { title: "The Viltrumite War", where: "#71–78", text: "The war that settles the fate of Nolan's people, and Mark's." },
    ],
  },
  "jjk": {
    moments: [
      { title: "The finger", where: "Ch. 1", text: "Yuji Itadori swallows a cursed finger to save his friends and becomes host to Sukuna." },
      { title: "The Shibuya Incident", where: "Ch. 79–136", text: "Gojo is sealed, Nanami dies, and Sukuna's rampage flattens the city." },
      { title: "Gojo vs. Sukuna", where: "Ch. 221–236", text: "\"Nah, I'd win.\" The strongest sorcerers of two eras go to war with domain expansions." },
    ],
    panels: [
      { src: "/panels/jjk-1.webp", caption: "Satoru Gojo.", credit: "Gege Akutami · © Shueisha", source: WP("SatoruGojomanga.png"), kind: "artwork" },
    ],
  },
  "jla-by-grant-morrison": {
    moments: [
      { title: "The Hyperclan", where: "#1–4", text: "A team of new 'heroes' arrives and outshines the League, until Batman works out what they are: White Martians." },
      { title: "Rock of Ages", where: "#10–15", text: "A trip into a future where Darkseid has won, and the League has to undo it." },
      { title: "World War III", where: "#36–41", text: "Mageddon attacks, and every human on Earth is given superpowers to fight back." },
    ],
  },
  "kagurabachi": {
    moments: [
      { title: "The swordsmith's son", where: "Ch. 1", text: "Chihiro Rokuhira's father, maker of the Enchanted Blades, is murdered, and his son takes up the blade Enten." },
      { title: "Goldfish", where: "Opening arc", text: "Enten's ink-black goldfish technique becomes the signature image of the series." },
      { title: "The Rakuzaichi auction", where: "Auction arc", text: "Chihiro raids an underworld auction to recover a stolen Enchanted Blade, and the series moves to a bigger stage." },
    ],
  },
  "naruto": {
    moments: [
      { title: "The Land of Waves", where: "Vol. 2–4", text: "Haku and Zabuza show Team 7 what being a tool, and being human, really means." },
      { title: "Naruto vs. Neji", where: "Chūnin Exams", text: "The failure beats the genius and breaks the idea that destiny is fixed." },
      { title: "Pain's assault", where: "Vol. 46–48", text: "Konoha is flattened. Naruto talks to his master's killer instead of finishing him." },
      { title: "The Valley of the End", where: "Vol. 26 & Vol. 72", text: "Naruto and Sasuke fight twice, once as boys and once as equals." },
    ],
    panels: [
      { src: "/panels/naruto-1.webp", caption: "Early character designs for Naruto Uzumaki.", credit: "Masashi Kishimoto · © Shueisha", source: WP("NarutoUzumakiKishimoto.jpg"), kind: "artwork" },
    ],
  },
  "new-avengers-jonathan-hickman": {
    moments: [
      { title: "Incursion", where: "#1", text: "Two Earths collide, and the Illuminati meet again to decide what they're willing to destroy." },
      { title: "The Gauntlet breaks", where: "#3", text: "The Infinity Gems stop one incursion and shatter. There is no easy fix left." },
      { title: "Captain America remembers", where: "#23–24", text: "Steve's mind-wipe fails, and the secret war turns into an open one." },
      { title: "Namor's choice", where: "#21", text: "Namor does what the others can't and destroys a world to save his own." },
    ],
  },
  "nightwing-tom-taylor": {
    moments: [
      { title: "Alfred's inheritance", where: "#78", text: "Dick learns Alfred left him a fortune, and decides to spend it on Blüdhaven." },
      { title: "Haley", where: "#78", text: "A three-legged dog is adopted, and Dick's life immediately improves." },
      { title: "One continuous image", where: "#87", text: "Bruno Redondo draws the whole issue as a single unbroken panorama of the city." },
    ],
  },
  "old-man-logan": {
    moments: [
      { title: "The night the heroes died", text: "Fifty years ago Mysterio tricked Logan into killing the X-Men. He hasn't popped his claws since." },
      { title: "A road trip", where: "Wolverine #66–72", text: "A blind Hawkeye and a reluctant Logan drive across a wasteland America ruled by villains." },
      { title: "The Hulk Gang", text: "Logan finally lets the claws out and carves his way out of the Hulk's own body." },
    ],
  },
  "onepiece": {
    moments: [
      { title: "Shanks's arm", where: "Ch. 1", text: "A pirate gives up an arm and a straw hat for a boy who will one day keep that promise." },
      { title: "\"Help me\"", where: "Arlong Park", text: "Nami finally asks Luffy for help, and Luffy puts his hat on her head." },
      { title: "Declaration of war", where: "Enies Lobby", text: "Luffy's crew burns the World Government's flag to get Robin back." },
      { title: "Marineford", where: "Summit War", text: "Ace dies in Luffy's arms, and the series grows up." },
      { title: "Gear 5", where: "Wano", text: "The Sun God awakens against Kaido, and the whole world turns into a cartoon." },
    ],
  },
  "saga-of-the-swamp-thing": {
    moments: [
      { title: "The Anatomy Lesson", where: "#21", text: "Swamp Thing was never Alec Holland. He is a plant that believes it is a man. It is one of the great twists in comics." },
      { title: "Rite of Spring", where: "#34", text: "Abby and Swamp Thing share a psychedelic, impossible love." },
      { title: "American Gothic", where: "#37–50", text: "John Constantine leads Swamp Thing across America's horror landscape to a crisis in Hell." },
    ],
  },
  "secret-wars-2015": {
    moments: [
      { title: "The end of everything", where: "#1", text: "The final incursion destroys the multiverse, and a life raft of survivors escapes." },
      { title: "God Doom", text: "Victor von Doom rules Battleworld as god, with Stephen Strange as his sheriff, until he kills Strange." },
      { title: "\"You could have done it better\"", where: "#9", text: "Doom admits Reed would have been the better god, and the multiverse is reborn." },
    ],
  },
  "the-dark-knight-returns": {
    moments: [
      { title: "The return", where: "Book 1", text: "A 55-year-old Bruce Wayne puts on the cowl again during a heatwave and a crime spree." },
      { title: "In the mud", where: "Book 2", text: "Batman loses to the Mutant leader with his fists, then wins the rematch in the mud with his brain." },
      { title: "The Tunnel of Love", where: "Book 3", text: "The Joker breaks his own neck to frame Batman for his death." },
      { title: "Batman vs. Superman", where: "Book 4", text: "\"I want you to remember, Clark.\" Batman fights Superman in powered armor, then fakes his own death." },
    ],
  },
  "the-killing-joke": {
    moments: [
      { title: "One bad day", where: "Flashbacks", text: "A failed comedian, a pregnant wife and the chemical plant. The Joker's origin, maybe." },
      { title: "Barbara", where: "Middle act", text: "The Joker shoots Barbara Gordon, and a whole era of comics reacts to it." },
      { title: "The ghost train", where: "Climax", text: "Jim Gordon stays sane through the Joker's funhouse, and insists Batman bring him in by the book." },
      { title: "The joke", where: "Final pages", text: "Two inmates, a flashlight, and laughter in the rain. Readers still argue about what happens next." },
    ],
    panels: [
      { src: "/panels/the-killing-joke-1.webp", caption: "The failed comedian, before the Red Hood.", credit: "Alan Moore & Brian Bolland · © DC Comics", source: WP("Jokerorig.png"), kind: "panel" },
      { src: "/panels/the-killing-joke-2.webp", caption: "The Joker is born.", credit: "Alan Moore & Brian Bolland · © DC Comics", source: WP("Jokerkillingjoke.png"), kind: "panel" },
    ],
  },
  "ultimate-spider-man-hickman": {
    moments: [
      { title: "Bitten at thirty-five", where: "#1", text: "In a world where the Maker stopped the bite, Peter Parker finally gets his powers as a husband and father." },
      { title: "Uncle Ben lives", where: "Opening arc", text: "Ben Parker is alive and still a moral compass, working alongside J. Jonah Jameson." },
      { title: "Spider-Man and the Goblin", where: "Opening arc", text: "Harry Osborn wears the Green Goblin armor as Peter's partner, not his enemy." },
    ],
  },
  "vagabond": {
    moments: [
      { title: "After Sekigahara", where: "Vol. 1", text: "Takezō crawls out of a battlefield of corpses, a wild animal with a sword." },
      { title: "The cedar tree", where: "Vol. 2–3", text: "The monk Takuan hangs Takezō from a tree until Takezō becomes Musashi." },
      { title: "Seventy men", where: "Ichijōji", text: "At Ichijōji, Musashi fights the entire Yoshioka school alone, over several chapters of exhausting, bloody pages." },
      { title: "Kojirō", text: "The deaf swordsman's parallel story, which shows Inoue at his most humane." },
    ],
  },
  "watchmen": {
    moments: [
      { title: "The Comedian falls", where: "Ch. I", text: "Someone throws Edward Blake out of a window, and Rorschach starts digging." },
      { title: "Fearful Symmetry", where: "Ch. V", text: "The whole chapter mirrors itself page by page around its centre spread." },
      { title: "\"You're locked in here with me\"", where: "Ch. VI–VIII", text: "Rorschach is unmasked, jailed and still terrifying." },
      { title: "\"I did it thirty-five minutes ago\"", where: "Ch. XII", text: "Veidt's plan has already happened. Millions are dead, and peace has been bought with a lie." },
    ],
    panels: [
      { src: "/panels/watchmen-1.webp", caption: "Walter Kovacs and Rorschach.", credit: "Alan Moore & Dave Gibbons · © DC Comics", source: WP("Kovacs_Rorschach.png"), kind: "panel" },
      { src: "/panels/watchmen-2.webp", caption: "The mirrored centre spread of \"Fearful Symmetry\".", credit: "Alan Moore, Dave Gibbons & John Higgins · © DC Comics", source: WP("Watchmen_Fearful_Symmetry.png"), kind: "panel" },
    ],
  },
  "wonder-woman-historia": {
    moments: [
      { title: "The goddesses gather", where: "Book One", text: "The goddesses of Olympus secretly make the Amazons, out of anger at what men have done to women." },
      { title: "Hippolyta's crown", where: "Book Two", text: "A queen rises, and the price of keeping the Amazons hidden grows." },
      { title: "War with Heracles", where: "Book Three", text: "Betrayal, chains and a new home. The founding wound that made Themyscira." },
    ],
  },
  "wonder-woman-rebirth": {
    moments: [
      { title: "The Lies", where: "#1–23 (odd)", text: "Diana discovers her memories of home have been tampered with. She can't find Themyscira, and doesn't know what is true." },
      { title: "Year One", where: "#2–24 (even)", text: "A fresh telling of Diana's first days in the world of men, with Steve Trevor and Barbara Minerva." },
      { title: "Cheetah", where: "Throughout", text: "Rucka makes Barbara Minerva a tragic friend cursed by a god, as much as she is a villain." },
    ],
  },
};

export const getComicExtras = (id: string): ComicExtras | undefined => comicExtras[id];
