export function postTemplate(postData) {
  const markup = `<div class="row" id="posts">
    <div id="postTemplate">
      <div class="col-12">
        <div class="card bg-gray mx-auto feed mt-lg-3">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <img
                  src="/src/images/user-3.jpg"
                  alt="Profile picture"
                  class="rounded-circle border border-secondary border-2 feed-img"
                />
                <span class="card-title text-white mx-2 fs-5">${postData.title}</span>
              </div>
              <button title="Settings" class="btn card-text" type="button" aria-label="settings">
                <i class="bi bi-three-dots"></i>
              </button>
            </div>
            <img class="card-img my-3" alt="feed image" src=""/>
            <p class="mb-1 mt-3 text-muted card-content">${postData.body}</p>
            <div class="d-flex justify-content-between mt-3">
              <button title="Like" href="#" class="card-link text-white btn" aria-label="like post">
                <i class="bi bi-heart-fill"></i><span class="ms-1 fs-7 text-muted">244k</span>
              </button>
              <button title="Send message" href="#" class="card-link text-white btn" aria-label="send message">
                <i class="bi bi-chat-fill"></i>
                <span class="ms-1 fs-7 text-muted">78</span>
              </button>
              <button title="Share" href="#" class="card-link text-white btn" aria-label="share">
                <i class="bi bi-share-fill"></i>
                <span class="ms-1 fs-7 text-muted">3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return markup;
}

export function renderPostTemplate(postData, parent) {
  parent.insertAdjacentHTML("afterbegin", postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.insertAdjacentHTML("afterbegin", postDataList.map(postTemplate));
}
