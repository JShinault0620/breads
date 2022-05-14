const React = require('react')
const Default = require('./layouts/default.jsx')

function edit_form (data) {
    return (
        <Default>
            <main>
                <h1>Edit Bread</h1>
                <form method="POST" action={`/breads/`}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' required></input>
                    <label htmlFor='image'>Image</label>
                    <input type='text' name='image' id='image' required></input>
                    <label htmlFor='name'>Baker</label>
                    <select name='baker' id='baker'>
                        <option value='Rachel'>Rachel</option>
                        <option value='Monica'>Monica</option>
                        <option value='Joey'>Joey</option>
                        <option value='Chandler'>Chandler</option>
                        <option value='Ross'>Ross</option>
                        <option value='Phoebe'>Phoebe</option>
                    </select>
                    <label htmlFor='hasGluten'>Has Gluten?</label>
                    <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked={true}></input>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form