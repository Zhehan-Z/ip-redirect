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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
    </style>
</head>
<body>
    <div>Just a moment...</div>
    <script>
        // Attempt to load a small, known resource from the IPv6 domain
        fetch('https://v6-connect.zheha.nz:2053/test-resource', { mode: 'no-cors' })
            .then(response => {
                console.log('IPv6 connection successful.');
                window.location.href = 'https://v6-connect.zheha.nz:2053';
            })
            .catch(error => {
                console.log('IPv6 connection failed, falling back to IPv4.');
                window.location.href = 'https://v4-connect.zheha.nz:2053';
            });
    </script>
</body>
</html>