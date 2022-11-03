import axios from 'axios';
import { API_BASE_URL } from '../../app-config';
import '../Admin/Admin.css'


function ApplyItems({items, fileListDown, fileCheckList, isChecked}) {
    
    const ACCESS_TOKEN = "ACCESS_TOKEN";
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    function BtnClick() {    
        
        fileListDown(items);
    }

    function CheckInput(checked) {
        
        items.checked = checked;
        fileCheckList(items);
    }

    function FileDownload() {
        axios({
            method:"POST",
            responseType: 'blob',
            url:API_BASE_URL + "/apply/download",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken,
            },
            data: {email:items.email}
        }).then((res) => {
            console.log(res.headers);
            const blob = new Blob([res.data]);

            const fileObjectUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = fileObjectUrl;
            link.style.display = "none";

            const extractDownloadFilename = (res) =>{
                const disposition = res.headers["content-disposition"];
                console.log(disposition)
                const filename = decodeURI(
                    disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
                    .replace(/['"]/g,"")
                );
                return filename;
            }
            link.download = extractDownloadFilename(res);
            document.body.appendChild(link);
            link.click();
            link.remove();
        })
    }

    return(<div>
        <div className="apply-insert-items">
            <ul>
                <input className="items-checkbox" type="checkbox" onChange={(e) => CheckInput(e.target.checked)} checked={items.checked}></input>
                <li className="items-first">{items.name}</li>
                <li className="items-second">{items.school}</li>
                <li className="items-third">{items.major}</li>
                <li className="items-fourth">{items.schoolYear}</li>
                <li className="items-fifth">{items.schoolNumber}</li>
                <li className="items-sixth">{items.email}</li>
                <li className="items-seventh"><button className="items-file" onClick={FileDownload}>다운로드</button></li>
                <li className="items-last"><button type="button" className="items-btn" onClick={BtnClick}>선택</button></li>
            </ul>
        </div>
    </div>)
}

export default ApplyItems;