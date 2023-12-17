
const Galeri = () => {
    const data = [1,2,3,4,5,6,7,8,9]
  return (
    <section className="galeri flex gap-x-4 overflow-scroll absolute w-full left-0">
        {
            data.map((item,index)=>{
                return <div key={index} className="w-52 h-52 rounded-lg shrink-0 bg-red-400"></div>
            })
        }
    </section>
  )
}

export default Galeri