// api/redirect.js
export default function handler(req, res) {
    // Vercel automatically provides the real client IP in the "x-forwarded-for" header
    const ip = req.headers['x-forwarded-for'] || '';
    
    // Determine whether the IP is IPv4 or IPv6
    // This is a basic check based on the presence of ":" indicating an IPv6 address
    const isIPv6 = ip.includes(':');
    const redirectUrl = isIPv6 ? 'https://v6-connect.zheha.nz' : 'https://v4-connect.zheha.nz';

    // Redirect the client to the determined URL
    res.redirect(redirectUrl);
}
