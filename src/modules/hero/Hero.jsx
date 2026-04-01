import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="hero py-12 mt-20">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-10">
                <div className='flex-1 text-center lg:text-left'>
                    <div className='btn bg-[#E1E7FF] rounded-full px-4 py-2'>
                        <div className='w-4 h-4 rounded-full bg-purple-300 flex justify-center items-center'>
                            <div className='w-3 h-3 rounded-full bg-purple-400 flex justify-center items-center'>
                                <div className='w-1.5 h-1.5 rounded-full bg-purple-600 flex justify-center items-center'></div>
                            </div>
                        </div>
                        <p className='font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className="text-7xl leading-tight font-extrabold text-[#101727]">Supercharge Your <br></br>Digital Workflow</h1>
                    <p className="py-6 leading-normal">
                        Access premium AI tools, design assets, templates, and productivity 
                        <br />software—all in one place. Start creating faster today. 
                        <br />Explore Products
                    </p>
                    <div className='flex gap-2'>
                        <button className="btn font-bold rounded-3xl px-5 py-5 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
                        <button className="btn font-bold rounded-3xl px-5 py-5 border-2 border-[#9514FA] text-[#9514FA]">
                            <Play />
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="max-h-[50vh] float-end rounded-xl shadow-lg" src="./assets/banner.png" alt="Digital Workflow" />
                </div>
            </div>
        </div>
    );
};

export default Hero;