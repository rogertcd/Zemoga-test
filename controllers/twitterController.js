const Twitter =  require('twitter-node-client').Twitter;
require('dotenv').config();

let twitter = new Twitter({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let tweetToDto = (tweet) => {
    return {
        text: tweet.text,
        name: tweet.user.name,
        screen_name: tweet.user.screen_name,
        location: tweet.user.location,
        profile_image_url: tweet.user.profile_image_url_https
    }
}

exports.getTweets = (twitterUser) => {
    return new Promise(async (resolve, reject) => {
        twitter.getUserTimeline({ screen_name: twitterUser, count: '5' },
            (error, response, body) => {
                console.log(error);
                reject("No se pudo recuperar los Tweets del usuario");
            },
            (data) => {
                let jsonArray = JSON.parse(data);
                let alltweet = jsonArray.map(tweet => tweetToDto(tweet));
                resolve(alltweet)
            });
    });
};