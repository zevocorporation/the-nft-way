//For handling subscriptions
const { PubSub, withFilter } = require('apollo-server-express');
const pubsub = new PubSub();

const NEW_ART_AUCTION = 'NEW_ART_AUCTION';
const NEW_BID_PLACED = 'NEW_BID_PLACED';

// MUTATIONS
exports.mutationResolver = {
  sellArt: async (_, args) => {
    try {
      const auctionItem = {
        imageURI: 'IPFS link',
        title: 'Roman God',
        description: 'Lorem ipsum',
        createdBy: '1x6uovxryi4674vv8i5',
        ownedBy: '1x79ovxryi4674vv8i5',
        bidCreatedAt: '14:00 PM',
      };

      //PUBLISH TO SUBSCRIPTION
      pubsub.publish(NEW_ART_AUCTION, auctionItem);

      //RESULT
      return auctionItem;
    } catch (err) {
      throw err;
    }
  },
  placeBid: async (_, args) => {
    try {
      const currentBid = {
        value: 45.7,
        unit: 'ETH',
        placedBy: '1x79ovxryi4674vv8i5',
        placedOn: '15:00 pm',
      };

      //PUBLISH TO SUBSCRIPTION
      pubsub.publish(NEW_BID_PLACED, currentBid);

      //RESULT
      return true;
    } catch (err) {
      throw err;
    }
  },
};

//SUBSCRIPTIONS
exports.subscriptionResolver = {
  //CHAT SUBSCRIPTION WITH FILTER
  subscribeLiveAuctions: {
    subscribe: () => pubsub.asyncIterator(NEW_ART_AUCTION),
  },

  getCurrentBid: {
    subscribe: () => pubsub.asyncIterator(NEW_BID_PLACED),
  },
};
