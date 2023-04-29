import React,{useState} from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
function App() {
  const [text , setText] = useState();
  const [isCopied, setCopied] = useClipboard(text);
  const startListing = () => SpeechRecognition.startListening({ continuous: true });
  const stopListing = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }


  return (
    <div className="container">
      <h2>Speech To Text</h2>
      <br />
      <p>A Converter that convert speech to text using microphone.</p>
      <div className='main-content' onClick={()=>setText(transcript)}>
        {transcript}
      </div>
      <div className='btn-style'>
        <button onClick={setCopied}>
         {isCopied ? "copied" : "copy to clipboard"}
        </button>
        <button onClick={startListing}>start listening</button>
        <button onClick={stopListing}>stop listening</button>

      </div>
    </div>
  );
}

export default App;
