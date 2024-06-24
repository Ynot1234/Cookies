/* eslint-disable react/prop-types */

function Validation(item)
{
    var error_msg = ''
    const IsNotValidNum = Number.isNaN(Number(item.price))
    
    if (item.name === '') error_msg = 'Please enter a name'
    else if (item.desc === '') error_msg = 'Please enter a desc'
    else if (item.price === '' || IsNotValidNum) error_msg = 'Please enter a valid number'

    return error_msg;
}

export default Validation;