import campsitePhoto1 from './campsite1.jpg';
import campsitePhoto2 from './campsite2.jpg';
import featuresMock1 from './features1';
import featuresMock2 from './features2';

// Note: this function simulates an API call but would not be used in production
const getCampsiteInfoFromAPI = id => {
  return new Promise((resolve, reject) => {
    const result = {
      '1': {
        title: 'Bath Hollow Farm @ CVNP',
        description: `Pitch your tent at the edge of the woods on our little farm. It's just across the street from the Cuyahoga Valley National Park, and we are so proud to have this awesome resource in our back yard! You'll have easy access to the Ohio & Erie Canal towpath trail and the new Hampton Hills mountain bike trails, plus over 100 miles of hiking trails a short drive away. You could also spend the day close to camp exploring the woods and ravine on our 28 acres and relaxing next to Woodward Creek. We are also just a 5 minute drive from great restaurants, groceries, and even a movie theater - the best of both worlds :-). We love hiking, biking, and trail running in CVNP and we can share lots of suggestions for the best places to see. Depending on the season we might also have some blackberries to pick!`,
        location: 'Akron, Ohio',
        image: campsitePhoto1,
        features: featuresMock1,
        id: '1'
      },
      '2': {
        title: 'Farm Stay Tent Camping',
        description: `Pitch your tent in our meadow, which comprises three of our seven acres. You will have a private area with a brilliant view of the stars as our street has no street lights. Our composting toilet is in a comfortable outhouse. We have chickens, ducks, bees, a rabbit, and a mini-horse. We are less than a half mile from Lake Erie, and 15 minutes from dozens of wineries, a coffee house and roaster, fine dining, and a marina where you can rent a boat, a kayak, or a paddle board. We offer fresh eggs, honey, sourdough bread, and beverages. We have a large organic garden, and you are welcome to help with chores if that is of interest. We also have an onsite art studio and a wide range of art supplies available. We grow, raise, and make much of our own food, and we enjoy sharing with others what we do.`,
        location: 'Kent, Ohio',
        image: campsitePhoto2,
        features: featuresMock2,
        id: '2'
      }
    }[id];
    if (id && result) {
      resolve(result);
    } else {
      reject(new Error('API call failed!'));
    }
  });
};

export default getCampsiteInfoFromAPI;
