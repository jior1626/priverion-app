import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { getItemLocalStorage, setItemLocalStorage } from "../../utilities/helpers";
import { RootState } from "../store";
import { Form } from "../../models/form";

export interface FormsState {
    forms: Form[];
    error: string;
    formCreated: boolean;
}

export const initialState: FormsState = {
    forms: [],
    formCreated: false,
    error: "",
}

const FormSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        getForms: (state, { payload }: PayloadAction<any>) => {
            // let formsInLocalStorage = getItemLocalStorage("forms");
            // if(formsInLocalStorage && formsInLocalStorage.length > 0) {
            //     state.forms = formsInLocalStorage;
            // } else {
            //     setItemLocalStorage("forms", forms);
            //     state.forms = forms;
            // }
        },
        addForm: (state, {payload}: PayloadAction<Form>) => {
            state.forms = [...state.forms, {...payload}];
            state.formCreated = true;
            // setItemLocalStorage("forms", state.forms);
        },
        updateForm: (state, {payload}: PayloadAction<Form>) => {
            let formFill = state.forms.filter(item => item.id !== payload.id);
            state.forms = [...formFill, payload];
            // setItemLocalStorage("forms", state.forms);
        },
        deleteFormById: (state, { payload }: PayloadAction<number>) => {
            state.forms = state.forms.filter(item => item.id != payload);
            // setItemLocalStorage("forms", state.forms);
        },
        error: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        }
    }
})

export const { getForms, addForm, updateForm, deleteFormById } = FormSlice.actions

export const formsSelector = (state: RootState) => state.forms

export default FormSlice.reducer;