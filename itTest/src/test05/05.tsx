import React, {ChangeEvent, MouseEvent} from 'react';

export const User =()=> {

    const search=(event: MouseEvent<HTMLButtonElement>)=>{

        alert(event.currentTarget.name)
    }
    // function saveUser(){
    //     alert('Pavel save')
    // }
    const onNameChanged = ()=>{
        console.log('name changed')

    }
    const onAgeChange = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log('age changed' + event.currentTarget.value)

    }

    const onNameBlur = ()=>{
        console.log('come back?')

    }

    return (
        <div>
        <div><textarea onChange={onNameChanged} onBlur={onNameBlur}>Pavel</textarea></div>
            <input onChange={onAgeChange} type={'number'}/>
        <button name='delete' onClick={search}>search</button>
        <button name='save' onClick={search}>x</button>
            </div>
    )
}