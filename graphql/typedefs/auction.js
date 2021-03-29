exports.types = `

type AuctionItem{
    imageURI : String!
    title : String!
    description : String!
    createdBy : String!
    ownedBy : String!
    bidCreatedAt : String!
}

type CurrentBid{
    value : Float!
    unit : String!
    placedBy : String!
    placedOn : String!
}

type NFTHistory{
    transactionTime : String!
    owner : String!
}
`;

exports.queries = `
    getAuctionHistory(liveAuctionId:String!):[AuctionItem!]
    getNFTHistory(id:String!):[NFTHistory!]
`;

exports.mutations = `
    placeBid(address:String!, amount:Int!):Boolean!
    sellArt:AuctionItem!
`;

exports.subscriptions = `
    subscribeLiveAuctions:[AuctionItem!]
    getCurrentBid(id:String!):CurrentBid!
`;
