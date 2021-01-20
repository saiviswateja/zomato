import React,{useState} from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../Home.css';

// Modal.setAppElement('#root')
function Navbar() {
    const [LoginModal,setLoginModal] = useState(false);
    const [CreateAccountModal,setCreateAccountModal] = useState(false);
    const [SignInModal,setSignInModal] = useState(false);
    return (
        <>
        <nav>
            <div className="logo">
                <h4><b><i>zomato</i></b></h4>
            </div>
            <ul>
                <li onClick={()=>setLoginModal(true)}>
                    Log In
                </li>
                <li onClick={()=>setLoginModal(true)}>
                    Create an account
                </li>
            </ul>
        </nav>
            <Modal open={LoginModal} onRequestClose={()=>setLoginModal(false)}
            onClose={()=>setLoginModal(false)} center
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
            >
                <div className="modal_content">
                    <h3>Sign Up or log in to Zomato</h3>
                    <hr></hr>
                    <button>Continue with Google</button>
                    <center><h4>Or use your email address</h4></center>
                    <div className="loginsignup">
                        <button onClick={()=>{
                        setCreateAccountModal(false)
                        setLoginModal(false)
                        setSignInModal(true)
                    }}>Log In</button>
                        <button onClick={()=>{
                            setLoginModal(false);
                            setCreateAccountModal(true);
                        }}>Sign Up</button>
                    </div>
                    <center><h6>By logging in, you agree to Zomato's Terms of Service, Cookie Policy, Privacy Policy and Content Policies.</h6></center>
                </div>
            </Modal> 
            <Modal open={CreateAccountModal} onRequestClose={()=>setCreateAccountModal(false)}
            onClose={()=>setCreateAccountModal(false)} center
            classNames={{
                overlay:'customOverlay',
                modal: 'loginSignupModal'
            }}
            >
                <div className="loginsignup_modal">
                    <h3>Sign up</h3>
                    <hr></hr>
                    <span>Full Name</span>
                    <input></input>
                    <span>Last Name</span>
                    <input></input>
                    <p>On sign up, I agree to Zomato's Terms of Service, Privacy Policy and Content Policies
                    </p>
                    <button>Register</button>
                    <center><h6>By logging in, you agree to Zomato's Terms of Service, Cookie Policy, Privacy Policy and Content Policies.</h6></center>
                </div>
            </Modal>
            <Modal open={SignInModal} onRequestClose={()=>setSignInModal(false)}
            onClose={()=>setSignInModal(false)} center
            classNames={{
                overlay:'customOverlay',
                modal: 'customModal'
            }}
            >
                <div className="modal_content">
                    <h3>Log In</h3>
                    <hr></hr>
                    <span>Email / Zomato Username</span>
                    <input></input>
                    <button id="signin_modal_button">Log In</button>
                    <center><h6>By logging in, you agree to Zomato's Terms of Service, Cookie Policy, Privacy Policy and Content Policies.</h6></center>
                </div>
            </Modal>
        </>
    )
}

export default Navbar;
