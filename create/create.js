import { checkAuth, logout, getWorkshops, createParticipant } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector(`.add-participant`);
const toWorkshopsButton = document.getElementById('to-workshops');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const selectEl = document.getElementById('workshops-id');
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.textContent = workshop.name;
        option.value = workshop.id;
        selectEl.append(option);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newForm = new FormData(form);
    const newParticipant = {
        name: newForm.get('name'),
        workshop_id: newForm.get('workshops-id')
    };
    await createParticipant(newParticipant);
    form.reset();
    location.replace('../workshops');
});

toWorkshopsButton.addEventListener('click', () => {
    location.replace('../workshops');
});