import UI = require("./UI");
import * as Controls from "./Controls";
import * as Editors from "./ComplexControls";
import {__, $$} from "./Extensions";
import React = require('react');
import {OptionItem} from './OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from './Logic'
// import ReactDataGrid = require('react-data-grid');
/// <reference path="./typings/react/react.d.ts" />

class DocumentEditor extends React.Component<any, any> {
	render() { return ( 
    <EntityFieldsEditor fields={this.props.fields} />
  );}
}

class Table extends React.Component<any, any> {
	render() { return (
    <table>
      <thead>
      </thead>
    </table>);}
}

// class DataGrid extends React.Component<any, any> {
// 	render() { return ( 
//     // <ReactDataGrid columns={this.props.columns} rowGetter={() => this.props.records}/>
//     );}
// }

class EntityFieldsEditor extends React.Component<any, any> {
	render() { return ( 
    <div> 
      {this.props.fields.map(field => 
        <FieldEditorForDataType value={field.value} dataType={field.dataType} />
      )}
    </div>);}
}

class FieldEditorForDataType extends React.Component<any, any> {
  render() {
    return (
      <FieldEditorControl {...this.props} 
        options={this.props.opstionSource.getOptions()} 
        type={getType(this.props.dataType, this.props.optionHint, this.props.multiline, this.props.optionsSource)}/>); 
  }
}

class FieldEditorControl extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
        isInput(type) ? <InputEditor {...this.props} /> :
        isFullWidth(type) ? <InputEditor {...this.props} /> :
        type === "checbox" ? <Editors.CheckBoxEditor {...this.props} /> :
        type === "record-edit" ? <EntityFieldsEditor {...this.props} /> :
        // type === "table-edit" ? <DataGrid {...this.props} /> :
        null); 
  }
}

class InputEditor extends React.Component<any, any> {
  render() { return (
      <Editors.InputFieldLabelAndContainer {...this.props}>
        <InputForType {...this.props} />
      </Editors.InputFieldLabelAndContainer>
  );}
}

class InputForType extends React.Component<any, any> {
  render() { 
    var type = this.props.type;
    return (
      type === "text" ? <Controls.TextInput {...this.props} /> :
      type === "date" ? <Controls.DateInput {...this.props} /> :
      type === "currency" ? <Controls.CurrencyInput {...this.props} /> :
      type === "decimal" ? <Controls.DecimalInput {...this.props} /> :
      type === "integer" ? <Controls.IntegerInput {...this.props} /> :
      type === "email" ? <Controls.EmailInput {...this.props} /> :
      type === "tel" ? <Controls.PhoneInput {...this.props} /> :
      type === "dropdown" ? <Controls.Dropdown {...this.props} /> :
      null);
  }
}

class FullWidthFieldEditor extends React.Component<any, any> {
  render() { return (
      <Editors.FullWidthFieldLabelAndContainer {...this.props}>
        <FullWidthFieldInputForType {...this.props} />
      </Editors.FullWidthFieldLabelAndContainer>
  );}
}

class FullWidthFieldInputForType extends React.Component<any, any> {
  render() { 
    var type = this.props.type;
    return (
        type === "radio" ? <Editors.RadioSelect {...this.props} /> :
        type === "checklist" ? <Editors.CheckList {...this.props} /> :
        type === "multi-line-text" ? <Controls.MultiLineTextBox {...this.props} /> :
      null
    );}
}



