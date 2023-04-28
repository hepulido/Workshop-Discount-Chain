const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Create a function that checks if the custumer has discount, in case is true calculate 25% less of the refills total.
//create a function that checks if the custumer has a coupon , in case is true calculate the total with 10$ less after the discount total
//create a function that return the final amount.

const discountCheck = (obj) => {
    let result = obj.pricePerRefill * obj.refills;
    if (obj.subscription){
       result= result * 25 /100 
    } else {
        result
    }

  return result
}

console.log(discountCheck(timmy))
console.log(discountCheck(sarah))
console.log(discountCheck(rocky))

// check if coupon is true, if that's true subract $10 0f the total
 const couponCheck = (obj) => {
    let result = obj.pricePerRefill * obj.refills ;
  if (obj.coupon){
    result = result - 10
  } else {
    result
}
  return result
 }
 console.log(couponCheck(timmy))
 console.log(couponCheck(sarah))
 console.log(couponCheck(rocky))


 const totalAmount = (obj) => {
    let result = obj.pricePerRefill * obj.refills ;
    let resultAmount = result - discountCheck(obj)
    let totalAmount = result - couponCheck(obj)
   
   if (obj.subscription){
        result = resultAmount
    }
    if (obj.coupon ){
        result = couponCheck(obj)
    }
     if (obj.subscription && obj.coupon ) {
        result = resultAmount - totalAmount;
    }
    else {
        result
    }
   
  
 
  return `Your grand total is $${result}.`;
 }

 console.log(totalAmount(timmy))
 console.log(totalAmount(sarah))
 console.log(totalAmount(rocky))