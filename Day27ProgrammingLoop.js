function LargestNumber() {
    var nums=[25,10,56,23,12,78,96,100,156];
    var largestNumber=0;
    for(var i=0;i<nums.length;i++)
    {
        var num =nums[i];
       if(num > largestNumber)
       {
        largestNumber =num;
       }
    }
    alert(largestNumber);
}


function SmallestNumber() {
    var nums=[12, 25,36,45,69,58,78,63];
    var smallestNumber=nums[0];
    for(var i=0;i<nums.length;i++)
    {
        var num=nums[i];
        if(num<smallestNumber)
        {
            smallestNumber =num;
        }
    }
    alert(smallestNumber);
}

function SumOfArray() {
    var nums =[12,23,11,10,18,19];
    var sum=0;

    for(var i=0;i<nums.length;i++)
    {
        var num =nums[i];
        sum+=num;
    }
    alert(sum);
}

function print() {
    for(var i=1;i<11;i++)
    {
        alert(i);
    }
}


function firstNaturalNumber() {
    var sum=0;

    for(var i=0;i<11;i++)
    {
        sum+=i;
    }
    alert(sum);
}