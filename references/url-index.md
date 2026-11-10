# URL index

Crawled 2026-11-10 from https://www.dillardpropertyservices.com.

Sources: `robots.txt` (allow `/`, disallow `*?lightbox=`, `/_partials*`, `/pro-gallery-webapp/v1/galleries/*`), sitemap index `sitemap.xml` → `pages-sitemap.xml` (lastmod 2026-07-07, no blog or image sitemap), and the header and footer on the homepage.

Header: Home, Cheat Sheet, Available, Reviews, Cities, About, Contact.
Footer: Privacy Policy, Terms Of Use, plus the same header links.
Homepage buttons also point at Cities, Availabilities, Reviews, About, and Cheat Sheet. Several of those buttons reuse a different slug than the header item with the same label.

| URL | Where found | Decision | Reason |
| --- | --- | --- | --- |
| https://www.dillardpropertyservices.com/ | sitemap, header, footer | KEEP | Canonical homepage. Headline, 17+ years, Zillow line, four metros, couple photo, logo. |
| https://www.dillardpropertyservices.com/home | sitemap only (title Homw4) | KEEP | Alternate home. Phone `512-640-2443`, section blurbs, and the 300,000 people line that conflicts with the homepage. |
| https://www.dillardpropertyservices.com/new | sitemap only (title OnBoard) | KEEP | Same blocks as `/home`, including the 300,000 line. Kept so the conflict is documented from both URLs. |
| https://www.dillardpropertyservices.com/cheatsheet | sitemap, header | KEEP | Cheat Sheet page in the nav. Static HTML has almost no body copy; the prototype form stays the working request. |
| https://www.dillardpropertyservices.com/contact | sitemap, header | KEEP | Contact page. Leader line, 17+ years, Zillow line, and the post-submit availabilities note. |
| https://www.dillardpropertyservices.com/blank-1 | sitemap; homepage Availabilities button (title Availabilities) | KEEP | Neighborhood lists for Houston, DFW, Austin, and San Antonio, plus four screenshots. |
| https://www.dillardpropertyservices.com/blank-1-2 | sitemap, header “Available” | KEEP | Same neighborhood lists as Availabilities, split onto more lines, plus the same screenshots. |
| https://www.dillardpropertyservices.com/blank-1-1 | sitemap, header “Cities” | KEEP | “We serve the following towns” and the town list. |
| https://www.dillardpropertyservices.com/blank-1-1-1 | sitemap (title Areas); linked from `/home` and `/new` | KEEP | Area photos (Dallas and northern suburbs). No body sentence beyond the title. |
| https://www.dillardpropertyservices.com/blank-1-1-1-1-1-1 | sitemap, header “Reviews” | KEEP | Review screenshot gallery. Header Reviews points here; some homepage buttons point at the About slug instead. |
| https://www.dillardpropertyservices.com/blank-1-1-1-1-1 | sitemap, header “About” | KEEP | About page, crawled so the bio can be dropped. No About page in the prototype. |
| https://www.dillardpropertyservices.com/money | sitemap (title Money) | KEEP | Image gallery (`IMG_23xx`), checked for floor plans. `/blank` redirects here. |
| https://www.dillardpropertyservices.com/blank | sitemap | DROP | Redirects to `/money`. Not a separate page. |
| https://www.dillardpropertyservices.com/blank-1-1-1-1 | sitemap (title FIND) | DROP | Empty placeholder. Logo only. |
| https://www.dillardpropertyservices.com/blank-1-1-1-1-2 | sitemap (title Money Back) | DROP | Empty placeholder. Logo only. |
| https://www.dillardpropertyservices.com/privacy-policy | sitemap, footer | DROP | Template privacy policy, not a prototype page. Published mailbox on that page is `info@dillardpropertyservices.com`. |
| https://www.dillardpropertyservices.com/terms-of-use | sitemap, footer | DROP | Template terms. Contact lines use `notice@demobootstrap.com` and `service@demobootstrap.com`, which are not used. |

`robots.txt` also names the sitemap at `https://www.dillardpropertyservices.com/sitemap.xml`. Lightbox, partial, and pro-gallery URLs were not crawled.
