const toggleSidebar = () => {
  document.querySelector('.sidebar').classList.toggle('active');
  document.querySelector('.middle-span').classList.toggle('disable');
  document.querySelector('.top-span').classList.toggle('top-shift');
  document.querySelector('.bottom-span').classList.toggle('bottom-shift');
}
