import '../Admin/Admin.css'

function ApplySelector({itemes, fileListUp}) {

    function BtnReverse() {

        fileListUp(itemes)

    }

    return(<div>
        <div className="apply-insert-items">
            <ul>
                <input className="items-checkbox" type="checkbox"></input>
                <li className="items-first">{itemes.name}</li>
                <li className="items-second">{itemes.school}</li>
                <li className="items-third">{itemes.major}</li>
                <li className="items-fourth">{itemes.schoolYear}</li>
                <li className="items-fifth">{itemes.schoolNumber}</li>
                <li className="items-sixth">{itemes.email}</li>
                <li className="items-seventh"><button className="items-file">다운로드</button></li>
                <li className="items-last"><button className="items-btn" onClick={BtnReverse}>제거</button></li>
            </ul>
        </div>
    </div>)
}

export default ApplySelector;