function Cards() {
  return (
    <div className="w-full items-center flex gap-5 h-screen px-20 bg-zinc-900">
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
                <img className="h-1/5 w-1/4" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Eyes" />
                <button className="absolute rounded-full tracking-tight px-5 py-1 border-2 left-5 bottom-5">&copy; 2019-2025</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#142523]">
            <img className="h-1/4 w-1/2" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Eyes" />
            <button className="absolute rounded-full uppercase px-5 py-1 tracking-tight border-2 left-5 bottom-5">Rating 5.0 on Clutch</button>
            </div>
            <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#142523]">
            <img className="h-1/3 w-1/3" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Eyes" />
            <button className="absolute rounded-full px-5 py-1 uppercase tracking-tight border-2 left-5 bottom-5">Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
