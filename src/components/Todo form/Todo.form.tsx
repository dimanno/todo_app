import React, {useRef} from "react";
import './todo.form.css'

interface TodoFormProps {
    onAdd(title:string): void;
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    // let [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null) // generic type
    
    // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value)
    //     // console.log(e.target.value)
    // }
    
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log(ref.current!.value) // ! для того щоб переконати JS, що value не буде null. оскільки ми null - початкове значення
            props.onAdd(ref.current!.value)
            ref.current!.value = ''; // для очищеття введеного значення після натискання Enter
            // console.log(title)
            // setTitle('') // для очищеття введеного значення після натискання Enter
        }
    }
    return (
        <div className={'input-field mt3'}>
            <input
                // value={title}
                ref={ref}
                type="text" id='title'
                placeholder='Enter todo'
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='title' className={'active'}>
            Enter todo
            </label>
        </div>
    )

}