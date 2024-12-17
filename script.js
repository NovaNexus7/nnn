document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navigation = document.querySelector('.navigation');

  mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
  });

  // Close mobile menu when a navigation link is clicked
  navigation.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
          mobileMenuToggle.classList.remove('active');
          navigation.classList.remove('active');
      }
  });
});