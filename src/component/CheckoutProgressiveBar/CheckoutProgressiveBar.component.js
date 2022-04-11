import { PureComponent } from "react";
import "./CheckoutProgressiveBar.styles";

export class CheckoutProgressiveBar extends PureComponent {
  constructor() {
    super();
    this.state = {
      steps: [],
    };
  }
  componentDidMount() {
    let steps = Object.values(this.props.steps);
    this.setState({ steps: steps });
  }

  getStepsDone() {
    let achievedStep = [];
    let stop = false;
    this.state.steps.map((step) => {
      if (stop === false) {
        achievedStep = [...achievedStep, true];
      } else {
        achievedStep = [...achievedStep, false];
      }
      if (this.props.currentStep == step.id) {
        stop = true;
      }
    });
    return achievedStep;
  }

  renderSteps() {
    const stepsDone = this.getStepsDone();
    return this.state.steps.map((step, key) => {
      //last one
      if (key === this.state.steps.length - 1) {
        return (
          <div className="ProgressiveBar-Step">
            <div
              className={
                stepsDone[key]
                  ? "ProgressiveBar-Step-Bar-Active"
                  : "ProgressiveBar-Step-Bar"
              }
            />
          </div>
        );
      } else {
        return (
          <div className="ProgressiveBar-Step">
            <div
              className={
                stepsDone[key]
                  ? "ProgressiveBar-Step-Bar-Active"
                  : "ProgressiveBar-Step-Bar"
              }
            />
            <div className="ProgressiveBar-Step-Checkpoint">
              <div
                className={
                  stepsDone[key]
                    ? "ProgressiveBar-Step-Checkpoint-StepIdentification-Active"
                    : "ProgressiveBar-Step-Checkpoint-StepIdentification"
                }
              >
                {stepsDone[key + 1] ? (
                  <div className="ProgressiveBar-Step-Checkpoint-StepIdentification-Check" />
                ) : (
                  <p
                    className={
                      stepsDone[key]
                        ? "ProgressiveBar-Step-Checkpoint-StepIdentification-Number-Active"
                        : "ProgressiveBar-Step-Checkpoint-StepIdentification-Number"
                    }
                  >
                    {key + 1}
                  </p>
                )}
              </div>
              <p
                className={
                  stepsDone[key]
                    ? "ProgressiveBar-Step-Checkpoint-StepName-Active"
                    : "ProgressiveBar-Step-Checkpoint-StepName"
                }
              >
                {step.name}
              </p>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return <div className="ProgressiveBar">{this.renderSteps()}</div>;
  }
}

export default CheckoutProgressiveBar;
