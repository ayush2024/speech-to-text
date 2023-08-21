import React from 'react'
import "./Code.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import useClipboard from "react-use-clipboard";
import { useState } from 'react';

const Code = () => {

    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

    const stopListening = () => SpeechRecognition.stopListening;

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className='container'>
                <h2>Speech To Text Converter</h2>
                <br />
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                {/* <div className="bnt"> */}

                    <div className="btn-style">
                        <button onClick={startListening}>Start Listening</button>
                        <button onClick={stopListening}>Stop Listening</button>
                    </div>

                    <div className="btn-style1">
                        <button onClick={setCopied}>
                            {isCopied ? 'Copied!' : 'Copy to clipboard'}
                        </button>
                        <button onClick={resetTranscript}>Clear Textarea</button>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Code