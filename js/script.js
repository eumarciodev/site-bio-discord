const url = 'https://2911-144-22-241-121.ngrok-free.app';
const bodyprofile = document.querySelector('#profile-container');

async function getuser(user_id) {
  const response = await fetch(`${url}/profile`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: user_id,
    }),
  });

  const userData = await response.json();

  const response2 = await fetch(`${url}/badges`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id1: user_id,
    }),
  });

  const badgeData = await response2.json();
  console.log(badgeData)

  const div = document.createElement('div');

  const divcontent = `
    <div class="perfil">
      <img class="icon-discord" src='${userData.avatar ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}` : `https://www.svgrepo.com/show/331368/discord-v2.svg`}'><br><br>
      <p class="nome">${userData.username}</p><br>
      <div class="badge">
      ${badgeData.map(badge => `<img class="badges" src='https://cdn.discordapp.com/badge-icons/${badge.icon}.png'>`).join('')}
      </div>
      </div>`;
  //caso queria adicionar rede social, basta mover para dentro da div!
  /*       <div class="rede">
        <a href="https://www.instagram.com/@user"><img src="../img/insta.png" alt="insta"/></a>
        <a href="https://x.com/@user"><img src="../img/twitter.png" alt="insta"/></a>
        </div> */

  div.insertAdjacentHTML("beforeend", divcontent);
  return div;
}

async function displayProfiles() {
  const profileContainer = document.createElement('div');
  profileContainer.classList.add('peril')
  profileContainer.classList.add('profile-container');

  const profile1 = await getuser('1117899925934575616');

  profileContainer.appendChild(profile1);

  bodyprofile.appendChild(profileContainer);
}

displayProfiles();
