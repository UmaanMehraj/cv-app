import { useState } from "react";

 export default function GeneralInfo(){
    const [name, setName] = useState('')

    function updateName (){
        const input = document.querySelector('#name')
        setName(input.value)
    }

    return <section>
        <div className="form">
            <form>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" />
            </form>
        </div>
    </section>
}