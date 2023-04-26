function TextInput({className, type, value}) {
    switch (type) {
        case 'text':
            return (
                <input className={className} placeholder="Add New" type="text"/>
            )
        case 'checkbox':
            return (
                <input type="checkbox" value={value}/>
            )
        default:
            break;
    }
}
export default TextInput