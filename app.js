const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        /* CSS Code */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            padding: 20px;
            background-color: #3f51b5;
            color: #fff;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
        }

        .separator {
            width: 50px;
            height: 3px;
            background-color: #fff;
            margin: 10px auto;
        }

        .navigation {
            text-align: center;
            margin-bottom: 20px;
        }

        .navigation a {
            display: inline-block;
            margin: 0 10px;
            padding: 8px 16px;
            background-color: #3f51b5;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .navigation a:hover {
            background-color: #303f9f;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .box {
            width: calc(33.33% - 20px);
            margin: 10px;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .box:hover {
            transform: translateY(-5px);
        }

        .box h2 {
            font-size: 18px;
            margin-top: 0;
        }

        .box p {
            margin: 10px 0;
        }

        .details {
            display: none;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>My Portfolio</h1>
        <div class="separator"></div>
    </div>

    <div class="navigation">
        <a href="#">All</a>
        <a href="#">Web App</a>
        <a href="#">UI/UX</a>
        <a href="#">Graphics Design</a>
        <a href="#">Mobile App</a>
        <a href="#">Branding</a>
        <a href="#">Marketing</a>
    </div>

    <div class="container">
        <!-- Product 1 -->
        <div class="box">
            <h2>Product 1</h2>
            <p>Description of Product 1</p>
            <button onclick="showDetails('details1')">View Details</button>
            <div id="details1" class="details">
                <h3>Details of Product 1</h3>
                <p>Detailed description of Product 1 goes here.</p>
            </div>
        </div>

        <!-- Product 2 -->
        <div class="box">
            <h2>Product 2</h2>
            <p>Description of Product 2</p>
            <button onclick="showDetails('details2')">View Details</button>
            <div id="details2" class="details">
                <h3>Details of Product 2</h3>
                <p>Detailed description of Product 2 goes here.</p>
            </div>
        </div>

        <!-- Product 3 -->
        <div class="box">
            <h2>Product 3</h2>
            <p>Description of Product 3</p>
            <button onclick="showDetails('details3')">View Details</button>
            <div id="details3" class="details">
                <h3>Details of Product 3</h3>
                <p>Detailed description of Product 3 goes here.</p>
            </div>
        </div>

        <!-- Product 4 -->
        <div class="box">
            <h2>Product 4</h2>
            <p>Description of Product 4</p>
            <button onclick="showDetails('details4')">View Details</button>
            <div id="details4" class="details">
                <h3>Details of Product 4</h3>
                <p>Detailed description of Product 4 goes here.</p>
            </div>
        </div>

        <!-- Product 5 -->
        <div class="box">
            <h2>Product 5</h2>
            <p>Description of Product 5</p>
            <button onclick="showDetails('details5')">View Details</button>
            <div id="details5" class="details">
                <h3>Details of Product 5</h3>
                <p>Detailed description of Product 5 goes here.</p>
            </div>
        </div>

        <!-- Product 6 -->
        <div class="box">
            <h2>Product 6</h2>
            <p>Description of Product 6</p>
            <button onclick="showDetails('details6')">View Details</button>
            <div id="details6" class="details">
                <h3>Details of Product 6</h3>
                <p>Detailed description of Product 6 goes here.</p>
            </div>
        </div>
    </div>

    <script>
        // JavaScript Code
        function showDetails(detailsId) {
            var details = document.getElementById(detailsId);
            var allDetails = document.querySelectorAll('.details');
            allDetails.forEach(function(detail) {
                if (detail.id === detailsId) {
                    if (detail.style.display === 'block') {
                        detail.style.display = 'none';
                    } else {
                        detail.style.display = 'block';
                    }
                } else {
                    detail.style.display = 'none';
                }
            });
        }
    </script>
</body>
</html>

