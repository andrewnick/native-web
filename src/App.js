import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: ""
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world!</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        {/* <TextInput style={styles.input} /> */}
        {/* <Button
                    title="Go to Next Screen"
                    onPress={() => this.props.navigation.navigate('Next')}
                /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

export default App;
