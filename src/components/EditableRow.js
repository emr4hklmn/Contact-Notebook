import React from 'react'
const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
   <tr className="edit">
    <td>
    <input 
    type="text"
    required="required"
    placeholder="Enter a name"
    name="fullName"
    value={editFormData.fullName}
    onChange={handleEditFormChange}/>
    </td>
    <td>
    <input 
    type="text"
    required="required"
    placeholder="Enter an Address"
    name="address"
    value={editFormData.address}
    onChange={handleEditFormChange}
    />
    </td>
    <td>
    <input 
    type="text"
    required="required"
    placeholder="Enter a Phone Number"
    name="PhoneNumber"
    value={editFormData.phoneNumber}
    onChange={handleEditFormChange}
    />
    </td>
    <td>
    <input 
    type="text"
    required="required"
    placeholder="Enter an Email"
    name="email"
    value={editFormData.email}
    onChange={handleEditFormChange}
    />
    </td>
    <td>
    <button type="button" onClick={handleCancelClick}>Cancel</button>
    <button type="submit" >Save</button>
    
    </td>
   </tr>
  )
}

export default EditableRow