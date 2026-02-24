// Emergency Database
const emergencyData = {
    dhaka: {
        name: "Dhaka",
        police: [
            { name: "Dhaka Metropolitan Police", number: "01713455660", area: "Headquarters" },
            { name: "Ramna Police Station", number: "01713455661", area: "Ramna" },
            { name: "Gulshan Police Station", number: "01713455662", area: "Gulshan" }
        ],
        fire: [
            { name: "Dhaka Fire Service HQ", number: "01769000111", area: "Headquarters" },
            { name: "Tejgaon Fire Station", number: "01769000112", area: "Tejgaon" }
        ],
        hospital: [
            { name: "Square Hospital", number: "01713455667", address: "Panthapath", emergency: "01713455666" },
            { name: "United Hospital", number: "01755567890", address: "Gulshan" }
        ],
        ambulance: [
            { name: "Dhaka Ambulance Service", number: "01769000222", area: "24/7 Service" },
            { name: "Red Crescent Ambulance", number: "01711555665", area: "Emergency" }
        ]
    },
    chittagong: {
        name: "Chittagong",
        police: [
            { name: "Chittagong Metropolitan Police", number: "01711555660", area: "Headquarters" },
            { name: "Kotwali Police Station", number: "01711555661", area: "Kotwali" }
        ],
        fire: [
            { name: "Chittagong Fire Service", number: "01711555661", area: "Headquarters" }
        ],
        hospital: [
            { name: "Chittagong Medical College", number: "01711555667", address: "K.B. Fazlul Kader Road" }
        ],
        ambulance: [
            { name: "Chittagong Ambulance", number: "01711555662", area: "City Service" }
        ]
    },
    rajshahi: {
        name: "Rajshahi",
        police: [
            { name: "Rajshahi Metropolitan Police", number: "01711555991", area: "Headquarters" }
        ],
        fire: [
            { name: "Rajshahi Fire Service", number: "01711555992", area: "Headquarters" }
        ],
        hospital: [
            { name: "Rajshahi Medical College", number: "01711555999", address: "Laxmipur" }
        ],
        ambulance: [
            { name: "Rajshahi Ambulance", number: "01711555993", area: "City Service" }
        ]
    },
    khulna: {
        name: "Khulna",
        police: [
            { name: "Khulna Metropolitan Police", number: "01711555882", area: "Headquarters" }
        ],
        fire: [
            { name: "Khulna Fire Service", number: "01711555881", area: "Headquarters" }
        ],
        hospital: [
            { name: "Khulna Medical College", number: "01711555888", address: "Sonadanga" }
        ],
        ambulance: [
            { name: "Khulna Ambulance", number: "01711555880", area: "City Service" }
        ]
    },
    barisal: {
        name: "Barisal",
        police: [
            { name: "Barisal Metropolitan Police", number: "01711555773", area: "Headquarters" }
        ],
        fire: [
            { name: "Barisal Fire Service", number: "01711555772", area: "Headquarters" }
        ],
        hospital: [
            { name: "Sher-e-Bangla Medical College", number: "01711555777", address: "Barisal Sadar" }
        ],
        ambulance: [
            { name: "Barisal Ambulance", number: "01711555771", area: "City Service" }
        ]
    },
    sylhet: {
        name: "Sylhet",
        police: [
            { name: "Sylhet Metropolitan Police", number: "01711555660", area: "Headquarters" }
        ],
        fire: [
            { name: "Sylhet Fire Service", number: "01711555659", area: "Headquarters" }
        ],
        hospital: [
            { name: "Sylhet MAG Osmani Medical College", number: "01711555666", address: "Mirboxtula" }
        ],
        ambulance: [
            { name: "Sylhet Ambulance", number: "01711555658", area: "City Service" }
        ]
    },
    rangpur: {
        name: "Rangpur",
        police: [
            { name: "Rangpur Metropolitan Police", number: "01711555551", area: "Headquarters" }
        ],
        fire: [
            { name: "Rangpur Fire Service", number: "01711555550", area: "Headquarters" }
        ],
        hospital: [
            { name: "Rangpur Medical College", number: "01711555555", address: "Medical Road" }
        ],
        ambulance: [
            { name: "Rangpur Ambulance", number: "01711555549", area: "City Service" }
        ]
    },
    mymensingh: {
        name: "Mymensingh",
        police: [
            { name: "Mymensingh Metropolitan Police", number: "01711555440", area: "Headquarters" }
        ],
        fire: [
            { name: "Mymensingh Fire Service", number: "01711555439", area: "Headquarters" }
        ],
        hospital: [
            { name: "Mymensingh Medical College", number: "01711555444", address: "Medical College Road" }
        ],
        ambulance: [
            { name: "Mymensingh Ambulance", number: "01711555438", area: "City Service" }
        ]
    }
};

// State variables
let currentCity = null;
let currentService = null;

// Theme toggle
document.getElementById('themeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// City selection
function selectCity(city) {
    currentCity = city;
    const cityName = emergencyData[city].name;
    document.getElementById('selectedCityDisplay').textContent = cityName;
    
    // Hide city section, show service section
    document.getElementById('citySection').style.display = 'none';
    document.getElementById('serviceSection').style.display = 'block';
}

// Service selection
function selectService(service) {
    currentService = service;
    const cityData = emergencyData[currentCity];
    
    // Set header
    const serviceNames = {
        police: 'Police Stations',
        fire: 'Fire Service Stations',
        hospital: 'Hospitals',
        ambulance: 'Ambulance Services'
    };
    document.getElementById('resultHeader').innerHTML = `${cityData.name} - ${serviceNames[service]}`;
    
    // Load results
    loadResults(service);
    
    // Hide service section, show result section
    document.getElementById('serviceSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
}

// Load results
function loadResults(service) {
    const cityData = emergencyData[currentCity];
    const items = cityData[service];
    const resultsList = document.getElementById('resultsList');
    
    let html = '';
    items.forEach(item => {
        if (service === 'hospital') {
            html += `
                <div class="result-item">
                    <h4><i class="fas fa-hospital"></i> ${item.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${item.address || 'City Area'}</p>
                    <div class="result-actions">
                        <a href="tel:${item.number}" class="call-btn">
                            <i class="fas fa-phone"></i> ${item.number}
                        </a>
                        ${item.emergency ? `
                        <a href="tel:${item.emergency}" class="call-btn emergency">
                            <i class="fas fa-ambulance"></i> Emergency
                        </a>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="result-item">
                    <h4><i class="fas ${service === 'police' ? 'fa-police-box' : service === 'fire' ? 'fa-fire' : 'fa-ambulance'}"></i> ${item.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${item.area || 'City Area'}</p>
                    <div class="result-actions">
                        <a href="tel:${item.number}" class="call-btn">
                            <i class="fas fa-phone"></i> ${item.number}
                        </a>
                    </div>
                </div>
            `;
        }
    });
    
    resultsList.innerHTML = html;
}

// Navigation functions
function goBackToCities() {
    document.getElementById('serviceSection').style.display = 'none';
    document.getElementById('citySection').style.display = 'block';
    currentCity = null;
}

function goBackToServices() {
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('serviceSection').style.display = 'block';
    currentService = null;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('resultSection').style.display === 'block') {
            goBackToServices();
        } else if (document.getElementById('serviceSection').style.display === 'block') {
            goBackToCities();
        }
    }
    
    if (e.key === 'e' || e.key === 'E') {
        window.location.href = 'tel:999';
    }
});

// Save theme preference
window.addEventListener('load', function() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeBtn i').className = 'fas fa-sun';
    }
});
