import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text } from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
      <View style={{flex:0}}>
          <View style={{width:'100%'}}>
    <Searchbar
      style={{elevation:0,marginLeft:20}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      iconColor='blue'
    />
    </View>
    </View>
  );
};

export default Search;