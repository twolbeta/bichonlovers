const fs = require('fs')
const MarkdownIt = require('markdown-it')
   
exports.handler = async (event) => {
	if (event.headers.referer && event.headers.referer.includes("facebook")) {
    return {
      statusCode: 301,
      headers: {
        location: 'http://ihearthwild.com/2020/07/06/without-hesitation-this-man-decided-to-put-his-car-up-for-sale-to-save-his-bichon-frise/'
      }
    }
  }
    else {
    const { postId } = event.queryStringParameters;
    const fileContents = fs.readFileSync(`./bichon1/bichon-${postId}.html`, 'utf8')
    const md = new MarkdownIt();
    const result = md.render(fileContents);
    

	return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html",
        },
        body: result,
    }
	}
}



