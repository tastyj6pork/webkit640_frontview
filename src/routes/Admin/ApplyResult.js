import '../Admin/Admin.css'

function ApplyResult({item, id, onRemove}) {

    return(<div>
        <div className="result-items">
            <div className="result-contents" onClick={() => onRemove(id)}>{item.name + " " + item.email}</div>
        </div>
    </div>)
}

export default ApplyResult;