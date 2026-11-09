window.SITE = {
  name:     "Dillard Property Services",
  short:    "Dillard",
  tagline:  "Find the right apartment in Texas",
  tagline2: "Personalized recommendations in Austin, DFW, Houston and San Antonio.",
  agent:    "Chris Dillard",
  title:    "Texas Licensed Real Estate Agent",
  email:    "ChrisD@dillardpropertyservices.com",
  emailLeads: "masterleads@dillardpropertyservices.com",
  phone:    "512-640-2443",
  domain:   "https://www.dillardpropertyservices.com",
  zillowReviews: "https://www.zillow.com/profile/DillardPropertyServices",
  keapFormJS: "https://fk130.infusionsoft.com/app/form/iframe/20b6a3945ae033f3c2212c5cdf14a26d",
  keapFormPage: "https://www.dillardpropertyservices.com/contact",

  nav: [
    { label: "Home",           href: "./index.html" },
    { label: "Cheat Sheet",    href: "./cheat-sheet.html" },
    { label: "Availabilities", href: "./availabilities.html" },
    { label: "Cities",         href: "./cities.html" },
    { label: "Reviews",        href: "./reviews.html" },
    { label: "Contact",        href: "./contact.html" }
  ],

  metros: [
    {
      id: "austin",
      name: "Austin",
      hero: "The Capitol City",
      areas: ["Downtown Austin","South Congress","East Austin","North Austin","Round Rock","Cedar Park","Georgetown","Mueller"]
    },
    {
      id: "dfw",
      name: "Dallas / Fort Worth",
      hero: "The Metroplex",
      areas: ["Uptown Dallas","Deep Ellum","Frisco","Plano","McKinney","Arlington","Irving","Las Colinas","Grapevine","Fort Worth","Addison","Richardson","Garland","Grand Prairie","Denton","Allen","Flower Mound","Southlake","Lewisville","Carrollton"]
    },
    {
      id: "houston",
      name: "Houston",
      hero: "The Energy Capital",
      areas: ["Midtown Houston","Montrose","The Heights","Medical Center","Galleria","Energy Corridor","Sugar Land","The Woodlands","Katy","Pearland","Clear Lake","Cypress","Spring","Humble","Stafford","Missouri City","League City","Friendswood","Baytown","Pasadena"]
    },
    {
      id: "san-antonio",
      name: "San Antonio",
      hero: "The Alamo City",
      areas: ["Downtown San Antonio","Pearl District","Stone Oak","Medical Center SA","Alamo Heights","Northeast SA","Northwest SA"]
    }
  ],

  stats: [
    { value: "20+",    label: "Years in Business" },
    { value: "200K+",  label: "Clients Helped" },
    { value: "100+",   label: "Five-Star Zillow Reviews" },
    { value: "5,000+", label: "Texas Properties" }
  ],

  why: [
    { icon: "fa-database", label: "Private Database",       desc: "We pull from a non-public master database unavailable to the general public. You get properties others never see." },
    { icon: "fa-star",     label: "100+ Five-Star Reviews", desc: "Over 100 verified five-star reviews on Zillow from real Texas renters — not paid ads." }
  ],

  cheatSheetMetros: ["Austin", "DFW", "Houston", "San Antonio"],

  cheatSheetAreas: {
    "Austin":      ["Downtown Austin","South Congress","East Austin","North Austin","Round Rock","Cedar Park","Georgetown","Mueller","Other"],
    "DFW":         ["Uptown Dallas","Frisco","Plano","McKinney","Arlington","Irving","Las Colinas","Fort Worth","Addison","Richardson","Allen","Flower Mound","Lewisville","Other"],
    "Houston":     ["Midtown Houston","Montrose","The Heights","Medical Center","Galleria","Energy Corridor","Sugar Land","The Woodlands","Katy","Pearland","Other"],
    "San Antonio": ["Downtown SA","Pearl District","Stone Oak","Medical Center SA","Alamo Heights","Northeast SA","Northwest SA","Other"]
  },

  colors: {
    navy:    "#00243a",
    teal:    "#003d4d",
    mid:     "#003144",
    gold:    "#C8922A",
    dark:    "#0f1b24",
    muted:   "#6B7280",
    light:   "#F4F7F9"
  }
};
