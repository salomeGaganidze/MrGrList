

import {listArray , button , ul ,  total }  from './script.js' ; 


button.onclick = () =>
{

    addGroceryListEl(document.getElementById('todoinput').value);
}


function delEl(e)  
{
   
let parentId = document.getElementById(e.target.id).parentNode.id;
console.log(parentId);
      for (let i =0 ; i< listArray.length ; i++)   {
        if(listArray[i].id == parentId)   {
      ul.removeChild(document.getElementById(parentId)) ;
      listArray.splice(i,1) ;
      total.innerHTML=`Total Items : ${listArray.length}`
        }
     
} } 


function doneBtn(e)

{  

    let parentId = document.getElementById(e.target.id).parentNode;
    let myEl= document.getElementById(e.target.id);
    
    if (myEl.getAttribute('data-is-done') == 'N') {
        parentId.style.textDecoration='line-through' ;
        myEl.setAttribute('data-is-done','Y');
      }

      else {   
         parentId.style.textDecoration='none' ;
         myEl.setAttribute('data-is-done','N');
    }

}






class listObject 
{
    constructor (whatToBuy , id)
    {
       this.whatToBuy=whatToBuy;
       this.id=id;

    }
   
    createItem ()
    {
          let el =  document.createElement('li');
          el.setAttribute("id",this.id) ;
          el.innerText=this.whatToBuy;
          let root =  document.getElementById('listdiv');
          root.appendChild(el);
          return el
    }
}



class bttnObject 
{
    constructor (id)
    {
       this.id=id;
    }
    createBttn ()
    {
          let el =  document.createElement('button');
          el.setAttribute("id",this.id+2);
          el.className='del-btn' ; 
          el.innerHTML='Delete';
          el.setAttribute("type","button")
          el.addEventListener("click",delEl)

          return el
    }


    createPnt ()
    {
          let el =  document.createElement('button');
          el.setAttribute("id",this.id+1);
          el.className='done-btn' ; 
          el.innerHTML='Done';
          el.setAttribute("type","button");
          el.setAttribute('data-is-done','N');
          el.addEventListener("click",doneBtn);

          return el
    }

}



async function addGroceryListEl (element) 
{

    let l = await new listObject (element, Date.now());
    let p = await l.createItem(); 
    console.log(p);
    let btn = new bttnObject (Date.now()); 
    let bt= btn.createBttn();
    let edit= btn.createPnt();
    console.log(edit)
    let dvbtn = document.getElementById('buttondiv');
    dvbtn.appendChild(bt); 
    dvbtn.appendChild(edit);

  
    listArray.push(p); 
    total.innerHTML=`Total Items : ${listArray.length}`; 

};



