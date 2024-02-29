const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    console.log('Fetching https://zhehanz.yicp.fun');
    const response = await fetch('https://zhehanz.yicp.fun', { redirect: 'manual' });
    console.log('Response status:', response.status);

    if (response.status >= 300 && response.status < 400) {
      const locationHeader = response.headers.get('location');
      console.log('Redirect location:', locationHeader);

      // Further processing...
    } else {
      console.error('No redirect occurred');
      res.status(200).json({ error: 'No redirect found' });
    }
  } catch (error) {
    console.error('Error in function:', error.message);
    res.status(500).json({ error: error.message });
  }
};