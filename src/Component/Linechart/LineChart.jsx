import { LineChart as Lc, Line,XAxis,YAxis } from 'recharts';


const LineChart = () => {

    const mathmark = [
        { id: 1, name:'Rahim', math:78, physics: 85, chemistry: 90 },
        { id: 2, name:'Karim', math:88, physics: 80, chemistry: 85 },
        { id: 3, name:'Babul', math:70, physics: 75, chemistry: 80 },
        { id: 4, name:'Kabul', math:70, physics: 72, chemistry: 78 },
        { id: 5, name:'Mokbul', math:75, physics: 78, chemistry: 82 },
        { id: 6, name:'Mofiz', math:95, physics: 90, chemistry: 95 },
        { id: 7, name:'Abul', math:100, physics: 98, chemistry: 97 },
        { id: 8, name:'Rakib', math:98, physics: 95, chemistry: 96 },
        { id: 9, name:'Seim', math:68, physics: 70, chemistry: 72 },
        { id: 10, name:'Saddam', math:71, physics: 74, chemistry: 76 }
    ];
    

    return (
        <div>
            <Lc width={500} height={400} data={mathmark}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='black'></Line>
                
            </Lc>
        </div>
    );
};

export default LineChart;