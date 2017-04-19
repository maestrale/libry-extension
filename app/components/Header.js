import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

/* Importin the CSS file below will mess with the existing CSS in the page */
/*import 'antd/dist/antd.css';*/
import { Button } from 'antd';

/*import DatePicker from 'antd/lib/date-picker';  // just for js
import 'antd/lib/date-picker/style/css'*/

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    console.log('Hello from the header')
    return (
      <header>
       {/*<DatePicker/>*/}
       {/*<Button type="primary">Primary</Button>*/}
        <h1>Hello !</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs be done?"
        />
      </header>
    );
  }
}
