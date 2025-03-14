import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import ListMovies from '../ListMovies';
import {
  getMoviesPopular,
  getMoviesUpcoming,
} from '../services/listMovieService';
import {Movie} from '../model/interfaces';

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Upcoming'},
    {key: 'second', title: 'Popular'},
  ]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <ListMovies movies={upcoming} />;
      case 'second':
        return <ListMovies movies={popular} />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      activeColor={'white'}
      inactiveColor={'darkgrey'}
      style={{backgroundColor: '#283747'}}
    />
  );

  const fetchData = async () => {
    const responsePopular = await getMoviesPopular();
    const responseUpcoming = await getMoviesUpcoming();
    setPopular(responsePopular.results);
    setUpcoming(responseUpcoming.results);
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
