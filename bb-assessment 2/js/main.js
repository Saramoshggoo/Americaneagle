const menuBar=document.getElementById("menuBar")
const link=document.getElementById("header-bottom")
 
menuBar.addEventListener("click",function(){
    toggleNode(link)
})
  
function toggleNode(node) { 
    if (node.style.display=="none"){
        node.style.display="block"}
        else{
            node.style.display="none"
        }

}

    document.addEventListener('click',(e)=>{
      if (e.target.className.includes("expander__toggle")){
        toggleNode(e.target.nextElementSibling)
          
     }
    })


