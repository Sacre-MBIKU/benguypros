const scrollTo = (verticalPosition) => {
  console.log(verticalPosition);
  window.scrollTo({
    top: verticalPosition,
    left: 0,
    behavior: 'smooth'
  });
};

export default scrollTo;
