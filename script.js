document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h1>Welcome to the Home Page</h1>';
});

document.getElementById('dashboard').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <div class="cloud-heading">Farm Monitoring System</div>
        <div class="dashboard">
            <div class="card" id="temperature-card">
                <img src="/Users/aathimuthu/Downloads/1487511.png" alt="Temperature Icon">
                <h3>Temperature</h3>
                <p id="temperature-value">25°C</p>
            </div>
            <div class="card" id="humidity-card">
                <img src="/Users/aathimuthu/Downloads/humidity-icon-thin-line-blue-fill-design-vector-illustration-161337637.webp" alt="Humidity Icon">
                <h3>Humidity</h3>
                <p id="humidity-value">60%</p>
            </div>
            <div class="card" id="soil-moisture-card">
                <img src="/Users/aathimuthu/Downloads/istockphoto-1145885099-612x612.jpg" alt="Soil Moisture Icon">
                <h3>Soil Moisture</h3>
                <p id="soil-moisture-value">30%</p>
            </div>
            <div class="card" id="light-intensity-card">
                <img src="/Users/aathimuthu/Downloads/2779262.png" alt="Light Intensity Icon">
                <h3>Light Intensity</h3>
                <p id="light-intensity-value">700 lux</p>
            </div>
            <div class="card" id="crop-recommendation-card">
                <img src="/Users/aathimuthu/Downloads/png-transparent-computer-icons-crop-agriculture-farmer-grain-miscellaneous-food-leaf-thumbnail.png" alt="Crop Recommendation Icon">
                <h3>Crop Recommendation</h3>
                <p id="crop-recommendation-value">Recommended Crop: Corn</p>
            </div>
        </div>

        <!-- Popup Modal -->
        <div id="popup-modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="modal-body">
                    <!-- Content will be dynamically loaded here -->
                </div>
            </div>
        </div>
    `;

    // Load the dashboard script after injecting the HTML
    loadDashboardScript();
});

document.getElementById('about').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h1>About Us</h1><p>This is the about page.</p>';
});

document.getElementById('login').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h1>Login</h1><form><label for="username">Username:</label><input type="text" id="username" name="username"><br><label for="password">Password:</label><input type="password" id="password" name="password"><br><input type="submit" value="Login"></form>';
});

function loadDashboardScript() {
    // Function to generate random values
    function getRandomValue(min, max, decimals = 0) {
        const factor = Math.pow(10, decimals);
        return (Math.random() * (max - min) + min).toFixed(decimals);
    }

    // Function to generate random NPK values
    function getRandomNPKValues() {
        return {
            nitrogen: Math.floor(Math.random() * 100),
            phosphorus: Math.floor(Math.random() * 50),
            potassium: Math.floor(Math.random() * 50)
        };
    }

    // Function to recommend crop based on NPK values
    function recommendCrop(nitrogen, phosphorus, potassium) {
        // Sample logic to recommend a crop based on NPK values
        if (nitrogen >= 50 && phosphorus >= 20 && potassium >= 30) {
            return "Corn";
        } else if (nitrogen >= 40 && phosphorus >= 15 && potassium >= 25) {
            return "Wheat";
        } else if (nitrogen >= 30 && phosphorus >= 10 && potassium >= 20) {
            return "Soybean";
        } else if (nitrogen >= 25 && phosphorus >= 5 && potassium >= 15) {
            return "Rice";
        } else if (nitrogen >= 20 && phosphorus >= 8 && potassium >= 10) {
            return "Barley";
        } else {
            return "No specific recommendation";
        }
    }

    // Set random values to the cards
    document.getElementById('temperature-value').innerText = getRandomValue(15, 35) + '°C';
    document.getElementById('humidity-value').innerText = getRandomValue(30, 90) + '%';
    document.getElementById('soil-moisture-value').innerText = getRandomValue(10, 60) + '%';
    document.getElementById('light-intensity-value').innerText = getRandomValue(200, 1000) + ' lux';

    // Get all cards
    var cards = document.getElementsByClassName("card");

    // Add event listener to each card
    Array.from(cards).forEach(function(card) {
        card.addEventListener("click", function() {
            var cardId = this.id;
            var modalBody = document.getElementById("modal-body");

            // Customize the content for each card
            switch(cardId) {
                case "temperature-card":
                    modalBody.innerHTML = "<img src='/Users/aathimuthu/Downloads/360_F_304071718_P1IyR8uuVDogvXXbjsxcAps7FB5E4DBJ.jpg' alt='Temperature Details' style='width: 150px; height: 150px'><h3>Temperature Details</h3><p>Current temperature is " + document.getElementById('temperature-value').innerText + ". It is important to maintain the optimal temperature for crop growth.</p>";
                    break;
                case "humidity-card":
                    modalBody.innerHTML = "<img src='/Users/aathimuthu/Downloads/itemeditorimage_62c68a5b4b36a.webp' alt='Humidity Details' style='width: 200px; height: 150px'><h3>Humidity Details</h3><p>Current humidity is " + document.getElementById('humidity-value').innerText + ". Proper humidity levels are crucial for crop health.</p>";
                    break;
                case "soil-moisture-card":
                    modalBody.innerHTML = "<img src='/Users/aathimuthu/Downloads/datamaps-soilmoisture-impacts.jpg.jpeg' alt='Soil Moisture Details' style='width: 100%; border-radius:20px;'><h3>Soil Moisture Details</h3><p>Current soil moisture is " + document.getElementById('soil-moisture-value').innerText + ". Adequate soil moisture is necessary for optimal plant growth.</p>";
                    break;
                case "light-intensity-card":
                    modalBody.innerHTML = "<img src='/Users/aathimuthu/Downloads/generative-ai-young-plant-growing-in-sunlight-from-the-ground-macrorealistic-illustration-agricultural-vegetable-nature-organic-healthy-farm-food-concept-horizontal-banner-photo.jpeg' alt='Light Intensity Details' style='width: 100%;height:100%; border-radius: 20px;'><h3>Light Intensity Details</h3><p>Current light intensity is " + document.getElementById('light-intensity-value').innerText + ". Sufficient light is essential for photosynthesis and crop yield.</p>";
                    break;
                case "crop-recommendation-card":
                    var npkValues = getRandomNPKValues();
                    var recommendedCrop = recommendCrop(npkValues.nitrogen, npkValues.phosphorus, npkValues.potassium);
                    modalBody.innerHTML = "<img src='/Users/aathimuthu/Downloads/iot-in-agriculture.jpg' alt='Crop Recommendation Details' style='width: 500px;height:300px;border-radius:20px;'><h3>Crop Recommendation Details</h3><p>Recommended crop based on current conditions is " + document.getElementById('crop-recommendation-value').innerText + ". Choosing the right crop can maximize yield and profitability.</p>";
                    break;
                default:
                    modalBody.innerHTML = "<p>No details available.</p>";
            }

            // Display the modal
            var modal = document.getElementById("popup-modal");
            modal.style.display = "block";
        });
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        var modal = document.getElementById("popup-modal");
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("popup-modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
window.onload = function() {
    document.getElementById('loading-overlay').style.display = 'none';
};

function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default link behavior
        showLoading();
        const href = this.href;
        setTimeout(() => {
            window.location.href = href;
        }, 1500);  // Delay navigation for 3 seconds
    });
});
