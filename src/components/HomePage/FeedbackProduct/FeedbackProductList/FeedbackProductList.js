const FeedbackProductList = [
  {
    id: 1,
    active: false,
    stars: [...new Array(4).fill(true), false],
    name: "Anna",
    text: `"Avocado toast is my go-to breakfast. The creamy avocado on whole grain toast keeps me energized throughout the morning. Simple, delicious, and healthy!"`,
  },
  {
    id: 2,
    active: true,
    stars: new Array(5).fill(true),
    name: "David Alex",
    text: `"I'm a fitness enthusiast, and this protein-packed quinoa bowl is a game-changer! It's a filling, nutritious powerhouse that keeps me fueled for my workouts. A must for health-conscious folks!"`,
  },
  {
    id: 3,
    active: false,
    stars: new Array(5).fill(true),
    name: "Olivia",
    text: `"The mixed berry smoothie is a tasty way to start the day. It's not only delicious but also loaded with antioxidants. A great choice for a quick and nutritious breakfast."`,
  },
];

export default FeedbackProductList;
