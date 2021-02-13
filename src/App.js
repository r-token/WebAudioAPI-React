import React, { useState } from 'react';
import Oscillator from "./components/Oscillator"

import './App.scss';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

let audioContext = new AudioContext()
let output = audioContext.destination

let real = new Float32Array(2)
let imaginary = new Float32Array(2)

real[0] = 1;
imaginary[0] = 1;
real[1] = 1;
imaginary[1] = 1;

let oscillator = audioContext.createOscillator()
let wave = audioContext.createPeriodicWave(real, imaginary, {disableNormalization: true})

oscillator.setPeriodicWave(wave)
oscillator.connect(output)

function App() {
  const [oscillatorFrequency, setOscillatorFrequency] = useState(oscillator.frequency.value)

  const changeOscillatorFrequency = e => {
    console.log(e.target.value)
    let {value} = e.target
    setOscillatorFrequency(value)
    oscillator.frequency.value = value
  }

  return (
    <div className="App">
      <h1>Oscillator Slider</h1>
      <button onClick = {() => oscillator.start()}>
        Start Oscillator
      </button>
      <button onClick = {() => oscillator.stop(2)}>
        Stop Oscillator
      </button>
      <br /> <br />
      <Oscillator changeFrequency={changeOscillatorFrequency} frequency={oscillatorFrequency} />
    </div>
  );
}

export default App;
