# Content inventory

Crawled 2026-11-10 from the KEEP urls in `references/url-index.md`. Destination is the prototype page, or none when the block is dropped.

| Source | Block | Kind | Decision | Why | Destination |
| --- | --- | --- | --- | --- | --- |
| `/` | "We are the leader in apartment and condo rentals in the state of Texas." | Headline | USE | Official homepage headline. | Home |
| `/` | "In the past 17+ years our company has helped over 100,000 people…" | Proof | REWRITE | 17+ years stays. The 100,000 figure conflicts with `/home` and `/new`. See NOTES.md. | Home, contact. Number omitted. |
| `/` | "Over 100 5STAR reviews on ZIllow!" plus the Zillow profile link | Proof | USE | Published review count and profile `zillow.com/profile/chrisdillard00`. Spelling normalized to "5-star" and "Zillow". | Home, reviews, contact |
| `/` | "Over 5000 Properties to Choose From DFW, Houston, Austin & San Antonio" | Proof | REWRITE | Mike's wording is "over 5,000 Texas properties." The four metros stay. | Home, availabilities, cities |
| `/` | Meg & Chris Dillard portrait | Photo | USE | Official couple photo. Circle on white, so it is a portrait, not a hero. | Contact |
| `/` | DP mark | Logo | USE | Official mark. | Nav and footer on every page |
| `/` | Floor plan drawing | Image | USE | Only floor plan on the site. No community name is printed on it. | Availabilities |
| `/home`, `/new` | Phone `512-640-2443` (`tel:1-512-640-2443`) | Fact | USE | Published on both alternate homes. | Home, contact, footer, cheat sheet |
| `/home`, `/new` | "GREATER: Austin Area. DFW Area, Houston Area, San Antonio Area" | Cities | USE | Official metro line. | Home, cities |
| `/home`, `/new` | "We pride ourselves in Client feedback. When you're happy, we're happy." | Reviews | USE | Official reviews intro. | Reviews |
| `/home`, `/new` | "Over 17 Years Helping Well Over 300,000 People…" | Proof | REWRITE | 17+ years stays. 300,000 conflicts with the homepage. See NOTES.md. | Home. Number omitted. |
| `/home`, `/new` | "More Targeted GEO Directed Search Results. Find What You Want Where You Want It." | Areas | USE | Official areas line. | Cities |
| `/home`, `/new` | "The Latest Most Targeted Personalized Information for Our Clients… For Free. Updated At Your Request." | Cheat sheet | REWRITE | Keep the personalized-information line and "updated at your request." Drop "For Free." | Cheat sheet, home |
| `/home`, `/new` | "Well Researched Availabilities. Find What You Want Here If You're Not Quite Serious Yet. Updated Weekly." | Availabilities | USE | Official availabilities line. | Availabilities, home |
| `/home`, `/new` | "TEXT ME NOW" | Button | DROP | Mike: do not advertise that everything is done by text or email only. | None. Button is "Get personalized recommendations". |
| `/contact` | "Once You Submit, you'll be forwarded to our latest availabilities. Thousands of properties." | Form result | USE | Official post-submit line. | Contact, cheat sheet submit |
| `/contact` | Same leader, 17+ years, 100,000 people, and Zillow lines as the homepage | Intro | REWRITE | Same people-served conflict. | Contact. Number omitted. |
| `/blank-1-1` Cities | "We serve the following towns." and the 100-town list | List | USE | Official town list, names unchanged. | Cities |
| `/blank-1` Availabilities and `/blank-1-2` Available | Neighborhood groups for Houston, Dallas, Fort Worth, Austin, and San Antonio | List | USE | Same groups on both URLs. Available only breaks a few lines apart. | Availabilities, cheat sheet area menu, home city chapters |
| `/blank-1` | Four skyline and River Walk screenshots | Photo | DROP | About 350–630 pixels, and they read as stock skylines. Current heroes stay. | None |
| `/blank-1-1-1` Areas | 18 labeled DFW maps | Map | USE | Official area maps. Too small to full-bleed. | Cities |
| `/blank-1-1-1-1-1-1` Reviews | 25 Zillow screenshots from 2023-12-07 | Reviews | USE | Real reviews. Names kept as published. Six are quoted on the reviews page. | Reviews, two also on home |
| Reviews | internationaldiego, Madalynn Bearnth, Brielle Bender, torriele, Phoebe Bux | Review | DROP | The screenshot text says locator, locating, or locate. | Archived image only |
| Reviews | Joi Lewis, adriennegriffin1993 | Review | DROP | The screenshot text says relocating, which contains the banned sequence. | Archived image only |
| Reviews | andreamills07236 | Review | DROP | The body could not be read reliably. | Archived image only |
| `/blank-1-1-1-1-1` About | Chris Dillard bio, career figures, church and charity lines | Bio | DROP | Mike: no About page and no Chris & Meg bio chapter. | `about.html` still redirects home |
| `/cheatsheet` | Page title only | Page | REWRITE | The static page has no body copy and no visible fields. The prototype form uses the official Cheat Sheet line and the official area names. | Cheat sheet |
| `/money` | 25 coin photos (`IMG_23xx`) | Gallery | DROP | Not floor plans, and not useful client content. | None |
| Privacy policy | `info@dillardpropertyservices.com` | Contact | USE | Only mailbox published on the Dillard domain. Template `demobootstrap.com` addresses are not used. | Contact, footer, cheat sheet |
| Terms of use | Template legal text | Legal | DROP | Not a prototype page. | None |
