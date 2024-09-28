export const getCurrentDomain = (callback: (url: string | null) => void) => {
	let queryOptions = { active: true, lastFocusedWindow: true };

	// Use the callback-based chrome.tabs.query API
	chrome.tabs.query(queryOptions, (tabs) => {
		if (tabs.length > 0 && tabs[0].url) {
			// get domain
			const url = new URL(tabs[0].url);
			const domain = url.hostname;
			callback(domain); // Call the callback with the tab's URL
		} else {
			callback(null); // Call the callback with null if no active tab found
		}
	});
};

export const formatTime = (seconds: number) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	return `${hours} h, ${minutes} m, ${remainingSeconds} s`;
};

export const formatTimeMinutes = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	return `${minutes} min`;
};

export const getAllCategories = () => {
	return [
		{
			Domain: "facebook.com",
			Category: "Entertainment",
		},
		{
			Domain: "fonts.googleapis.com",
			Category: "Productivity",
		},
		{
			Domain: "google.com",
			Category: "Productivity",
		},
		{
			Domain: "youtube.com",
			Category: "Entertainment.",
		},
		{
			Domain: "twitter.com",
			Category: "News",
		},
		{
			Domain: "googletagmanager.com",
			Category: "Productivity",
		},
		{
			Domain: "instagram.com",
			Category: "Entertainment",
		},
		{
			Domain: "linkedin.com",
			Category: "Productivity",
		},
		{
			Domain: "fonts.gstatic.com",
			Category: "Productivity",
		},
		{
			Domain: "gmpg.org",
			Category: "Productivity",
		},
		{
			Domain: "maps.google.com",
			Category: "Productivity.",
		},
		{
			Domain: "ajax.googleapis.com",
			Category: "Productivity",
		},
		{
			Domain: "youtu.be",
			Category: "Entertainment.",
		},
		{
			Domain: "cdnjs.cloudflare.com",
			Category: "Productivity",
		},
		{
			Domain: "play.google.com",
			Category: "Productivity",
		},
		{
			Domain: "github.com",
			Category: "Productivity",
		},
		{
			Domain: "support.google.com",
			Category: "Productivity.",
		},
		{
			Domain: "plus.google.com",
			Category: "Productivity.",
		},
		{
			Domain: "en.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "drive.google.com",
			Category: "Productivity",
		},
		{
			Domain: "docs.google.com",
			Category: "Productivity",
		},
		{
			Domain: "wordpress.org",
			Category: "Productivity",
		},
		{
			Domain: "pinterest.com",
			Category: "Productivity.",
		},
		{
			Domain: "goo.gl",
			Category: "Productivity",
		},
		{
			Domain: "developers.google.com",
			Category: "Productivity",
		},
		{
			Domain: "bit.ly",
			Category: "Productivity",
		},
		{
			Domain: "policies.google.com",
			Category: "Productivity",
		},
		{
			Domain: "amazon.com",
			Category: "Productivity",
		},
		{
			Domain: "cloudflare.com",
			Category: "Productivity",
		},
		{
			Domain: "google-analytics.com",
			Category: "Productivity",
		},
		{
			Domain: "vimeo.com",
			Category: "Entertainment",
		},
		{
			Domain: "vk.com",
			Category: "Entertainment",
		},
		{
			Domain: "itunes.apple.com",
			Category: "Productivity.",
		},
		{
			Domain: "secure.gravatar.com",
			Category: "Productivity",
		},
		{
			Domain: "creativecommons.org",
			Category: "Education",
		},
		{
			Domain: "tiktok.com",
			Category: "Entertainment",
		},
		{
			Domain: "medium.com",
			Category: "Education",
		},
		{
			Domain: "apps.apple.com",
			Category: "Productivity",
		},
		{
			Domain: "open.spotify.com",
			Category: "Entertainment",
		},
		{
			Domain: "lh3.googleusercontent.com",
			Category: "Other",
		},
		{
			Domain: "storage.googleapis.com",
			Category: "Productivity",
		},
		{
			Domain: "gstatic.com",
			Category: "Productivity",
		},
		{
			Domain: "player.vimeo.com",
			Category: "Entertainment",
		},
		{
			Domain: "sites.google.com",
			Category: "Productivity.",
		},
		{
			Domain: "ec.europa.eu",
			Category: "News",
		},
		{
			Domain: "cdn.jsdelivr.net",
			Category: "Productivity",
		},
		{
			Domain: "accounts.google.com",
			Category: "Productivity",
		},
		{
			Domain: "t.me",
			Category: "Productivity",
		},
		{
			Domain: "soundcloud.com",
			Category: "Entertainment",
		},
		{
			Domain: "paypal.com",
			Category: "Productivity",
		},
		{
			Domain: "flickr.com",
			Category: "Entertainment",
		},
		{
			Domain: "microsoft.com",
			Category: "Productivity",
		},
		{
			Domain: "chrome.google.com",
			Category: "Productivity",
		},
		{
			Domain: "forms.gle",
			Category: "Productivity.",
		},
		{
			Domain: "code.jquery.com",
			Category: "Productivity",
		},
		{
			Domain: "support.apple.com",
			Category: "Productivity",
		},
		{
			Domain: "tinyurl.com",
			Category: "Productivity",
		},
		{
			Domain: "bbc.co.uk",
			Category: "News",
		},
		{
			Domain: "reddit.com",
			Category: "Entertainment",
		},
		{
			Domain: "nytimes.com",
			Category: "News",
		},
		{
			Domain: "archive.org",
			Category: "Education",
		},
		{
			Domain: "imdb.com",
			Category: "Entertainment",
		},
		{
			Domain: "w3.org",
			Category: "Education",
		},
		{
			Domain: "who.int",
			Category: "News",
		},
		{
			Domain: "theguardian.com",
			Category: "News",
		},
		{
			Domain: "podcasts.apple.com",
			Category: "Entertainment",
		},
		{
			Domain: "apple.com",
			Category: "Productivity",
		},
		{
			Domain: "support.cloudflare.com",
			Category: "Productivity",
		},
		{
			Domain: "mail.google.com",
			Category: "Productivity",
		},
		{
			Domain: "arxiv.org",
			Category: "Education",
		},
		{
			Domain: "linktr.ee",
			Category: "Productivity",
		},
		{
			Domain: "forbes.com",
			Category: "News",
		},
		{
			Domain: "x.com",
			Category: "Other",
		},
		{
			Domain: "support.microsoft.com",
			Category: "Productivity.",
		},
		{
			Domain: "meetup.com",
			Category: "Productivity.",
		},
		{
			Domain: "twitch.tv",
			Category: "Entertainment",
		},
		{
			Domain: "amazon.de",
			Category: "Productivity",
		},
		{
			Domain: "dropbox.com",
			Category: "Productivity",
		},
		{
			Domain: "mozilla.org",
			Category: "Productivity",
		},
		{
			Domain: "s3.amazonaws.com",
			Category: "Productivity",
		},
		{
			Domain: "bbc.com",
			Category: "News",
		},
		{
			Domain: "patreon.com",
			Category: "Productivity",
		},
		{
			Domain: "store.steampowered.com",
			Category: "Productivity",
		},
		{
			Domain: "web.archive.org",
			Category: "Productivity.",
		},
		{
			Domain: "gmail.com",
			Category: "Productivity.",
		},
		{
			Domain: "eur-lex.europa.eu",
			Category: "Education",
		},
		{
			Domain: "discord.gg",
			Category: "Productivity",
		},
		{
			Domain: "bing.com",
			Category: "Productivity",
		},
		{
			Domain: "ncbi.nlm.nih.gov",
			Category: "Education",
		},
		{
			Domain: "news.google.com",
			Category: "News",
		},
		{
			Domain: "maps.googleapis.com",
			Category: "Productivity",
		},
		{
			Domain: "analytics.google.com",
			Category: "Productivity",
		},
		{
			Domain: "adobe.com",
			Category: "Productivity.",
		},
		{
			Domain: "ad.doubleclick.net",
			Category: "Productivity",
		},
		{
			Domain: "washingtonpost.com",
			Category: "News",
		},
		{
			Domain: "amzn.to",
			Category: "Productivity",
		},
		{
			Domain: "blog.google",
			Category: "News",
		},
		{
			Domain: "s.w.org",
			Category: "Education",
		},
		{
			Domain: "support.mozilla.org",
			Category: "Support",
		},
		{
			Domain: "wired.com",
			Category: "News",
		},
		{
			Domain: "dx.doi.org",
			Category: "Education",
		},
		{
			Domain: "calendar.google.com",
			Category: "Productivity",
		},
		{
			Domain: "kickstarter.com",
			Category: "Productivity",
		},
		{
			Domain: "api.whatsapp.com",
			Category: "Productivity",
		},
		{
			Domain: "npr.org",
			Category: "News",
		},
		{
			Domain: "wp.me",
			Category: "Productivity",
		},
		{
			Domain: "google.it",
			Category: "Productivity",
		},
		{
			Domain: "tools.google.com",
			Category: "Productivity.",
		},
		{
			Domain: "t.co",
			Category: "Productivity",
		},
		{
			Domain: "canva.com",
			Category: "Productivity",
		},
		{
			Domain: "platform.twitter.com",
			Category: "Productivity",
		},
		{
			Domain: "shopify.com",
			Category: "Productivity",
		},
		{
			Domain: "ebay.com",
			Category: "Productivity",
		},
		{
			Domain: "weforum.org",
			Category: "News",
		},
		{
			Domain: "m.youtube.com",
			Category: "Entertainment",
		},
		{
			Domain: "businessinsider.com",
			Category: "News",
		},
		{
			Domain: "schema.org",
			Category: "Education",
		},
		{
			Domain: "nasa.gov",
			Category: "Education",
		},
		{
			Domain: "opera.com",
			Category: "Productivity.",
		},
		{
			Domain: "tumblr.com",
			Category: "Entertainment",
		},
		{
			Domain: "fb.me",
			Category: "Entertainment.",
		},
		{
			Domain: "bloomberg.com",
			Category: "News",
		},
		{
			Domain: "wa.me",
			Category: "Productivity.",
		},
		{
			Domain: "i.ytimg.com",
			Category: "Productivity.",
		},
		{
			Domain: "techcrunch.com",
			Category: "News",
		},
		{
			Domain: "stripe.com",
			Category: "Productivity",
		},
		{
			Domain: "eventbrite.com",
			Category: "Productivity",
		},
		{
			Domain: "oracle.com",
			Category: "Productivity",
		},
		{
			Domain: "issuu.com",
			Category: "Productivity",
		},
		{
			Domain: "maxcdn.bootstrapcdn.com",
			Category: "Productivity",
		},
		{
			Domain: "last.fm",
			Category: "Entertainment.",
		},
		{
			Domain: "behance.net",
			Category: "Productivity",
		},
		{
			Domain: "slideshare.net",
			Category: "Productivity",
		},
		{
			Domain: "google.de",
			Category: "Productivity",
		},
		{
			Domain: "aws.amazon.com",
			Category: "Productivity",
		},
		{
			Domain: "zazzle.com",
			Category: "Productivity",
		},
		{
			Domain: "buzzfeed.com",
			Category: "Entertainment",
		},
		{
			Domain: "img.youtube.com",
			Category: "Entertainment",
		},
		{
			Domain: "lulu.com",
			Category: "Productivity",
		},
		{
			Domain: "g.page",
			Category: "Productivity",
		},
		{
			Domain: "ibm.com",
			Category: "Productivity",
		},
		{
			Domain: "time.com",
			Category: "News",
		},
		{
			Domain: "shorturl.at",
			Category: "Productivity",
		},
		{
			Domain: "ko-fi.com",
			Category: "Productivity",
		},
		{
			Domain: "g.co",
			Category: "Productivity",
		},
		{
			Domain: "google.co.uk",
			Category: "Productivity.",
		},
		{
			Domain: "sciencedirect.com",
			Category: "Education",
		},
		{
			Domain: "gov.uk",
			Category: "'Government'",
		},
		{
			Domain: "ted.com",
			Category: "Education",
		},
		{
			Domain: "myaccount.google.com",
			Category: "Productivity",
		},
		{
			Domain: "change.org",
			Category: "Productivity",
		},
		{
			Domain: "amazon.co.uk",
			Category: "Productivity",
		},
		{
			Domain: "transparencyreport.google.com",
			Category: "Productivity",
		},
		{
			Domain: "reuters.com",
			Category: "News",
		},
		{
			Domain: "cloud.google.com",
			Category: "Productivity",
		},
		{
			Domain: "theatlantic.com",
			Category: "News",
		},
		{
			Domain: "commons.wikimedia.org",
			Category: "Education",
		},
		{
			Domain: "docs.microsoft.com",
			Category: "Productivity.",
		},
		{
			Domain: "greenpeace.org",
			Category: "News",
		},
		{
			Domain: "etsy.com",
			Category: "Productivity",
		},
		{
			Domain: "myspace.com",
			Category: "Entertainment",
		},
		{
			Domain: "buymeacoffee.com",
			Category: "Productivity",
		},
		{
			Domain: "strava.com",
			Category: "Productivity",
		},
		{
			Domain: "cdc.gov",
			Category: "News",
		},
		{
			Domain: "quora.com",
			Category: "Education",
		},
		{
			Domain: "developer.mozilla.org",
			Category: "Education",
		},
		{
			Domain: "groups.google.com",
			Category: "Productivity",
		},
		{
			Domain: "theverge.com",
			Category: "Entertainment",
		},
		{
			Domain: "note.com",
			Category: "Productivity",
		},
		{
			Domain: "unsplash.com",
			Category: "Productivity",
		},
		{
			Domain: "cnbc.com",
			Category: "News",
		},
		{
			Domain: "netflix.com",
			Category: "Entertainment",
		},
		{
			Domain: "search.google.com",
			Category: "Productivity",
		},
		{
			Domain: "blogger.com",
			Category: "Productivity.",
		},
		{
			Domain: "statista.com",
			Category: "Education",
		},
		{
			Domain: "a.co",
			Category: "Productivity",
		},
		{
			Domain: "youtube-nocookie.com",
			Category: "Entertainment",
		},
		{
			Domain: "mailchimp.com",
			Category: "Productivity",
		},
		{
			Domain: "nature.com",
			Category: "Education",
		},
		{
			Domain: "ads.google.com",
			Category: "Productivity",
		},
		{
			Domain: "wordpress.com",
			Category: "Productivity",
		},
		{
			Domain: "de.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "mashable.com",
			Category: "News",
		},
		{
			Domain: "m.facebook.com",
			Category: "Entertainment",
		},
		{
			Domain: "telegraph.co.uk",
			Category: "News",
		},
		{
			Domain: "paypal.me",
			Category: "Productivity",
		},
		{
			Domain: "researchgate.net",
			Category: "Education",
		},
		{
			Domain: "venmo.com",
			Category: "Productivity",
		},
		{
			Domain: "translate.google.com",
			Category: "Productivity",
		},
		{
			Domain: "google.co.jp",
			Category: "Productivity",
		},
		{
			Domain: "yelp.com",
			Category: "Productivity",
		},
		{
			Domain: "googleadservices.com",
			Category: "Productivity",
		},
		{
			Domain: "wsj.com",
			Category: "News",
		},
		{
			Domain: "cnn.com",
			Category: "News",
		},
		{
			Domain: "dailymail.co.uk",
			Category: "News",
		},
		{
			Domain: "use.fontawesome.com",
			Category: "Productivity",
		},
		{
			Domain: "j.mp",
			Category: "Productivity",
		},
		{
			Domain: "gofundme.com",
			Category: "Productivity",
		},
		{
			Domain: "deezer.com",
			Category: "Entertainment",
		},
		{
			Domain: "fb.watch",
			Category: "Entertainment",
		},
		{
			Domain: "lh5.googleusercontent.com",
			Category: "Productivity",
		},
		{
			Domain: "imgur.com",
			Category: "Entertainment",
		},
		{
			Domain: "slate.com",
			Category: "News",
		},
		{
			Domain: "earth.google.com",
			Category: "Productivity",
		},
		{
			Domain: "trello.com",
			Category: "Productivity",
		},
		{
			Domain: "zoom.us",
			Category: "Productivity",
		},
		{
			Domain: "weibo.com",
			Category: "Entertainment",
		},
		{
			Domain: "unpkg.com",
			Category: "Productivity",
		},
		{
			Domain: "static.wixstatic.com",
			Category: "Productivity",
		},
		{
			Domain: "booking.com",
			Category: "Productivity",
		},
		{
			Domain: "mckinsey.com",
			Category: "Productivity",
		},
		{
			Domain: "whitehouse.gov",
			Category: "News",
		},
		{
			Domain: "code.google.com",
			Category: "Productivity",
		},
		{
			Domain: "calendly.com",
			Category: "Productivity",
		},
		{
			Domain: "about.google",
			Category: "Productivity",
		},
		{
			Domain: "yahoo.com",
			Category: "News",
		},
		{
			Domain: "blog.naver.com",
			Category: "Entertainment",
		},
		{
			Domain: "services.google.com",
			Category: "Productivity",
		},
		{
			Domain: "static.googleusercontent.com",
			Category: "Productivity",
		},
		{
			Domain: "sourceforge.net",
			Category: "Productivity",
		},
		{
			Domain: "openai.com",
			Category: "Education",
		},
		{
			Domain: "un.org",
			Category: "News",
		},
		{
			Domain: "tripadvisor.com",
			Category: "Productivity",
		},
		{
			Domain: "ameblo.jp",
			Category: "Entertainment",
		},
		{
			Domain: "huffingtonpost.com",
			Category: "News",
		},
		{
			Domain: "independent.co.uk",
			Category: "News",
		},
		{
			Domain: "msn.com",
			Category: "News",
		},
		{
			Domain: "i.imgur.com",
			Category: "Entertainment.",
		},
		{
			Domain: "googleads.g.doubleclick.net",
			Category: "Productivity.",
		},
		{
			Domain: "developer.apple.com",
			Category: "Productivity",
		},
		{
			Domain: "blog.hubspot.com",
			Category: "Education",
		},
		{
			Domain: "surveymonkey.com",
			Category: "Productivity",
		},
		{
			Domain: "steamcommunity.com",
			Category: "Entertainment",
		},
		{
			Domain: "godaddy.com",
			Category: "Productivity",
		},
		{
			Domain: "is.gd",
			Category: "Productivity",
		},
		{
			Domain: "discord.com",
			Category: "Productivity",
		},
		{
			Domain: "mailchi.mp",
			Category: "Productivity.",
		},
		{
			Domain: "polyfill.io",
			Category: "Productivity.",
		},
		{
			Domain: "doi.org",
			Category: "Education",
		},
		{
			Domain: "discogs.com",
			Category: "Productivity",
		},
		{
			Domain: "ft.com",
			Category: "News",
		},
		{
			Domain: "usatoday.com",
			Category: "News",
		},
		{
			Domain: "developers.facebook.com",
			Category: "Productivity",
		},
		{
			Domain: "maps.app.goo.gl",
			Category: "Productivity",
		},
		{
			Domain: "pixabay.com",
			Category: "Productivity",
		},
		{
			Domain: "music.youtube.com",
			Category: "Entertainment",
		},
		{
			Domain: "europa.eu",
			Category: "Education",
		},
		{
			Domain: "stackoverflow.com",
			Category: "Education",
		},
		{
			Domain: "pexels.com",
			Category: "Productivity",
		},
		{
			Domain: "whatsapp.com",
			Category: "Productivity",
		},
		{
			Domain: "pbs.org",
			Category: "Education",
		},
		{
			Domain: "finance.yahoo.com",
			Category: "News",
		},
		{
			Domain: "music.apple.com",
			Category: "Entertainment",
		},
		{
			Domain: "salesforce.com",
			Category: "Productivity",
		},
		{
			Domain: "books.google.com",
			Category: "Productivity",
		},
		{
			Domain: "matrix.to",
			Category: "Productivity",
		},
		{
			Domain: "edition.cnn.com",
			Category: "News",
		},
		{
			Domain: "link.springer.com",
			Category: "Education",
		},
		{
			Domain: "upload.wikimedia.org",
			Category: "Education",
		},
		{
			Domain: "moz.com",
			Category: "Education",
		},
		{
			Domain: "walmart.com",
			Category: "Productivity.",
		},
		{
			Domain: "cbsnews.com",
			Category: "News",
		},
		{
			Domain: "blog.youtube",
			Category: "Entertainment",
		},
		{
			Domain: "giphy.com",
			Category: "Entertainment",
		},
		{
			Domain: "www2.deloitte.com",
			Category: "Productivity",
		},
		{
			Domain: "dailymotion.com",
			Category: "Entertainment",
		},
		{
			Domain: "example.com",
			Category: "Other",
		},
		{
			Domain: "economist.com",
			Category: "News",
		},
		{
			Domain: "apnews.com",
			Category: "News.",
		},
		{
			Domain: "de-de.facebook.com",
			Category: "Entertainment",
		},
		{
			Domain: "ftc.gov",
			Category: "Education",
		},
		{
			Domain: "ico.org.uk",
			Category: "Productivity",
		},
		{
			Domain: "forms.office.com",
			Category: "Productivity",
		},
		{
			Domain: "bitly.com",
			Category: "Productivity.",
		},
		{
			Domain: "mn.gov",
			Category: "Government",
		},
		{
			Domain: "upwork.com",
			Category: "Productivity",
		},
		{
			Domain: "goodreads.com",
			Category: "Education",
		},
		{
			Domain: "wix.com",
			Category: "Productivity",
		},
		{
			Domain: "businesswire.com",
			Category: "News",
		},
		{
			Domain: "latimes.com",
			Category: "News",
		},
		{
			Domain: "lh6.googleusercontent.com",
			Category: "Productivity",
		},
		{
			Domain: "zdnet.com",
			Category: "News",
		},
		{
			Domain: "tools.ietf.org",
			Category: "Productivity",
		},
		{
			Domain: "fiverr.com",
			Category: "Productivity",
		},
		{
			Domain: "purdue.edu",
			Category: "Education",
		},
		{
			Domain: "bitbucket.org",
			Category: "Productivity",
		},
		{
			Domain: "foursquare.com",
			Category: "Productivity",
		},
		{
			Domain: "cnet.com",
			Category: "Entertainment",
		},
		{
			Domain: "studio.youtube.com",
			Category: "Productivity",
		},
		{
			Domain: "hubs.ly",
			Category: "Productivity",
		},
		{
			Domain: "fortune.com",
			Category: "News",
		},
		{
			Domain: "huffpost.com",
			Category: "News",
		},
		{
			Domain: "venturebeat.com",
			Category: "News",
		},
		{
			Domain: "poynter.org",
			Category: "News",
		},
		{
			Domain: "programmableweb.com",
			Category: "Education",
		},
		{
			Domain: "br.pinterest.com",
			Category: "Productivity",
		},
		{
			Domain: "hbr.org",
			Category: "Education",
		},
		{
			Domain: "playstation.com",
			Category: "Entertainment",
		},
		{
			Domain: "irs.gov",
			Category: "Productivity",
		},
		{
			Domain: "web.facebook.com",
			Category: "Social",
		},
		{
			Domain: "onlinelibrary.wiley.com",
			Category: "Education",
		},
		{
			Domain: "about.me",
			Category: "Productivity.",
		},
		{
			Domain: "lh4.googleusercontent.com",
			Category: "Productivity",
		},
		{
			Domain: "hubspot.com",
			Category: "Productivity",
		},
		{
			Domain: "www1.nyc.gov",
			Category: "News",
		},
		{
			Domain: "slack.com",
			Category: "Productivity",
		},
		{
			Domain: "spotify.com",
			Category: "Entertainment",
		},
		{
			Domain: "disqus.com",
			Category: "Productivity",
		},
		{
			Domain: "euronews.com",
			Category: "News",
		},
		{
			Domain: "arstechnica.com",
			Category: "News",
		},
		{
			Domain: "pbs.twimg.com",
			Category: "Entertainment",
		},
		{
			Domain: "llvm.org",
			Category: "Education",
		},
		{
			Domain: "adssettings.google.com",
			Category: "Productivity",
		},
		{
			Domain: "heylink.me",
			Category: "Productivity",
		},
		{
			Domain: "developer.android.com",
			Category: "Education",
		},
		{
			Domain: "abc.net.au",
			Category: "News",
		},
		{
			Domain: "lit.link",
			Category: "Productivity",
		},
		{
			Domain: "nypost.com",
			Category: "News",
		},
		{
			Domain: "indeed.com",
			Category: "Productivity",
		},
		{
			Domain: "iana.org",
			Category: "Education",
		},
		{
			Domain: "airbnb.com",
			Category: "Productivity",
		},
		{
			Domain: "raw.githubusercontent.com",
			Category: "Productivity.",
		},
		{
			Domain: "iso.org",
			Category: "Productivity",
		},
		{
			Domain: "rtve.es",
			Category: "News",
		},
		{
			Domain: "learn.microsoft.com",
			Category: "Education",
		},
		{
			Domain: "cutt.ly",
			Category: "Productivity",
		},
		{
			Domain: "newyorker.com",
			Category: "News",
		},
		{
			Domain: "prnewswire.com",
			Category: "News",
		},
		{
			Domain: "aboutads.info",
			Category: "Information",
		},
		{
			Domain: "techrepublic.com",
			Category: "Education",
		},
		{
			Domain: "dribbble.com",
			Category: "Entertainment",
		},
		{
			Domain: "gnu.org",
			Category: "Productivity",
		},
		{
			Domain: "developer.chrome.com",
			Category: "Productivity",
		},
		{
			Domain: "thingiverse.com",
			Category: "Productivity.",
		},
		{
			Domain: "help.instagram.com",
			Category: "Education",
		},
		{
			Domain: "sxsw.com",
			Category: "Entertainment",
		},
		{
			Domain: "unicef.org",
			Category: "Education",
		},
		{
			Domain: "gist.github.com",
			Category: "Productivity",
		},
		{
			Domain: "mixi.jp",
			Category: "Entertainment",
		},
		{
			Domain: "streamelements.com",
			Category: "Productivity",
		},
		{
			Domain: "openstreetmap.org",
			Category: "Productivity",
		},
		{
			Domain: "investopedia.com",
			Category: "Education.",
		},
		{
			Domain: "takeout.google.com",
			Category: "Productivity",
		},
		{
			Domain: "itunes.com",
			Category: "Productivity.",
		},
		{
			Domain: "cdn.shopify.com",
			Category: "Productivity.",
		},
		{
			Domain: "evernote.com",
			Category: "Productivity",
		},
		{
			Domain: "tandfonline.com",
			Category: "Education",
		},
		{
			Domain: "thenextweb.com",
			Category: "News",
		},
		{
			Domain: "notion.so",
			Category: "Productivity",
		},
		{
			Domain: "gitlab.com",
			Category: "Productivity",
		},
		{
			Domain: "lifehacker.com",
			Category: "Productivity",
		},
		{
			Domain: "eepurl.com",
			Category: "Productivity",
		},
		{
			Domain: "abcnews.go.com",
			Category: "News",
		},
		{
			Domain: "gog.com",
			Category: "Productivity",
		},
		{
			Domain: "billboard.com",
			Category: "Entertainment",
		},
		{
			Domain: "nbcnews.com",
			Category: "News",
		},
		{
			Domain: "myactivity.google.com",
			Category: "Productivity",
		},
		{
			Domain: "newsweek.com",
			Category: "News",
		},
		{
			Domain: "anchor.fm",
			Category: "Entertainment",
		},
		{
			Domain: "br.de",
			Category: "News",
		},
		{
			Domain: "500px.com",
			Category: "Entertainment",
		},
		{
			Domain: "searchengineland.com",
			Category: "News",
		},
		{
			Domain: "es.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "samsung.com",
			Category: "Productivity",
		},
		{
			Domain: "res.cloudinary.com",
			Category: "Productivity",
		},
		{
			Domain: "gamasutra.com",
			Category: "Education",
		},
		{
			Domain: "britannica.com",
			Category: "Education",
		},
		{
			Domain: "groups.yahoo.com",
			Category: "Productivity",
		},
		{
			Domain: "google.fr",
			Category: "Productivity",
		},
		{
			Domain: "census.gov",
			Category: "News",
		},
		{
			Domain: "codepen.io",
			Category: "Productivity",
		},
		{
			Domain: "khanacademy.org",
			Category: "Education",
		},
		{
			Domain: "news.yahoo.com",
			Category: "News",
		},
		{
			Domain: "meti.go.jp",
			Category: "News",
		},
		{
			Domain: "theconversation.com",
			Category: "News",
		},
		{
			Domain: "unrealengine.com",
			Category: "Productivity",
		},
		{
			Domain: "epa.gov",
			Category: "Education",
		},
		{
			Domain: "mc.yandex.ru",
			Category: "Productivity",
		},
		{
			Domain: "nicovideo.jp",
			Category: "Entertainment",
		},
		{
			Domain: "geo.itunes.apple.com",
			Category: "Productivity",
		},
		{
			Domain: "kantar.com",
			Category: "Productivity",
		},
		{
			Domain: "loc.gov",
			Category: "Education",
		},
		{
			Domain: "zoho.com",
			Category: "Productivity",
		},
		{
			Domain: "i0.wp.com",
			Category: "Productivity",
		},
		{
			Domain: "gamespot.com",
			Category: "Entertainment.",
		},
		{
			Domain: "fb.com",
			Category: "Entertainment.",
		},
		{
			Domain: "blog.livedoor.jp",
			Category: "News",
		},
		{
			Domain: "timeanddate.com",
			Category: "Productivity",
		},
		{
			Domain: "goo.gle",
			Category: "Productivity",
		},
		{
			Domain: "php.net",
			Category: "Education",
		},
		{
			Domain: "shutterstock.com",
			Category: "Productivity",
		},
		{
			Domain: "pagead2.googlesyndication.com",
			Category: "Productivity",
		},
		{
			Domain: "justice.gov",
			Category: "News",
		},
		{
			Domain: "windows.microsoft.com",
			Category: "Productivity",
		},
		{
			Domain: "ipfs.io",
			Category: "Productivity",
		},
		{
			Domain: "blacklivesmatter.com",
			Category: "News",
		},
		{
			Domain: "amazon.co.jp",
			Category: "Productivity",
		},
		{
			Domain: "qz.com",
			Category: "News",
		},
		{
			Domain: "npmjs.com",
			Category: "Productivity.",
		},
		{
			Domain: "usnews.com",
			Category: "News",
		},
		{
			Domain: "brendangregg.com",
			Category: "Productivity.",
		},
		{
			Domain: "crunchbase.com",
			Category: "Productivity.",
		},
		{
			Domain: "get.adobe.com",
			Category: "Productivity",
		},
		{
			Domain: "igg.me",
			Category: "Productivity",
		},
		{
			Domain: "pubmed.ncbi.nlm.nih.gov",
			Category: "Education",
		},
		{
			Domain: "vox.com",
			Category: "News",
		},
		{
			Domain: "connect.facebook.net",
			Category: "Productivity",
		},
		{
			Domain: "thetimes.co.uk",
			Category: "News",
		},
		{
			Domain: "trustpilot.com",
			Category: "Productivity",
		},
		{
			Domain: "media.ccc.de",
			Category: "Education",
		},
		{
			Domain: "google.nl",
			Category: "Productivity",
		},
		{
			Domain: "automattic.com",
			Category: "Productivity",
		},
		{
			Domain: "brainstormforce.com",
			Category: "Productivity.",
		},
		{
			Domain: "w3c.github.io",
			Category: "Education",
		},
		{
			Domain: "scmp.com",
			Category: "News",
		},
		{
			Domain: "udemy.com",
			Category: "Education.",
		},
		{
			Domain: "w3schools.com",
			Category: "Education",
		},
		{
			Domain: "zendesk.com",
			Category: "Productivity",
		},
		{
			Domain: "scholar.google.com",
			Category: "Education",
		},
		{
			Domain: "skype.com",
			Category: "Productivity",
		},
		{
			Domain: "podcasts.google.com",
			Category: "Entertainment",
		},
		{
			Domain: "wikihow.com",
			Category: "Education",
		},
		{
			Domain: "mobile.twitter.com",
			Category: "Entertainment",
		},
		{
			Domain: "us02web.zoom.us",
			Category: "Productivity",
		},
		{
			Domain: "line.me",
			Category: "Productivity",
		},
		{
			Domain: "penguin.co.uk",
			Category: "Education",
		},
		{
			Domain: "pf.kakao.com",
			Category: "Entertainment",
		},
		{
			Domain: "acm.org",
			Category: "Education",
		},
		{
			Domain: "ru.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "heise.de",
			Category: "News",
		},
		{
			Domain: "figma.com",
			Category: "Productivity",
		},
		{
			Domain: "marketingplatform.google.com",
			Category: "Productivity.",
		},
		{
			Domain: "google.ca",
			Category: "Productivity",
		},
		{
			Domain: "dol.gov",
			Category: "Education",
		},
		{
			Domain: "business.facebook.com",
			Category: "Productivity.",
		},
		{
			Domain: "entrepreneur.com",
			Category: "Productivity",
		},
		{
			Domain: "journals.sagepub.com",
			Category: "Education",
		},
		{
			Domain: "rebrand.ly",
			Category: "Productivity",
		},
		{
			Domain: "worldbank.org",
			Category: "Education",
		},
		{
			Domain: "ikea.com",
			Category: "Productivity",
		},
		{
			Domain: "feedly.com",
			Category: "Productivity",
		},
		{
			Domain: "addons.mozilla.org",
			Category: "Productivity",
		},
		{
			Domain: "uber.com",
			Category: "Productivity",
		},
		{
			Domain: "foxnews.com",
			Category: "News",
		},
		{
			Domain: "amazon.fr",
			Category: "Productivity",
		},
		{
			Domain: "barnesandnoble.com",
			Category: "Productivity",
		},
		{
			Domain: "marketwatch.com",
			Category: "News",
		},
		{
			Domain: "jetbrains.com",
			Category: "Productivity",
		},
		{
			Domain: "pulitzercenter.org",
			Category: "News",
		},
		{
			Domain: "money.cnn.com",
			Category: "News",
		},
		{
			Domain: "vice.com",
			Category: "Entertainment",
		},
		{
			Domain: "examiner.com",
			Category: "News",
		},
		{
			Domain: "msdn.microsoft.com",
			Category: "Education",
		},
		{
			Domain: "telegram.org",
			Category: "Productivity",
		},
		{
			Domain: "analog.com",
			Category: "Productivity",
		},
		{
			Domain: "privacy.microsoft.com",
			Category: "Productivity",
		},
		{
			Domain: "yalebooks.co.uk",
			Category: "Education",
		},
		{
			Domain: "zillow.com",
			Category: "Productivity",
		},
		{
			Domain: "coursera.org",
			Category: "Education",
		},
		{
			Domain: "academic.oup.com",
			Category: "Education",
		},
		{
			Domain: "newsinitiative.withgoogle.com",
			Category: "News",
		},
		{
			Domain: "lemonde.fr",
			Category: "News",
		},
		{
			Domain: "go.microsoft.com",
			Category: "Productivity",
		},
		{
			Domain: "2.bp.blogspot.com",
			Category: "Entertainment",
		},
		{
			Domain: "gartner.com",
			Category: "Productivity",
		},
		{
			Domain: "variety.com",
			Category: "Entertainment",
		},
		{
			Domain: "mixcloud.com",
			Category: "Entertainment",
		},
		{
			Domain: "searchenginejournal.com",
			Category: "News",
		},
		{
			Domain: "airtable.com",
			Category: "Productivity.",
		},
		{
			Domain: "popsci.com",
			Category: "News",
		},
		{
			Domain: "yandex.com",
			Category: "Productivity",
		},
		{
			Domain: "taplink.cc",
			Category: "Productivity",
		},
		{
			Domain: "eff.org",
			Category: "News",
		},
		{
			Domain: "fda.gov",
			Category: "News",
		},
		{
			Domain: "workspace.google.com",
			Category: "Productivity",
		},
		{
			Domain: "smarturl.it",
			Category: "Productivity",
		},
		{
			Domain: "podcasters.spotify.com",
			Category: "Productivity",
		},
		{
			Domain: "owasp.org",
			Category: "Education.",
		},
		{
			Domain: "cambridge.org",
			Category: "Education",
		},
		{
			Domain: "fastcompany.com",
			Category: "News",
		},
		{
			Domain: "scribd.com",
			Category: "Education",
		},
		{
			Domain: "squareup.com",
			Category: "Productivity",
		},
		{
			Domain: "xing.com",
			Category: "Productivity.",
		},
		{
			Domain: "politico.com",
			Category: "News.",
		},
		{
			Domain: "imagedelivery.net",
			Category: "Productivity",
		},
		{
			Domain: "wsws.org",
			Category: "News",
		},
		{
			Domain: "google.es",
			Category: "Productivity",
		},
		{
			Domain: "safety.google",
			Category: "Productivity",
		},
		{
			Domain: "spiegel.de",
			Category: "News",
		},
		{
			Domain: "post.ch",
			Category: "Productivity",
		},
		{
			Domain: "help.twitter.com",
			Category: "Productivity",
		},
		{
			Domain: "semrush.com",
			Category: "Productivity",
		},
		{
			Domain: "thehill.com",
			Category: "News",
		},
		{
			Domain: "rtbf.be",
			Category: "News",
		},
		{
			Domain: "missingkids.org",
			Category: "Education.",
		},
		{
			Domain: "inc.com",
			Category: "News",
		},
		{
			Domain: "google.com.au",
			Category: "Productivity",
		},
		{
			Domain: "clickfunnels.com",
			Category: "Productivity",
		},
		{
			Domain: "telegram.me",
			Category: "Productivity",
		},
		{
			Domain: "px.ads.linkedin.com",
			Category: "Productivity",
		},
		{
			Domain: "pwc.com",
			Category: "Productivity",
		},
		{
			Domain: "help.github.com",
			Category: "Education",
		},
		{
			Domain: "spreaker.com",
			Category: "Entertainment",
		},
		{
			Domain: "bcn.cl",
			Category: "Productivity",
		},
		{
			Domain: "axios.com",
			Category: "News.",
		},
		{
			Domain: "theglobeandmail.com",
			Category: "News",
		},
		{
			Domain: "israelnationalnews.com",
			Category: "News",
		},
		{
			Domain: "firebase.google.com",
			Category: "Productivity",
		},
		{
			Domain: "azure.microsoft.com",
			Category: "Productivity",
		},
		{
			Domain: "amazon.it",
			Category: "Productivity.",
		},
		{
			Domain: "northjersey.com",
			Category: "News",
		},
		{
			Domain: "apache.org",
			Category: "Productivity",
		},
		{
			Domain: "datacommons.org",
			Category: "Education",
		},
		{
			Domain: "techradar.com",
			Category: "News",
		},
		{
			Domain: "i.pinimg.com",
			Category: "Productivity.",
		},
		{
			Domain: "hhs.gov",
			Category: "News",
		},
		{
			Domain: "cve.mitre.org",
			Category: "Education",
		},
		{
			Domain: "cdbaby.com",
			Category: "Productivity",
		},
		{
			Domain: "fonts.google.com",
			Category: "Productivity",
		},
		{
			Domain: "gizmodo.com",
			Category: "Entertainment",
		},
		{
			Domain: "missingkids.com",
			Category: "Education",
		},
		{
			Domain: "ok.ru",
			Category: "Entertainment",
		},
		{
			Domain: "sustainability.google",
			Category: "Productivity",
		},
		{
			Domain: "istockphoto.com",
			Category: "Productivity",
		},
		{
			Domain: "lifewire.com",
			Category: "Productivity",
		},
		{
			Domain: "youtube.googleblog.com",
			Category: "News",
		},
		{
			Domain: "target.com",
			Category: "Productivity",
		},
		{
			Domain: "mssg.me",
			Category: "Productivity.",
		},
		{
			Domain: "fr.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "hackerone.com",
			Category: "Productivity",
		},
		{
			Domain: "cdn.who.int",
			Category: "News",
		},
		{
			Domain: "ed.ted.com",
			Category: "Education",
		},
		{
			Domain: "getpocket.com",
			Category: "Productivity",
		},
		{
			Domain: "cdtfa.ca.gov",
			Category: "Productivity",
		},
		{
			Domain: "static.cloudflareinsights.com",
			Category: "Productivity",
		},
		{
			Domain: "gravatar.com",
			Category: "Productivity",
		},
		{
			Domain: "asana.com",
			Category: "Productivity",
		},
		{
			Domain: "linkr.bio",
			Category: "Productivity",
		},
		{
			Domain: "history.com",
			Category: "Education",
		},
		{
			Domain: "r.gnavi.co.jp",
			Category: "Entertainment",
		},
		{
			Domain: "oecd.org",
			Category: "Education",
		},
		{
			Domain: "oreilly.com",
			Category: "Education",
		},
		{
			Domain: "google.ru",
			Category: "Productivity",
		},
		{
			Domain: "blog.twitter.com",
			Category: "News",
		},
		{
			Domain: "psychologytoday.com",
			Category: "Education",
		},
		{
			Domain: "yandex.ru",
			Category: "News",
		},
		{
			Domain: "europarl.europa.eu",
			Category: "News",
		},
		{
			Domain: "vpro.nl",
			Category: "News",
		},
		{
			Domain: "deviantart.com",
			Category: "Entertainment.",
		},
		{
			Domain: "pewresearch.org",
			Category: "News",
		},
		{
			Domain: "sec.gov",
			Category: "Productivity",
		},
		{
			Domain: "smithsonianmag.com",
			Category: "Education",
		},
		{
			Domain: "dur.ac.uk",
			Category: "Education",
		},
		{
			Domain: "hootsuite.com",
			Category: "Productivity",
		},
		{
			Domain: "uk.linkedin.com",
			Category: "Productivity",
		},
		{
			Domain: "zapier.com",
			Category: "Productivity",
		},
		{
			Domain: "nam.edu",
			Category: "Education",
		},
		{
			Domain: "ahrefs.com",
			Category: "Productivity.",
		},
		{
			Domain: "discordapp.com",
			Category: "Productivity",
		},
		{
			Domain: "css-tricks.com",
			Category: "Education",
		},
		{
			Domain: "duckduckgo.com",
			Category: "Productivity",
		},
		{
			Domain: "4.bp.blogspot.com",
			Category: "Entertainment",
		},
		{
			Domain: "speakerdeck.com",
			Category: "Education",
		},
		{
			Domain: "journals.plos.org",
			Category: "Education",
		},
		{
			Domain: "youtube-creators.googleblog.com",
			Category: "News",
		},
		{
			Domain: "cisco.com",
			Category: "Productivity.",
		},
		{
			Domain: "nielsen.com",
			Category: "News",
		},
		{
			Domain: "webmasters.googleblog.com",
			Category: "News",
		},
		{
			Domain: "globenewswire.com",
			Category: "News",
		},
		{
			Domain: "tiff.net",
			Category: "Entertainment",
		},
		{
			Domain: "3.bp.blogspot.com",
			Category: "Entertainment",
		},
		{
			Domain: "jigsaw.google.com",
			Category: "Productivity",
		},
		{
			Domain: "xkcd.com",
			Category: "Entertainment",
		},
		{
			Domain: "raiplay.it",
			Category: "Entertainment",
		},
		{
			Domain: "meyerweb.com",
			Category: "Productivity",
		},
		{
			Domain: "photos.google.com",
			Category: "Productivity",
		},
		{
			Domain: "creatoracademy.youtube.com",
			Category: "Education",
		},
		{
			Domain: "kinopoisk.ru",
			Category: "Entertainment",
		},
		{
			Domain: "en.m.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "accenture.com",
			Category: "Productivity",
		},
		{
			Domain: "nationalgeographic.com",
			Category: "Education",
		},
		{
			Domain: "pubads.g.doubleclick.net",
			Category: "Productivity.",
		},
		{
			Domain: "dl.dropboxusercontent.com",
			Category: "Productivity",
		},
		{
			Domain: "1.bp.blogspot.com",
			Category: "Other",
		},
		{
			Domain: "cbc.ca",
			Category: "News",
		},
		{
			Domain: "chicagotribune.com",
			Category: "News",
		},
		{
			Domain: "thinkgeek.com",
			Category: "Productivity",
		},
		{
			Domain: "buffer.com",
			Category: "Productivity",
		},
		{
			Domain: "knowyourmeme.com",
			Category: "Entertainment",
		},
		{
			Domain: "kstatic.googleusercontent.com",
			Category: "Productivity",
		},
		{
			Domain: "i1.wp.com",
			Category: "Productivity",
		},
		{
			Domain: "bat.bing.com",
			Category: "Productivity",
		},
		{
			Domain: "fao.org",
			Category: "Education",
		},
		{
			Domain: "ngm.nationalgeographic.com",
			Category: "Education",
		},
		{
			Domain: "static1.squarespace.com",
			Category: "Productivity",
		},
		{
			Domain: "nvidia.com",
			Category: "Productivity.",
		},
		{
			Domain: "fitbit.com",
			Category: "Productivity.",
		},
		{
			Domain: "prezi.com",
			Category: "Productivity",
		},
		{
			Domain: "jotform.com",
			Category: "Productivity",
		},
		{
			Domain: "adweek.com",
			Category: "News",
		},
		{
			Domain: "google.qualtrics.com",
			Category: "Productivity",
		},
		{
			Domain: "amazon.es",
			Category: "Productivity",
		},
		{
			Domain: "usps.com",
			Category: "Productivity",
		},
		{
			Domain: "deepl.com",
			Category: "Productivity",
		},
		{
			Domain: "blog.cloudflare.com",
			Category: "News",
		},
		{
			Domain: "pastebin.com",
			Category: "Productivity",
		},
		{
			Domain: "help.pinterest.com",
			Category: "Productivity",
		},
		{
			Domain: "en.gravatar.com",
			Category: "Productivity",
		},
		{
			Domain: "rightwingwatch.org",
			Category: "News",
		},
		{
			Domain: "propublica.org",
			Category: "News",
		},
		{
			Domain: "families.google.com",
			Category: "Productivity",
		},
		{
			Domain: "freepik.com",
			Category: "Productivity",
		},
		{
			Domain: "iubenda.com",
			Category: "Productivity.",
		},
		{
			Domain: "feeds.feedburner.com",
			Category: "Productivity",
		},
		{
			Domain: "docs.oracle.com",
			Category: "Education",
		},
		{
			Domain: "i2.wp.com",
			Category: "Productivity",
		},
		{
			Domain: "ssl.gstatic.com",
			Category: "Productivity",
		},
		{
			Domain: "pinterest.co.uk",
			Category: "Productivity",
		},
		{
			Domain: "fcc.gov",
			Category: "Government",
		},
		{
			Domain: "ifttt.com",
			Category: "Productivity",
		},
		{
			Domain: "state.gov",
			Category: "News",
		},
		{
			Domain: "artstation.com",
			Category: "Entertainment",
		},
		{
			Domain: "phys.org",
			Category: "Education",
		},
		{
			Domain: "merriam-webster.com",
			Category: "Education.",
		},
		{
			Domain: "vaticannews.va",
			Category: "News",
		},
		{
			Domain: "aescripts.com",
			Category: "Productivity",
		},
		{
			Domain: "thinkwithgoogle.com",
			Category: "Education",
		},
		{
			Domain: "extend-wp.com",
			Category: "Productivity",
		},
		{
			Domain: "pcisecuritystandards.org",
			Category: "Productivity",
		},
		{
			Domain: "constantcontact.com",
			Category: "Productivity",
		},
		{
			Domain: "donorbox.org",
			Category: "Productivity.",
		},
		{
			Domain: "online.wsj.com",
			Category: "News",
		},
		{
			Domain: "sciencemag.org",
			Category: "Education",
		},
		{
			Domain: "amazon.ca",
			Category: "Productivity",
		},
		{
			Domain: "public.tableau.com",
			Category: "Productivity.",
		},
		{
			Domain: "buzzfeednews.com",
			Category: "News",
		},
		{
			Domain: "coindesk.com",
			Category: "News",
		},
		{
			Domain: "miro.com",
			Category: "Productivity.",
		},
		{
			Domain: "scientificamerican.com",
			Category: "Education",
		},
		{
			Domain: "tv.youtube.com",
			Category: "Entertainment",
		},
		{
			Domain: "infowars.com",
			Category: "News",
		},
		{
			Domain: "snapchat.com",
			Category: "Entertainment",
		},
		{
			Domain: "science.sciencemag.org",
			Category: "Education",
		},
		{
			Domain: "siteground.com",
			Category: "Productivity",
		},
		{
			Domain: "dw.com",
			Category: "News",
		},
		{
			Domain: "eji.org",
			Category: "Education",
		},
		{
			Domain: "drupal.org",
			Category: "Productivity.",
		},
		{
			Domain: "validator.w3.org",
			Category: "Productivity",
		},
		{
			Domain: "nps.gov",
			Category: "Education",
		},
		{
			Domain: "thegadgetflow.com",
			Category: "Productivity",
		},
		{
			Domain: "kisskissbankbank.com",
			Category: "Productivity",
		},
		{
			Domain: "cs.mun.ca",
			Category: "Education",
		},
		{
			Domain: "woocommerce.com",
			Category: "Productivity",
		},
		{
			Domain: "about.fb.com",
			Category: "News",
		},
		{
			Domain: "klarna.com",
			Category: "Productivity",
		},
		{
			Domain: "opensea.io",
			Category: "Productivity",
		},
		{
			Domain: "starbucks.com",
			Category: "Productivity",
		},
		{
			Domain: "bls.gov",
			Category: "Education.",
		},
		{
			Domain: "mayoclinic.org",
			Category: "Education",
		},
		{
			Domain: "papers.ssrn.com",
			Category: "Education",
		},
		{
			Domain: "mrdoob.com",
			Category: "Entertainment",
		},
		{
			Domain: "flipboard.com",
			Category: "News",
		},
		{
			Domain: "privacyshield.gov",
			Category: "Productivity.",
		},
		{
			Domain: "advancedformintegration.com",
			Category: "Productivity",
		},
		{
			Domain: "law.cornell.edu",
			Category: "Education",
		},
		{
			Domain: "apis.google.com",
			Category: "Productivity",
		},
		{
			Domain: "ffm.to",
			Category: "Productivity",
		},
		{
			Domain: "jquery.com",
			Category: "Productivity",
		},
		{
			Domain: "makeuseof.com",
			Category: "Productivity",
		},
		{
			Domain: "opensource.org",
			Category: "Education",
		},
		{
			Domain: "account.google.com",
			Category: "Productivity",
		},
		{
			Domain: "chat.openai.com",
			Category: "Productivity",
		},
		{
			Domain: "themeforest.net",
			Category: "Productivity.",
		},
		{
			Domain: "nngroup.com",
			Category: "Education",
		},
		{
			Domain: "wipo.int",
			Category: "Education",
		},
		{
			Domain: "aljazeera.com",
			Category: "News",
		},
		{
			Domain: "greenamerica.org",
			Category: "Education",
		},
		{
			Domain: "nist.gov",
			Category: "Education",
		},
		{
			Domain: "cse.google.com",
			Category: "Productivity",
		},
		{
			Domain: "nationalmssociety.org",
			Category: "Education",
		},
		{
			Domain: "english.aljazeera.net",
			Category: "News",
		},
		{
			Domain: "bandsintown.com",
			Category: "Entertainment",
		},
		{
			Domain: "unir.net",
			Category: "News",
		},
		{
			Domain: "speaker.gov",
			Category: "News",
		},
		{
			Domain: "sciencedaily.com",
			Category: "News",
		},
		{
			Domain: "similarweb.com",
			Category: "Productivity",
		},
		{
			Domain: "voanews.com",
			Category: "News",
		},
		{
			Domain: "unicode.org",
			Category: "Education.",
		},
		{
			Domain: "pcmag.com",
			Category: "News",
		},
		{
			Domain: "material.io",
			Category: "Productivity",
		},
		{
			Domain: "commission.europa.eu",
			Category: "News",
		},
		{
			Domain: "economictimes.indiatimes.com",
			Category: "News",
		},
		{
			Domain: "mediafire.com",
			Category: "Productivity",
		},
		{
			Domain: "mdpi.com",
			Category: "Education",
		},
		{
			Domain: "pitchfork.com",
			Category: "Entertainment.",
		},
		{
			Domain: "pay.google.com",
			Category: "Productivity",
		},
		{
			Domain: "ja.wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "gsuite.google.com",
			Category: "Productivity",
		},
		{
			Domain: "toucharcade.com",
			Category: "Entertainment",
		},
		{
			Domain: "ietf.org",
			Category: "Education",
		},
		{
			Domain: "indiegogo.com",
			Category: "Productivity.",
		},
		{
			Domain: "baidu.com",
			Category: "Entertainment",
		},
		{
			Domain: "science.org",
			Category: "Education",
		},
		{
			Domain: "lastpass.com",
			Category: "Productivity",
		},
		{
			Domain: "icann.org",
			Category: "Education",
		},
		{
			Domain: "vogue.com",
			Category: "Entertainment",
		},
		{
			Domain: "getresponse.com",
			Category: "Productivity",
		},
		{
			Domain: "smh.com.au",
			Category: "News",
		},
		{
			Domain: "networkadvertising.org",
			Category: "Productivity",
		},
		{
			Domain: "caniuse.com",
			Category: "Productivity",
		},
		{
			Domain: "neuracache.com",
			Category: "Education",
		},
		{
			Domain: "thegrommet.com",
			Category: "Productivity.",
		},
		{
			Domain: "technologyreview.com",
			Category: "News",
		},
		{
			Domain: "academia.edu",
			Category: "Education",
		},
		{
			Domain: "humanrightsfirst.org",
			Category: "Education",
		},
		{
			Domain: "darden.virginia.edu",
			Category: "Education",
		},
		{
			Domain: "rollingstone.com",
			Category: "Entertainment",
		},
		{
			Domain: "w3techs.com",
			Category: "Education",
		},
		{
			Domain: "lewishowes.com",
			Category: "Education",
		},
		{
			Domain: "barco.com",
			Category: "Productivity",
		},
		{
			Domain: "tableau.com",
			Category: "Productivity",
		},
		{
			Domain: "engadget.com",
			Category: "Entertainment.",
		},
		{
			Domain: "mecd.gob.es",
			Category: "Education",
		},
		{
			Domain: "redcross.org",
			Category: "Productivity",
		},
		{
			Domain: "developer.oracle.com",
			Category: "Education",
		},
		{
			Domain: "bigcommerce.com",
			Category: "Productivity",
		},
		{
			Domain: "orcd.co",
			Category: "Productivity",
		},
		{
			Domain: "miraclegaming.store",
			Category: "Productivity",
		},
		{
			Domain: "wetransfer.com",
			Category: "Productivity",
		},
		{
			Domain: "frontiersin.org",
			Category: "Education",
		},
		{
			Domain: "alibaba.com",
			Category: "Productivity",
		},
		{
			Domain: "alltop.com",
			Category: "News",
		},
		{
			Domain: "chrisharrison.net",
			Category: "Personal",
		},
		{
			Domain: "digg.com",
			Category: "News",
		},
		{
			Domain: "csrc.nist.gov",
			Category: "Education",
		},
		{
			Domain: "rubykaigi.org",
			Category: "Education",
		},
		{
			Domain: "pnas.org",
			Category: "Education",
		},
		{
			Domain: "fool.com",
			Category: "Finance",
		},
		{
			Domain: "hrw.org",
			Category: "News",
		},
		{
			Domain: "patents.google.com",
			Category: "Productivity",
		},
		{
			Domain: "neilpatel.com",
			Category: "Productivity",
		},
		{
			Domain: "brookings.edu",
			Category: "Education",
		},
		{
			Domain: "glitzstorm.com",
			Category: "Entertainment",
		},
		{
			Domain: "wretch.cc",
			Category: "Entertainment",
		},
		{
			Domain: "1drv.ms",
			Category: "Productivity",
		},
		{
			Domain: "brave.com",
			Category: "Productivity",
		},
		{
			Domain: "canada.ca",
			Category: "Government",
		},
		{
			Domain: "ubuntu.com",
			Category: "Productivity.",
		},
		{
			Domain: "prweb.com",
			Category: "News",
		},
		{
			Domain: "bleepingcomputer.com",
			Category: "Productivity.",
		},
		{
			Domain: "universal-music.co.jp",
			Category: "Entertainment",
		},
		{
			Domain: "dl.acm.org",
			Category: "Education",
		},
		{
			Domain: "curia.europa.eu",
			Category: "Education",
		},
		{
			Domain: "congress.gov",
			Category: "News",
		},
		{
			Domain: "digilander.libero.it",
			Category: "Entertainment",
		},
		{
			Domain: "sb.scorecardresearch.com",
			Category: "Productivity",
		},
		{
			Domain: "ifcncodeofprinciples.poynter.org",
			Category: "Education",
		},
		{
			Domain: "web.dev",
			Category: "Education",
		},
		{
			Domain: "enterprisemarketingportal.google",
			Category: "Productivity",
		},
		{
			Domain: "twilio.com",
			Category: "Productivity",
		},
		{
			Domain: "producthunt.com",
			Category: "Productivity",
		},
		{
			Domain: "flaticon.com",
			Category: "Productivity",
		},
		{
			Domain: "dell.com",
			Category: "Productivity",
		},
		{
			Domain: "timesofindia.indiatimes.com",
			Category: "News",
		},
		{
			Domain: "glassdoor.com",
			Category: "Productivity",
		},
		{
			Domain: "startengine.com",
			Category: "Productivity",
		},
		{
			Domain: "kids.youtube.com",
			Category: "Entertainment",
		},
		{
			Domain: "fbi.gov",
			Category: "News",
		},
		{
			Domain: "verizon.com",
			Category: "Productivity.",
		},
		{
			Domain: "smashingmagazine.com",
			Category: "Education.",
		},
		{
			Domain: "volcom.com",
			Category: "Productivity",
		},
		{
			Domain: "stupidhackathon.github.io",
			Category: "Entertainment",
		},
		{
			Domain: "wikipedia.org",
			Category: "Education",
		},
		{
			Domain: "donysterling.co.uk",
			Category: "Entertainment",
		},
		{
			Domain: "donysterling.com",
			Category: "Entertainment.",
		},
		{
			Domain: "gigaom.com",
			Category: "News",
		},
		{
			Domain: "allaboutcookies.org",
			Category: "Education.",
		},
		{
			Domain: "webaim.org",
			Category: "Education.",
		},
		{
			Domain: "bestbuy.com",
			Category: "Productivity",
		},
		{
			Domain: "kiva.org",
			Category: "Education",
		},
		{
			Domain: "popoko.live",
			Category: "Entertainment",
		},
		{
			Domain: "visitlondon.com",
			Category: "Entertainment",
		},
		{
			Domain: "dearmoon.earth",
			Category: "Education.",
		},
		{
			Domain: "cato.org",
			Category: "News",
		},
		{
			Domain: "blogs.wsj.com",
			Category: "News",
		},
		{
			Domain: "maps.secondlife.com",
			Category: "Entertainment",
		},
		{
			Domain: "irishtimes.com",
			Category: "News.",
		},
		{
			Domain: "jsfiddle.net",
			Category: "Productivity",
		},
		{
			Domain: "chat.whatsapp.com",
			Category: "Productivity",
		},
		{
			Domain: "coschedule.com",
			Category: "Productivity",
		},
		{
			Domain: "gumroad.com",
			Category: "Productivity",
		},
		{
			Domain: "activecampaign.com",
			Category: "Productivity",
		},
		{
			Domain: "inyourpocket.com",
			Category: "Travel",
		},
		{
			Domain: "orcid.org",
			Category: "Education",
		},
		{
			Domain: "kinsta.com",
			Category: "Productivity",
		},
		{
			Domain: "cmog.org",
			Category: "Education",
		},
		{
			Domain: "youtubekids.com",
			Category: "Entertainment",
		},
		{
			Domain: "urbandictionary.com",
			Category: "Entertainment",
		},
		{
			Domain: "wam.ae",
			Category: "News",
		},
		{
			Domain: "foreignpolicy.com",
			Category: "News",
		},
		{
			Domain: "l214.com",
			Category: "Education",
		},
		{
			Domain: "codex.wordpress.org",
			Category: "Education",
		},
		{
			Domain: "newscientist.com",
			Category: "News",
		},
		{
			Domain: "healthline.com",
			Category: "Health.",
		},
		{
			Domain: "coinbase.com",
			Category: "Productivity.",
		},
		{
			Domain: "ohchr.org",
			Category: "Education.",
		},
		{
			Domain: "cdata.com",
			Category: "Productivity",
		},
		{
			Domain: "sdgs.un.org",
			Category: "Education",
		},
		{
			Domain: "mp.weixin.qq.com",
			Category: "News",
		},
		{
			Domain: "wikimediafoundation.org",
			Category: "Education",
		},
		{
			Domain: "abuosama.com",
			Category: "Other",
		},
		{
			Domain: "s3-us-west-2.amazonaws.com",
			Category: "Productivity",
		},
		{
			Domain: "news.bbc.co.uk",
			Category: "News",
		},
		{
			Domain: "webmd.com",
			Category: "Health",
		},
		{
			Domain: "seekingalpha.com",
			Category: "News",
		},
		{
			Domain: "wellbeing.google",
			Category: "Productivity",
		},
		{
			Domain: "lumecube.com",
			Category: "Productivity",
		},
		{
			Domain: "microformats.org",
			Category: "Education",
		},
		{
			Domain: "yumpu.com",
			Category: "Entertainment",
		},
		{
			Domain: "lnk.to",
			Category: "Productivity",
		},
		{
			Domain: "pubs.acs.org",
			Category: "Education",
		},
		{
			Domain: "thestar.com",
			Category: "News",
		},
		{
			Domain: "picasaweb.google.com",
			Category: "Productivity",
		},
		{
			Domain: "whats-on-netflix.com",
			Category: "Entertainment",
		},
		{
			Domain: "vizaginfo.com",
			Category: "Information",
		},
		{
			Domain: "prototypefund.de",
			Category: "Education",
		},
		{
			Domain: "healthypets.mercola.com",
			Category: "Education",
		},
		{
			Domain: "blockchain.com",
			Category: "Productivity",
		},
		{
			Domain: "ieeexplore.ieee.org",
			Category: "Education.",
		},
		{
			Domain: "today.com",
			Category: "News",
		},
		{
			Domain: "pragmatic-game.com",
			Category: "Entertainment",
		},
		{
			Domain: "ali.pub",
			Category: "Productivity",
		},
		{
			Domain: "python.org",
			Category: "Education",
		},
		{
			Domain: "support.office.com",
			Category: "Productivity",
		},
		{
			Domain: "dianomi.com",
			Category: "Productivity",
		},
		{
			Domain: "nhs.uk",
			Category: "Education",
		},
		{
			Domain: "kirunafestivalen.com",
			Category: "Entertainment",
		},
		{
			Domain: "gov.br",
			Category: "News",
		},
		{
			Domain: "depositfiles.com",
			Category: "Productivity",
		},
		{
			Domain: "idfa.nl",
			Category: "Entertainment",
		},
		{
			Domain: "tn.b4closing.com",
			Category: "Productivity.",
		},
		{
			Domain: "hub.docker.com",
			Category: "Productivity",
		},
		{
			Domain: "obviousarticles.com",
			Category: "Education",
		},
		{
			Domain: "reecase.com",
			Category: "Productivity.",
		},
		{
			Domain: "legislation.gov.uk",
			Category: "Education.",
		},
		{
			Domain: "rfc-editor.org",
			Category: "Education",
		},
		{
			Domain: "techtarget.com",
			Category: "Productivity",
		},
		{
			Domain: "beinternetawesome.withgoogle.com",
			Category: "Education",
		},
		{
			Domain: "grameen-info.org",
			Category: "Education",
		},
		{
			Domain: "artsandculture.google.com",
			Category: "Education",
		},
		{
			Domain: "bridgeloungenola.com",
			Category: "Entertainment",
		},
		{
			Domain: "unibw.de",
			Category: "Education",
		},
		{
			Domain: "nba.com",
			Category: "Entertainment",
		},
		{
			Domain: "google.pl",
			Category: "Productivity.",
		},
		{
			Domain: "app.box.com",
			Category: "Productivity",
		},
		{
			Domain: "bgu.aikomus.com",
			Category: "Education",
		},
		{
			Domain: "bostonglobe.com",
			Category: "News",
		},
		{
			Domain: "nvd.nist.gov",
			Category: "Education",
		},
		{
			Domain: "openhome.cc",
			Category: "Education",
		},
		{
			Domain: "ivermectininstock.com",
			Category: "Productivity",
		},
		{
			Domain: "federalregister.gov",
			Category: "News",
		},
		{
			Domain: "m.me",
			Category: "Productivity",
		},
		{
			Domain: "customercaresupportnumber.com",
			Category: "Productivity",
		},
		{
			Domain: "gettyimages.com",
			Category: "Productivity",
		},
		{
			Domain: "gunbound.web.id",
			Category: "Entertainment",
		},
		{
			Domain: "cometalaux.com",
			Category: "Entertainment",
		},
		{
			Domain: "chromewebstore.google.com",
			Category: "Productivity",
		},
		{
			Domain: "wunderground.com",
			Category: "News",
		},
		{
			Domain: "gositoday.com",
			Category: "Entertainment",
		},
		{
			Domain: "marriott.com",
			Category: "Productivity",
		},
		{
			Domain: "yt.be",
			Category: "Productivity.",
		},
		{
			Domain: "ivycityco.com",
			Category: "Productivity",
		},
		{
			Domain: "bocpainters.com",
			Category: "Productivity.",
		},
		{
			Domain: "technorati.com",
			Category: "News",
		},
		{
			Domain: "lambdasf.org",
			Category: "Education",
		},
		{
			Domain: "opendoorbooks.com",
			Category: "Education",
		},
		{
			Domain: "sinausap.com",
			Category: "News",
		},
		{
			Domain: "instapaper.com",
			Category: "Productivity.",
		},
		{
			Domain: "bestcinemark.com",
			Category: "Entertainment",
		},
		{
			Domain: "jemi.so",
			Category: "Productivity.",
		},
		{
			Domain: "streetfilms.org",
			Category: "Entertainment",
		},
		{
			Domain: "snipfeed.co",
			Category: "Entertainment",
		},
		{
			Domain: "artyfartylife.com",
			Category: "Entertainment",
		},
		{
			Domain: "shophamitusta.com",
			Category: "Productivity",
		},
		{
			Domain: "fossgis.de",
			Category: "Education.",
		},
		{
			Domain: "adwords.google.com",
			Category: "Productivity",
		},
		{
			Domain: "telegra.ph",
			Category: "Productivity.",
		},
		{
			Domain: "jstor.org",
			Category: "Education",
		},
		{
			Domain: "patchstorage.com",
			Category: "Productivity.",
		},
		{
			Domain: "cdn.ampproject.org",
			Category: "Productivity",
		},
		{
			Domain: "html.spec.whatwg.org",
			Category: "Education",
		},
		{
			Domain: "news.microsoft.com",
			Category: "News",
		},
		{
			Domain: "kino.com",
			Category: "Entertainment",
		},
		{
			Domain: "l.facebook.com",
			Category: "Productivity",
		},
		{
			Domain: "gs.statcounter.com",
			Category: "Productivity.",
		},
		{
			Domain: "ti.nutrapia.com",
			Category: "Productivity",
		},
		{
			Domain: "huggingface.co",
			Category: "Productivity",
		},
		{
			Domain: "stage6.divx.com",
			Category: "Entertainment",
		},
		{
			Domain: "rrganursery.com",
			Category: "Productivity",
		},
		{
			Domain: "rdoproject.org",
			Category: "Education",
		},
		{
			Domain: "community.theforeman.org",
			Category: "Community",
		},
		{
			Domain: "citeseerx.ist.psu.edu",
			Category: "Education",
		},
		{
			Domain: "yunxiaochengkj.com",
			Category: "Other",
		},
		{
			Domain: "preview.tinyurl.com",
			Category: "Productivity",
		},
		{
			Domain: "bw9.824989.com",
			Category: "Productivity",
		},
		{
			Domain: "edx.org",
			Category: "Education",
		},
		{
			Domain: "shape.stanford.edu",
			Category: "Education.",
		},
		{
			Domain: "kristelgourden.com",
			Category: "Entertainment",
		},
		{
			Domain: "roxanegay.com",
			Category: "Education",
		},
		{
			Domain: "i.ibb.co",
			Category: "Productivity",
		},
		{
			Domain: "zxaaa.net",
			Category: "Other",
		},
		{
			Domain: "2015.funswiftconf.com",
			Category: "Entertainment.",
		},
		{
			Domain: "coinmarketcap.com",
			Category: "Productivity",
		},
		{
			Domain: "hfdlzg.com",
			Category: "Other",
		},
		{
			Domain: "ethereum.org",
			Category: "Education.",
		},
		{
			Domain: "wattpad.com",
			Category: "Entertainment",
		},
		{
			Domain: "tomsguide.com",
			Category: "Productivity",
		},
		{
			Domain: "istartedsomething.com",
			Category: "Technology",
		},
		{
			Domain: "2017.jsconf.eu",
			Category: "Education",
		},
		{
			Domain: "polygon.com",
			Category: "Entertainment",
		},
		{
			Domain: "wired.co.uk",
			Category: "News",
		},
		{
			Domain: "buzzsprout.com",
			Category: "Productivity",
		},
		{
			Domain: "performous.org",
			Category: "Entertainment.",
		},
		{
			Domain: "skagmo.com",
			Category: "Other",
		},
		{
			Domain: "flaflo.xyz",
			Category: "Other",
		},
		{
			Domain: "andalucia.org",
			Category: "Travel",
		},
		{
			Domain: "winconsgroup.com",
			Category: "Productivity",
		},
		{
			Domain: "ib.adnxs.com",
			Category: "Productivity.",
		},
		{
			Domain: "madnessmyfamily.com",
			Category: "Entertainment",
		},
		{
			Domain: "digitalocean.com",
			Category: "Productivity",
		},
		{
			Domain: "ma.tt",
			Category: "Productivity",
		},
		{
			Domain: "reviewsiro.com",
			Category: "Productivity",
		},
		{
			Domain: "keoghsflex.com",
			Category: "Productivity",
		},
		{
			Domain: "ups.com",
			Category: "Productivity",
		},
		{
			Domain: "te.webgomme.com",
			Category: "Other",
		},
		{
			Domain: "creationsitewebmaroc.online",
			Category: "Productivity",
		},
		{
			Domain: "xero.com",
			Category: "Productivity",
		},
		{
			Domain: "code.visualstudio.com",
			Category: "Productivity",
		},
		{
			Domain: "podbean.com",
			Category: "Entertainment.",
		},
		{
			Domain: "krebsonsecurity.com",
			Category: "News",
		},
		{
			Domain: "binance.com",
			Category: "Productivity.",
		},
		{
			Domain: "intel.com",
			Category: "Productivity",
		},
		{
			Domain: "growonair.withgoogle.com",
			Category: "Education.",
		},
		{
			Domain: "collaborativejournalism.org",
			Category: "Education",
		},
		{
			Domain: "socialimpact.youtube.com",
			Category: "Entertainment",
		},
		{
			Domain: "helpx.adobe.com",
			Category: "Productivity",
		},
		{
			Domain: "android.com",
			Category: "Productivity",
		},
		{
			Domain: "documentcloud.org",
			Category: "Productivity",
		},
		{
			Domain: "unlimitedarticlesource.com",
			Category: "Education",
		},
		{
			Domain: "acidholic.com",
			Category: "Entertainment",
		},
		{
			Domain: "yiyongsc.com",
			Category: "Other",
		},
		{
			Domain: "ahkrzn.com",
			Category: "Other",
		},
		{
			Domain: "beppegrillo.it",
			Category: "News",
		},
		{
			Domain: "crypto.com",
			Category: "Productivity",
		},
		{
			Domain: "mega.nz",
			Category: "Productivity",
		},
		{
			Domain: "padlet.com",
			Category: "Productivity",
		},
		{
			Domain: "icgiyimkapinda.com",
			Category: "Productivity.",
		},
		{
			Domain: "atlassian.com",
			Category: "Productivity",
		},
		{
			Domain: "islamtics.com",
			Category: "Education",
		},
		{
			Domain: "metoffice.gov.uk",
			Category: "News",
		},
		{
			Domain: "redbubble.com",
			Category: "Productivity",
		},
		{
			Domain: "cxwdm.com",
			Category: "Other",
		},
		{
			Domain: "atlasobscura.com",
			Category: "Entertainment",
		},
		{
			Domain: "audible.com",
			Category: "Entertainment",
		},
		{
			Domain: "logitech.com",
			Category: "Productivity",
		},
		{
			Domain: "insights.sustainability.google",
			Category: "Productivity",
		},
		{
			Domain: "waze.com",
			Category: "Productivity",
		},
		{
			Domain: "outlookindia.com",
			Category: "News",
		},
		{
			Domain: "skillshare.com",
			Category: "Education",
		},
		{
			Domain: "informit.com",
			Category: "Education",
		},
		{
			Domain: "uci.org",
			Category: "Education",
		},
		{
			Domain: "httyb.com",
			Category: "Entertainment",
		},
		{
			Domain: "globalnews.ca",
			Category: "News",
		},
		{
			Domain: "duniabd.com",
			Category: "News",
		},
		{
			Domain: "michigan.gov",
			Category: "Government",
		},
		{
			Domain: "images.google.com",
			Category: "Productivity",
		},
		{
			Domain: "guardian.co.uk",
			Category: "News",
		},
		{
			Domain: "afr.com",
			Category: "News",
		},
		{
			Domain: "chinadaily.com.cn",
			Category: "News",
		},
		{
			Domain: "positivemoney.org",
			Category: "Education",
		},
		{
			Domain: "oag.ca.gov",
			Category: "Information",
		},
		{
			Domain: "cyqiaosen.com",
			Category: "Entertainment",
		},
		{
			Domain: "secure.adnxs.com",
			Category: "Productivity",
		},
		{
			Domain: "nylon.jp",
			Category: "Entertainment",
		},
		{
			Domain: "arkaos.net",
			Category: "Entertainment",
		},
		{
			Domain: "foodshuttle.org",
			Category: "Education",
		},
		{
			Domain: "lnk.bio",
			Category: "Productivity",
		},
		{
			Domain: "pno.824989.com",
			Category: "Entertainment",
		},
		{
			Domain: "nymag.com",
			Category: "News",
		},
		{
			Domain: "muji.net",
			Category: "Productivity",
		},
		{
			Domain: "join.slack.com",
			Category: "Productivity",
		},
		{
			Domain: "fontawesome.com",
			Category: "Productivity",
		},
		{
			Domain: "houzz.com",
			Category: "Productivity.",
		},
		{
			Domain: "gutenberg.org",
			Category: "Education",
		},
		{
			Domain: "contagious.com",
			Category: "Entertainment",
		},
		{
			Domain: "ik.webgomme.com",
			Category: "Other",
		},
		{
			Domain: "threads.net",
			Category: "Productivity",
		},
		{
			Domain: "margaretahaz.com",
			Category: "Entertainment",
		},
		{
			Domain: "bbb.org",
			Category: "Productivity",
		},
		{
			Domain: "urldefense.com",
			Category: "Productivity",
		},
	];
};
