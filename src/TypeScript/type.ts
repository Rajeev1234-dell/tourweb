interface link {
  label: string;
  url: string;
}

interface btn extends link {
  variation: string;
  icon?: string;
}

interface images {
  src: string;
  alt: string;
}

// HeroSection Type ----------

interface option {
  label: string;
}

interface input {
  inputs: string;
  dropdown: string;
  placeholder: string;
}

export interface herotype {
  logo: string;
  links: link[];
  nav_btn: btn;
  hero_img: string;
  title: string;
  desc: string;
  offer_title: string;
  offer_date: string;
  hero_btn: btn;
  hero_more: btn;
  tab_option: option[];
  tab_inputs: input[];
  nav_search: { label: string; variation: string };
}

// DestinationSection Type ---

interface images1 {
  src1: string;
  alt: string;
}

interface places {
  image: images1;
  rating: string;
  star: string;
  placename: string;
  city: string;
  location: string;
  price: string;
  currency: string;
  person: string;
  btn: btn;
}

export interface placetype {
  title: string;
  desc: string;
  items: places[];
}

//TravelerSection type----
export interface tourtype {
  image: images;
  title: string;
  username: string;
  timezone: string;
  like: { icon: string; likes: string };
  comment: { icon: string; comments: string };
}

// FooterSection type------
interface item {
  title: string;
  links: string[];
}

interface logoicon {
  src: string;
}

export interface footertype {
  logo: { src: string; logo_name: string };
  desc: string;
  items: item[];
  title: string;
  icons: logoicon[];
}

// Subscribe type-----
export interface subscribetype {
  title: string;
  desc: string;
  btn: btn;
  placeholder: string;
}

// Choose type-------
interface chooseitem {
  icon: string;
  heading: string;
  content: string;
}

export interface choosetype {
  title: string;
  desc: string;
  items: chooseitem[];
}

//Trip type---

interface tripdetail {
  no: string;
  heading: string;
  content: string;
}

export interface triptype {
  tripimg: string;
  title: string;
  desc: string;
  instruction: tripdetail[];
}

// Partner type----

interface brand {
  src: string;
}

// Partner type-----
export interface partnertype {
  title: string;
  desc: string;
  brands: brand[];
}

//About type------
export interface abouttype {
  title: string;
  desc: string;
  profile_img: string;
  liberty_img: string;
  bag_img: string;
  minar_img: string;
  bgcolor: string;
}

// Map type--------
export interface maptype {
  map: string;
  title: string;
  desc: string;
  content: string;
  profile1: string;
  profile2: string;
  profile3: string;
  profile4: string;
  profile5: string;
  profile6: string;
  rating: string;
  star_icon: string;
  left_arrow: string;
  right_arrow: string;
  address: string;
}

// Rating type---
export interface ratingtype {
  title: string;
  desc: string;
  sub_desc: string;
  image: string;
}

//Traveler type------
interface travelitem {
  img: string;
  img_desc: string;
  profile_name: string;
  date: string;
  comments: string;
  likes: string;
  comments_icon: string;
  likes_icon: string;
}

export interface travelertype {
  title: string;
  desc: string;
  items: travelitem[];
}
