import {FlatList, StyleSheet, Text, View} from 'react-native';

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

type ListMoviesProps = {movies: {id: string; title: string}[]};

const ListMovies = ({movies}: ListMoviesProps) => {
  return (
    <View style={{flex: 1, backgroundColor: 'darkgrey'}}>
      <FlatList
        data={movies}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListMovies;
