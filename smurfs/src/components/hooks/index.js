import { useState } from 'react';

export const useForm = initialValue => {
    const [ value, setValue ] = useState(initialValue)

    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    return [ value, handleChanges ]
}