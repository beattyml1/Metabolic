import * as React from "react";
import {SchemaField} from "core/domain/Schema/Records";
import {LabeledEditorContainer} from "./LabelingProviderBaseComponent";

export default class FieldSet extends LabeledEditorContainer {
    render() {
        return (
            <fieldset>
                <legend>{this.label()}</legend>
                {this.content()}
            </fieldset>
        );
    }
}