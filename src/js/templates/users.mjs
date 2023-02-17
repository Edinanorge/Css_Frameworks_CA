export function profileTemplate(profileData) {
  const markup = `<div class="d-md-flex align-items-center">
                      <img
                        style="width:3rem; height:3rem; object-fit:cover"
                        src="${profileData.avatar}"
                        alt="Profile picture"
                        class="rounded-circle m-1 border border-secondary border-2"
                      />
                      <p class="m-0 ps-md-2 d-none d-lg-block">${profileData.name}</p>
                  </div>`;
  return markup;
}

export function renderUser(profileData, parent) {
  parent.insertAdjacentHTML("afterbegin", profileTemplate(profileData));
}

export function renderUsers(profilDataList, parent) {
  parent.insertAdjacentHTML("afterbegin", profilDataList.map(profileTemplate));
}
