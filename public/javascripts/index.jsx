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
                <button type="button" className="btn btn-primary btn-lg btn-block">Lunch</button>
                <button type="button" className="btn btn-primary btn-lg btn-block">Dinner</button>
            </div>
        );
    }
})

ReactDOM.render(
    React.createElement(NewBox, null),
    document.getElementById('new-box')
);
