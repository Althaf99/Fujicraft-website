import WhoWeAre from './WhoWeAre.svelte';
import WhatDrivesUs from './WhatDrivesUs.svelte';
import WhatWeDo from './WhatWeDo.svelte';
import Contact from './Contact.svelte';
import ShopNow from './ShopNow.svelte';
import AboutUs from './AboutUs.svelte';

export const routes = {
  '/': WhoWeAre,
  '/who-we-are': WhoWeAre,
  '/what-drives-us': WhatDrivesUs,
  '/what-we-do': WhatWeDo,
  '/contact': Contact,
  '/shop-now': ShopNow,
  '/about': AboutUs
};
