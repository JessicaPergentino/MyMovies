import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Movie} from './model/interfaces';
import {useNavigation} from '@react-navigation/native';

export const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/';

type ItemProps = {
  movie: Movie;
  onPressFunction: () => void;
};

type ListMoviesProps = {
  movies: Movie[];
};

const Item = ({movie, onPressFunction}: ItemProps) => (
  <Pressable onPress={onPressFunction} style={styles.item}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `${BASE_URL_IMAGE}w185${movie.poster_path}`,
        }}
        resizeMode="cover"
      />
      <View style={styles.textOverlay}>
        <Text style={styles.releaseDate}>
          {new Date(movie.release_date).toLocaleDateString()}
        </Text>
      </View>
    </View>

    <Text style={styles.title}>{movie.title}</Text>
  </Pressable>
);

const ListMovies: React.FC<ListMoviesProps> = ({movies}) => {
  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'darkgrey'}}>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Item
            movie={item}
            onPressFunction={() =>
              navigation.navigate('Details', {
                movie: item,
              })
            }
          />
        )}
        keyExtractor={item => String(item.id)}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 6,
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
  },
  releaseDate: {
    color: 'white',
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 185,
  },
  title: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ListMovies;
