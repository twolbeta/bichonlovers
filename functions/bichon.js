exports.handler = async event => {
  return {
    statusCode: 301,
    headers: {
      location: decodeURIComponent('https%3A%2F%2Fihearthwild.com%2F2020%2F07%2F06%2Fwithout-hesitation-this-man-decided-to-put-his-car-up-for-sale-to-save-his-bichon-frise%2F')
    }
  }
}
