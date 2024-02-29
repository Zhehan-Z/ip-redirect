const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('http://zhehanz.yicp.fun', { redirect: 'manual' });
    const locationHeader = response.headers.get('location');

    if (locationHeader) {
      const url = new URL(locationHeader);
      const port = url.port;
      const path = url.pathname;
      res.status(200).json({ port, path });
    } else {
      res.status(200).json({ error: 'No redirect found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};