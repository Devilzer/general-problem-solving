//John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55,57, 58, 60]. John is Please ensure you read the question carefully and solve it using javascript.tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.


const ts =  [50, 55, 56, 57, 58];
const xs = [50];
const ys = [91, 74, 73, 85, 73, 81, 87];

const chooseBestSum = function(arr,n,totalDistance){
    if(arr.length<n){
        return null;
    }
    else{
        var bestDistance=0;

        for(var i=1;i<Math.pow(2,arr.length);i++){
            var value = i.toString(2).split("").map((x)=>parseInt(x));
            var diff =arr.length - value.length;
            for(var j=0;j<diff;j++){
                value.push(0);
            }
            if(diff!=0){
            value.reverse();
      
            }
            // console.log(value);
      
            var count=0;
            var length =value.length;
            for(var j=0;j<length;j++){
                if(value[j]===1){
                    count++;
                }
            }
            var sum =0;
            if(count===n){
              for(var j=0;j<value.length;j++){
                  if(value[j]===1){
                      sum=sum + arr[j];
                  }
              }
            //   console.log(sum);
              if(sum>=bestDistance && sum<= totalDistance){
                  bestDistance = sum;
              }
            }
            
          }
          return bestDistance;
    }
    
}


console.log(chooseBestSum(ts,3,163));
console.log(chooseBestSum(xs,3,163));
console.log(chooseBestSum(ys,3,260));
console.log(chooseBestSum(ts,3,171));



