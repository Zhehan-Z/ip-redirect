const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://zhehanz.yicp.fun', { redirect: 'manual' });
    if (response.status === 307) { // Temporary Redirect
      const location = response.headers.get('location');
      // Parse the location for IP and port, assuming the location is like "https://114.221.230.9:13465/"
      const match = location.match(/https?:\/\/(\d+\.\d+\.\d+\.\d+):(\d+)/);
      if (match) {
        res.json({ ip: match[1], port: match[2], location });
      } else {
        res.status(500).json({ error: "Failed to parse location." });
      }
    } else {
      res.status(response.status).json({ error: "No redirect occurred." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
