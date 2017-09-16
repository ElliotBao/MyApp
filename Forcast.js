var React = require('react-native');
var{
  StyleSheet,
  Text,
  View
} = React;

var Forcast = React.createClass({
  render: function(){
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={style.mainText}>
          Current condition: {this.props.description}
        </Text>
        <Text style={style.bigText}>
          {this.props.temp} F
        </Text>
      </View>
    );
  }
});

var styles= StyleSheet.create({
  bigText: {
    flex:2,
    frontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})

module.export = Forcast;
