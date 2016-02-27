var NewBox = React.createClass({
    render: function() {
        return (
            <div className="newBox">
                <NewForm />
            </div>
        );
    }
});

var NewForm = React.createClass({
    render: function() {
        handleClick : function(event) {

        },
        return (
            <div className="col-md-4 col-md-offset-4">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">First Choice</button>
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Second Choice</button>
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Third Choice</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Earhart</a>
                    <a class="dropdown-item" href="#">Ford</a>
                    <a class="dropdown-item" href="#">Hillenbrand</a>
                    <a class="dropdown-item" href="#">Wiley</a>
                    <a class="dropdown-item" href="#">Windsor</a>
                </div>
        );
    }
})

ReactDOM.render(
    React.createElement(NewBox, null),
    document.getElementById('new-box')
);
