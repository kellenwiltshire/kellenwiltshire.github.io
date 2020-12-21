import React from 'react'
import ProfilePic from '../img/profile.png'

const about = () => {
    return(
        <div className="w-screen flex flex-col align-middle bg-black justify-center items-center p-10">
            <div className="flex bg-gray-50 w-auto justify-center items-center text-center p-5 rounded m-8">
                <div class="tc">
                    <img src={ProfilePic} className="flex text-white rounded-full" title="Profile"/>
                    <h1 class="text-black">Kellen Wiltshire</h1>
                    <h2 class="text-black">Kingston, Ontario, Canada</h2>
                </div>
            </div>
            <div className="text-white text-center w-6/12">
                <p>Kellen started self teaching himself Web Development in 2020 with the extra time he had during the pandemic. 
                He graduated from the University of Ontario Institute of Technology in 2012. Although initially enrolled in Game Development he switch to Legal Studies.
                Although he was able to find a fulfilling career helping people seek justice in the Legal System, he missed using his brain in a technical role. With the extra time working from home he decided to start teaching 
                himself Web Development with the help of the Udemy course Zero-to-Mastery.</p>

                <p>Now he builds websites and projects to hone his skills to make the jump completely into Web Development. Contact him now if you have any inquries!</p>
            </div>
        </div>
    )
}

export default about;

