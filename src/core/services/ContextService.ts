
import {ComponentContext} from "core/domain/EditorModels/Context";
import {hasValue} from "../extensions/hasValue";
import {SchemaField} from "../domain/Schema/Records";

export function getMostSpecific<T>(context: ComponentContext, getValue: (context: ComponentContext) => T|undefined|null):T|undefined|null  {
    let val = getValue(context);
    return hasValue(val) ? val : getValue(context);
}

export function getAllWithValue<T>(context: ComponentContext, getValue: (context: ComponentContext) => T|undefined|null) {
    return context.parentContext
        ? [ ...getAllWithValue(context.parentContext, getValue), ...includeIfHasValue(getValue(context)) ]
        : includeIfHasValue(getValue(context))
}

function includeIfHasValue<T>(val?: T):T[] {
    return hasValue(val) ? [val] : [];
}


export function createContext(field?: SchemaField, parentContext?: ComponentContext, repeaterIndex?: number) {
    return {
        name: field ? field.name : undefined,
        repeaterIndex,
        parentContext
    } as ComponentContext;
}