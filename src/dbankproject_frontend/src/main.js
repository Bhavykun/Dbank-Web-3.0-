import { dbankproject_backend } from "../../declarations/dbankproject_backend";

window.addEventListener("load",async ()=>{
    // console.log("load done");
   update();
});
document.querySelector("form").addEventListener("submit",async(event)=>{
    event.preventDefault();
    const button = event.target.querySelector("#submit-btn");
    // console.log("trigg");
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
    button.setAttribute("disabled",true);

    if(document.getElementById("input-amount").value.length!=0){await dbankproject_backend.topUp(inputAmount);}

    if(document.getElementById("withdrawal-amount").value.length!=0){
        await dbankproject_backend.withDraw(outputAmount);
    }

    await dbankproject_backend.compound();
    
    update();
    

    document.getElementById("input-amount").value="";
    document.getElementById("withdrawal-amount").value="";
    button.removeAttribute("disabled");

})

async function update(){
    const currentAmount = await dbankproject_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100)/100;
}
