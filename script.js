// Emergency Database
const emergencyDatabase = {
    dhaka: {
        name: "Dhaka",
        police: [
            { name: "Dhaka Metropolitan Police", number: "01713455660", area: "Headquarters" },
            { name: "Ramna Police Station", number: "01713455661", area: "Ramna" },
            { name: "Gulshan Police Station", number: "01713455662", area: "Gulshan" },
            { name: "Banani Police Station", number: "01713455663", area: "Banani" },
            { name: "Uttara Police Station", number: "01713455664", area: "Uttara" }
        ],
        fire: [
            { name: "Dhaka Fire Service HQ", number: "01769000111", area: "Headquarters" },
            { name: "Tejgaon Fire Station", number: "01769000112", area: "Tejgaon" },
            { name: "Gulshan Fire Station", number: "01769000113", area: "Gulshan" },
            { name: "Motijheel Fire Station", number: "01769000114", area: "Motijheel" }
        ],
        hospital: [
            { name: "Square Hospital", number: "01713455667", address: "Panthapath", emergency: "01713455666" },
            { name: "United Hospital", number: "01755567890", address: "Gulshan", emergency: "01755567891" },
            { name: "Apollo Hospital", number: "01744455667", address: "Bashundhara", emergency: "01744455668" },
            { name: "Dhaka Medical College", number: "01769000333", address: "Secretariat Road", emergency: "01769000334" }
        ],
        ambulance: [
            { name: "Dhaka Ambulance Service", number: "01769000222", area: "All Dhaka" },
            { name: "Red Crescent Ambulance", number: "01711555665", area: "Emergency Service" },
            { name: "Private Ambulance Service", number: "01711555666", area: "24/7 Service" }
        ]
    },
    chittagong: {
        name: "Chittagong",
        police: [
            { name: "Chittagong Metropolitan Police", number: "01711555660", area: "Headquarters" },
            { name: "Kotwali Police Station", number: "01711555661", area: "Kotwali" },
            { name: "Panchlaish Police Station", number: "01711555662", area: "Panchlaish" }
        ],
        fire: [
            { name: "Chittagong Fire Service", number: "01711555661", area: "Headquarters" },
            { name: "Agrabad Fire Station", number: "01711555662", area: "Agrabad" }
        ],
        hospital: [
            { name: "Chittagong Medical College", number: "01711555667", address: "K.B. Fazlul Kader Road", emergency: "01711555668" },
            { name: "CSCR Hospital", number: "01722667788", address: "GEC Circle", emergency: "01722667789" }
        ],
        ambulance: [
            { name: "Chittagong Ambulance", number: "01711555662", area: "City Service" },
            { name: "Port Ambulance", number: "01711555663", area: "Port Area" }
        ]
    },
    rajshahi: {
        name: "Rajshahi",
        police: [
            { name: "Rajshahi Metropolitan Police", number: "01711555991", area: "Headquarters" },
            { name: "Boalia Police Station", number: "01711555992", area: "Boalia" }
        ],
        fire: [
            { name: "Rajshahi Fire Service", number: "01711555992", area: "Headquarters" }
        ],
        hospital: [
            { name: "Rajshahi Medical College", number: "01711555999", address: "Laxmipur", emergency: "01711555998" },
            { name: "Islami Bank Hospital", number: "01711555997", address: "Kazihata", emergency: "01711555996" }
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
            { name: "Khulna Medical College", number: "01711555888", address: "Sonadanga", emergency: "01711555887" },
            { name: "Gazi Medical College", number: "01711555886", address: "Moylapota", emergency: "01711555885" }
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
            { name: "Sher-e-Bangla Medical College", number: "01711555777", address: "Barisal Sadar", emergency: "01711555776" },
            { name: "Barisal General Hospital", number: "01711555775", address: "Sadar Road", emergency: "01711555774" }
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
            { name: "Sylhet MAG Osmani Medical College", number: "01711555666", address: "Mirboxtula", emergency: "01711555665" },
            { name: "North East Medical College", number: "01711555664", address: "Sylhet City", emergency: "01711555663" }
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
            { name: "Rangpur Medical College", number: "01711555555", address: "Medical Road", emergency: "01711555554" },
            { name: "Prime Hospital", number: "01711555553", address: "Station Road", emergency: "01711555552" }
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
            { name: "Mymensingh Medical College", number: "01711555444", address: "Medical College Road", emergency: "01711555443" },
            { name: "Community Based Medical College", number: "01711555442", address: "Mymensingh City", emergency: "01711555441" }
        ],
        ambulance: [
            { name: "Mymensingh Ambulance", number: "01711555438", area: "City Service" }
        ]
    }
};

// State Management
let selectedCity = null;
let selectedService = null;

// Initialize Theme
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme;
    document.getElementById('theme-switch').checked = savedTheme === 'light';
    
    // Add city button listeners
    document.querySelectorAll('.city-btn').forEach(btn => {
        btn.addEventListener('click', () => selectCity(btn.dataset.city));
    });
});

// Theme Toggle
document.getElementById('theme-switch').addEventListener('change', function(e) {
    const theme = e.target.checked ? 'light' : 'dark';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
});

// Select City
function selectCity(city) {
    selectedCity = city;
    const cityData = emergencyDatabase[city];
    
    // Update display
    document.getElementById('selected-city-display').textContent = cityData.name;
    
    // Hide city selector with animation
    document.querySelector('.city-selector').style.animation = 'slideUp 0.3s reverse';
    setTimeout(() => {
        document.querySelector('.city-selector').style.display = 'none';
        // Show service categories
        document.getElementById('service-categories').style.display = 'block';
        document.getElementById('service-categories').style.animation = 'slideUp 0.5s ease-out';
    }, 300);
    
    // Add service button listeners
    document.querySelectorAll('.service-btn').forEach(btn => {
        btn.removeEventListener('click', serviceClickHandler);
        btn.addEventListener('click', serviceClickHandler);
    });
}

// Service Click Handler
function serviceClickHandler(e) {
    const service = e.currentTarget.dataset.service;
    selectService(service);
}

// Select Service
function selectService(service) {
    selectedService = service;
    const cityData = emergencyDatabase[selectedCity];
    
    // Update results header
    const serviceIcons = {
        police: 'fa-shield-alt',
        fire: 'fa-fire-extinguisher',
        hospital: 'fa-hospital',
        ambulance: 'fa-ambulance'
    };
    
    const serviceNames = {
        police: 'Police Stations',
        fire: 'Fire Service Stations',
        hospital: 'Hospitals',
        ambulance: 'Ambulance Services'
    };
    
    document.getElementById('result-service-icon').className = `fas ${serviceIcons[service]}`;
    document.getElementById('result-service-name').textContent = serviceNames[service];
    document.getElementById('result-city-name').textContent = cityData.name;
    
    // Hide service categories
    document.getElementById('service-categories').style.animation = 'fadeIn 0.3s reverse';
    setTimeout(() => {
        document.getElementById('service-categories').style.display = 'none';
        
        // Load and show results
        loadResults(service);
        document.getElementById('results-container').style.display = 'block';
        document.getElementById('results-container').style.animation = 'scaleIn 0.5s ease-out';
    }, 300);
}

// Load Results
function loadResults(service) {
    const cityData = emergencyDatabase[selectedCity];
    const items = cityData[service];
    const resultsList = document.getElementById('results-list');
    
    let html = '';
    items.forEach(item => {
        if (service === 'hospital') {
            html += `
                <div class="result-item" onclick="callNumber('${item.number}')">
                    <h4><i class="fas fa-hospital"></i> ${item.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${item.address}</p>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <a href="tel:${item.number}" class="phone-number" onclick="event.stopPropagation()">
                            <i class="fas fa-phone"></i> ${item.number}
                        </a>
                        ${item.emergency ? `
                        <a href="tel:${item.emergency}" class="phone-number" style="background: #ff4444;" onclick="event.stopPropagation()">
                            <i class="fas fa-ambulance"></i> Emergency
                        </a>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="result-item" onclick="callNumber('${item.number}')">
                    <h4><i class="fas ${service === 'police' ? 'fa-police-box' : service === 'fire' ? 'fa-fire' : 'fa-ambulance'}"></i> ${item.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${item.area || 'City Area'}</p>
                    <a href="tel:${item.number}" class="phone-number" onclick="event.stopPropagation()">
                        <i class="fas fa-phone"></i> ${item.number}
                    </a>
                </div>
            `;
        }
    });
    
    resultsList.innerHTML = html;
}

// Call Number
function callNumber(number) {
    window.location.href = `tel:${number}`;
    
    // Show call animation
    const btn = event?.currentTarget;
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }
}

// Reset to City Selection
function resetToCitySelection() {
    // Hide other containers
    document.getElementById('service-categories').style.display = 'none';
    document.getElementById('results-container').style.display = 'none';
    
    // Show city selector
    document.querySelector('.city-selector').style.display = 'block';
    document.querySelector('.city-selector').style.animation = 'slideUp 0.5s ease-out';
    
    // Reset selections
    selectedCity = null;
    selectedService = null;
}

// Back to Services
function backToServices() {
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('service-categories').style.display = 'block';
    document.getElementById('service-categories').style.animation = 'slideUp 0.5s ease-out';
}

// Emergency Quick Access
function showEmergencyQuickAccess() {
    const fabMenu = document.querySelector('.fab-menu');
    fabMenu.style.display = fabMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'E' for emergency
    if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        callNumber('999');
    }
    
    // Press 'Esc' to go back
    if (e.key === 'Escape') {
        if (document.getElementById('results-container').style.display === 'block') {
            backToServices();
        } else if (document.getElementById('service-categories').style.display === 'block') {
            resetToCitySelection();
        }
    }
});

// Add ripple effect to all buttons
document.addEventListener('click', function(e) {
    if (e.target.closest('button') || e.target.closest('.national-card') || e.target.closest('.result-item')) {
        const element = e.target.closest('button') || e.target.closest('.national-card') || e.target.closest('.result-item');
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX - element.getBoundingClientRect().left + 'px';
        ripple.style.top = e.clientY - element.getBoundingClientRect().top + 'px';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Preload data for faster access
function preloadData() {
    // Cache all city data
    Object.keys(emergencyDatabase).forEach(city => {
        // Just accessing the data to load it into memory
        const data = emergencyDatabase[city];
    });
}

// Call preload on idle
if ('requestIdleCallback' in window) {
    requestIdleCallback(preloadData);
} else {
    setTimeout(preloadData, 1000);
}

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
