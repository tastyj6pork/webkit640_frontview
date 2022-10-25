import '../Admin/Admin.css'

function ApplyResult(props) {

    return(<div>
        <div className="result-items">
            <p>{props.map((res) => res.name)}</p>
        </div>
    </div>)
}

export default ApplyResult;