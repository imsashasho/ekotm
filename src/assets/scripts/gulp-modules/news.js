const filters = document.querySelectorAll('.news-filter');
let activeFilter = filters[0];

filters.forEach((filter) => {
  filter.addEventListener('click', (event) => {
    const selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(
      `.news-right .news-item:not([data-filter='${selectedFilter}'])`,
    );
    let itemsToShow = document.querySelectorAll(`.news-right [data-filter='${selectedFilter}']`);
    const { currentTarget } = event;
    currentTarget.classList.add('active');
    activeFilter.classList.remove('active');
    activeFilter = currentTarget;

    if (selectedFilter === 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.news-right [data-filter]');
    }

    itemsToHide.forEach((el) => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach((el) => {
      el.classList.remove('hide');
      el.classList.add('show');
    });
  });
});

const newsContainerRight = document.querySelector('.news-right__small');
const newsContainerLeft = document.querySelector('.news-right__large');
const filterAll = document.querySelector('[data-filter="all"]');
const filterNews = document.querySelector('[data-filter="news"]');
const filterSale = document.querySelector('[data-filter="promotions"]');

async function newsRendering() {
  const sendData = new FormData();
  sendData.append('action', 'getNews');
  let newsData = await fetch('/wp-admin/admin-ajax.php', {
    method: 'POST',
    body: sendData,
  });
  newsData = await newsData.json();
  newsContainerRight.innerHTML = '';
  newsContainerLeft.innerHTML = '';

  newsData.dataSmall.forEach((card) => {
    newsContainerRight.innerHTML += card;
  });
  newsData.dataBig.forEach((card) => {
    newsContainerLeft.innerHTML += card;
  });
  filterAll.innerHTML += `<span class="news-filters-sup">${newsData.count.all}</span>`;
  filterNews.innerHTML += `<span class="news-filters-sup">${newsData.count.news}</span>`;
  filterSale.innerHTML += `<span class="news-filters-sup">${newsData.count.sale}</span>`;
}

newsRendering();
