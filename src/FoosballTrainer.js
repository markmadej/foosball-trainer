import React, { Component } from 'react';
import './FoosballTrainer.css';

class Level extends Component {
    render() {
        return(
                <p className='p-level'>{this.props.level}</p>
        );
    }
}

class Instruction extends Component {
    render() {
        var instruction = this.props.instruction;
        if (this.props.resetting === true) {
            instruction = "Reset rods to level " + this.props.currentLevel + ".";
        }

        return(
                <p className='p-instruction'>{instruction}</p>
        );
    }
}

class ShotButton extends Component {
    render() {

        var buttonText = this.props.score === true ? "SCORE" : "MISS";
        var buttonClass = 'button-shot button-' + buttonText.toLowerCase();

        return(
          <button onClick={this.props.scoreCallback} disabled={this.props.resetting} className={buttonClass}>{buttonText}</button>
        );
    }
}

class ResetButton extends Component {
    render() {
        var buttonText = 'Reset Rods';
        if (this.props.resetting === true) {
            buttonText = 'Ready!';
        }

        return(
            <button onClick={this.props.callback} className='button-reset'>{buttonText}</button>
        );
    }
}

class StatusMeter extends Component {
    render() {
        return(
          <div className='div-status-meter'>
              {this.props.numScored}/{this.props.numAttempts}<br/>{this.props.meterType}
          </div>
        );
    }
}

class FoosballTrainer extends Component {

    componentWillMount() {
        this.state = {
            reset: true,
            level: 1,
            overallScored: 0,
            overallAttempts: 0,
            currentScored: 0,
            currentAttempts: 0,
            currAverageScore: 0
        };
    }

    scoreFunction = () => {
        console.log("scored!");
        this.setState(prevState => ({

        }));
    };

    missFunction = () => {
        console.log("missed!");
        this.setState(prevState => ({

        }));
    };

    resetFunction = () => {
        console.log("Reset.");
        this.setState(prevState => ({
           "reset": !prevState.reset
        }));
    };

    render() {
        return(
            <div className='div-outer-wrapper'>
                <div className='div-main-section'>
                    <Level level={this.state.level}/>
                    <Instruction instruction="Pull shot - long" resetting={this.state.reset} currentLevel={this.state.level}/>
                </div>
                <div className='div-main-section div-shot-buttons'>
                    <ShotButton score={true} scoreCallback={this.scoreFunction} resetting={this.state.reset}/>
                    <ShotButton score={false} scoreCallback={this.missFunction} resetting={this.state.reset}/>
                </div>
                <div className='div-main-section'>
                    <StatusMeter meterType="Current" numScored={this.state.currentScored} numAttempts={this.state.currentAttempts}/>
                    <StatusMeter meterType="Overall" numScored={this.state.overallScored} numAttempts={this.state.overallAttempts}/>
                    <ResetButton callback={this.resetFunction} resetting={this.state.reset}/>
                </div>
            </div>
        );
    }
}

export default FoosballTrainer;