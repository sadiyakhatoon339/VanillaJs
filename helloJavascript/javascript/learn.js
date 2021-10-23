 var name="Jack"; 
 var age=23;
 var message="Hi My name is " +name +" and I am " +age +"years old";
//alert(message);               //pop up a message
console.log(message);        // to se the output in console by clicking on inspect in the browser or by clic
                            // king ctrl+alt+j  but mine didnt work :(
                            //go to javascript string w3 school to learn javascript
                             //go to js bin.com -an online editor for html css and js

/*var fname="John";
var lname="Jacob";
var dob="10-09-82";
var age=32;
var profileImgUrl="https://coolpicks.com/johnjacob.jpg"; //single quotes can also be used 
var loginWelcomeMeassage="Welcome " +fname +" " +" .Happy " +age +"nd" +" Birthday";
console.log(loginWelcomeMeassage);
                           */
var sum=10+15;
console.log(sum);//same as java   


function area(length,width)
{
    return length*width;

}

var rectangleareas=[];
rectangleareas.push(area(10,15));  //push is a funtion of an array
rectangleareas.push(area(14,2));
console.log(rectangleareas);




//FUNCTONS

var bankbalance=500;
function maketransaction(priceOfSale)
{
    if(priceOfSale<=bankbalance){
    bankbalance-=priceOfSale;
    console.log("purchase successfull");}
    else {console.log("Insufficient funds");}
} 


maketransaction(79.00);
console.log(bankbalance);
maketransaction(2.32);
console.log(bankbalance);
maketransaction(10.45);
console.log(bankbalance);

maketransaction(450.45);
console.log(bankbalance);


//storing  the funtion in a variable
var transaction =function (priceOfsale)
{
    
    if(priceOfsale<=bankbalance){
        bankbalance -=priceOfsale;
        console.log("purchase successfull");}
        else {console.log("Insufficient funds");}
};
transaction(10);
//object
var student0 = {
    firstname:"john",
    lastname:"Parker",
    age:7,
    greeting: function(){
        return "Hi I'm " +this.firstname +"age=  "+this.age ;
    }

};
console.log(student0.greeting());

//USABLE WAY OF CREATING OBJECT
function student(first,last,key)
{
   this.firstname=first;
   this.lastname=last;
   this.age=age;
   this.greeting= function(){
    return "Hi I'm " +this.firstname +"age=  "+this.age ;
};
}
var s1=new student("Jenyy","Laga",5);
console.log(s1);
console.log(s1.greeting);



/*console.log(student0.firstname);
console.log(student0.lastname);
console.log(student0["firstname"]);//another type*/


//creates a new empty object
//best way

var student1=new Object();
student1.firstname="John";
student1.lasttname="Parkerrrr";
student1.age=9;



var student2={};
student2.firstname ="Jack";
student2.lastname ="Parkerrr";
student2.age =5;

var students=[];
students.push(student0);
students.push(student1);
students.push(student2);
//another way of creating object
students.push(new student("Carl","Jason",9));

for(var index=0;index<students.length;index++)
{
    console.log(students[index]);
}
//or
for(var key in student)
{
    console.log(student[key]);
}

//array
/*
var students=["john","jacob","jingle","Heimer","Israiel"];
for(var i=0;i<students.length;i++)
{
    console.log(students[i]);
}

/*
var printCustname=funtion (first,last)
{
    console.log("FirstName: "+first +" LastName: " +last);
};
printCustname(Sadiya,Khatoon);

var applyforCreditcard=function(creditScore,soul)
{
    //call some funtion to process application

};


applyforCreditcard(180100,121);
var bankoperation=[];//array

bankoperation.push(transaction);
bankoperation.push(printCustname);
bankoperation.push(applyforCreditcard);


*/



//42
/*
this.car="Honda Civic vs Ugly Spoiler";
var markgarage={
car:"Aston Martin",
getcar: function(){
return this.car;
}};
console.log(markgarage.getcar());



o/p-Aston Martin



to store the fun in a variable


var store=markgarage.getcar;  ..scope of the variable is lost
console.log(store());          // o/p-honda civic vs.............
var therealgetcarfun=markgarage,getcar,bind(markgarage);
console.log(therealgetcarfun());                o/p aston mark
*/

