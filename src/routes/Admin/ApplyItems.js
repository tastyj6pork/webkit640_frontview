import '../Admin/Admin.css'

function ApplyItems({items, fileListDown}) {
    
    function BtnClick() {
        
        fileListDown(items);
    }

    return(<div>
        <div className="apply-insert-items">
            <ul>
                <li className="items-first">{items.name}</li>
                <li className="items-second">{items.school}</li>
                <li className="items-third">{items.major}</li>
                <li className="items-fourth">{items.schoolYear}</li>
                <li className="items-fifth">{items.schoolNumber}</li>
                <li className="items-sixth">{items.email}</li>
                <li className="items-seventh"><button className="items-file">다운로드</button></li>
                <li className="items-last"><button type="button" className="items-btn" onClick={BtnClick}>선택</button></li>
                <input className="items-checkbox" type="checkbox"></input>
            </ul>
        </div>
    </div>)
}

export default ApplyItems;