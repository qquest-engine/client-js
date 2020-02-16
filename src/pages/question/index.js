import React from 'react';
import './question.scss';
import CallApi from "../../api/api";
import Field from "../../components/common/Field";
import Button from "../../components/common/Button";

const questions = [
  {
    id: 1,
    text: 'hvjhv',
    duration: 12000,
    hintsTime: [3000, 7000],
    lastQuestion: false,
    answer: '1'
  },
  {
    id: 2,
    text: 'hvjhv',
    duration: 12000,
    hintsTime: [3000],
    lastQuestion: false,
    answer: '2'
  },
  {
    id: 3,
    text: 'hvjhv',
    duration: 12000,
    hintsTime: [5000, 7000],
    lastQuestion: true,
    answer: '3'
  },
]
const answers = [
  {
    id: 1,
    answer: '1'
  },
  {
    id: 2,
    answer: '2'
  },
  {
    id: 3,
    answer: '3'
  },
]
const hints = [
  [
    {
      id: 1,
      text: 'h 1.1'
    },
    {
      id: 2,
      text: 'h 1.2'
    }
  ],
  [
    {
      id: 3,
      text: 'h 2.1'
    }
  ],
  [
    {
      id: 4,
      text: 'h 3.1'
    },
    {
      id: 5,
      text: 'h 3.2'
    }
  ]
]

class Quest extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        answer: ""
      },
      errors: {
        answer: false
      },
      statusFail: null,
      question: null,
      hints: [],
      currentQuestion: 0
    }
  }

  componentDidMount() {
    //const id = this.props.match.params.id;
    //this.getQuestion(id, this.state.currentQuestion);
    this.getQuestion(this.state.currentQuestion);
  }
  componentDidUpdate(prevProps, prevState) {
   if (this.state.question !== prevState.question) {
      this.getQuestion(this.state.currentQuestion);     
    }
  }
  getQuestion = (question_id) => {
    this.setState({
      question: questions[question_id]
    });
    console.log('getQuestion', this.state.question);
    if (this.state.question && this.state.question.duration) {
        this.timer = setTimeout(() => {
            if (!this.state.question.lastQuestion) {
              this.setState(prevState => ({
                currentQuestion: prevState.currentQuestion + 1,
                hints: []
              }));              
              this.getQuestion(this.state.currentQuestion);
              clearTimeout(this.timer);
            } else { console.log('finish')}
          }, this.state.question.duration);

        this.state.question && this.state.question.hintsTime.forEach((h, i) => {
          console.log('this.state.question.hintsTime', this.state.question.hintsTime);
          setTimeout(() => {
            this.getHint(this.state.currentQuestion, i);
          }, h);
        })
    }
  }

  getHint = (question_id, hint_id) => {
    let value = this.state.hints;
    value.push(hints[question_id][hint_id]);
    this.setState({
      hints: value
    });
    console.log('getHint', this.state.hints)
  }
/*  getQuestion = (quest_id, question_id) => {
    CallApi.get(`/game/${quest_id}/${question_id}/`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        question: data,
        statusFail: null
      });
      console.log('manage', this.state.question)
    })
    .catch(err => {
      this.setState({
        statusFail: err.status
      });
    });
  }*/

/*  getHint = (quest_id, question_id) => {
    CallApi.get(`/game/hint/${question_id}/${quest_id}`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        hints: data
      });
    })
  }*/

  onChange = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };
    this.setState({
      values: newValues
    });
  };

  validateFields = () => {
    const errors = {};
    if (this.state.values.answer === "") {
      errors.answer = "Not empty";
    }
    return errors;
  };

  onAnswer = () => {
    const errors = this.validateFields();
    console.log('errors', errors);
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    const body = {
            'Answer': this.state.values.answer
          }
    console.log('body', body);
    CallApi.post("/games/1/4", {
          body
        })
    .then(resp => { if (!this.state.question.lastQuestion) this.getQuestion(5)})
    .catch(err => {
      this.setState({
        statusFail: err.status
    });
    })
  };

  render() {
    const { question, statusFail, values, errors } = this.state;
    const id = this.props.match.params.id;
    return (
            <div>
              <div className="col-6 mb-4 main_white">
              {statusFail && 
                <div>
                  <h1>{statusFail}</h1>
                </div>
              }
              </div>
              <div className="col-6 mb-4 main_white">
              {question && 
                <div>
                  <h1>Boпрос N {question.id}</h1>
                  <div>{question.text}</div>
                  <Field
                    id="answer"
                    labelText=""
                    type="text"
                    placeholder="Enter answer"
                    name="answer"
                    value={values.answer}
                    onChange={this.onChange}
                    error={errors.answer}
                  />
                  <Button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={this.onAnswer}
                    >
                    Send
                  </Button>
                  <hr />
                  {this.state.hints.length &&
                    this.state.hints.map(i => <div key={i.id}>{i.text}</div>)
                  }
                </div>
              }
              </div>
            </div>
    )
  }
}

export default Quest;