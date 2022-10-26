import '../Admin/Admin.css'

function ApplyResult({res}) {

    const onRemove = (res) => {
        
    }

    return(<div>
        <div className="result-items">
            <div className="result-contents" onClick={() => onRemove(res)}>{res}</div>
        </div>
    </div>)
}

export default ApplyResult;