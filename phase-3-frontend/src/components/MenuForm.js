import React from "react";
import Calendar from 'react-calendar'


function MenuForm () {


function MenuForm () {
    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        description: "",
        date: new Date(),
        user_id: ""

    })
    

    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    const handleChange = (e) => {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value} ))

    }

    const handleDate = (e) => {
           // setFormData({...formData, formData.date: [e.target.val] })


    // handle change fpr

    return ( 
    <div>
        <div>
            Create Your Menu 
            </div> 
        <form className="menu-form" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" placeholder="Menu Title" value={formData.name} onChange={handleChange}/>
            </div>
            <div>
                <input type="file" name="image_url" placeholder="Upload Image" value={formData.image_url} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="description" placeholder="Describe" value={formData.description} onChange={handleChange} />
            </div>
            <div>
                <Calendar
                value={formData.date} onChange={handleDate}/>
            </div>
            </form>

        
        </div>    

    )
}
}
}

export default MenuForm 

