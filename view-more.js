// Sample data
const requests = [
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Yuliana Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Elias Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Marah Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Elia Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Ahmad Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    { name: 'Yuliana Attar', submitted: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
    
];


const requestsPerPage = 12;
let currentPage = 1;
let filteredRequests = [...requests];

function renderRequests() {
    const container = document.getElementById('requestsContainer');
    container.innerHTML = '';

    const start = (currentPage - 1) * requestsPerPage;
    const end = start + requestsPerPage;
    const pageRequests = filteredRequests.slice(start, end);

    pageRequests.forEach((request) => {
        const card = document.createElement('div');
        card.className = 'request-card';
        card.innerHTML = `
            <div class="request-header">
                <input type="checkbox" class="select-checkbox" >
                <img src="img/profile.png" alt="Profile Image" class="profile-image">
                <h3>${request.name}</h3>
            </div>
            <p>Submitted on: ${request.submitted}</p>
            <p>Duration: ${request.duration}</p>
            <p>Salary: ${request.salary}</p>
            <div class="actions">
                <button class="approve">Approve</button>
                <button class="decline">Decline</button>
            </div>
        `;
        container.appendChild(card);
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredRequests.length / requestsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = i === currentPage ? 'active' : '';
        button.onclick = () => goToPage(i);
        pagination.appendChild(button);
    }
}

function goToPage(page) {
    currentPage = page;
    renderRequests();
}

function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('.select-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

function searchRequests() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    filteredRequests = requests.filter(request => request.name.toLowerCase().includes(searchInput));
    currentPage = 1; // Reset to the first page
    renderRequests();
}

// Initial render
renderRequests();
