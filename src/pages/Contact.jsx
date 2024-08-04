import React from "react";

function Contact() {
    return (
        <div className="flex flex-wrap items-center w-full justify-center">
            {/* text */}
            <div className="bg-gray-400 h-full w-[300px]">
                <div className="">
                    <img src="IMG_20220709_084026_1.jpg" alt="img" height={100} width={200} className="circle-img" />
                </div>
                {/* <div className="bg-gray-400 flex flex-wrap justify-center"> */}
                    <div className="font-bold ">Name : Ayush Raj</div>
                    <div className="font-bold ">Phone : 7004434221</div>
                    <div className="font-bold ">Email : ayush_2101ce14@iitp.ac.in</div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Contact;
