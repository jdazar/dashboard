import './ChartMenu.css'



export function ChartMenu( {resetZoomFunction, zoomFunction, title, showContros = true} ) {


    return(

        <div className='chart-menu'>
            <span className='chart-title drag-handle'>
                {title}
            </span>


            {showContros &&

            <div className='chart-menu-controls'>

                <button onClick={resetZoomFunction}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M19,24H17a1,1,0,0,1,0-2h2a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5.006,5.006,0,0,1,19,24Z"/><path d="M1,8A1,1,0,0,1,0,7V5A5.006,5.006,0,0,1,5,0H7A1,1,0,0,1,7,2H5A3,3,0,0,0,2,5V7A1,1,0,0,1,1,8Z"/><path d="M7,24H5a5.006,5.006,0,0,1-5-5V17a1,1,0,0,1,2,0v2a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"/><path d="M23,8a1,1,0,0,1-1-1V5a3,3,0,0,0-3-3H17a1,1,0,0,1,0-2h2a5.006,5.006,0,0,1,5,5V7A1,1,0,0,1,23,8Z"/></svg>
                </button>


                <button onClick={() => {zoomFunction(1.15)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/><path d="M13,9H11V7A1,1,0,0,0,9,7V9H7a1,1,0,0,0,0,2H9v2a1,1,0,0,0,2,0V11h2a1,1,0,0,0,0-2Z"/></svg>
                </button>
                

                <button onClick={() => {zoomFunction(0.85)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/><path d="M13,9H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
                </button>

            </div>
            }
        </div>
    )



}