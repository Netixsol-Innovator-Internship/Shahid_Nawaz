var t1 = gsap.timeline();
t1.from("#nuruimage", {
  x: -1000,
  duration: 1.3,
  delay: 0.7,
  stagger: 0.5,
});

t1.from("#big", {
  x: -1000,
  opacity: 0,
  duartion: 5,
  color: "red",
});

t1.from("#black", {
  x: -1000,
  opacity: 0,
  duartion: 5,
  color: "green",
});

t1.from("#shop", {
  size: 0,
  opacity: 0,
  duartion: 5,
});
