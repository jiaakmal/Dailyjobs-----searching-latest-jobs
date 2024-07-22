let jobtitle=document.querySelector(".job-title")
// jobtitle.textContent="dDsa"
let jobdetail=document.querySelector(".job-detail")

// jobdetail.textContent="dsa"
async function fetchdata() {
    try  {                                                                                                                                                                                                                                                                                                                    
    const data=await fetch('data.json')
    console.log("data",data)
    if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
    }  else {
        console.log("Data fetched successfully")
    }
    let jsonData=await data.json()
    console.log("jsonData",jsonData)
    jobtitle.textContent=jsonData.jobname
    jobdetail.textContent=jsonData.description
} 
catch{
    console.error("Error fetching data")
    jobtitle.textContent="Error fetching data"
    jobdetail.textContent="Error fetching data"
}
}
  
document.addEventListener('DOMContentLoaded', fetchdata)
