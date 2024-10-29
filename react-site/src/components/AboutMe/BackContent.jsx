import React from "react";
import Photo from "../../assets/pic1.jpg";
import PhotoCard from "./PhotoCard";

const BackContent = () => (
    <div className="text-center mb-4">
        <h3 className="text-lg text-left font-bold text-neutral-700 dark:text-white pt-2">About me</h3>
        <p className="text-xs text-left text-neutral-700 dark:text-neutral-300 pt-2">
            Hello there!
            I'm Johan Enström, a software developer who recently completed a two-year program in system development
            with a focus on .NET. From my studies and intership, I have built a solid foundation in c# and the .NET ecosystem,
            as well as frontend technologies. I also have good knowledge of version control and DevOps practices including Git,
            Azure DevOps and working with CI/CD pipelines. 
            <br/> 
            <br/> 
            During my internships, I worked on developing platforms using ASP.NET Core and Azure SQL. I also specialized
            in web scraping and API integration. I gained hands-on experience in building efficient well-tested backend solutions
            and working in agile environments.            
        </p>
        <div className="flex items-center text-xs text-left text-neutral-700 dark:text-neutral-300">
            <div className="w-1/2 pr-4">
            <pr>
                I enjoy working in teams, learning new things and facing challenges. My positive attitude, loyalty and strong communication
                skills have helped me contribute effectively in different environments. I'm now looking forward to applying my skills and
                continuing to grow as part of a supportive team.
            </pr>
            </div>
            <PhotoCard src={Photo} alt="Profile photo" />
        </div>
    </div>
)

export default BackContent;