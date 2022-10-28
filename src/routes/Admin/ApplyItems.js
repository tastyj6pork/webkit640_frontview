import { useEffect } from 'react';
import '../Admin/Admin.css'

function ApplyItems({items, id, setItems}) {

    function BtnClick() {
        console.log(id);
        const content = {
            id:id, 
            name:items.name, 
            school:items.school,
            major:items.major,
            schoolNumber:items.schoolNumber,
            email:items.email
        }
        setItems(content);
    }

    return(<div>
        <div className="apply-insert-items">
            <ul>
                <li>{id}</li>
                <li className="items-first">{items.name}</li>
                <li className="items-second">{items.school}</li>
                <li className="items-third">{items.major}</li>
                <li className="items-fourth">{items.schoolNumber}</li>
                <li className="items-fifth">{items.email}</li>
                <li className="items-sixth"><button className="items-file">다운로드</button></li>
                <li className="items-seventh"><button className="items-btn" onClick={BtnClick}>선택</button></li>
            </ul>
        </div>
    </div>)
}

export default ApplyItems;