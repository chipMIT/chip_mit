import "./AnalogDomain.css";
import atom from './assets/atom-icon.png'
import gear from './assets/gear-icon.png'
import testTube from './assets/test-tube-icon.png'
import hexagon from './assets/hexagon-icon.png'


function Intro(){
    return(
    <div className="container">
    <div className="analog-domain-container">
      <h1>
        <span className="highlight-title">Analog domain.</span>
        <br />
        <span className="subtitle">Shaping the future of VLSI.</span>
      </h1>
      <div className="analog-domain-text">
        <p>
          Analog design in VLSI is the intricate process of developing circuits that process continuous signals, such as amplifiers, oscillators, and filters. These components are crucial for bridging digital and real-world interfaces.
        </p>
        <p>
          Careful consideration of noise, power, and precision is at the core of analog VLSI design. The field evolves alongside advancements in technology, demanding expertise in both theory and practical implementation.
        </p>
      </div>
    </div>
    <div className="tools-container">
    <h2 className="tools-title">Tools/Frameworks used in this Domain</h2>
    <div className="tools-grid">
        <div className="tool-item">
            <div className="tool-icon">
                <img src={hexagon} alt="EDA Tools (Xilinx Vivado and MicroWind)
" />
            </div>
            <span className="tool-name">EDA Tools</span>
            <span className="tool-subtitle">Xilinx Vivado and MicroWind</span>
        </div>
        <div className="tool-item">
            <div className="tool-icon">
                <img src={gear} alt="HDL Simulators (EDAPlayground and Icarus Verilog)

" />
            </div>
            <span className="tool-name">HDL Simulators</span>
            <span className="tool-subtitle">EDAPlayground and Icarus Verilog</span>
        </div>
        <div className="tool-item">
            <div className="tool-icon">
                <img src={atom} alt="Layout Editors (KLayout and Virtuoso)
" />
            </div>
            <span className="tool-name">Layout Editors</span>
            <span className="tool-subtitle">KLayout and Virtuoso</span>
        </div>
        <div className="tool-item">
            <div className="tool-icon">
                <img src={testTube} alt="Verification Frameworks and Scripting(UVM,TCL)" />
            </div>
            <span className="tool-name">Verification and Scripting</span>
            <span className="tool-subtitle">UVM,TCL</span>
        </div>
    </div>
</div>    
</div>
    );
}

export default Intro
