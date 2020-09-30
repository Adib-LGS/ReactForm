class Field extends React.Component {

    render () {
        const {name, value, onChange, children} = this.props
        return <div className="form-group" >
            <label htmlFor="{name}">{children}:</label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
        </div>
    }
}

function Checkbox ({name, value, onChange, children}) {
    return <div className="form-check" >
            <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="form-check-input"/>
            <label htmlFor="{name}" className="form-check-label">{children}:</label>
        </div>
}


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: 'Jhon', familyName: 'Doe', newsletter: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        console.log(e)
        const name = e.target.name
        const type =  e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        console.log(data);
        this.setState({
            name: 'Jhon', familyName: 'Doe', newsletter: false
        })
    }

    render () {
        return <form className="container" onSubmit={this.handleSubmit}>
            <Field name="name" value={this.state.name} onChange={this.handleChange}>Name</Field>
            <Field name="familyName" value={this.state.familyName} onChange={this.handleChange}>Family Name</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>Get in touch</Checkbox>
            <div className="form-group">
                <button className="btn btn-primary mt-1">Subs</button>
            </div>
            {JSON.stringify(this.state)}
        </form>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))