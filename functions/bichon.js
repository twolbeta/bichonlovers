
exports.handler = async event => {
  if (event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://ihearthwild.com/2020/07/06/without-hesitation-this-man-decided-to-put-his-car-up-for-sale-to-save-his-bichon-frise/'
      }
    }
  } else {
    let pathName = location.pathname.split('/')[2].split('-')
    return {
      statusCode: 301,
      headers: {
        location: 'https://ihearthwild.com/2020/07/06/without-hesitation-this-man-decided-to-put-his-car-up-for-sale-to-save-his-bichon-frise/'
      }
    }
  }
}