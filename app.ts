

const form = document.getElementById("input-field") as HTMLFormElement;
const main = document.getElementById("parent") as HTMLDivElement;
const output_container = document.getElementById("output") as HTMLDivElement;


form.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  let Name = (document.getElementById("name") as HTMLInputElement).value;
  let email = (document.getElementById("email") as HTMLInputElement).value;
  let phone = (document.getElementById("phone") as HTMLInputElement).value;
  let address = (document.getElementById("address") as HTMLInputElement).value;
  let skills = (document.getElementById("skills") as HTMLInputElement).value;
  let exp = (document.getElementById("experiance") as HTMLInputElement).value;
  let edu = (document.getElementById("education") as HTMLInputElement).value;
//   let btn = document.getElementById("btn") as HTMLButtonElement;
  let Parent = document.getElementById("box") as HTMLElement;
  const output = document.getElementById("output") as HTMLDivElement;

  const resume :string = `<div id="Resume">
        <div id="side">
            <h1 id="rname">${Name}</h1>
            <h4 id="remail">${email}</h4>
            <h4 id="rnumber">${phone}</h4>
            <h4 id="raddress">${address}</h4>
        </div>
        <div id="oside">
            <h1>proficent in</h1>
            <h4 id="rskills">${skills}</h4>
            <h1>Experiance</h1>
            <h4 id="rexp">${exp}</h4>
         <h1>Education</h1>
         <h4 id="redu">${edu}</h4>

         <btns id="btns">
            <button id="btn1">Edit content</button>
            <button  id="dwn">downlaod Resume</button>
         </btns>
        </div>
    </div>
`

  if (output) {
    main.style.display = "none";
    output_container.innerHTML = resume
                
        
        

        let btn1 = document.getElementById("btn1") as HTMLButtonElement;
        
                btn1.addEventListener('click',function(){

         
    
            console.log("edit")
            main.style.display = 'block'
            output_container.innerHTML = " "
        })

        let btn2 = document.getElementById("dwn") as HTMLButtonElement;
        btn2.addEventListener('click',function(){
          let btns = document.getElementById("btns") as HTMLDivElement
          btns.style.display ='none'
resume.print()

          }
      
            
        
        
        )}
  
  });


 
