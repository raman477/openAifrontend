import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { getContent } from '../../services/apiService';
import Typewriter from 'typewriter-effect/dist/core';
import PaymentSuccess from '../Checkout/paymentSuccess';

const HomePage = () => {
    const [ourCondition, setOurCondition] = useState(false);
    const [content, setContent] = useState('');
    {/* this our condition will become true with openAi api response */ }
    const {register, handleSubmit, formState:{errors},setValue}=useForm()
    const[response,setResponse]=useState('')

    const typeWriter = (textToType) => {
        let i = 0;
        const timer = setInterval(() => {
          setContent((prevText)=>prevText+textToType.charAt(i));
          i++;
          if (i > textToType.length) {
            clearInterval(timer);
          }
        }, 50);
    }
    // console.log(content.split(' ').length);
    const onSubmit=(data)=>{
        console.log(response)
        const payload={
            "prompt":data.prompt+content
        }
        getContent(payload).then(res=>{
            if(res.status==200){
                // setResponse(response+res.data.data)
                let data=res.data.data
                // setContent(data)
                typeWriter(data)
               
            }
        })
    }
    return (
        <section className="essay-notes">
            <div className="container">
                <div className="row">
                    <div className={ourCondition ? 'col-lg-4 col-md-4 col-sm-12' : 'col-lg-4 col-md-6 col-sm-12' }>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Essay Question</label>
                                <input type="text" placeholder="Explain the effects of the Cold War on modern global politics" {...register('prompt',{required:"This field is required."})} />
                            </div>
                            <div className="form-group">
                                <label>Tone of voice</label>
                                <input type="text" placeholder="Creative, factual...." />
                            </div>
                            <div className="form-group">
                                <label>Essay Notes</label>
                                <textarea className="form-control" id="textAreaExample1" rows="4" placeholder="Paste your notes here..."></textarea>
                            </div>
                            <a><button type="submit" className="btn-primary">Compose <span>CMD + J</span></button></a>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div class="righ-notes" style={{ display: ourCondition ? 'none' : 'inlineBlock' }}>
                            <p>Or begin writing on your own...</p>
                        </div>
                        <div className="righ-notes-nner">
                            <span className='typewriter' dangerouslySetInnerHTML={{__html:content}}>
                            </span>
                            
                            
                            <div className="complete-red">
                                <p className="complete-toolip">
                                    <div className="toolip-hover">
                                        <span className="left-border"></span>
                                        <h6></h6>
                                        <p></p>
                                    </div>
                                </p> <p></p>
                            </div>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="complete-3-col">
                            {/* <div className="compltete-button">
                                    <button type="submit" className="btn-primary">Account</button>
                                </div> */}
                            <div className={ourCondition ? "complete-box" : ''}>
                                <h5></h5>
                                <h6></h6>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <h5 className="text-danger"></h5>
                                <h6></h6>
                            </div>
                            <div className="all-feed">
                                <h6></h6>
                                <h5></h5>
                                <p></p>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <p></p>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <p></p>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <p></p>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <h5></h5>
                                <p></p>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <p></p>
                            </div>
                            <div className={ourCondition ? "complete-box" : ''}>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <PaymentSuccess/>
            </div>
        </section>
    )
}

export default HomePage