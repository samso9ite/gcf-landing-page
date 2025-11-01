import React, { useState } from 'react'

function First() {

    const [clicked, setClicked] = useState(1);
    const faqs = [
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Quisque quis urna consequat, scelerisque",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Mauris a ipsum id libero sodales dapibus",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius. "
        },
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        }
    ]
    const [clickedOne, setClickedOne] = useState(0);
    const faqsone = [
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Quisque quis urna consequat, scelerisque",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Mauris a ipsum id libero sodales dapibus",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius. "
        },
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
    ]

    return (
        <>
            <section className="faq-grid pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-20">
                        <div className="col-lg-6">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                {faqs.map((item, index) => (
                                    <div className={`accrodion  wow fadeInUp ${index === clicked && "active"}`} key={index} data-wow-delay="0ms">
                                        <div className="accrodion-title" onClick={() => setClicked(index)}>
                                            <h4>{item.question}</h4>

                                        </div>
                                        {index === clicked && <div className="accrodion-content">
                                            <div className="inner">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                {faqsone.map((item, index) => (
                                    <div className={`accrodion  wow fadeInUp ${index === clickedOne && "active"}`} key={index} data-wow-delay="0ms">
                                        <div className="accrodion-title" onClick={() => setClickedOne(index)}>
                                            <h4>{item.question}</h4>

                                        </div>
                                        {index === clickedOne && <div className="accrodion-content">
                                            <div className="inner">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default First