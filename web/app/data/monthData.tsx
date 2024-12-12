import { Link } from "@tanstack/react-router"

interface MonthInfo {
  title: string
  content: React.ReactNode
  images: string[]
}

interface YearData {
  [key: string]: MonthInfo
}

interface MonthData {
  [key: string]: YearData
}

export const monthData: MonthData = {
  2024: {
    march: {
      title: "march",
      content:
        "cool month. started learning react native for mobile applications. I've finally moved to Tbilisi and live in the Vake, just five minutes from pulp! there's a lot of work ahead of me, but it's quite exciting. btw, mastering drag and drop functionalities is proving to be tough",
      images: ["https://images.omrshn.dev/cats.jpeg"],
    },
    april: {
      title: "april - tbilisi",
      content:
        "wtf its so wild how quick money moves here - i just bought club mate, matcha, groceries, and khinkali. been here 3 weeks, still waiting for mountain trip. working on learn anything mobile, expo tabs are super annoying. out of liras in turkish account, need physical presence in istanbul to top up phone number for transfers etc.",
      images: [
        "https://images.omrshn.dev/april1.jpeg",
        "https://images.omrshn.dev/april2.jpeg",
        "https://images.omrshn.dev/april3.jpeg",
        "https://images.omrshn.dev/april8.jpeg",
        "https://images.omrshn.dev/april4.jpeg",
      ],
    },
    may: {
      title: "may - istanbul",
      content:
        "its been an incredibly cool month and it’s only halfway through. burned through a hundred coffees this month, hopped on horses twice. earned $2k, next goal - hacking through hackathon with my bf ♥ looking forward to my trip to the princes islands to cycle around and read in my fav matcha place. funny how istanbul feels when you're just a tourist. can't wait to show my partner all the hidden spots when he lands",
      images: [
        "https://images.omrshn.dev/may1.jpeg",
        "https://images.omrshn.dev/may2.jpeg",
        "https://images.omrshn.dev/may3.jpeg",
      ],
    },
    june: {
      title: "june",
      content: (
        <>
          we didn't win the hackathon, although still think{" "}
          <span className="opacity-50 font-light">
            <Link href="https://github.com/kuskusapp/kuskus">KusKus</Link>
          </span>{" "}
          was a brilliant idea. a similar app has already been made for New
          York, but we planned to make it on a larger scale. maybe we'll get
          lucky later. april's packed with work. bouncing between
          istanbul-tbilisi for papers, grinding through residency stuff. found a
          kitten in georgia - had him for four days before he slipped away.
          someone else took him from the street.
        </>
      ),
      images: ["https://images.omrshn.dev/kitten"],
    },
    july: {
      title: "july - tbilisi",
      content:
        "back in tbilisi for two weeks before saint p. recently realized that i haven't cooked once in six months, just endless cafes and restaurants. honestly, living like this makes it hard to get excited about posting food shots when its just your daily loop. btw im not complaining, everything is fine. august mapped: heading to kazan for nix conference and techno signal fest in the forest. georgia is cool but this weather and workload are making it tough to relax.",
      images: [
        "https://images.omrshn.dev/morekittens",
        "https://images.omrshn.dev/shavi",
      ],
    },
    august: {
      title: "august - saint p / moscow / kazan",
      content: (
        <>
          feel exhausted from this period. don't think i have ever changed
          cities so frequently - Petersburg, Moscow, train to Kaluga for Signal
          fest, back to Moscow, train to Kazan, flight back to Saint P. Home,
          cottage, sleeping in a cold tent with bugs, hostels and hotels. really
          enjoyed the festival, met a lot of cool people. had laptop detox for 4
          days!!! music only started late in the evening, with lectures and
          walks with coffee during the day. sank into a deep depression this
          month. The sugar mommy role is definitely not for me, and I hate
          taking 100% responsibility. also felt crappy in Kazan at the nix
          sprint where there were no other women, and guys told me I couldnt
          stay at their house, so I had to find an overpriced hostel because all
          the hotels were unreasonably expensive. btw, my place turned out to be
          nice and right in the center, so I often walked to the park by black
          lake and had lovely girl roommates. so glad im heading home to saint p
          soon.
        </>
      ),
      images: [
        "https://images.omrshn.dev/photo_2024-09-13%2011.40.58.jpeg",
        "https://images.omrshn.dev/photo_2024-09-13%2011.40.53.jpeg",
        "https://images.omrshn.dev/photo_2024-09-13%2011.41.01.jpeg",
      ],
    },
    september: {
      title: "september - saint p / istanbul ",
      content:
        "september swept by in galleries, theatres, and waiting for visa approval. drifted through nabokov museum for a family friend's exhibition, then hermitage and russian museum. received an offer for a jewelry website for 8k pounds and hope to complete it by the end of november because besides this i have another two big projects. i'm very happy with how life is turning out. a year ago this was a goal that i thought would take at least two or three years of endless work. nikita thinks i will get tired of europe like istanbul or tbilisi, but i doubt it.",
      images: [
        "https://images.omrshn.dev/photo_2024-10-14%2017.36.18.jpeg",
        "https://images.omrshn.dev/photo_2024-10-14%2017.36.14.jpeg",
        "https://images.omrshn.dev/photo_2024-10-14%2017.36.11.jpeg",
        "https://images.omrshn.dev/photo_2024-10-14%2017.36.17.jpeg",
      ],
    },
    october: {
      title: "october - santander / biarritz / paris",
      content:
        "just wondering when i'll finally spend a month in one place. but changing locations in europe brings me much more joy than it did in russia. so much has happened, and i regret my procrastination in writing these diary entries with such delay. in the first days, i registered my residence in northern spain + applied for a job at an IT company and now waiting for approval from spanish government 🇪🇸 this could take about month or something. just three hours by car from cantabria and there's biarritz - a city where a surfboard is mounted in church. im absolutely amazed + want to come back here in summer for surfing and helado. on the way back, i devoured best basque cheesecake in san sebastian - mashallah, everything id tasted before pales in comparison to this flavor and texture. ofc the most memorable was paris, where my share of the 500 euro winnings in ton hackhathon immediately went towards paying for work insurance 😍 time was quite limited and i barely managed to properly explore the city. however, i discovered new neighborhoods and stocked up on clothes, especially cos jeans and ballerinas in cool vintage store in the same building as the apartments. last time i wanted to visit pompidou to see the cy twombly temporary exhibition, but due to the shooting the museum was closed that day, and this time i finally made it there with friends after queuing in the rain! i was the only one who had to pay for entry as a non-eu citizen) also, tried bouldering for the first time. im spending the rest of my time at house on cantabrian mountain (even now as im writing this note) with my thoughts and laptop. for several nights in a row, someone has been stealing chickens. it seems my freelance employer with jewelry website has abandoned me, so this will just end up being a portfolio project. thats fine, not a big deal. days here pass like years, my max on the steps app is 2 km per day but my weight remains stable, which makes me kinda happy. trying to do core exercises and get some running while walking corgi doggo.",
      images: [
        "https://images.omrshn.dev/fr5.jpeg",
        "https://images.omrshn.dev/bia1.jpeg",
        "https://images.omrshn.dev/fr2.jpeg",
        "https://images.omrshn.dev/fr8.jpeg",
      ],
    },
    november: {
      title: "november - madrid",
      content: (
        <div>
          madrid is actually quite nice. we're staying at{" "}
          <a
            href="https://www.becasaapartments.com/es/landings/be-casa-valdebebas"
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            Be casa
          </a>{" "}
          complex until the end of january. highly recommend this place, but the
          hour-long metro ride to downtown is a bit much... trying to convince
          my partner to move closer to the city center (especially salamanca or
          chamberi, interestingly, coffee is much cheaper there), though i'll
          miss having our gym upstairs - just started getting into running with
          the treadmill. the vibe of spanish cities reminds me a bit of
          istanbul, but cleaner. im amazed by how everything is put together in
          that european way, from how people dress to the cafe and store
          windows. these are usually simple pieces with interesting details. I
          moved here with just the bare essentials, and now my wardrobe consists
          of cos and massimo dutti clothes. recently discovered cute store
          Brandy Melville with really nice cotton basics (wanna buy entire
          collection). to be honest, madrid has one disadvantage: i've gotten
          used to living in cities with waterfront views since its always the
          best spot for a walk. there's nothing like that here, and i miss it so
          much.
        </div>
      ),
      images: [
        "https://images.omrshn.dev/nov1.jpeg",
        "https://images.omrshn.dev/nov2.jpeg",
        "https://images.omrshn.dev/nov3.jpeg",
      ],
    },
  },

  "2025": {
    january: {
      title: "january",
      content: "",
      images: [],
    },
  },
}
