//Hero-Section ----
export const heroSection = {
  logo: "./Logo/LOGO.svg",
  links: [
    { label: "Home", url: "/" },
    { label: "Services", url: "/" },
    { label: "About Us", url: "/" },
    { label: "Blog", url: "/" },
    { label: "Contact Us", url: "/" },
  ],
  nav_btn: {
    label: "Book a Tour",
    url: "/",
    variation: "primary",
    icons: "./Icons/arrow.svg",
  },
  hero_img: "./HeroSection/hero-img1.jpg",
  title: "Discover the country’s Northern Wonderland!",
  desc: "Uncover a World of Serenity and Adventure in Pakistan's Northern Oasis with NorthSide Travel & Tourism - Where Majestic Mountains Meet Tranquil Valleys. Start your expedition with just a click!",
  offer_title: "Special Offers Available!",
  offer_date: "February 2024 - June 2024",
  hero_btn: {
    label: "Get Started",
    url: "/",
    variation: "primary",
  },
  hero_more: {
    label: "Learn More",
    url: "/",
    variation: "secondary",
  },
  tab_option: [
    { label: "Tours" },
    { label: "Hotels" },
    { label: "Flights" },
    { label: "Shows" },
  ],
  tab_inputs: [
    {
      inputs: "Select destination",
      dropdown: "./Icons/dropdown.svg",
      placeholder: "Where do you wanna go ?",
    },
    {
      inputs: "Starting date",
      dropdown: "./Icons/dropdown.svg",
      placeholder: "Select starting date",
    },
    {
      inputs: "Ending date",
      dropdown: "./Icons/dropdown.svg",
      placeholder: "Select Ending Date?",
    },
    {
      inputs: "No. of persons",
      dropdown: "./Icons/dropdown.svg",
      placeholder: "Total Travelers on tour",
    },
  ],
  nav_search: { label: "search", variation: "primary" },
};

// Destination-Section ------
export const destinationSection = {
  title: "Explore our top destinations.",
  desc: "Dive into the allure of iconic destinations around the globe and uncover new adventures waiting to be explored. From bustling cityscapes to serene beaches, each destination offers a unique experience for every traveler:",
  items: [
    {
      image: { src1: "/DestinationSection/greece1.jpg", alt: "greece" },
      rating: "4.9",
      star: "./Icons/star.svg",
      placename: "Santorini Island",
      city: "Santorini, Greece",
      location: "/Icons/location.svg",
      price: "490",
      currency: "$",
      person: "/per person",
      btn: { label: "Book Now", url: "", variation: "primary" },
    },
    {
      image: { src1: "./DestinationSection/italy1.jpg", alt: "bali" },
      rating: "4.7",
      star: "./Icons/star.svg",
      placename: "Sanur Beach Resorts",
      city: "Bali, Indonesia",
      location: "/Icons/location.svg",
      price: "490",
      currency: "$",
      person: "/per person",
      btn: { label: "Book Now", url: "/", variation: "primary" },
    },
    {
      image: { src1: "./DestinationSection/italy.svg", alt: "italy" },
      rating: "4.6",
      star: "./Icons/star.svg",
      placename: "Amalfi Coast",
      city: "Amalfi, Italy",
      location: "/Icons/location.svg",
      price: "490",
      currency: "$",
      person: "/per person",
      btn: { label: "Book Now", url: "/", variation: "primary" },
    },
  ],
};

// TravellerSection ---
export const travelerSection = {
  title: "Insights for the Inquisitive Traveler",
  desc: "Our blog is a trove of travel wisdom, filled with tips, news, and stories to inspire your next expedition. Whether you’re a seasoned traveler or embarking on your first adventure, our insights will pave the way to a richer travel experience.",
  items: [
    {
      image: { src: "./TravelerSection/traveler1.svg", alt: "" },
      like: { icon: "./Icons/like.svg", likes: "187" },
      comment: { icons: "./Icons/comment.svg", comments: "34" },
      timeZone: "12 hours ago",
      username: "Naya Kline",
      title:
        "10 Must-Visit Destinations for Your Next Adventure to the Northern Europe ",
    },
    {
      image: { src: "./TravelerSection/traveler2.svg", alt: "" },
      like: { icon: "./Icons/like.svg", likes: "187" },
      comment: { icons: "./Icons/comment.svg", comments: "34" },
      timeZone: "2 days ago",
      username: "Tony Frye",
      title:
        "Top destinations in the U.S that should be on every traveler's bucket list ",
    },
    {
      image: { src: "./TravelerSection/traveler3.svg", alt: "" },
      like: { icon: "./Icons/like.svg", likes: "187" },
      comment: { icon: "./Icons/comment.svg", comments: "34" },
      timeZone: "3 days ago",
      username: "Eric Knapp",
      title:
        "The Ultimate Packing Guide: Packing Essentials for your Stress-Free Travels ",
    },
  ],
};

//footerSection ----
export const footerSection = {
  logo: { src: "/Logo/LOGO1.png", logo_name: "NorthSide" },
  desc: "Experience personalized medical care from the comfort of your home.",
  items: [
    {
      title: "Support",
      links: [
        "Getting Started",
        "FAQS",
        "Help Articles",
        "Report an issue",
        "Contact Help Desk",
      ],
    },
    {
      title: "Services",
      links: [
        "Booking Flights",
        "Hotel Reservations",
        "Book a Trip",
        "Event Tickets",
        "Exclusive Deals",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms & Conditions",
        "Privacy",
        "Cookie Notice",
        "Cookie Preferences",
        "Trust Center",
      ],
    },
  ],
  icons: [
    { src: "./Icons/facebook.svg" },
    { src: "./Icons/instagram.svg" },
    { src: "./Icons/linkedin.svg" },
    { src: "./Icons/youtube.svg" },
  ],
  title: "HealNet 2024 © All Rights Reserved",
};

// SubscribeSection -----
export const subscribesection = {
  title: "Stay in the Loop: Subscribe to Our Newsletter",
  desc: "Join our community of travelers and never miss out on exclusive deals, travel tips, and insider insights. Subscribe to our newsletter today!",
  placeholder: "Enter your e-mail address ...",
  btn: {
    label: "Subscribe Now!",
    url: "/",
    variation: "primary",
  },
};

// Choose Section-----
export const chooseSection = {
  title: "Why choose NorthSide?",
  desc: "Elevate your travel experience with Northside and enjoy a range of exclusive benefits. We believe exploring the world should be straightforward and rewarding. Learn why our platform is the best in opening up a world of possibilities, all while offering you unmatched benefits:",
  items: [
    {
      icon: "./ChooseSection/aeroplane.svg",
      heading: "Easy Flights Reservation",
      content:
        "Set Your Sights Higher - Our extensive network of airline partners offers you the freedom to fly how you want, where you want. With real-time price comparisons and a plethora of options, your ideal flight is at your fingertips.",
    },
    {
      icon: "./ChooseSection/hotel.svg",
      heading: "Seamless Hotel Booking",
      content:
        "Discover accommodations that are more than just a place to sleep: they’re a part of the whole adventure. Whether it’s a hotel in the city or a tranquil beachside resort, we connect you with places that elevate your travel experience.",
    },
    {
      icon: "./ChooseSection/ticket.svg",
      heading: "Shows and Events Tickets",
      content:
        "Front Row to the World’s Stage - Immerse yourself in the local culture with our wide selection of shows and events. From high-energy concerts to intimate local theater, we bring the best of entertainment to you.",
    },
  ],
};

// Trip Section -----
export const tripSection = {
  tripimg: "./Trip/trip1.png",
  title: "Your Trip, Your Way Just a few clicks away",
  desc: "Planning your next adventure has never been simpler. Follow these easy steps to book your dream trip with ease, and embark on a journey filled with peace and serenity:",
  instruction: [
    {
      no: "1",
      heading: "Browse and Select",
      content:
        "Explore our wide range of destinations, accommodations, and activities, then choose the perfect options for your trip.",
    },
    {
      no: "2",
      heading: "Customize Your Experience",
      content:
        "Tailor your trip to your preferences with our flexible booking options, add-ons, upgrades, and your personal preferences.",
    },
    {
      no: "3",
      heading: "Secure Your Booking",
      content:
        "Complete your reservation securely and conveniently by using our best-reviewed and top-trusted payment methods.",
    },
    {
      no: "4",
      heading: "Secure Your Booking",
      content:
        "Complete your reservation securely and conveniently by using our best-reviewed and top-trusted payment methods.",
    },
  ],
};

//Partner Section------
export const partnerSection = {
  title: "Get to know our esteemed partners.",
  desc: "We’re proud to partner with leading airlines and hotels, ensuring you have a premium experience every step of the way. Whether you're jet-setting across continents or exploring hidden gems closer to home, travel with confidence knowing you're in good hands.",
  brands: [
    { src: "./Partner/airbnb.svg" },
    { src: "./Partner/emirates.svg" },
    { src: "./Partner/booking.svg" },
    { src: "./Partner/advisor.svg" },
    { src: "./Partner/delta.svg" },
  ],
};

// Flight Section----
export const flightSection = {
  title: "Trusted Flight Connections for Seamless Journeys",
  desc: "Experience unparalleled convenience and flexibility in your travel plans with our trusted partner airlines. Whether you're jet-setting across continents or exploring hidden gems closer to home, travel with confidence knowing you're in good hands.",
  brands: [
    { src: "./FlightSection/emirates.svg" },
    { src: "./FlightSection/qatar.svg" },
    { src: "./FlightSection/british.svg" },
    { src: "./FlightSection/turkish.svg" },
    { src: "./FlightSection/canada.svg" },
    { src: "./FlightSection/southwest.svg" },
    { src: "./FlightSection/airlines.svg" },
  ],
};

//About Section-----
export const aboutSection = {
  title: "A little bit about us",
  desc: "We’re more than just a platform; we’re your passport to the world. At Northside, we are dedicated to demystifying travel by providing a streamlined, user-centric experience. From the moment you start planning to your final day of the journey, we are always here to actively ensure every step of your journey is as enjoyable as the destination itself.",
  profile_img: "./AboutSection/girl_pic.svg",
  liberty_img: "./AboutSection/liberty.svg",
  bag_img: "./AboutSection/bag.svg",
  minar_img: "./AboutSection/minar.svg",
  wave_img: "",
  dots_img: "",
  bgcolor: "#FEFDE8",
};

//Map Section-------
export const mapSection = {
  title: "Hear from Our Happy Travelers",
  desc: "Our travelers’ tales are the true measure of our service. Read through heartfelt stories and rave reviews from our community members who’ve turned their travel dreams into reality with NorthSide.",
  content:
    "Booking my trip through NorthSide was a breeze! From finding the perfect hotel to securing the best flight deals, everything was seamless and stress-free.",
  map: "./MapSection/world_map.svg",
  profile1: "./MapSection/map1.svg",
  profile2: "./MapSection/map2.svg",
  profile3: "./MapSection/map3.svg",
  profile4: "./MapSection/map4.svg",
  profile5: "./MapSection/map5.svg",
  profile6: "./MapSection/map6.svg",
  star_icon: "./MapSection/star.svg",
  rating: "4.7",
  left_arrow: "./MapSection/left_arrow.svg",
  right_arrow: "./MapSection/right_arrow.svg",
  address: "- Sarah Dylan, USA",
};

// Rating Section ----
export const ratingSection = {
  title: "Our Highest-Rated Trips",
  desc: "Immerse yourself in a world of wanderlust as you embark on a journey to the most coveted destinations, carefully curated by fellow travelers who've experienced the magic firsthand. These top-rated trips are more than just vacations; they're gateways to extraordinary experiences that leave an indelible mark on your soul.",
  sub_desc:
    "From breathtaking landscapes to culturally rich cities, each destination offers a tapestry of sights, sounds, and sensations waiting to be explored. Our collection of top-rated trips isn't just about ticking off landmarks; it's about creating moments that resonate long after the journey ends. Dive into a realm of unparalleled adventure, where every step leads to new discoveries and every memory is etched in time.",
  image: "/Rating/Rating.jpg",
};

// Travel Section ------
export const travelSection = {
  title: "Insights for the Inquisitive Traveler",
  desc: "Our blog is a trove of travel wisdom, filled with tips, news, and stories to inspire your next expedition. Whether you’re a seasoned traveler or embarking on your first adventure, our insights will pave the way to a richer travel experience.",
  items: [
    {
      img: "./TravelerSection/traveller1.svg",
      img_desc:
        "10 Must-Visit Destinations for Your Next Adventure to the Northern Europe ",
      profile_name: "Naya Kline",
      date: "12 hours ago",
      comments: "187",
      likes: "34",
      comments_icon: "./Icons/comment.svg",
      likes_icon: "./Icons/like.svg",
    },
    {
      img: "./TravelerSection/traveller2.svg",
      img_desc:
        "Top destinations in the U.S that should be on every traveler's bucket list ",
      profile_name: "Tony Frye",
      date: "2 days ago",
      comments: "187",
      likes: "34",
      comments_icon: "./Icons/comment.svg",
      likes_icon: "./Icons/like.svg",
    },
    {
      img: "./TravelerSection/traveller3.svg",
      img_desc:
        "The Ultimate Packing Guide: Packing Essentials for your Stress-Free Travels ",
      profile_name: "Eric Knapp",
      date: "3 days ago",
      comments: "187",
      likes: "34",
      comments_icon: "./Icons/comment.svg",
      likes_icon: "./Icons/like.svg",
    },
  ],
};
