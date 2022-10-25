import '../Admin/Admin.css'

function ApplyItems({saveItem, items, setSaveItem}) {

    function BtnClick() {
        setSaveItem([...saveItem, items.name]);
    }

    return(<div>
        <div className="apply-insert-items">
            <ul>
                <li>{items.id}</li>
                <li className="items-first">{items.name}</li>
                <li className="items-second">{items.major}</li>
                <li className="items-third">{items.schoolnumber}</li>
                <li className="items-fourth">{items.email}</li>
                <li className="items-fifth"><button className="items-btn" onClick={BtnClick}>선택</button></li>
            </ul>
        </div>
    </div>)
}

export default ApplyItems;