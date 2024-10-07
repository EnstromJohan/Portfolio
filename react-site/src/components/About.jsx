import React from "react";
import aboutImage from '../assets/pic1.jpg';

const About = () => {
    return (
        <section 
        id="about" 
        className="min-h-screen w-full flex flex-col items-center justify-center"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-semibold text-white mb-8">About me</h2>
                <p className="text-2xl text-white mb-8 px-8">                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque, orci eu mollis cursus, 
                    libero arcu lobortis nunc, in tristique dui eros ac ex. Donec porttitor dui id ante imperdiet, 
                    id faucibus sapien pellentesque. Nam vitae est eu velit iaculis rutrum non ac est. Aliquam eu orci vitae lacus molestie volutpat.
                    Quisque mattis tempus justo at facilisis. Nam porttitor, magna vel porta cursus, diam felis suscipit metus, sed posuere felis mi sed dui. 
                    Morbi venenatis enim vitae faucibus viverra. Nam eu accumsan enim, a venenatis lorem. Nunc nec consequat libero. Ut sodales interdum est nec pellentesque. 
                    Integer tempor volutpat enim sit amet laoreet. Nullam placerat vitae tellus fringilla faucibus. 
                </p>
                <div className="w-full flex justify-center">
                    <img
                        src={aboutImage}
                        alt="About me"
                        className="w-1/3 rounded-md grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                    />
                </div> 
            </div>
        </section>
    );
};

export default About;