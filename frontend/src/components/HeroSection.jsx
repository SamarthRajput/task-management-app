import GoCheck from "./ui/GoCheck";

export function HeroSection(){
    return <div className=" pb-8 mt-8">
    <div className="flex justify-center items-center">
        <div className="flex flex-row justify-center items-center">
            <div className="text-center">
                <div className="text-white text-center text-9xl">
                    <div className="">
                        Making Task Management
                    </div>
                    <div className="mt-2">
                        More Human!
                    </div>
                </div>
                <div className="text-white">
                    <div className="text-2xl mt-8">
                        Manage your work, timelines and team mates all at once, set and
                    </div>
                    <div className="text-2xl mt-2">
                        follow timelines, assign tasks and keep your project in check.
                    </div>
                </div>

                <div className="text-white flex flex-row mt-10 justify-center gap-[9px]">
                    <div className="flex flex-row">
                        <GoCheck/> 
                        <div>
                            Make meeting more exicting
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <GoCheck />
                        <div>
                            Stay connected all time- full time.
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    </div> 
}