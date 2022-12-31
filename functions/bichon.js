
exports.handler = (event, context, callback) => {
   const response = {
    statusCode: 301,
    headers: {
      Location: 'https://ihearthwild.com/2020/07/06/without-hesitation-this-man-decided-to-put-his-car-up-for-sale-to-save-his-bichon-frise/',
    }
  };

  return callback(null, response);
}