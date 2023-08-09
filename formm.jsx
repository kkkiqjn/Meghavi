
import "jquery/dist/jquery"
import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import 'C:\\Users\\saket\\meghavi_form_page\\src\\form.css'; 
import axios from 'axios';
function Formm() {
    return (
        <div className="container">
            <h1>Book Appointment</h1>
            <p>In your nearest branches</p>
            <form action="https://meghavi.booking.billez.in/bookanappointment" method="post">
                <div className="row">
                    <div className="column">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name here" />
                    </div>
                    <div className="column">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Your phone number here" onBlur={validation}/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="country">Country</label>
                      
                        <select id='country' name="country" onClick={country_func} onChange={state_func}>
                          
                        </select>
                    </div>
                    <div className="column">
                        <label htmlFor="state">State</label>
                        <select name="state" id='state' onChange={cities_func} >
                           
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="city">City</label>
                        <select name="city" id='city' onChange={branch_func}>
                        
                        </select>
                    </div>
                    <div className="column">
                        <label htmlFor="branch">Branch</label>
                        <select name="branch" id='branch' onChange={product_func}>
                      
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="products">Products</label>
                        <select name="products" id='products' >
                            <option value="">Select</option>
                        </select>
                    </div>
                    <div className="column">
                        <label htmlFor="date">Date</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="time">Time</label>
                        <select name="time">
                            <option value="12:00PM">
                             12:00 PM
                            </option>

                            <option value="12:00PM">
                             1:00 PM
                            </option>


                            <option value="12:00PM">
                             2:00 PM
                            </option>

                            <option value="12:00PM">
                             3:00 PM
                            </option>


                            <option value="12:00PM">
                             4:00 PM
                            </option>


                            <option value="12:00PM">
                             5:00 PM
                            </option>


                            <option value="12:00PM">
                             6:00 PM
                            </option>



                            <option value="12:00PM">
                             7:00 PM
                            </option>

                            <option value="12:00PM">
                             8:00 PM
                            </option>



                            <option value="12:00PM">
                             9:00 PM
                            </option>

                       



                          
                        </select>
                    </div>
                </div>
                <button onClick={validation}>Submit</button>
            </form>
     
        </div>
    );
}
const country_func = async () => {
    try {
        let response = await axios.get("https://meghavi.booking.billez.in/getcountries");
        let countriesDropdown = document.getElementById("country"); 

        response.data.forEach(element => {
            let option = document.createElement("option");
            option.value = element.id;
            option.text = element.name;
            countriesDropdown.appendChild(option)
     
           
         
        });

        console.log("countries loaded successfully");
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
};


const state_func = async () =>{
    try {

        let country=document.getElementById("country")
        let country_id=country.value
        
        let response =await axios.get("https://meghavi.booking.billez.in/getstates/"+country_id)
        let state_dropdown=document.getElementById("state")
        while(state_dropdown.firstChild){
            state_dropdown.removeChild(state_dropdown.lastChild)
        }
        response.data.forEach(element => {
            let option = document.createElement("option");
            option.value = element.id;
            option.text = element.name;
            state_dropdown.appendChild(option);
        });

        console.log("states loaded successfully");
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
};

const cities_func=async()=>{
    try{
let state=document.getElementById("state")
let state_id=state.value
console.log(state_id)
let response = await axios.get("https://meghavi.booking.billez.in/getcities/"+state_id)
console.log(response)
let city_dropdown=document.getElementById("city")
while(city_dropdown.firstChild){
    city_dropdown.removeChild(city_dropdown.lastChild)
}
response.data.forEach(element=>{
let op =document.createElement("option")
op.value=element.id
op.text=element.name
city_dropdown.appendChild(op)
console.log("cities loaded sucessfully")
});
    }
    catch(error){
console.log("error has occurred")
console.log(error)
    }
}




const branch_func=async()=>{
    try{
     let city=document.getElementById("city")
     let city_id=city.value
     console.log(city_id)
     let response=await axios.get("https://meghavi.booking.billez.in/getallbranches/"+city_id)
     console.log(response)
     let branch_dropdown=document.getElementById("branch")
     while(branch_dropdown.firstChild){
        branch_dropdown.removeChild(branch_dropdown.lastChild)
     }
     response.data.forEach(element=>{
        let op=document.createElement("option")
        op.value=element.id
        op.text=element.name
        branch_dropdown.appendChild(op)
     })
    }

    catch(error){
  console.log("error has occured")
  console.log(error)

    }
}

const product_func=async()=>{
    try{
        
        let city=document.getElementById("city")
        let city_id=city.value
        let response=await axios.get("https://meghavi.booking.billez.in/getallproducts/"+city_id)
        let product_dropdown=document.getElementById("products")
        while(product_dropdown.firstChild){
            product_dropdown.removeChild(product_dropdown.lastChild)
        }
        response.data.forEach(element=>{
            let op=document.createElement("option")
            op.value=element.id
            op.text=element.name
            op.className="option"
            product_dropdown.appendChild(op)

        })
        console.log("products updated successfully")

    }
    catch(error){
      console.log("an error has occurred!")
      console.log(error)

    }
}


const validation=async()=>{
    let ph=document.getElementById("phone")
    let phn=ph.value
    console.log(typeof(phn))
    console.log(phn)
    let l=phn.length
    if(l<10 || l>10)
        alert("Invalid Phone number,Enter 10 digit valid  number")

}



export default Formm;
