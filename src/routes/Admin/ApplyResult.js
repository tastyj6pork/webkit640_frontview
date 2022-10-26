import '../Admin/Admin.css'

function ApplyResult({item, onRemove}) {

    return(<div>
        <div className="result-items">
            <div className="result-contents" onClick={() => onRemove(item.id)}>{item.name + " " + item.email}</div>
        </div>
    </div>)
}

export default ApplyResult;