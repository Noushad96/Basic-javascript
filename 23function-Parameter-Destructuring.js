// Parameter Destructuring

// jyada use
// object me
// React me  krte hai

const admi = {
  FirstName: "khali",
  address: "delhi",
};

// function getDetails(obj) {
//   console.log("get name Detail ==", obj.FirstName);
//   console.log("get address Detail ==", obj.address);
// }

function getDetails({ FirstName, address }) {
  console.log("get name Detail ==", FirstName);
  console.log("get address Detail ==", address);
}

getDetails(admi); // invoked the function
// console.log("access variable =", admi);
