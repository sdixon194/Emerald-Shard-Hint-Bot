const fs = require( 'fs' );
const path = require( 'path' );
const tumblr = require( 'tumblr.js' );
const config = require( path.join( __dirname, 'config.js' ) );
const client = tumblr.createClient( config );
const hintList = require( path.join( __dirname, 'hintList.js' ) )

let list = [];
let timeToPost = 10000;

// Obtain a random post from the list.
function pickPost(){
  if ( ! list.length ){
      list = hintList.slice();
  }
  let postContent = list.splice( Math.floor( Math.random() * list.length ), 1 )[0];
  post( postContent );
}

// Post the post.
function post( content ){
	client.createPost(
		'emeraldshardhintbot',
		{
			"body": content,
			"tags": "sonic,sonic adventure,bot post"
		},
		function ( err, data, response ) {
			if ( err ){
			  console.log( 'error:', err );
			}
			else{
			  console.log( 'post sent!... ' + content);
			}
		}
	);
	timeToPost = 86400000 - (Math.floor(Math.random() * 13) * 3600000);
	console.log("next post is in " + timeToPost/3600000 + " hours");
	setTimeout(pickPost, timeToPost);
}

//Post from hintList
setTimeout(pickPost, timeToPost);



/* 
 * Legacy lists for when the Twitter bot could reply to people. It would respond depending on keywords in the tweet.
 * Tumblr doesn't seem to have a stream to see if someone reblogged a post, so can't do that yet. 
 */

const copList = [" There always seems to be a lot of police around when you don't need them!"];

const trumpList = [" Mr. President, this is a national crisis."];

const questionList = [ "If I tell you, will you marry me?"];

const shadowList = [" Sayonara, Shadow the Hedgehog...",
  " He was who he was. A brave and heroic hedgehog who gave his life to save the planet. Shadow the Hedgehog...",
  " The reason I'm here is because of that fake hedgehog"
];

const sonicList = [" That blue hedgehog again, of all places.",
  " What you see is what you get. Just a hedgehog that loves adventure.",
  " I found you...faker.",
  " I'll make you eat those words."
];

const emeraldList = [" The master emerald contains special powers that neutralize the energy of the chaos emerald. That makes it very powerful.",
  " The Chaos Emeralds are like magnets...they have the power to attract each other.",
  " Long time no see treasure hunter. Did you find MY Emeralds?",
  " Hand over the Chaos Emerald, slowly, and then we will talk about your girlfriend! That is if you really care for her...",
  " You thought you could trick me with that fake Emerald, didn't you?",
  " I will get the Chaos Emeralds, use the machine to dominate the world and build a legacy of my own!",
  " I can't believe that I'm trapped inside this locked safe with the Chaos Emeralds!",
  " Put the Emerald down right there and BACK OFF!"
];

const defaultList = [" You're not even good enough to be my fake.",
  " I'll make you eat those words.",
  " Letting Knuckles pilot the shuttle over here was more dangerous than you'll ever be.",
  " This place sure feels haunted.",
  " Look, half of the moon is gone!?",
  " There always seems to be a lot of police around when you don't need them!",
  " Tornado...Transformation!",
  " Hah, hah, hah! Citizens of earth, lend me your ears and listen to me very carefully!",
  " Our financial communities are impacted and our satellite communications are down.",
  " I won't bore you with all the details since I know you are a very busy man. ",
  " Huh...that was pretty rough.",
  " What are you blabbing about? You call yourself a hunter?",
  " I managed to find the transcripts between Eggman and the President in the government computer.",
  " Oh, so that's why we needed the Chaos Emerald.",
  " Oh-ho! So this is the military's top-secret weapon. It's a lot smaller than I expected.",
  " I often wonder why I was created; what my purpose if for being here.",
  " Look at you, throwing a tantrum like a little kid. How totally embarrassing.",
  " I don't quite know what happened, or what went wrong. Was it a mistake to create the Ultimate Life Form?",
  " Let's go home! To the planet as cool and blue as me!",
  " Nah, I think I'm gonna give up this line of work. Too much work, for too little pay."
];

const possibleMatches = {
	shadow: shadowList,
	cop: copList,
	police: copList,
	trump: trumpList,
	president: trumpList,
	sonic: sonicList,
	sanic: sonicList, 
	emerald: emeraldList,
	shard: emeraldList,
	gem: emeraldList,
	chaos: emeraldList,
	"?": questionList
  };