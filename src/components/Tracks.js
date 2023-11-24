export default function Tracks() {
    return (
        <div id="tracks" className="flex md:flex-row flex-col md:justify-around justify-evenly items-center w-11/12 md:h-[100vh] h-[70vh] md:-mt-0 -mt-10">
            <div className="skew-y-6 md:pb-4 border border-solid border-primary flex md:basis-1/2 justify-center h-1/6 text-center items-center flex-col xl:text-6xl lg:text-5xl text-4xl w-full">
                Tracks
            </div>

            <div className="flex basis-1/2 -skew-y-6 flex-col space-y-20 xl:text-5xl lg:text-4xl md:text-3xl text-xl text-center items-center justify-center md:w-full w-1/2">
                <div className="bg-gradient-to-r from-secondary from-0% via-primary via-72% to-border to-100% border border-solid border-secondary md:w-9/12 w-11/12 text-center p-4">HARDWARE</div>
                <div className="bg-gradient-to-r from-secondary from-0% via-primary via-72% to-border to-100%  border border-solid border-secondary md:w-9/12 w-11/12 text-center p-4">SOFTWARE</div>
            </div>
        </div>
    );
}