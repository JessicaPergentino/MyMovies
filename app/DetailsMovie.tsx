import {Text} from '@react-navigation/elements';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {BASE_URL_IMAGE} from './ListMovies';
import {useEffect, useState} from 'react';
import {MovieDetails} from './model/interfaces';
import {getMovieDetails} from './services/listMovieService';

const DetailsMovie: React.FC<any> = ({route}) => {
  const {movie} = route.params;

  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const response = await getMovieDetails(movie.id);
    setMovieDetails(response);
  };

  return (
    <ScrollView style={styles.item}>
      {movieDetails && (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `${BASE_URL_IMAGE}original${movieDetails.backdrop_path}`,
            }}
            resizeMode="cover"
          />

          <View style={styles.constinerTop}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>{movieDetails.title}</Text>

              <Text style={styles.date}>
                {new Date(movieDetails.release_date).getFullYear()}
              </Text>
            </View>
            <View style={styles.containerGenre}>
              <Text style={styles.runtime}>{movieDetails.runtime}m | </Text>
              {movieDetails.genres.map(genre => (
                <Text key={genre.id} style={styles.genre}>{genre.name}</Text>
              ))}
            </View>
          </View>

          <View style={styles.containerOverview}>
            <Text style={styles.overview}>{movieDetails.overview}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'darkgrey',
  },
  image: {
    width: '100%',
    height: 250,
  },
  constinerTop: {
    backgroundColor: 'grey',
  },
  containerTitle: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerGenre: {
    paddingTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  containerOverview: {
    padding: 10,
  },
  title: {
    flex: 1,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 18,
    color: 'white',
  },
  runtime: {
    fontSize: 16,
  },
  genre: {
    fontSize: 16,
    marginRight: 10,
  },
  overview: {
    paddingTop: 5,
    fontSize: 22,
    textAlign: 'justify',
  },
});

export default DetailsMovie;
