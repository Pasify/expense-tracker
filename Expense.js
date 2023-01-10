var addbtn = document.getElementById("addbtn");
var item= document.getElementById("itemName")
var date= document.getElementById("date")
var amount= document.getElementById("amount")
var time= document.getElementById("time")
var x = 0
function quantitylimit (event){
    var input = event.target
    if(isNaN(amount.value)|| amount.value<=0){
      amount.value=1
   }
}
addbtn.addEventListener("click",()=>{

   // creating the element
   var tbody=document.createElement("tbody")
   var tr=document.createElement("tr")
   var th = document.createElement("th")
   var td1 = document.createElement("td")
   var td2 = document.createElement("td")
   var td3 = document.createElement("td")
   var td4 = document.createElement("td")
   var removebutton= document.createElement("button")
   
   // appending to table
   removebutton.classList.add("btn","btn-warning","btn-sm")
   tr.appendChild(th)
   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tr.appendChild(td4)
   tr.appendChild(removebutton)
   var table = document.getElementById("table")
   table.appendChild(tr)

   //  assigning values to the tags to form element
   x ++
   th.innerText= x; 

   td1.innerText=item.value
   item.value="";

   td2.innerText=date.value
   date.value=""
   
   td3.innerText="N " + amount.value
   
   td4.innerText=time.value;
   time.value="";

   removebutton.innerText ="remove"

   var total = document.getElementById("total")
   var firstamount=parseInt(amount.value[0]) 
   var subsequentamount=amount.value
   total.innerText="is " +(firstamount * subsequentamount)
   amount.value=""


   if(isNaN(amount.value)|| amount.value<=0){
      amount.value=1
   }
   
   // remove function and EventListener the tr @ onclick of remove button
   function removetr(){
      tr.remove()
      x--
      th.innerText= x; 
   
   }
   removebutton.addEventListener("click",()=>{
      removetr()
      
   })
   // function ends here
})

