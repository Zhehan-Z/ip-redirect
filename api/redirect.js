// api/showAndRedirect.js
export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || '';
    const isIPv6 = ip.includes(':');
    const redirectUrl = isIPv6 ? 'https://v6-connect.zheha.nz:2053' : 'https://v4-connect.zheha.nz:2053';

    // Serve HTML with the user's IP and redirection logic
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Redirecting...</title>
            <style>
                body {
                    font-family: 'Orbitron', sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    height: 100vh;
                    background-color: #ffffff;
                    color: #000000;
                }
                @import url('https://fonts.geekzu.org/css2?family=Orbitron:wght@400;500;600;700&display=swap');
            </style>
        </head>
        <body>
            <div>IP to redirect: ${ip}</div>
            <script>
                setTimeout(function() {
                    window.location.href = '${redirectUrl}';
                }, 1000);
            </script>
        </body>
        </html>
    `);
}
