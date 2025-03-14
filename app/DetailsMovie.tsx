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
    <ScrollView>
      {movieDetails && (
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `${BASE_URL_IMAGE}original${movieDetails.backdrop_path}`,
              }}
              resizeMode="cover"
            />
            <View style={styles.textOverlay}>
              <Text style={styles.releaseDate}>
                {new Date(movieDetails.release_date).toLocaleDateString()}
              </Text>
            </View>
          </View>

          <Text style={styles.title}>{movieDetails.title}</Text>
          {movieDetails.genres.map(genre => (
            <Text style={styles.title}>{genre.name}</Text>
          ))}

          <Text style={styles.title}>{movieDetails.overview}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
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
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 22,
    marginTop: 5,
  },
});

export default DetailsMovie;
