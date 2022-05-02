const React = require('react')
const Default = require('./layouts/Default')

function Error404 ({title}, {path}) {
    return (
        <Default title={title}>
            <h1>The page you are looking for does not exist.</h1>
        </Default>
    )
}

module.exports = Error404