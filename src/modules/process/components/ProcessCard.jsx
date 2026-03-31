import { Box, Rocket, User } from 'lucide-react';

const ProcessCard = ({step}) => {

    const {step:stepNum, title, desc} = step;

    const iconMap = {
        "01": <User size={60} color="#4F39F6" />,
        "02": <Box size={60} color="#4F39F6" />,
        "03": <Rocket size={60} color="#4F39F6" />,
    };

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
                <div className='flex justify-end'>
                    <span className="badge badge-sm w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm font-bold text-white p-2">{stepNum}</span>
                </div>
                <div className='flex justify-center'>
                    <div className='w-25 h-25 flex justify-center items-center bg-linear-to-r from-[rgba(79,57,246,0.3)] to-[rgba(149,20,250,0.3)] rounded-full p-3 mt-3'>
                        {/* {
                            stepNum === "01" ? 
                            <User size={60} className='text-[#4F39F6]' /> 
                            : stepNum === "02" ? 
                            <Box size={60} color="#4F39F6" /> 
                            : stepNum === "03" ? 
                            <Rocket size={60} color="#4F39F6" /> 
                            : null
                        } */}
                        {iconMap[stepNum]}
                    </div>
                </div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-xl">{desc}</p>
            </div>
        </div>
    );
};

export default ProcessCard;