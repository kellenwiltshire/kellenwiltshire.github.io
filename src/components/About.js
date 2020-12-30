import React from 'react'
import ProfilePic from '../assets/img/profile.png'

const about = () => {
    return(
        <div className="w-screen flex flex-col align-middle bg-white justify-center items-center p-10">
            <h1 className="text-gray-600 text-4xl sm:text-6xl border-b-2 w-full text-center">A Little About Me</h1>
            <div className="flex border-black border w-64 justify-center items-center text-center p-5 rounded-none m-8 shadow-2xl">
                <div class="tc">
                    <img src={ProfilePic} className="flex text-white rounded-full" title="Profile" alt="profile"/>
                    <h1 class="text-black">Kellen Wiltshire</h1>
                    <h2 class="text-black">Kingston, Ontario, Canada</h2>
                </div>
            </div>
            <div className="text-black text-center w-full text-xs sm:text-base lg:w-6/12 space-y-3">
                <p>Kellen started self teaching himself Web Development in 2020 with the extra time he had during the pandemic. 
                He graduated from the University of Ontario Institute of Technology in 2012. Although initially enrolled in Game Development he switch to Legal Studies.</p>

                <p>
                Although he was able to find a fulfilling career helping people seek justice in the Legal System, he missed using his brain in a technical role. With the extra time working from home he decided to start teaching 
                himself Web Development with the help of the Udemy course Zero-to-Mastery.</p>

                <p>Now he builds websites and projects to hone his skills to make the jump completely into Web Development. Contact him now if you have any inquries!</p>
            </div>
        </div>
    )
}

export default about;