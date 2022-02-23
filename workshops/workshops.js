import { checkAuth, logout, getWorkshops, deleteParticipant } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    const workshopsEl = document.getElementById('workshopsEl');
    workshopsEl.textContent = '';
    const workshops = await getWorkshops();
    console.log(workshops);
    for (let workshop of workshops) {
        const workshopDiv = document.createElement('div');
        workshopDiv.classList.add('workshop');
        const workshopName = document.createElement('h3');
        workshopName.textContent = workshop.name;
        const participants = workshop.participants;
        for (let participant of participants) {
            const div = document.createElement('div');
            div.classList.add('participant');
            div.textContent = participant.name;
            div.addEventListener('click', async () => {
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });
            workshopDiv.append(div);
        }
        workshopsEl.append(workshopName, workshopDiv);

    }
}

displayWorkshops();