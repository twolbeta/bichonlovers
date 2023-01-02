exports.handler = async event => {
  if (event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://sonderlives.com/2018/03/14/9-tips-for-you-to-conquer-your-shih-tzu/'
      }
    }
  } else {
    let pathName = location.pathname.split('/')[2].split('-')
    return {
      statusCode: 301,
      headers: {
        location: 'https://sonderlives.com/2018/03/14/9-tips-for-you-to-conquer-your-shih-tzu/'
      }
    }
  }
}
