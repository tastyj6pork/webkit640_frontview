import { React, useEffect, useState } from "react";
import "./Signup.css"
import StickyHeader from '../../component/StickyHeader/StickyHeader';
import {call, signup} from "../../service/ApiService";

function Signup() {
    const [isstudent, setIsStudent] = useState(false);
    const [kakaoEmail, setKakaoEmail] = useState(null);

    useEffect = (()=>{
        const urlParams = new URL(document.location).searchParams;
        const email = urlParams.get('email');
        const email_input = document.getElementById('email');
        setKakaoEmail(email);
        if(kakaoEmail){
            email_input.classList.add('readonly');
        }
    })

    const handleSubmit = e => {
        e.preventDefault();
        let form = document.getElementById('signupForm');
        let input_name = document.getElementById('nameInput');
        let input_email = document.getElementById('emailInput');
        let input_affili = document.getElementById('affiliInput');
        let input_pwd = document.getElementById('pwdInput');
        let input_pwdh = document.getElementById('pwdhInput');
        let input_student = document.getElementById('studentInput');;

        const data = new FormData(e.target);
        const name = data.get('name');
        const email = data.get('email');
        const s_affili = input_affili.childNodes[2].value;
        const affili = data.get('affili');
        const pwd = data.get('pwd');
        const pwdh = data.get('pwdh');

        if(name.length === 0) {
            input_name.childNodes[1].focus();
            input_name.childNodes[2].innerHTML = '이름을 입력하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(email.length === 0) {
            input_email.childNodes[1].focus();
            input_email.childNodes[2].innerHTML = '이메일을 입력하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(s_affili.length === 0) {
            input_affili.childNodes[1].focus();
            input_affili.childNodes[4].innerHTML = '소속을 선택하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(s_affili.length !== 0 && affili.length === 1) {
            input_affili.childNodes[2].focus();
            input_affili.childNodes[3].innerHTML = '기관명을 입력하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(pwd.length === 0) {
            input_pwd.childNodes[1].focus();
            input_pwd.childNodes[2].innerHTML = '비밀번호를 입력하세요.';
            form.classList.add('was-validated');
            return;
        }
        if(pwd !== pwdh){
            input_pwdh.childNodes[0].focus();
            form.classList.add('was-validated');
            return;
        }

        const affdata = affili;
        
        signup({name: name, email: email, memberType: s_affili, memberBelong: affdata, password: pwd})
        .then((response)=>{
            window.location.href="/login";
        })
    }

    const onChangeEvent = e => {
        let input_name = document.getElementById('nameInput');
        let input_email = document.getElementById('emailInput');
        let input_affili = document.getElementById('affiliInput');
        let input_pwd = document.getElementById('pwdInput');
        let input_pwdh = document.getElementById('pwdhInput');

        if(e.target.id === 's_affili'){
            if(e.target.value === '학생')
                setIsStudent(true);
            else setIsStudent(false);
        }

        if (e.target.value.length === 0){
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
            switch (e.target.id){
                case 'name':
                    input_name.childNodes[2].innerHTML = '이름을 입력하세요.';
                    break;
                case 'email':
                    input_email.childNodes[2].innerHTML = '이메일을 입력하세요.';
                    break;
                case 'affili':
                    if(input_affili.childNodes[1].value.length > 0)
                        input_affili.childNodes[4].innerHTML = '기관명을 입력하세요.';
                    break;
                case 'pwd':
                    input_pwd.childNodes[2].innerHTML = '비밀번호를 입력하세요.';
                    break;
                default:
                    break;
            }
        }

        if(e.target.id === 'email' && e.target.value.length > 0 && !(e.target.value.includes('@'))){
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
            input_email.childNodes[2].innerHTML = '이메일 형식에 맞지 않습니다.'
        }
        else if(e.target.id === 'email' && (e.target.value.includes('@'))) {
            e.target.classList.replace('is-invalid', 'is-valid');
        }

        if(input_pwd.childNodes[1].value !== input_pwdh.childNodes[1].value){
            input_pwdh.childNodes[1].classList.add('is-invalid');
        }
        else {
            input_pwdh.childNodes[1].classList.replace('is-invalid', 'is-valid');
        }
    }

    return (
        <div className="Signup">
            <StickyHeader/>
            <div className="signup-content w3-display-container">
                <div className="signup-box w3-display-middle">
                    <img className="logo"/>
                    <h3>회원가입</h3><br/><br/>
                    <form id="signupForm"
                    className="w3-display-middle needs-validation"
                    onSubmit={handleSubmit}
                    action="/action_page.php" noValidate>

                        <div className="form-group" id="nameInput">
                            <label>이름:</label>
                            <input type="text" className="form-control"
                            id="name" name="name"
                            onChange={onChangeEvent}
                            placeholder="이름을 입력하세요." required/>
                            <div className="invalid-feedback">이름을 입력하세요.</div>
                        </div>

                        <div className="form-group" id="emailInput">
                            <label>이메일:</label>
                            <input type="text" className="form-control"
                            id="email" name="email" value={kakaoEmail} 
                            onChange={onChangeEvent}
                            placeholder="이메일을 입력하세요." required/>
                            <div className="invalid-feedback">이메일을 입력하세요.</div>
                        </div>

                        <div className="form-group" id="affiliInput">
                            <label>소속:</label><br/>
                            <select name="s_affili" id="s_affili"
                            onChange={onChangeEvent}>
                                    <option value="">-소속-</option>
                                    <option value="기업">기업</option>
                                    <option value="학생">학생</option>
                                    <option value="관리자">관리자</option>
                            </select>
                            <input type="text" className="form-control" id="affili" name="affili"
                            onChange={onChangeEvent}
                            placeholder="기관명을 입력하세요." required/>
                            <div className="invalid-feedback"></div>
                            {/*}<div dangerouslySetInnerHTML={{__html:isStudent()}}></div>{*/}
                        </div>

                        <div className="form-group" id="pwdInput">
                            <label>비밀번호:</label>
                            <input type="password"
                            className="form-control" id="pwd" name="pwd"
                            onChange={onChangeEvent}
                            placeholder="비밀번호를 입력하세요."
                            required/>
                            <div className="invalid-feedback">비밀번호를 입력하세요.</div>
                        </div>

                        <div className="form-group" id="pwdhInput">
                            <label>비밀번호 확인:</label>
                            <input type="password" className="form-control" id="pwdh" name="pwdh"
                            onChange={onChangeEvent}
                            placeholder="비밀번호 확인을 입력하세요."
                            required />
                            <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
                        </div>

                        <div className="w3-center">
                            <button type="submit" className="join-btn">가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;