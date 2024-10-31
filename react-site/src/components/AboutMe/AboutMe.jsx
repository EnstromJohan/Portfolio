import React, { useState } from 'react';
import CardContainer from '../common/CardContainer';
import Image from '../../assets/picOne.jpg';
import TextInfo from '../common/TextInfo';
import ProgressBar from '../common/ProgressBar';
import BottomBar from './BottomBar';
import BackContent from './BackContent';
import CV from '../../assets/CvEng.pdf';

const AboutMe = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <section className="flex items-start justify-center px-4 text-black dark:text-white relative">
            <div className="perspective w-full max-w-md relative">
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                   <div className='flip-card-front'>
                        <CardContainer
                            innerContent={
                                <img
                                    src={Image}
                                    alt="Photo"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            }
                            outerContent={
                                <div>
                                    <TextInfo title="Johan Enström" description="Software Developer" />
                                    <ProgressBar progress="20%" duration="2:00" remainingTime="-40:00" />
                                    <BottomBar onPlayClick={handleFlip} />
                                </div>
                            }
                        />
                        </div>
                    
                        <div className="flip-card-back p-4  bg-neutral-200 dark:bg-neutral-800 shadow-xl rounded-xl">
                            <BackContent onReturnClick={handleFlip} resumeLink={CV} />
                        </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutMe;