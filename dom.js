document.getElementById('add-bg').addEventListener('click',function(){
   const vai= document.getElementsByClassName('friend');
   for(friend of vai){
    friend.style.backgroundColor='blue';
   }
})

document.getElementById('add-new').addEventListener('click',function(){
const addFriend=document.getElementById('new');
const creatFriend=document.createElement('div');
creatFriend.classList.add('friend')
creatFriend.innerHTML=`
<h3 class="friend">Added New Friend</h3>
<p>Something new added</p>
`
addFriend.appendChild(creatFriend);

})