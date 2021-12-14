'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Parks', [{
    fullName: 'Biscayne National Park',
    designation: 'National Park',
    description: 'Within sight of Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs.',
    weatherInfo: "The park is situated in a subtropical climate, which ensures sunshine year-round. Winters are normally dry and mild, with occasional fronts bringing wind and little rain.",
    image: 'https://www.nps.gov/common/uploads/structured_data/3C8717A4-1DD8-B71B-0B2EED68CFA7E008.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Black Canyon of the Gunnison",
    designation: 'National Park',
    description: "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America.",
    weatherInfo: "Weather can vary greatly throughout the day. Summer daytime temperatures range between 55 to 90F (13 to 32C), nights 45 to 60F",
    image: 'https://www.nps.gov/common/uploads/structured_data/3C81655F-1DD8-B71B-0B4BCFFDB74EE723.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Bryce Canyon National Park",
    designation: 'National Park',
    description: "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities.",
    weatherInfo: "Due of its high elevation climate, weather at Bryce Canyon through autumn, winter, and spring can be highly variable. From October to May temperatures fall below freezing nearly every night.",
    image: 'https://www.nps.gov/common/uploads/structured_data/61F08520-E14F-18F2-BF5F3D89482631BD.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Canyonlands National Park",
    designation: "National Park",
    description: "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts.",
    weatherInfo: "Canyonlands is part of the Colorado Plateau, a 'high desert' region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A525D-1DD8-B71B-0B8E59D2EB39F6D0.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Capitol Reef National Park",
    designation: "National Park",
    description: "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold",
    weatherInfo: "Weather is posted daily; check at the park visitor center for weather updates. Do not enter into narrow canyons if there is a threat of rain or if rain has been falling in the area.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C82E3C7-1DD8-B71B-0B4181834EE46AED.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Carlsbad Caverns National Park",
    designation: "National Park",
    description: "High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves.",
    weatherInfo: "Carlsbad Caverns National Park is located in the Chihuahuan Desert in southeast New Mexico. Summers are hot with temperatures between 90°F (32°C) and low 100s °F (38°C).",
    image: "https://www.nps.gov/common/uploads/structured_data/29C3C977-AAE6-B7FD-3C107828D704A5CB.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Channel Islands National Park",
    designation: "National Park",
    description: "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources.",
    weatherInfo: "In general, the islands have a Mediterranean climate year-round. Temperatures are relatively stable, with highs averaging in the mid-60s.",
    image: "https://www.nps.gov/common/uploads/structured_data/8DE774D1-CB22-37F2-D826E3F0A73D303A.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Conagree National Park",
    designation: "National Park",
    description: "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States.",
    weatherInfo: "Check the forecast before getting on the road. Conditions can change rapidly within the park. Flooding can happen with little or no warning.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C862C60-1DD8-B71B-0BB65F7B652BA840.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Crater Lake National Park",
    designation: "National Park",
    description: "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak.",
    weatherInfo: "Summers at Crater Lake are short but sunny. July, August, and September are your best bets for warm, dry weather.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0BEECDD24771C381.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Cuyahoga Valley National Park",
    designation: "National Park",
    description: "Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors.",
    weatherInfo: "Spring's rain and warming temperatures bring new leaves on trees, blooming wildflowers, and visitors anxious get out on the trail.",
    image: "https://www.nps.gov/common/uploads/structured_data/F82FA0CD-D84B-D131-1A778346760D24FB.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Death Valley National Park",
    designation: "National Park",
    description: "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast.",
    weatherInfo: "Spring is the most popular time to visit Death Valley. Warm and sunny days with the possibility of spring wildflowers is a big attraction.",
    image: "https://www.nps.gov/common/uploads/structured_data/010A933C-95B1-CBCD-D6D64D47D5B81E76.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Denali National Park & Preserve",
    designation: "National Park & Preserve",
    description: "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains.",
    weatherInfo: "Summer is typically cool and wet, with highs typically in the upper 50s to low 60s, and lows in the 40s.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C83C9C7-1DD8-B71B-0B9B669ED961F97E.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Dry Tortugas National Park",
    designation: "National Park",
    description: "Almost 70 miles west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands.",
    weatherInfo: "The climate in the Dry Tortugas is subtropical, which basically means that it has warm and tropical weather in the range of 60°F to 90°F.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C8103D0-1DD8-B71B-0B6DB5CF9A4AC58F.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Everglades National Park",
    designation: "National Park",
    description: "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee, American crocodile, and the Florida panther.",
    weatherInfo: "There are two seasons at the Everglades National Park: the wet season and the dry season. The wet season runs from Mid-May to November and the dry season runs from December to mid-May.",
    image: "https://www.nps.gov/common/uploads/structured_data/17EC840E-9926-2E09-F2DD47A282915BBB.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Gates of the Arctic National Park & Preserve",
    designation: "National Park & Preserve",
    description: "This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years.",
    weatherInfo: "The climate of Gates of the Arctic National Park & Preserve is generally classified as arctic and sub-arctic, with exceptionally cold winters and relatively mild summers.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A8B6B-1DD8-B71B-0B8B89FE0C6B6F4F.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Gateway Arch National Park",
    designation: "National Park",
    description: "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West.",
    weatherInfo: "See St. Louis, MO weather.",
    image: "https://www.nps.gov/common/uploads/structured_data/348E44EA-F431-FA18-DCB014F7BAA8D225.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Glacier National Park",
    designation: "National Park",
    description: "With over 700 miles of trails, Glacier is a hiker's paradise for adventurous visitors seeking wilderness and solitude.",
    weatherInfo: "Glacier's weather is highly variable and can be extreme. Expect warm sunny summer days and in the winter the temperatures can fall well below freezing.",
    image: "https://www.nps.gov/common/uploads/structured_data/9A13A83B-A961-01DA-EB87DF3C25DEAABC.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Glacier Bay National Park & Preserve",
    designation: "National Park & Preserve",
    description: "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage.",
    weatherInfo: "Summer temperatures average 50° to 60° F. Rain is the norm in lush southeast Alaska.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C790BBF-1DD8-B71B-0B0AE92D0B9C24EB.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Grand Canyon National Park",
    designation: "National Park",
    description: "Located in Arizona, Grand Canyon National Park encompasses 277 miles of the Colorado River and adjacent uplands. The immense Grand Canyon is a mile deep, and up to 18 mileswide.",
    weatherInfo: "Weather varies with cold winters and mild pleasant summers, moderate humidity, and considerable diurnal temperature changes at the higher elevations.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7B143E-1DD8-B71B-0BD4A1EF96847292.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Grand Teton National Park",
    designation: "National Park",
    description: "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it.",
    weatherInfo: "Grand Teton National Park has long, cold winters—snow and frost are possible any month. April, May, & June - Mild days and cool nights alternate with rain and snow.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7FA7B7-1DD8-B71B-0B7B45B73D1C90C3.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Great Basin National Park",
    designation: "National Park",
    description: "From the 13,063-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region.",
    weatherInfo: "Weather conditions in the park vary with elevation. In late spring and early summer, days in the valley may be hot, yet the snow pack may not have melted in the higher elevations.",
    image: "https://www.nps.gov/common/uploads/structured_data/5F04461D-A4FD-8285-D2F63B264237D90C.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Great Sand Dunes National Park & Preserve",
    designation: "National Park & Preserve",
    description: "The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, forests, alpine lakes, and tundra.",
    weatherInfo: "Temperatures are relatively cool all year, thanks to the park and preserve's high elevation. Conditions are most often calm, but winds can arise, especially in spring and during storm fronts.",
    image: "https://www.nps.gov/common/uploads/structured_data/BC4ACB4C-0A6D-0188-E9A6AA1217827461.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Great Smoky Mountains National Park",
    designation: "National Park",
    description: "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life.",
    weatherInfo: "Elevations in the park range from approximately 875 feet to 6,643 feet and the topography can drastically affect local weather.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Guadalupe Mountains National Park",
    designation: "National Park",
    description: "Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, and an environmentally diverse collection of flora and fauna.",
    weatherInfo: "The Guadalupe Mountains are known for high winds year-round; gusts can reach 60MPH or higher. In winter the mountains experiences occasional, light snowfalls.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C825533-1DD8-B71B-0B6FDF436F604A3C.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Haleakalā National Park",
    designation: "National Park",
    description: "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else.",
    weatherInfo: "On any given day, the temperatures in the park can range from a high of 80°F in Kīpahulu to a low of 30°F at the summit. In either area clouds and rain can quickly replace warm sunshine.",
    image: "https://www.nps.gov/common/uploads/structured_data/3D05E583-1DD8-B71B-0BBFF82F7F78AF6A.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Hawaiʻi Volcanoes National Park",
    designation: "National Park",
    description: "This park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa - and is a designated International Biosphere Reserve and UNESCO World Heritage Site.",
    weatherInfo: "The weather at Kīlauea's summit (4000' elevation) varies daily and may be rainy and chilly any time of the year. Temperature varies by elevation.",
    image: "https://www.nps.gov/common/uploads/structured_data/C4E8415A-08E5-5976-833F494FFCA3FFE6.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Hot Springs National Park",
    designation: "National Park",
    description: "Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years.",
    weatherInfo: "Average temperatures in Hot Springs can range from about 90°F to less than 27°F. Summer days can be hot and humid, with heat index values up to 110ºF.",
    image: "https://www.nps.gov/common/uploads/structured_data/C13C707D-B623-9D92-5CF6C917AA1B9078.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Indiana Dunes National Park",
    designation: "National Park",
    description: "Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
    weatherInfo: "On average, the warmest month is July and the highest recorded temperature was 105F in 1934. The coolest month is January, with the lowest recorded temperature of -25F in 1985.",
    image: "https://www.nps.gov/common/uploads/structured_data/9253EDFB-AAFD-E111-B985CD2747F5C48F.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Isle Royale National Park",
    designation: "National Park",
    description: "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers adventures for backpackers, hikers, and boaters.",
    weatherInfo: "Isle Royale National Park is a remote island wilderness in the middle of Lake Superior. Weather influences traveling to and from the island, as well as your trip once you arrive.",
    image: "https://www.nps.gov/common/uploads/structured_data/6059CAD8-02E8-2E00-2922DF84800167E0.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Joshua Tree National Park",
    designation: "National Park",
    description: "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain.",
    weatherInfo: "Days are typically clear with less than 25% humidity. Temperatures are most comfortable in the spring and fall, with an average highs around 85°F",
    image: "https://www.nps.gov/common/uploads/structured_data/306D0D93-9CCA-76E1-AD48268F8D7A7E3E.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Katmai National Park & Preserve",
    designation: "National Park & Preserve",
    description: "Katmai was established in 1918 to protect the volcanically devastated region surrounding Novarupta and the Valley of Ten Thousand Smokes.",
    weatherInfo: "Located between the stormy north Pacific Ocean and the even stormier Bering Sea, the Katmai region is often a battleground between weather systems.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A35BF-1DD8-B71B-0BB1644AA6CF4C8B.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Kenai Fjords National Park",
    designation: "National Park",
    description: "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature.",
    weatherInfo: "The weather of Kenai Fjords is difficult to predict and can change rapidly. The area generally enjoys a relatively temperate maritime climate, primarily due to the influence of the Japanese current that flows through the Gulf of Alaska.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Kobuk Valley National Park",
    designation: "National Park",
    description: "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes.",
    weatherInfo: "Always travel with good quality rain gear and warm layers. Be especially careful to stay dry. Hypothermia can set in on a windy, wet day, even when it doesn't feel that cold.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A1214-1DD8-B71B-0B00D823BD9BF4CF.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Lake Clark National Park & Preserve",
    designation: "National Park & Preserve",
    description: "Lake Clark is a land of stunning beauty. Volcanoes steam, salmon run, bears forage, and craggy mountains reflect in shimmering turquoise lakes.",
    weatherInfo: "Lake Clark has two distinct climate areas: the coast and the interior. The coast is wetter and experiences milder temperatures. The interior gets half to one fourth as much precipitation.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A9F9E-1DD8-B71B-0B6CEC8EF3F377DA.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Lassen Volcanic National Park",
    designation: "National Park",
    description: "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.",
    weatherInfo: "Weather at Lassen can vary dramatically throughout the year. Average January temperatures are a high of 40.4 °F and a low of 20.8 °F.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C873811-1DD8-B71B-0B9C62ED8E12E7B5.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Mammoth Cave National Park",
    designation: "National Park",
    description: "Rolling hills, deep river valleys, and the worlds longest known cave system. Mammoth Cave National Park is home to thousands of years of human history and a rich diversity of plant and animal life.",
    weatherInfo: "Kentucky has a moderate climate with warm, yet moist conditions. Summers average in the high 80s; winters average in the low 40s.",
    image: "https://www.nps.gov/common/uploads/structured_data/95EAA431-F26B-66EB-E9E6B108F47F70B0.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Mesa Verde National Park",
    designation: "National Park",
    description: "This wild landscape of deep canyons and expansive vistas is home to over a thousand species, including several that live nowhere else on earth.",
    weatherInfo: "Spring: Temps range from 40 F to 70 F, but snowstorms can occur as late as May. Summer: Temps can reach well into the 90s F. Thunderstorms are common in July and August.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7C0089-1DD8-B71B-0BC397BA671C0616.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Mount Rainier National Park",
    designation: "National Park",
    description: "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous USA, spawning five major rivers.",
    weatherInfo: "Weather patterns at Mount Rainier are strongly influenced by the Pacific Ocean and elevation. The climate is generally cool and rainy, with summer highs in the 60s and 70s.",
    image: "https://www.nps.gov/common/uploads/structured_data/49F34094-B893-7DD6-5AE0F0220724B0EF.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "New River Gorge National Park & Preserve",
    designation: "National Park & Preserve",
    description: "A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, is rich in cultural and natural history.",
    weatherInfo: "Weather in the Appalachian Mountains can be unpredictable and can change quickly. Always be prepared for the possibility of sudden storms.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7E8C70-1DD8-B71B-0B00C7B2373E386E.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "North Cascades National Park",
    designation: "National Park",
    description: "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers.",
    weatherInfo: "The best weather for visiting the North Cascades generally occurs between mid-June and late-September. Summer daytime temperatures average in the 70's F.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Olympic National Park",
    designation: "National Park",
    description: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness and thousands of years of human history.",
    weatherInfo: "Summers tend to be fair and warm, with high temperatures between 65 and 75 degrees F. July, August and September are the driest months, with heavier precipitation during the rest of the year.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7B1DB4-1DD8-B71B-0B9DFEFDD398DB71.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Petrified Forest National Park",
    designation: "National Park",
    description: "Petrified Forest National Park is a semi-arid grassland.",
    weatherInfo: "Temperatures range from above 100° F to well below freezing. About 10 inches of moisture comes during infrequent snow in the winter and often dramatic summer thunder-storms.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7D8213-1DD8-B71B-0BE4A3B9394FD89A.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Pinnacles National Park",
    designation: "National Park",
    description: "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms.",
    weatherInfo: "Pinnacles National Park has a Mediterranean climate with hot, dry summers, and mild winters with moderate precipitation. The park is several miles inland from the Pacific Ocean.",
    image: "https://www.nps.gov/common/uploads/structured_data/9CCA8ED3-ABB9-CB69-EF4B32F2ADACEC47.jpeg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Redwood National and State Parks",
    designation: "National and State Parks",
    description: "Most people know Redwood as home to the tallest trees on Earth. But the Parks also protect vast prairies, oak woodlands, wild rivers, and 40 miles of rugged coastline. People have lived in this verdant landscape since time immemorial.",
    weatherInfo: "Visitors should be prepared for cooler and damp weather. Dress in layers and expect to get wet. Year-round temperatures along California's redwood coast: mid-40s°F to mid-60s°F.",
    image: "https://www.nps.gov/common/uploads/structured_data/CD559BD9-FAB5-0FA1-F544AB5BF977C571.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Rocky Mountain National Park",
    designation: "National Park",
    description: "415 square miles encompass a spectacular range of mountain environments. From meadows found in the montane life zone to the glistening lakes in the subalpine zone and to the mountain peaks located in the alpine zone.",
    weatherInfo: "Winter: cold weather, deep snow at higher elevations, and seasonal closures of facilities and roads. Spring: unpredictable weather, with a mix of warm sunny days and cool days with heavy snow and rain.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7ECE39-1DD8-B71B-0BAA393EB3C3A995.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Saguaro National Park",
    designation: "National Park",
    description: "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park.",
    weatherInfo: "Winter Season has daytime temperature from the low 50's to the high 70's. As we get deeper into the summer season, temperatures will range from mid-90's to low 110's.",
    image: "https://www.nps.gov/common/uploads/structured_data/5CB8B2F6-01B7-9A50-73702A355E4136B8.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Sequoia National Park",
    designation: "National Park",
    description: "Huge mountains, rugged foothills, deep canyons, vast caverns, and the world’s largest trees exemplify the diversity of landscapes, life, and beauty here.",
    weatherInfo: "Because of the extreme elevation range in these parks, weather conditions vary widely between areas. In summer, the sequoia groves have comfortable temperatures and the foothills are hot and dry.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7A250B-1DD8-B71B-0BCF61A89A8B2970.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Shenandoah National Park",
    designation: "National Park",
    description: "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows.",
    weatherInfo: "Shenandoah National Park has four very distinct seasons. Spring typically brings mild temperatures, rain, and wildflowers. Summer brings lush green forests, but can be hot and very humid.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C80B539-1DD8-B71B-0BEAAA4AC31E7D5B.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Theodore Roosevelt National Park",
    designation: "National Park",
    description: "The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
    weatherInfo: "In winter, some or all park roads may be closed due to snow.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C793AD5-1DD8-B71B-0B4A3C1BFA5B4C83.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Virgin Islands National Park",
    designation: "National Park",
    description: "Hike to historic plantation sites to learn about a challenging past when sugar and enslaved labor dominated life on the island. Visit the Indigenous Taino's ancient petroglyphs. Snorkel coral reefs to discover hidden marine life.",
    weatherInfo: "The Tradewinds (the Easterlies) dominate the weather in the Virgin Islands, blowing east to west across the tropical Atlantic. The winter tends to bring stronger winds and less rain.",
    image: "https://www.nps.gov/common/uploads/structured_data/1F0534AF-91EB-443B-41760F790BE42778.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Voyageurs National Park",
    designation: "National Park",
    description: "With 218,055 acres, Voyageurs National Park is an adventure wonderland all year long full of exposed rock ridges, cliffs, wetlands, forests, streams and lakes.",
    weatherInfo: "There are four distinct seasons in Voyageur country. The air is temperate during June, July, and August when periods of fine, mild weather prevail.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C8405EF-1DD8-B71B-0B42909E4E77E144.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "White Sands National Park",
    designation: "National Park",
    description: "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield.",
    weatherInfo: "Temperatures at White Sands vary greatly throughout the year. Summer time temperatures can be very hot. Winters are mild with cool evenings. Spring time is the windy season.",
    image: "https://www.nps.gov/common/uploads/structured_data/7CA16410-A412-1F05-2D92EB04EEB27980.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Wind Cave National Park",
    designation: "National Park",
    description: "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world.",
    weatherInfo: "Spring: Highs range from 50-70°F with highly variable weather. Spring is the park's wettest season. Summer: Hot and generally dry with daytime temperatures regularly exceeding 80°F.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7ACE71-1DD8-B71B-0BBD14BFE8C0C468.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Wrangell - St. Elias National Park & Preserve",
    designation: "National Park & Preserve",
    description: "A vast national park that rises from the ocean all the way up to 18,008 ft. At 13.2 million acres, the park is the same size as Yellowstone National Park, Yosemite National Park, and Switzerland combined!",
    weatherInfo: "Weather varies widely depending on location in park and time of year.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7AAD63-1DD8-B71B-0BCE10FFD741A687.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Yellowstone National Park",
    designation: "National Park",
    description: "Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park. Yellowstone's weather can vary quite a bit, even in a single day.",
    weatherInfo: "In the summer, daytime highs can exceed 70°F, only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below 0°F.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Yosemite National Park",
    designation: "National Park",
    description: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.",
    weatherInfo: "Yosemite receives 95% of its precipitation between October and May (and over 75% between November and March). Most of Yosemite is blanketed in snow from about November through May.",
    image: "https://www.nps.gov/common/uploads/structured_data/05383E91-AA28-2DDC-AB517507594F9FA6.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: "Zion National Park",
    designation: "National Park",
    description: "Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon.",
    weatherInfo: "Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7F04EA-1DD8-B71B-0BF8CE99D6958A0E.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
   },
  ])   
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
