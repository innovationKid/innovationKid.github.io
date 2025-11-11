// Modal handling
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.target);
    modal.style.display = 'block';
  });
});
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    span.closest('.modal').style.display = 'none';
  });
});
window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// Filter handling
const filterButtons = document.querySelectorAll('.filter-btn');
const appCards = document.querySelectorAll('.app-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const platform = btn.dataset.platform;

    appCards.forEach(card => {
      const appPlatform = card.dataset.platform;
      if (platform === 'all' || platform === appPlatform || appPlatform === 'both') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
