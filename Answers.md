{Object.keys(this.state.dogs).length && Object.keys(this.state.dogs).forEach((dog, index) => {
          const subBreeds = Object.values(this.state.dogs)
          
              return (
                  <View>
                      <Text> dog : {dog}</Text>
                      { (subBreeds[index].length) &&<Button 
                      onPress={() => {
                          this.props.navigation.navigate('SignUp', { subBreeds: subBreeds[index]})
                      }}
                      title="View SubBreeds!"/>}
                  </View>
              )
      })}

      