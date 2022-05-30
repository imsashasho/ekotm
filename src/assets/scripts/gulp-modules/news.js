const filters = document.querySelectorAll('.news-filter');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.news-right .news-item:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.news-right [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
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
