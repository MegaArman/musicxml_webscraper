const request = require("request");
const cheerio = require("cheerio");

request(
{
  uri: "http://toscanini.cs.vt.edu/",
}, function(error, response, body) 
{
  const $ = cheerio.load(body);
  console.log("error " + error);
  $("a").each(function() 
  {
    const link = $(this);
    console.log(link.attr("href"));
    //const href = lhttp://toscanini.cs.vt.edu/);
  });
});
