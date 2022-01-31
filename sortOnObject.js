const obj = {
  india: 1,
  china: 2,
  russia: 3,
};

const arr = [
  {
    name: "china",
  },
  {
    name: "india",
  },
  {
    name: "russia",
  },
];

function sort(arr) {
  // using inbuilt
  // let a = arr.sort((a, b) => {
  //   return obj[a.name] - obj[b.name];
  // });

  // using bubble
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currId = obj[arr[i].name];
      const nextId = obj[arr[j].name];
      if (currId > nextId) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  console.log(arr);
  // console.log(a);
}

sort(arr);
