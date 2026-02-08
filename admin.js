// Mock data for bins across the city
const binsData = [
    { id: 'BIN-001', name: 'IIT BHU Gate', lat: 25.2677, lng: 82.9913, fillLevel: 85, status: 'full', lastCollection: '2 hours ago', usage: 42 },
    { id: 'BIN-002', name: 'Lanka Market', lat: 25.2850, lng: 82.9930, fillLevel: 45, status: 'operational', lastCollection: '1 day ago', usage: 28 },
    { id: 'BIN-003', name: 'Assi Ghat', lat: 25.2800, lng: 83.0050, fillLevel: 92, status: 'full', lastCollection: '3 hours ago', usage: 51 },
    { id: 'BIN-004', name: 'BHU Hospital', lat: 25.2620, lng: 82.9870, fillLevel: 30, status: 'operational', lastCollection: '6 hours ago', usage: 19 },
    { id: 'BIN-005', name: 'Vishwanath Temple', lat: 25.3104, lng: 83.0107, fillLevel: 68, status: 'operational', lastCollection: '4 hours ago', usage: 35 },
    { id: 'BIN-006', name: 'Ravindra Puri', lat: 25.2950, lng: 82.9800, fillLevel: 15, status: 'operational', lastCollection: '8 hours ago', usage: 12 },
    { id: 'BIN-007', name: 'Sigra Stadium', lat: 25.3050, lng: 82.9950, fillLevel: 78, status: 'operational', lastCollection: '5 hours ago', usage: 38 },
    { id: 'BIN-008', name: 'Nadesar Palace', lat: 25.3200, lng: 83.0200, fillLevel: 55, status: 'operational', lastCollection: '7 hours ago', usage: 25 },
    { id: 'BIN-009', name: 'Cantt Station', lat: 25.2700, lng: 83.0100, fillLevel: 20, status: 'maintenance', lastCollection: '2 days ago', usage: 8 },
    { id: 'BIN-010', name: 'Durga Temple', lat: 25.3000, lng: 83.0300, fillLevel: 88, status: 'full', lastCollection: '1 hour ago', usage: 47 },
    { id: 'BIN-011', name: 'Bhelpur', lat: 25.2500, lng: 82.9700, fillLevel: 42, status: 'operational', lastCollection: '9 hours ago', usage: 22 },
    { id: 'BIN-012', name: 'Mahmoorganj', lat: 25.3150, lng: 82.9850, fillLevel: 60, status: 'operational', lastCollection: '6 hours ago', usage: 31 },
    { id: 'BIN-013', name: 'Sarnath', lat: 25.3833, lng: 83.0297, fillLevel: 35, status: 'operational', lastCollection: '10 hours ago', usage: 18 },
    { id: 'BIN-014', name: 'Maldahiya', lat: 25.2400, lng: 83.0000, fillLevel: 95, status: 'full', lastCollection: '30 min ago', usage: 54 },
    { id: 'BIN-015', name: 'Susuwahi', lat: 25.2200, lng: 82.9600, fillLevel: 25, status: 'operational', lastCollection: '12 hours ago', usage: 15 }
];

// Mock alerts data
const alertsData = [
    { type: 'critical', time: '5 min ago', message: 'BIN-014 (Maldahiya) is 95% full - immediate collection required' },
    { type: 'critical', time: '15 min ago', message: 'BIN-003 (Assi Ghat) reached capacity - collection in progress' },
    { type: 'warning', time: '1 hour ago', message: 'BIN-009 (Cantt Station) offline for maintenance' },
    { type: 'critical', time: '2 hours ago', message: 'BIN-001 (IIT BHU Gate) is 85% full - collection needed soon' },
    { type: 'info', time: '3 hours ago', message: 'Collection route optimized - 4 bins scheduled for pickup' },
    { type: 'warning', time: '4 hours ago', message: 'BIN-010 (Durga Temple) experiencing high traffic' },
    { type: 'info', time: '5 hours ago', message: 'Daily waste collection target achieved: 156kg' }
];

let map;
let currentFilter = 'all';

// Initialize the admin dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    populateAlertsTimeline();
    populateBinsTable();
    setupFilterButtons();
    updateTimestamp();

    // Simulate real-time updates
    setInterval(updateRealTimeData, 10000); // Update every 10 seconds
    setInterval(updateTimestamp, 60000); // Update timestamp every minute
});

// Initialize the map with all bins
function initializeMap() {
    map = L.map('adminMap').setView([25.2677, 82.9913], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for all bins
    binsData.forEach(bin => {
        const color = getBinColor(bin.status, bin.fillLevel);
        const icon = L.divIcon({
            className: 'custom-bin-marker',
            html: `<div style="
                background: ${color};
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            ">🗑️</div>`,
            iconSize: [30, 30]
        });

        const marker = L.marker([bin.lat, bin.lng], { icon }).addTo(map);

        marker.bindPopup(`
            <div style="font-family: 'Outfit', sans-serif;">
                <strong>${bin.id}</strong><br>
                📍 ${bin.name}<br>
                📊 Fill: ${bin.fillLevel}%<br>
                🔄 Status: ${bin.status}<br>
                🕐 Last: ${bin.lastCollection}
            </div>
        `);
    });
}

// Get bin color based on status and fill level
function getBinColor(status, fillLevel) {
    if (status === 'maintenance') return '#ffd93d';
    if (status === 'full' || fillLevel >= 80) return '#ff6b6b';
    if (fillLevel >= 50) return '#ffd93d';
    return '#7bed9f';
}

// Populate alerts timeline
function populateAlertsTimeline() {
    const alertsList = document.getElementById('alertsList');
    alertsList.innerHTML = alertsData.map(alert => `
        <div class="alert-item ${alert.type}">
            <div class="time">${alert.time}</div>
            <div class="message">${alert.message}</div>
        </div>
    `).join('');
}

// Populate bins table
function populateBinsTable(filter = 'all') {
    const tbody = document.getElementById('binsTableBody');
    const filteredBins = filter === 'all' ? binsData : binsData.filter(bin => bin.status === filter);

    tbody.innerHTML = filteredBins.map(bin => {
        const fillClass = bin.fillLevel >= 80 ? 'fill-high' : bin.fillLevel >= 50 ? 'fill-medium' : 'fill-low';
        const statusClass = `status-${bin.status}`;

        return `
            <tr>
                <td><strong>${bin.id}</strong></td>
                <td>${bin.name}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div class="fill-indicator">
                            <div class="fill-bar ${fillClass}" style="width: ${bin.fillLevel}%"></div>
                        </div>
                        <span>${bin.fillLevel}%</span>
                    </div>
                </td>
                <td><span class="status-badge ${statusClass}">${bin.status.toUpperCase()}</span></td>
                <td>${bin.lastCollection}</td>
                <td>${bin.usage} items</td>
            </tr>
        `;
    }).join('');
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Get filter value and update table
            const filter = btn.dataset.filter;
            currentFilter = filter;
            populateBinsTable(filter);
        });
    });
}

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('lastUpdate').textContent = timeString;
}

// Simulate real-time data updates
function updateRealTimeData() {
    // Randomly update some bin fill levels
    const randomBins = getRandomItems(binsData, 3);

    randomBins.forEach(bin => {
        // Simulate fill level increase
        if (bin.status !== 'maintenance' && bin.fillLevel < 95) {
            bin.fillLevel = Math.min(95, bin.fillLevel + Math.floor(Math.random() * 5));

            // Update status based on fill level
            if (bin.fillLevel >= 85) {
                bin.status = 'full';
            }
        }
    });

    // Update statistics
    const totalWaste = binsData.reduce((sum, bin) => sum + (bin.fillLevel * 0.8), 0);
    document.getElementById('totalWaste').textContent = Math.floor(totalWaste + 1000).toLocaleString();

    const totalValue = Math.floor(totalWaste * 34 + 30000);
    document.getElementById('totalValue').textContent = '₹' + totalValue.toLocaleString();

    // Re-populate table if showing all bins
    if (currentFilter === 'all' || currentFilter === 'full') {
        populateBinsTable(currentFilter);
    }
}

// Utility function to get random items from array
function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
