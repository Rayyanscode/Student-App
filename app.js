var stu1 = {
    Name: 'Rayyan',
    Age: '18',
    Contact: +923172879046,
    Institute: 'SAIMS',
    Result: 1,
}

var stu2 = {
    Name: 'Ali',
    Age: '19',
    Contact: +923172879048,
    Institute: 'ADAMJEE',
    Result: 0,
}

var stu3 = {
    Name: 'Raheel',
    Age: '20',
    Contact: +923172879049,
    Institute: 'HAMDARD',
    Result: 1,
}

var stu4 = {
    Name: 'Rohan',
    Age: '21',
    Contact: +923172879050,
    Institute: 'MAK',
    Result: 0,
}

var stu5 = {
    Name: 'Aqib',
    Age: '22',
    Contact: +923172879052,
    Institute: 'PRACTICAL CENTER',
    Result: 1,
}

var stu6 = {
    Name: 'Sharjeel',
    Age: '23',
    Contact: +923172879053,
    Institute: 'MALIK',
    Result: 0,
}

var stu7 = {
    Name: 'Bilal',
    Age: '24',
    Contact: +923172879054,
    Institute: 'NED',
    Result: 1,

}

var stu8 = {
    Name: 'umer',
    Age: '25',
    Contact: +923172879055,
    Institute: 'IQRA',
    Result: 0,
}

var stu9 = {
    Name: 'Moiz',
    Age: '26',
    Contact: +923172879056,
    Institute: 'USMAN',
    Result: 1,
}

var stu10 = {
    Name: 'Shoaib',
    Age: '27',
    Contact: +923172879057,
    Institute: 'JAWAN PAKISTAN',
    Result: 0,
}


var arr = [stu1,stu2,stu3,stu4,stu5,stu6,stu7,stu8,stu9,stu10]
console.log(arr)

for(var i=0; i<arr.length; i++){
    arr[i].Rollnum = i + 1
}
console.log(arr)

for(var j=0; j<arr.length; j++){
    if (arr[j].Result == 1 ) {
        arr[j].Final = 'Pass'
    }else if(arr[j].Result == 0){
        arr[j].Final = 'Fail'
    }
}

console.log(arr)


var a = document.getElementById('rollnumber')
var c = document.getElementById('displayres')
var b = document.getElementById('displayname')
var d = document.getElementById('roll')
var e = document.getElementById('inst')
var f = document.getElementById('contact')
var g = document.getElementById('age')

function searchRes() {
    for(var k=0; k<arr.length; k++){
        if (arr[k].Rollnum == a.value) {
            if (arr[k].Result) {
                b.innerHTML = arr[k].Name
                c.innerHTML = 'Pass'
                d.innerHTML = arr[k].Rollnum
                e.innerHTML = arr[k].Institute
                f.innerHTML = arr[k].Contact
                g.innerHTML = arr[k].Age
            }else{
                b.innerHTML = arr[k].Name
                c.innerHTML = 'Fail'
                d.innerHTML = arr[k].Rollnum
                e.innerHTML = arr[k].Institute
                f.innerHTML = arr[k].Contact
                g.innerHTML = arr[k].Age


            }
            
        }

    }
    
}