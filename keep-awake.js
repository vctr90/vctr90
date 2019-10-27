const http = require('http');

setInterval(async () => {
  try {
    await http.get('http://vctrdev.com');
    console.log('I am awake');
  } catch (error) {
    throw error;
  }
}, 300000);
