import { FaSearch } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import './body.css'
import TextInput from '../commons/TextInput'
function Body() {
    return(
        <div>
            <TextInput type='text' className='add-new-component-text-input'/>
            <div className="item-component-list">
                <div className="learn-javascript-component-checkbox" id="learning-list">
                    <TextInput type="checkbox" value="Javascript"/>
                    <div>Learn Javascript</div>
                </div>
                <div className="learn-react-component-checkbox" id="learning-list">
                    <TextInput type="checkbox" value="React"/>
                    <div>Learn React</div>
                </div>
                <div className="build-react-component-checkbox" id="learning-list">
                    <TextInput type="checkbox" value="ReactApp"/>
                    <div>Build a React App</div>
                </div>
            </div>
            <div className="function-bar-container">
                <div className="add-button"><FaPlus/></div>
                <div className="search-button"><FaSearch/></div>
                <div className="item-bar">3 items left</div>
                <button className="all-component-button" id="learning-stage">All</button>
                <button className="active-component-button" id="learning-stage">Active</button>
                <button className="completed-component-button" id="learning-stage">Completed</button>
            </div>
        </div>
    )
}
export default Body