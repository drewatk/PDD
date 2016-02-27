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
    componentWillMount: function() {
      this.firebaseRef = new Firebase("https://incandescent-inferno-6780.firebaseio.com/polls");
    },
    handleLunch : function(event) {
        this.addMeal('Breakfast')
    },
    handleLunch : function(event) {
        this.addMeal('Lunch')
    },
    handleDinner : function(event) {
        this.addMeal('Dinner')
    },
    addMeal : function(meal) {
        this.firebaseRef.child(HashID.generateUnique()).set({
            meal: meal
        })
    },
    render: function() {
        return (
            <div className="col-md-4 col-md-offset-4 well well-lg">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleLunch}>Breakfast</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleLunch}>Lunch</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleDinner}>Dinner</button>
            </div>
        );
    }
})

ReactDOM.render(
    React.createElement(NewBox, null),
    document.getElementById('new-box')
);
