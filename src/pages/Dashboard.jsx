
// ========= GRAFICAS =========
import { Responsive, WidthProvider } from "react-grid-layout";
import { LineChart } from "../components/charts/LineChart"
import { GanttChart } from "../components/charts/GanttChart";
import { BarChart } from "../components/charts/BarChart";
import { PieChart } from "../components/charts/PieChart";
import { RadarChart } from "../components/charts/RadarChart";
import { x_test, y_test } from "../testData"
const ResponsiveGridLayout = WidthProvider(Responsive);


export function Dashboard(){

    const layout = {
      lg: [
        { i: "1", x: 0, y: 0, w: 3, h: 2, minW: 3, minH: 1 },
        { i: "2", x: 3, y: 0, w: 6, h: 2, minW: 3, minH: 1 },
        { i: "3", x: 9, y: 0, w: 3, h: 2, minW: 3, minH: 1 },
        { i: "4", x: 0, y: 2, w: 6, h: 2, minW: 3, minH: 1 },
        { i: "5", x: 6, y: 2, w: 6, h: 2, minW: 3, minH: 1 },
        
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 6, h: 2, minW: 2, minH: 1 },
      { i: "2", x: 6, y: 2, w: 6, h: 2, minW: 2, minH: 1 },
      { i: "3", x: 6, y: 2, w: 6, h: 2, minW: 3, minH: 1 },
      { i: "4", x: 0, y: 4, w: 6, h: 2, minW: 2, minH: 1 },
      { i: "5", x: 6, y: 6, w: 6, h: 2, minW: 2, minH: 1 }
  ]
    };
  
    return (
      <>
  
        {/* ========= GRAFICAS ========= */}
        <ResponsiveGridLayout
          compactType={'vertical'}
          className="responsive-grid-layout"
          layouts={layout}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          draggableHandle=".drag-handle"
          margin={[15,15]}
  
        >

  
          <div key="1" className="panel">
            <PieChart 
                height={'calc(100% - 30px)'}
                title={'Gráfico Circular'}
          
              />
          </div>
  

          <div key="2" className="panel">
            <BarChart 
              height={'calc(100% - 30px)'}
              title={'Gráfico de Barras'}
        
            />
          </div>

          <div key="3" className="panel">
            <RadarChart 
              height={'calc(100% - 30px)'}
              title={'Gráfico de Radar'}
        
            />
          </div>


          <div key="4" className="panel">
            <GanttChart 
              height={'calc(100% - 30px)'}
              title={'Gráfico de Gantt'}
        
            />
          </div>
          
          <div key="5" className="panel">
  
            <LineChart 
                x={x_test} 
                y={y_test} 
                legends={['A','B','C']} 
                title={'Gráfico de Lineas'} 
                height={'calc(100% - 30px)'}
            />
  
          </div>
        </ResponsiveGridLayout>
  
      </>
    )
  }