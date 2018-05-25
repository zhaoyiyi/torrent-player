const RSSParser = require('rss-parser');
const parser = new RSSParser();

const URL = 'https://share.dmhy.org/topics/rss/rss.xml?keyword=';

module.exports = async ({ keyword }) => {
  keyword = keyword.replace(/\s/g, '+');
  const feed = await parser.parseURL(encodeURI(URL + keyword));

  return feed.items.map(item => ({
    title: item.title,
    link: item.enclosure.url,
  }));
};

