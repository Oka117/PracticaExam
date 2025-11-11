import studentData from './Q3Data';

export function Card({ Name, Course, Grade, Score }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
                <div className="card-title">Name={Name}</div>
                <div className="card-text">Course={Course}</div>
                <div className="card-text">Grade={Grade}</div>
                <div className="card-text">Score={Score}</div>
            </div>

        </div>

    )
    



}


function Q3() {

    return (
        <div>

            {studentData.map((obj) => (
                <Card key={obj.Name}
                    Name={obj.Name}
                    Course={obj.Course}
                    Grade={obj.Grade}
                    Score={obj.Score}
                />

            )) } 
        </div>
);

}

export default Q3;