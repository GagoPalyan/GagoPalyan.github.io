const currentData = () => {
  let date = new Date().toString().split(" ");
  const currentData = {
    data: `${date[2]} ${date[1]} ${date[3]}`,
    time: `${date[4].slice(0, 5)}`,
  };
  return currentData;
};

export default currentData;
