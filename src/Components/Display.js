

const Display = ({ colors }) => {
    console.log(colors);
    return (
        <>
        <h1>Colors & ColorCode</h1>
        <hr />

            {colors.map((e, idx) => {
                return (
                    <div className = "displays" style={{ height:270, width:230}}>
                        <p style={{height:220, width:230, backgroundColor:`${e.color_code}`}}> </p>
                        <p className="text" key={idx} >{e.color_code}</p>
                        <span className="text"  style={{color:`${e.color_code}`, fontSize:20}} >{e.color_name}</span>

                    </div>
                )
            })}
        </>
    )
}

export default Display;